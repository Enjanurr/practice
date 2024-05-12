def word_count(input_string):
    word = len(input_string.split())
    return word

input = str(input("word count: "))

print('number of words', word_count(input) )