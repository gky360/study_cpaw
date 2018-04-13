#!/bin/bash

flag=ruoYced_ehpigniriks_i_llrg_stae

gcc crypto100.c -o crypto100
for i in `seq 0 32`
do
  echo $i
  ./crypto100 $flag $i
  echo
done
