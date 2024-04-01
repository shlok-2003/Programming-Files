import random

def main():
    file = open("input.txt", "w")

    t = 100
    file.write(str(t) + '\n')

    for _ in range(t):
        n = random.randint(1, 500)

        file.write(str(n) + '\n')

        temp = []
        for i in range(n):
            temp.append(random.randint(-2, 2))

        file.write(' '.join(map(str, temp)) + '\n')

if __name__ == "__main__":
    main()