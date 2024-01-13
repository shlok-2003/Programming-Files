import random

def main():
    file = open("input.txt", "w")

    t = 5000
    file.write(str(t) + '\n')

    for _ in range(t):
        n = random.randint(1, 1000)
        m = random.randint(1, 1000)

        file.write(str(n) + ' ' + str(m) + '\n')

        for i in range(n):
            temp = []
            for j in range(m):
                temp.append(random.randint(1, 100))

            file.write(' '.join(map(str, temp)) + '\n')

if __name__ == "__main__":
    main()