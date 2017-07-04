#!/bin/python3
# Code to be verified
from contextlib import redirect_stdout

@@q1@@

def my_minimum(my_list):
	min = my_list[1]
	for i in my_list:
		if i < min :
			min = i
	return min     
            
if __name__ == "__main__":
	test1 = [1,2,3]
	test2 = [5,4,1,6]
	test_passed = True
	for test in [test1, test2]:
		if minimum(test) != my_minimum(test):
			print("votre résultat : " + str(minimum(test)) + " \n résultat attendu : " + str(my_minimum(test)) + "\n la liste était : "+ str(test))

			test_passed = False
			
	if test_passed:
		print(test_passed)
