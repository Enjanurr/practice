'''
Never thought I'd find you
But you're here
And so I love you

[Chorus]
I'm not wrong
When I say I've been stuck
By the glue onto you
I've been stuck by glue
Right onto you
I've been stuck by glue'''
'''
import sys 
from time import sleep 
import time

def print_lyric():
    lines = [
        ("Never thought I'd find you",0.08),
        ("But you're here",0.08),
        ("And so I love you",0.08),
        ("I'm not wrong",0.04),
        ("When I say I've been stuck",0.08),
        ("By the glue onto you",0.10),
        ("I've been stuck by glue",0.09),
        ("Right onto you",0.08),
        ("I've been stuck by glue",0.08)


    ]
    delays = [ 0.2, 0.2, 0.3, 0.8, 0.9, 5, 5 ]

    for i,(line, char_delay) in enumerate(lines):
        for char in line:
            print(char,end="")
            sys.stdout.flush()
            sleep(char_delay)
        time.sleep(delays[i])
        print('')
print_lyric()'''

import sys
from time import sleep
import time

def print_lyric():
    lines = [
        ("Never thought I'd find you", 0.08),
        ("But you're here", 0.08),
        ("And so I love you", 0.10),
        ("I'm not wrong", 0.04),
        ("When I say I've been stuck", 0.08),
        ("By the glue onto you", 0.12),
        ("I've been stuck by glue", 0.09),
        ("Right onto you", 0.10),
        ("I've been stuck by glue", 0.09)
    ]

    delays = [0.3, 0.2, 0.3, 0.9, 0.9, 4, 5, 4 ]   # Adjusted to match the number of lines

    for i, (line, char_delay) in enumerate(lines):
        for char in line:
            print(char, end="")
            sys.stdout.flush()
            sleep(char_delay)
        if i < len(delays):  # Check if the index is within the range of delays
            time.sleep(delays[i])
        print('')

print_lyric()


