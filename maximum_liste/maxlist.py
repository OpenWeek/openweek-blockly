#!/bin/python3
#
#  Copyright (c)  2017 Olivier Martin
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
