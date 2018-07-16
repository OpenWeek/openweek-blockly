#!/bin/python3

#
#  Copyright (c)  2017 Brandon Naitali
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


# Code to be verified
import os
import subprocess
import shlex
from contextlib import redirect_stdout

@@thecode@@


if __name__ == "__main__":
    # Tests basiques

    # Est-ce qu'on modifie la liste?
    exemple=[3,1]
    trier_par_selection(exemple)
    if(exemple==[3,1]):
        print('vous êtes obligé de changer les cartes de place dans le paquet; vous décidez de vérifier votre bloc bleu clair.', end='', flush=True)
        exit(0)
        
    # Est-ce qu'on echange bien?
    exemple=[1,3,2]
    trier_par_selection(exemple)
    if(exemple==[3,1,2] or exemple==[3,2,1] or exemple==[2,3,1] or exemple==[2,1,3]):
        print('vous n\'échangez pas bien les bonnes cartes; vous verifiez le bloc bleu clair.', end='', flush=True)
        exit(0)
      
   # Est-ce qu'on echange bien?
    exemple=[1,3,2,-1,49,999,3,2,5,6,3]
    trier_par_selection(exemple)
    if(exemple!= [-1,1,2,2,3,3,3,5,6,49,999]):
        print('vous voyez que ca ne trie pas bien les cartes par ordre croissant; vous décidez de réfléchir encore un peu.', end='', flush=True)
        exit(0)
   
    #Si tous les tests sont passés
    print('True', end='', flush=True)
 	