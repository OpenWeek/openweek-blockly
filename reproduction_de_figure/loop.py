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

s = set()

def student_code():
    global papier
@    @id@@

def error(s):
	print(s)
	exit()
    
if __name__ == "__main__":
	student_code()
	for x in range(6):
		for y in range(4):
			if (x==0 or x==5 or y==0 or y==3):
				if(len(s) == 0):
					error("Vous n'avez placez aucune cases.")
				if ((x,y) not in s):
					error("La case à l'indice (" + str(x) + "," + str(y) + ") n'est pas présente.")
				if(len(s) > 16):
					error("Il y a des cases en trop. Vous devriez placer 16 cases au total, vous en avez placez " + str(len(s)))
               
	print('True')	
