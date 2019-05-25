cp encrypted.txt b
while [ `cat b | cut -c -5` != 'ctf4b' ]; do
  cat b | base64 -D > z
  zlib_decompress z b
  echo
  echo --------------------
  wc -c b
  cat b | cut -c -1000
done
