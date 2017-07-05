#!/bin/python3
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
        print('vous êtes obligé de changer les cartes de place dans le paquet; vous décidez de vérifier votre bloc bleu clair et les changements de la carte z.', end='', flush=True)
        exit(0)
        
    # Est-ce qu'on echange bien?
    exemple=[1,3,2]
    trier_par_selection(exemple)
    if(exemple==[3,1,2] or exemple==[3,2,1] or exemple==[2,3,1] or exemple==[2,1,3]):
        print('vous n\'échangez pas bien les bonnes cartes; vous verifiez le bloc bleu clair et les changements de la carte z', end='', flush=True)
        exit(0)
      
   # Est-ce qu'on echange bien?
    exemple=[1,3,2,-1,49,999,3,2,5,6,3]
    trier_par_selection(exemple)
    if(exemple!= [-1,1,2,2,3,3,3,5,6,49,999]):
        print('vous voyez que ca ne trie pas bien les cartes par ordre croissant; vous décidez de réfléchir encore un peu.', end='', flush=True)
        exit(0)
   
    #Si tous les tests sont passés
    print('True', end='', flush=True)
 	