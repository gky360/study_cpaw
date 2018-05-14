# Q23.[Reversing]またやらかした！

ごりごりバイナリ解析する。

まず gdb を https://github.com/longld/peda で拡張する。その後、以下の手順で解析する。

1. `gdb <file>` で開く
2. `disas main` でアセンブリコードを眺める（下記参照）
3. 以下のことが紐解ける
    - `<+15>` -- `<+106>` で14文字分のデータを用意しているようだ
    - `<+139>` -- `<+168>` で何やらループしている。ループの回数は `<+168>` より 0xd = 14 回のようだ
    - ループの中で1文字ずつに対して xor を取っているようだ
    - ということは、ループ終了後の `<+175>` に breakpoint を仕掛けてその時点でのメモリをダンプしてみると良さそうだ
4. `b *0x0804849c`
5. `start`
6. `c` 続行
7. ここで `<+175>` の命令に到達するはず
8. 文字列の先頭メモリと思われる `[ebp-0x74]` を `x/1ws $ebp-0x74` コマンドでダンプしてみる
9. ゲット。 `0xbffffa24:	U"ixnbo|kwxt88dcpaw{vernam!!}"`

```
Dump of assembler code for function main:
   0x080483ed <+0>:	push   ebp
   0x080483ee <+1>:	mov    ebp,esp
   0x080483f0 <+3>:	push   edi
   0x080483f1 <+4>:	push   ebx
   0x080483f2 <+5>:	add    esp,0xffffff80
   0x080483f5 <+8>:	mov    DWORD PTR [ebp-0x78],0x7a
   0x080483fc <+15>:	mov    DWORD PTR [ebp-0x74],0x69
   0x08048403 <+22>:	mov    DWORD PTR [ebp-0x70],0x78
   0x0804840a <+29>:	mov    DWORD PTR [ebp-0x6c],0x6e
   0x08048411 <+36>:	mov    DWORD PTR [ebp-0x68],0x62
   0x08048418 <+43>:	mov    DWORD PTR [ebp-0x64],0x6f
   0x0804841f <+50>:	mov    DWORD PTR [ebp-0x60],0x7c
   0x08048426 <+57>:	mov    DWORD PTR [ebp-0x5c],0x6b
   0x0804842d <+64>:	mov    DWORD PTR [ebp-0x58],0x77
   0x08048434 <+71>:	mov    DWORD PTR [ebp-0x54],0x78
   0x0804843b <+78>:	mov    DWORD PTR [ebp-0x50],0x74
   0x08048442 <+85>:	mov    DWORD PTR [ebp-0x4c],0x38
   0x08048449 <+92>:	mov    DWORD PTR [ebp-0x48],0x38
   0x08048450 <+99>:	mov    DWORD PTR [ebp-0x44],0x64
   0x08048457 <+106>:	mov    DWORD PTR [ebp-0x7c],0x19
   0x0804845e <+113>:	lea    ebx,[ebp-0x40]
   0x08048461 <+116>:	mov    eax,0x0
   0x08048466 <+121>:	mov    edx,0xe
   0x0804846b <+126>:	mov    edi,ebx
   0x0804846d <+128>:	mov    ecx,edx
   0x0804846f <+130>:	rep stos DWORD PTR es:[edi],eax
   0x08048471 <+132>:	mov    DWORD PTR [ebp-0x80],0x0
   0x08048478 <+139>:	jmp    0x8048491 <main+164>
   0x0804847a <+141>:	mov    eax,DWORD PTR [ebp-0x80]
   0x0804847d <+144>:	mov    eax,DWORD PTR [ebp+eax*4-0x78]
   0x08048481 <+148>:	xor    eax,DWORD PTR [ebp-0x7c]
   0x08048484 <+151>:	mov    edx,eax
   0x08048486 <+153>:	mov    eax,DWORD PTR [ebp-0x80]
   0x08048489 <+156>:	mov    DWORD PTR [ebp+eax*4-0x40],edx
   0x0804848d <+160>:	add    DWORD PTR [ebp-0x80],0x1
   0x08048491 <+164>:	cmp    DWORD PTR [ebp-0x80],0xd
   0x08048495 <+168>:	jle    0x804847a <main+141>
   0x08048497 <+170>:	mov    eax,0x0
   0x0804849c <+175>:	sub    esp,0xffffff80
   0x0804849f <+178>:	pop    ebx
   0x080484a0 <+179>:	pop    edi
   0x080484a1 <+180>:	pop    ebp
   0x080484a2 <+181>:	ret
End of assembler dump.
```

```
cpaw{vernam!!}
```
