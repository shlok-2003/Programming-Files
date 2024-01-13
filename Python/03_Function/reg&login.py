user = {}

def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    
    if username in user and user[username] == password:
        print("Login successful")
    else:
        return

def register():
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    confirm_password = input("Confirm your password: ")

    if password == confirm_password:
        user[username] = password
    else:
        print("Password does not match")
        register()

def signin():
    
    while True:
        option = int(input("Enter the options: "))
        
        if option == 1:
            login()
        elif option == 2:
            register()
        else:
            break

def default_param_func(fname, lname):
    print("First name: ", fname)
    print("Last Name", lname)   

def course():

    option = int(input("Enter the options: "))

    if option == 1:
        print("Computer Engineering")
    elif option == 2:
        print("Computer Science & Engineering")
    elif option == 3:
        print("Information Technology")
    elif option == 4:
        print("Electronics & Communication Engineering")
    else:
        print("Invalid option")

def while1():
    i = 0

    while i < 10:
        print(i, end=" ")
        i += 1
    

def file():
    file = open("data.txt", "w")
    file.write("Hello World")
    file.close()

    file = open("data.txt", "r")
    print(file.read())
    file.close()

if __name__ == "__main__":
    # signin()
    # default_param_func(fname="John", lname="Doe")
    # course()
    # while1()
    file()
