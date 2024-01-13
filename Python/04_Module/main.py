import random

def main():
    file = open('input.txt', 'w')
    
    t = 1000
    file.write(str(t) + '\n')

    for _ in range(t):
        n = random.randint(10, 10000)

        arr = []
        for i in range(n):
            arr.append(random.randint(1, 1000))

        file.write(' '.join(map(str, arr)) + '\n')


if __name__ == "__main__":
    main()
