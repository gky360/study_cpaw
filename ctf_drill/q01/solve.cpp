// CTF challenge book
// q01 SelfReference

#include <cstdlib>
#include <iostream>
using namespace std;

int main() {
    char arg_ch[] = {0x7d, 0x56, 0x18, 0x43, 0x15, 0x67, 0x0f, 0x0a, 0x1c,
                     0x28, 0x3b, 0x76, 0x05, 0x30, 0x00, 0x50, 0x54, 0x0c,
                     0x59, 0x09, 0x1f, 0x7d, 0x0d, 0x3a, 0x02, 0x7a, 0x08,
                     0x7e, 0x01, 0x40, 0x57, 0x60, 0x11, 0x3e, 0x05, 0x2d,
                     0x05, 0x0f, 0x00, 0x00, 0x06, 0x55, 0x30};
    char arg_8h[256] = {};
    char arg_10h[1025] =
        "XV5xxMLwKP8KaayCSG04vQVv0kMSA3ZTRyZ4bCy"
        "et8VXaceow53CkC3JA0ZAg5wBx86kHvlCYhdeVPSCeEYy3rFVyOJdZTNgwxSgcRYZV6E2"
        "8DqXMm5aYnfm3Z4uEDUz1FpmneQcuwOPwrMdx9Gy4Q3MKZIaalSHHKvpuQn5zbTtmgPfw"
        "pWVMSnuP0fV43mfuPQGX6ryJk2ANuuXxctZ03CNj5U6wF3X2cor5baXfZzFRltlMM5cl8"
        "BHAptzDkPMYFBWUg56usLpnq9gawM0XWMOIbx8z99logD8nCzj4QsjHAsnWf1EfrGZs1J"
        "CyF8fsHKzSWXUp8QWLUfgtPWWwI6ae3f5eEE9eqKAAqqp8s05HMAnEltRpFAe5jq25LW7"
        "1BdnMVlP8p9EkD3ICugWJzZSo2saKenlJiMa7kOvCVc1qPAvEl0G2Txv79FSK2req4wpf"
        "oEv9u5ZwzqrSn2n8z3e8T3SfbzwKFDvr5Izhh1Ndt6w91CNqwGWwdDzb3VpAU7yn9RJrT"
        "WTZKKYc21WmKaetofqNwSYFPT4jdl3bM6Fe0NFClMqXcuC1LnCeVWy1OVvDUGw8g7lqO6"
        "Sfa9flHv0HkBt5WwANXpS1ddDQONQTSt4keGlBYAq9bzBBTKO9gy3agaT2GmKWt6rYacO"
        "M2kFq9rjWaZgSrhjxCOMO83jOixVfyEIQwDF5LUNc679WWtTFk0LLLYXuP1iZwnqs0PXr"
        "XwaqtfGO4GuqiU9ciDpBTHbxCql4WLrbMSSpqVvAmazvOAJnFvmcIdBfp7fZEd16i6h47"
        "IW7wPquyWQL5x9ePrJWZx6skvq2Gt0AcPBMMg5bSYGvcN43g34UjFmAuj9WDITQ6Z6bde"
        "8grMMpyyAJYQwr4ycZJN0vaJp9WGr6DaZB98THfQPhgiRvOGW3GLT03HgnR3kZXW0zt38"
        "b790Uvkj7yjAAX6ItBQb0zMt95hK8eyPkP1cgHSapReU2G6I6UJjQ0pFUgHfpK6pmkmJb"
        "rinid5WqgImMunLrwR0";

    int eax, edx;
    int local_10h = 43;

    srand(local_10h);

    for (int i = 0; i < local_10h; i++) {
        eax = rand();
        edx = eax;
        eax = eax >> 0x1f;
        eax = eax >> 0x16;
        edx += eax;
        edx &= 0x3ff;
        edx -= eax;

        arg_8h[i] = arg_10h[edx] ^ arg_ch[i];
    }

    arg_8h[local_10h] = '\0';
    cout << arg_8h << endl;

    return 0;
}
