# Q16.[Network+Forensic]HTTP Traffic

1. wireshark で pcap ファイルを開く
2. File -> Export Objects -> HTTP -> Save All で HTTP でやり取りしたファイルをすべて復元する
3. `network100(1)` があやしそう
4. 中身は html なので、ソースを見ながら `js` `img` `css` ディレクトリを作って適切にファイルを
配置する。
5. ボタンをクリック
6. 画像に flag が表示される

```
cpaw{Y0u_r3st0r3d_7his_p4ge}
```
