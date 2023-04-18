# Loop statement has range (i, j), here the loop runs from i to j - 1
for i in range(1, 11):
    print(f"{i}. Hello World")

# And we even print the value of i, even after the loop, it will give the last executed value of i. For this example, the last
# value of i was 10
# \t is for tab
num = int(input('Enter the number for multiplication table: '))
for i in range(1, 11):
    print(f"{num} * {i} = {num*i} \t {num} * {11-i} = {num * (11-i)}") 