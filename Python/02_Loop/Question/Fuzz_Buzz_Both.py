
for i in range(1, 100):
    if i % 3 == 0 and i % 5 == 0:
        print("Both")
    elif i % 3 == 0:
        print("Fuzz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print("Not")