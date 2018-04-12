# -*- coding: utf-8 -*-

import sys

AZ = 26
FSDZ = "Fdhvdu_flskhu_lv_fodvvlfdo_flskhu"


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
        print(i, caesar(FSDZ, i))


if __name__ == '__main__':
    main()
