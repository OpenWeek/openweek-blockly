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
    exemple=[1,3]
    
    if(not recherche_binaire(exemple,3)):
        print('vous vous rendez compte que vous ne trouvez pas le mot alors qu\'il existe! Vous vérifiez si vous signalez que le mot est présent dans un dictionnaire contenant plusieurs mots.', end='', flush=True)
        exit(0)
    
   
    #Si tous les tests sont passés
    print('True', end='', flush=True)
 	