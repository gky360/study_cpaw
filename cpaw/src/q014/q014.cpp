// https://ctf.cpaw.site/questions.php?qnum=14
// Q14.[PPC]並べ替えろ!

#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;
typedef pair<int, int> pii;
typedef pair<ll, int> pli;

const string IN_STR =
    "15,1,93,52,66,31,87,0,42,77,46,24,99,10,19,36,27,4,58,76,2,81,50,102,33,"
    "94,20,14,80,82,49,41,12,143,121,7,111,100,60,55,108,34,150,103,109,130,25,"
    "54,57,159,136,110,3,167,119,72,18,151,105,171,160,144,85,201,193,188,190,"
    "146,210,211,63,207";

int main() {
    stringstream ss(IN_STR);
    string str;
    vector<int> nums;

    while (getline(ss, str, ',')) {
        int n;
        stringstream str_ss(str);
        str_ss >> n;
        nums.push_back(n);
    }
    sort(nums.begin(), nums.end(), greater<int>());

    cout << "cpaw{";
    for (int i = 0; i < (int)nums.size(); i++) {
        cout << nums[i];
    }
    cout << "}" << endl;

    return 0;
}
