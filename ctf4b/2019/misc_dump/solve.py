# %%

with open('./misc_dump/hexdump', 'r') as f:
    arr = f.read().split()

byte_arr = bytes(map(lambda x: int(x, 8), arr))

with open('./misc_dump/flag', 'wb') as f:
    f.write(byte_arr)
