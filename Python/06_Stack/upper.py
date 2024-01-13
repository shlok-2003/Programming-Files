def main():
    arr = input()

    res = ""
    for i in range(len(arr)):
        if 'A' <= arr[i] <= 'Z':
            res += chr(ord(arr[i]) - ord('A') + ord('a'))
        elif 'a' <= arr[i] <= 'z':
            res += chr(ord(arr[i]) - ord('a') + ord('A'))
        else:
            res += arr[i]
            
    print(res)

if __name__ == "__main__":
    main()