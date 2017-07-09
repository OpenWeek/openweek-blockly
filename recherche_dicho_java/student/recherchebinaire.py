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
    try:
        # Tests basiques
        #
        exemple=["1","3","5"]
        if(recherche_binaire(exemple,"10")):
            print('vous vous rendez compte que vous ne gérez pas le cas où le mot ne se trouve pas dans le dictionnaire!.', end='', flush=True)
            exit(0)
        # 
        exemple1=["1","3"]
        if(not recherche_binaire(exemple1,"3")):
            print('vous vous rendez compte que vous ne gérez pas le cas où vous trouvez le mot dans le dictionnaire!', end='', flush=True)
            exit(0)
        #
        exemple2=["1","2","3","4","5","6","7","8","9","10"]

        if(not recherche_binaire(exemple2,"9")):
            print('vous vous rendez compte que vous choisissez les mauvaises parties du dictionnaire! Vous vérifiez les blocs correspondants.', end='', flush=True)
            exit(0)

        #Si tous les tests sont passés
        print('True', end='', flush=True)
    except UnboundLocalError:
        print("vous vous rendez compte que vous n'avez pas initialisé la variable milieu avant de l'utiliser.")
    except RecursionError:
        print("vous vous rendez compte que vous n'avez pas bien placé les appels récursifs.")
    except TypeError:
         print("vous vous rendez compte que vous n'avez pas mis les arguments dans le même ordre que l'exercice précédent.")