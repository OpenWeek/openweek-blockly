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
import copy

@@tri@@


if __name__ == "__main__":
	random.seed(55)
	tab = list()
	for j in range(6): #lists of 6 elements
		tab.append(random.randint(-10,10))
	old = copy.deepcopy(tab)
	trier_par_insertion(tab)
	old.sort()
	if(tab != old):
		print("Le tableau que vous avez retourné est "+str(tab) + " alors que la bonne réponse est "+str(old))
		exit()
	print("True")	

