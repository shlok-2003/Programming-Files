# Take form input from user like this
num = input("Enter a number: ")
print(num)

# The input function takes input as string, so to take input in other format, we have to typecast it, by writing the datatype at
# the from of the input function. This is shown in addition of two numbers
print(type(num))

# Input two numbers

one = int(input("Enter first num: "))
two = int(input("Enter Second num: "))
print(f"The addition is: {one} + {two} = {one + two}")

# Input three numbers

#     Method 1 to take input
# first = int(input("Enter first: "))
# second = int(input("Enter second: "))
# third = int(input("Enter third: "))

# Method 2 to take input

a, b, c = map(int, input("Enter a number: ").split())
print(f"{a} {b} {c}")