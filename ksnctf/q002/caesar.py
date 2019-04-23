# -*- coding: utf-8 -*-

import sys

AZ = 26
IN_STR = "EBG KVVV vf n fvzcyr yrggre fhofgvghgvba pvcure gung ercynprf n yrggre jvgu gur yrggre KVVV yrggref nsgre vg va gur nycunorg. EBG KVVV vf na rknzcyr bs gur Pnrfne pvcure, qrirybcrq va napvrag Ebzr. Synt vf SYNTFjmtkOWFNZdjkkNH. Vafreg na haqrefpber vzzrqvngryl nsgre SYNT."


def caesar(str, k):
    ret = ''
    for c in str:
        if ord('a') <= ord(c) and ord(c) <= ord('z'):
            base = ord('a')
            new_c = chr((ord(c) - base + k) % AZ + base)
        elif ord('A') <= ord(c) and ord(c) <= ord('Z'):
            base = ord('A')
            new_c = chr((ord(c) - base + k) % AZ + base)
        else:
            new_c = c
        ret += new_c
    return ret


def main():
    for i in range(AZ):
        print(i, caesar(IN_STR, i))


if __name__ == '__main__':
    main()
