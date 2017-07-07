#!/bin/python3
# Code to be verified
import os
import subprocess
import shlex
from contextlib import redirect_stdout

@@thecode@@


if __name__ == "__main__":
    # Tests basiques
    #
    exemple=[1,3,5]
    
    if(recherche_binaire(exemple,10)):
        print('vous vous rendez compte que vous ne dites pas quand un mot est absent du dictionnaire! Vous vérifiez si vous signalez un mot absent d\'un dictionnaire contenant plusieurs mots.', end='', flush=True)
        exit(0)
       
	# 
    exemple1=[1,3]
    
    if(not recherche_binaire(exemple1,3)):
        print('vous vous rendez compte que vous ne prenez pas le cas où vous trouvez le mot dans le dictionnaire!', end='', flush=True)
        exit(0)
    #
    exemple2=[1,2,3,4,5,6,7,8,9,10]
    
    if(not recherche_binaire(exemple2,9)):
        print('vous vous rendez compte que vous choisissez les mauvaises parties du dictionnaire! Vous vérifiez les blocs correspondants.', end='', flush=True)
        exit(0)
    
    #Si tous les tests sont passés
    print('True', end='', flush=True)
 	