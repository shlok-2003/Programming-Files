#!/bin/bash

num1=100
num2=200

plus=$(expr $num1 + $num2)
minus=$(expr $num1 - $num2)
mul=$(expr $num1 \* $num2)
div=$(expr $num1 / $num2)
rem=$(expr $num1 % $num2)

echo "The sum of $num1 and $num2 is $plus."
echo "The difference between $num1 and $num2 is $minus."
echo "The product of $num1 and $num2 is $mul."
echo "The quotient of $num1 and $num2 is $div."
echo "The remainder of $num1 and $num2 is $rem."