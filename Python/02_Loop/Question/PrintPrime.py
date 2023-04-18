import math

for num in range(2, 100):
    isPrime = True
    for factor in range(2, int(math.sqrt(num) + 1)):
        if num % factor == 0:
            isPrime = False
            break
    if isPrime == True:
        print(num)
