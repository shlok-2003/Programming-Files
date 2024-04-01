import random

def main():
    file = open("./Testcases/input/input04.txt", "w")   # output.txt
    
    t = 1000
    file.write(str(t) + "\n")

    for _ in range(t):
        n = random.randint(1, 1000)
        file.write(str(n) + '\n')
        options = [0, 1]
        arr = []

        for i in range(n):
            arr.append(random.choice(options))

        file.write(''.join(map(str, arr)) + '\n')


if __name__ == "__main__":
    main()