import random

def main():
    file = open(f'./Testcases/input/input04.txt', 'w')

    t = 10
    file.write(str(t) + '\n')

    for _ in range(t):
        N = 100
        n = random.randint(1, N)

        file.write(str(n) + "\n")


if __name__ == '__main__':
    main()
