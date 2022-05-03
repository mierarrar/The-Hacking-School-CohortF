# THSCohortF2020_Meera

## General info
Hackathon - 2

## Coding Language:
Javascript.

## Problem Statement :

Build a Menu Driven CLI app with Javascript and stopthe program execution only uponselection.
Menu Options :
1) String to Binary in 8 bit pattern
2) String to Binary in 16 bit pattern
0) To exit the program.
Write an Algorithm to extract input English Languagesentence characters and convert thecharacters to the 8-bit BINARY patterns.
Create your own ASCII Javascript Object range from0-128 (No Built in methods allowed).
Note:
(a)Binary Conversion Should be done using Recursiononly.(No Built-In libraries allowed)
(b)OutPut should be 8BIT/16BIT Binaries only.
(c) Input can have special characters like /;: etc.
Sample Input 1:AB CD
Sample Output 1
[ '01000001', '01000010', '00100000', '01000011', '01000100' ]

Sample Input 2 CO/DE 2019
[ '01000011', '01001111', '00101111', '01000100','01000101', '00100000','00110010', '00110000','00110001', '00111001']


#### Test Cases :

```
0. Exit the Program:
1. String to Binary in 8 bit pattern
2. String to Binary in 16 bit pattern
Enter option : 1
Enter string: castle
[
  '01100011',
  '01100001',
  '01110011',
  '01110100',
  '01101100',
  '01100101'
]
Do you want to continue : (y/n)y
Enter option : 2
Enter String:  monster
[
  '0000000001101101',
  '0000000001101111',
  '0000000001101110',
  '0000000001110011',
  '0000000001110100',
  '0000000001100101',
  '0000000001110010'
]
Do you want to continue : (y/n)y
Enter option : 2
Enter String:  234 //
[
  '0000000000110010',
  '0000000000110011',
  '0000000000110100',
  '0000000000100000',
  '0000000000101111',
  '0000000000101111'
]
Do you want to continue : (y/n)y
Enter option : 1
Enter string: ))7
[ '00101001', '00101001', '00110111' ]
Do you want to continue : (y/n)n

```