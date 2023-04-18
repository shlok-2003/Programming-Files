# import random as rnd
# file1 = open(r"C:\Users\Shlok Prajapati\OneDrive\Desktop\Programming\Random TestCase Generator\output.txt",'w')

# t = 10
# file1.write(str(t)+'\n')
# print(t)
# for i in range(t):
#     n = rnd.randint(1,10**5)
#     file1.write(str(n)+'\n')
#     for i in range(n):
#         a = rnd.randint(1,10**5)
#         file1.write(str(a) + " ")
#     file1.write("\n")
#     for j in range(n):
#         b = rnd.randint(1,10**5)
#         file1.write(str(b) + " ")
#     file1.write("\n")
# file1.close()

# import random as rnd
# import string

# file1 = open(r'C:\Users\Shlok Prajapati\OneDrive\Desktop\Programming\Random TestCase Generator\out','w')
# for i in range(900):
#     a = rnd.randint(1, 10000)
#     file1.write(str(a)+'\n')
    
    
# file1.close()


import random
import string

file1 = open(r"C:\Users\Shlok Prajapati\OneDrive\Desktop\Programming\Random TestCase Generator\Template\output.txt",'w')
for i in range(900):
    a = random.randint(1, 10000)
    file1.write(str(a)+'\n')
    # print(''.join(random.choices(string.ascii_lowercase, k=a))+'\n')
    file1.write(''.join(random.choices(string.ascii_lowercase, k=a))+'\n')
file1.close()