class Person():
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def get_name(self):
        return self.__name

    def get_age(self):
        return self.__age

    def set_name(self, name):
        self.__name = name

    def set_age(self, age):
        self.__age = age

    def print_obj(self):
        return "I am a Person"

#! Inheritance
class Student(Person): 
    def __init__(self, name, age, roll_no, marks):
        super().__init__(name, age)
        self.__roll_no = roll_no
        self.__marks = marks

    def get_all(self):
        return self.get_name(), self.get_age(), self.__roll_no, self.__marks

    def print_obj(self):
        return "I am a Student"

#! Polymorphism
class Teacher(Person):
    def __init__(self, name, age, class_name):
        super().__init__(name, age)
        self.__class_name = class_name

    def get_all(self):
        return self.get_name(), self.get_age(), self.__class_name
    
    def print_obj(self):
        return "I am a Teacher"
    
class Car:
    def __init__(self, brand, model):
        self.__brand = brand
        self.__model = model

    def move(self):
        return "I am a moving Car"
    
    def get_all(self):
        return self.__brand, self.__model
    
class Boat:
    def __init__(self, brand, model):
        self.__brand = brand
        self.__model = model

    def move(self):
        return "I am a moving Boat"
    
    def get_all(self):
        return self.__brand, self.__model
    
Shlok = Teacher("Shlok", 20, "COMP C")
print(Shlok.get_all())
print(Shlok.print_obj())


class Father():
    def __init__(self, name):
        self.__name = name

    def set_son_name(self, son_name):
        self.__son_name = son_name

    def father_name(self):
        return f"Father -> ${self.__name} of ${self.__son_name}"

class Mother():
    def __init__(self, name):
        self.__name = name

    def set_son_name(self, son_name):
        self.__son_name = son_name

    def mother_name(self):
        return f"Mother -> ${self.__name} of ${self.__son_name}"

class Children(Father, Mother):
    def __init__(self, name, father_name, mother_name, age):
        super().__init__()
        self.__name = name
        self.__age = age

    def __