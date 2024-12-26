#!/bin/bash

number=200

if [ $number -eq 200 ]
then
	echo "The condition is true"
else
	echo "The condition is false"
fi

# ${1,,} is used to convert the first argument to lowercase

if [ ${1,,} = shlok ]
then
	echo "The owner is shlok"
else
	echo "The owner is not shlok"
fi

# switch case $2 - 2nd positional parameter

case ${2,,} in 
	shlok | ragini | devanshi)
		echo "The owner is ${2}"
		;;
	ayush | sidd | vivek)
		echo "The friends are ${2}"
		;;
	*)
		echo "You are not authorized"
		;;
esac
