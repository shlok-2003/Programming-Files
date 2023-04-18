import random

jackpotNum = random.randint(1, 100)

difficulty = int(input("Enter the level: 0-Hard  1-Moderate  2-Easy: "))
attempts = [5, 10, 20]

won = False
for attemptNum in range(1, attempts[difficulty] + 1):
    YourNum = int(input("Enter your Guessed Number: "))
    if YourNum == jackpotNum:
        won = True
        break
    elif YourNum > jackpotNum:
        print(f"Hint: NUmber is smaller than the entered num. You have {attempts[difficulty] - attemptNum} left")
    elif YourNum < jackpotNum:
        print(f"Hint: NUmber is bigger than the entered num. You have {attempts[difficulty] - attemptNum} left")

if won == True:
    print(f"You Won -> JackPotNum = {jackpotNum}")
else:
    print("You Lose")