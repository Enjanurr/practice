
'''
def calculate_area(length , width):
    area = length * width 
    print('your answer is: ', area)
    return area

lenght = float(input('Lenght: '))
width = float(input('widht: '))
calculate_area(lenght , width)



def calculate_area(length, width):
    area = length * width 
    print('The area is: ', area)
    return area

length = float(input('Length: '))
width = float(input('Width: '))
calculate_area(length, width)
'''

'''
def fizzbuzz(n):
    for i in range(1,n+1):
        if i % 3 == 0 and i % 5 == 0:
            print('fizzbuzz')
        elif i % 3 == 0:
            print('fizz')
        elif i % 5 == 0:
            print('buzz')
        print(i)
fizzbuzz(100)
'''
'''
def calculate_average(numbers):
    total_sum = sum(numbers)
    average = total_sum / len(numbers)
    return average
result = calculate_average([1,2,3,4,5,6,7,8,9])
print('average', result)
'''
'''
def reverse_string(inputString):
    reversed_string = inputString[::-1]
    return reversed_string
    
inputString = "hello world"
reverse_result = reverse_string(inputString)
print('original:', inputString )
print('reversed: ', reverse_result )
'''
'''
def reverse_string(inputString):
    reverse_string = inputString[::-1]
    return reverse_string

inputString = "hello love goodbye"
input_result = reverse_string(inputString)
print('original: ', inputString)
print('reversed: ', input_result)
'''
'''
def is_palindrome(text):
    # Remove non-letter characters and convert to lowercase
    cleaned_text = ''.join(char.lower() for char in text if char.isalpha())
    
    # Check if the cleaned text is equal to its reverse
    return cleaned_text == cleaned_text[::-1]

# Test cases
print(is_palindrome("radar"))  # Output: True
print(is_palindrome("hello"))  # Output: False
print(is_palindrome("A man, a plan, a canal, Panama"))  # Output: True
'''
def total_average(numbers):
    total = sum(numbers)
    total_average = total / len(numbers)
    return total_average

result = total_average([7,6,6,7,5,7,7,5,7,7,6,7,5,7,7,7,6,6,5,5])
print("average: ", result)