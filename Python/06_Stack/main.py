from collections import deque

def main():
    stack = deque()

    stack.append(10)
    print(stack[-1])
    stack.pop()
    
    if not stack:
        print("Stack is empty")
    else:
        print(stack[-1])

if __name__ == "__main__":
    main()