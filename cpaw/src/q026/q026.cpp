// https://ctf.cpaw.site/questions.php?qnum=26
// Q26.[PPC]Remainder theorem

#include <bits/stdc++.h>
using namespace std;
typedef long long int ll;

const ll MAX_LL = 1e18;
const ll R1 = 32134;
const ll M1 = 1584891;
const ll R2 = 193127;
const ll M2 = 3438478;

int main() {
    for (ll x = R2; x < MAX_LL; x += M2) {
        if (x % M1 == R1) {
            cout << x << endl;
            break;
        }
    }

    return 0;
}
