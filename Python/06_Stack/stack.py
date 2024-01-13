from collections import deque

def main():
    arr = input()

    stack = deque()
    for i in range(len(arr)):
        if arr[i] == '(' or arr[i] == '[' or arr[i] == '{':
            stack.append(arr[i])
        else:
            if not stack:
                continue
            elif stack[-1] == '(' and arr[i] == ')':
                stack.pop()
            elif stack[-1] == '[' and arr[i] == ']':
                stack.pop()
            elif stack[-1] == '{' and arr[i] == '}':
                stack.pop()

    if not stack:
        print("YES")
    else:
        print("NO")


if __name__ == "__main__":
    main()