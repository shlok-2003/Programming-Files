import random
import string

def main():
    file = open(r'C:\Users\Shlok Prajapati\OneDrive\Desktop\Programming\Random TestCase Generator\Template\input.txt', 'w')

    t = random.randint(500, 1000)
    file.write(str(t) + '\n')

    stringNum = 'abcdefghijhijklmnopqrstuvqxyz'
    
    for _ in range(t):
        n = random.randint(1, 1e5)
        file.write(str(n) + '\n')
        
        res = ''.join(random.choices(stringNum, k=n))

        file.write(str(res) + '\n')


if __name__ == "__main__":
    main()
