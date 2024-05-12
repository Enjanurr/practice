def palindrome(s):
#value of palin
    palindrome = input[::-1]
    return palindrome

input = str(input('enter a palindrome: ' ))
result = palindrome(input)

def check_palindrome(input):
    if input == result:
        print('palindrome')
    else:
        print("not a palindrome")
    return check_palindrome
check_palindrome(input)
