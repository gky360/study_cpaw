# Q28.[Network] Can you login？

1. wireshark で pcap file を開く
2. 後半の方に FTP サーバの IP, user, pass が流れているので、その情報を使って fpt サーバにアクセス
3. 隠しファイルを表示を on にする（cyberduck であれば View > Show hidden files）
4. .hidden_flag_file が答え

（大学のネットワーク等からだとポートが塞がっていて接続できない可能性あり）

```
cpaw{f4p_sh0u1d_b3_us3d_in_3ncryp4i0n}
```
