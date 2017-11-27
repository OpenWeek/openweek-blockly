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

@@id@@

def feedback(a, b, c, tot):
    print('**' + str(a) + 'h ' + str(b) + 'm ' + str(c) + 's = ' + str(tot) + 's** ')
    print('alors que vos blocs ont déterminés que cela faisait **' + str(Convertisseur(a,b,c)) + '** secondes.')
    

if __name__ == "__main__":
    if(Convertisseur(0,0,0) != 0):
        feedback(0,0,0,0)
    elif(Convertisseur(1,0,0) != 3600):
        feedback(1,0,0,3600)
    elif(Convertisseur(0,1,0) != 60):
        feedback(0,1,0,60)
    elif(Convertisseur(0,0,1) != 1):
        feedback(0,0,1,1)
    elif(Convertisseur(1,1,1) != 3661):
        feedback(1,1,1,3661)
    else:
        print("True")	
