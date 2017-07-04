#!/bin/python3
from contextlib import redirect_stdout
import random

@@max-list@@

def MaximumListeOk(Liste):
  Maximum = Liste[0]
  for i in Liste:
    if i > Maximum:
        Maximum = i
  return Maximum

if __name__ == "__main__":
	random.seed(55)
	for i in range(6): #6 tests
		Liste = []
		for j in range(6): #lists of 6 elements
			Liste.append(random.randint(-10,10))
		if(MaximumListeOk(Liste) != MaximumListe(Liste)):
			print("Le maximum que vous avez trouvé dans la liste " + str(Liste) + " est " + str(MaximumListe(Liste)) + " alors que le vrai maximum est " + str(MaximumListeOk(Liste)) + ".")
			exit()
	print("True")	