# Author: Solid Snake
# helloWorld.py: My first python entry to my personal repo
# installed termcolor project using pip install: "python3 -m pip install termcolor"
# Tried blessings project, but only compatible with python 2.7

import sys
from termcolor import colored, cprint

def myPrint():
    print('Hello World')

def myPrint2(entry):
    print("Hi " + entry + ", Welcome to the Hello World repo") 

def myPrint3(entry):
    print("\033[1;31;40m Hi " + entry + ", Welcome to a colorful World")
    print("\033[1;30;41m Hi " + entry + ", Welcome to the life\033[0;37;40m")    #BAckfround color set to red. Last bit escapes it

def myPrint4(entry):
    print(colored("hello!!! RED with colorful", "red"))
    print(colored("hello " + entry + ", Nice to meet you", "blue"))
    #on_red for background, attrs for bold, underline, blink, reverse, concealed, dark etc
    print(colored("Hey!!! RED with color", "green", 'on_red', attrs=['underline'])) 

# Function calls
myPrint()
myPrint2('Larry')
myPrint3('Harry')
myPrint4('Parry')