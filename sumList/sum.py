#!/bin/python3
#
#  Copyright (c)  2018 Olivier Martin, Sophie Schorochoff
#  This program is free software: you can redistribute it and/or modify
#  it under the terms of the GNU Affero General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU Affero General Public License for more details.
#
#  You should have received a copy of the GNU Affero General Public License
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
from contextlib import redirect_stdout
import random

@@sum@@

def SumListOk(Liste):
  tot = 0
  for i in Liste:
    tot = tot + i
  return tot

if __name__ == "__main__":
	random.seed(42)
	for i in range(5): #5 tests
		Liste = []
		for j in range(10): #lists of 10 elements
			Liste.append(random.randint(0,100))
		if(SumListOk(Liste) != sommeListe(Liste)):
			print("La somme que vous avez trouvé dans la liste " + str(Liste) + " est " + str(sommeListe(Liste)) + " alors que la vrai somme est " + str(SumListOk(Liste)) + ".")
			exit()
	print("True")	
