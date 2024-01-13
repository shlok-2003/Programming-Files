import re

def main1():
    string = "The rain in Spain"

    x = re.findall("ai", string)
    print(x)

def main2():
    txt = "The rain in Spain"
    x = re.search("\s", txt)

    print("The first white-space character is located in position:", x.start())

def main3():
    txt = "The rain in Spain"
    x = re.split("\s", txt)
    print(x)

    x = re.split("\s", txt, 1)
    print(x)

if __name__ == "__main__":
    main1()
    main2()
    main3()