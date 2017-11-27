#!/bin/python3
# Code to be verified

#    Copyright (C) 2017, Duchêne François et Raquet Damien
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as published
#    by the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program. If not, see <http://www.gnu.org/licenses/>.

#L'une de ces deux valeurs doit être mise à 1 et l'autre à 0
is_in_classe = 0
is_in_cour = 0
#condition pour savoir si sonnerie() a été appelée en premier
dring = False
al_moved_cour = False
al_moved_classe = False

def set_conditions_test(classe, cour):
    global is_in_cour, is_in_classe, dring, al_moved_cour, al_moved_classe
    is_in_cour = cour
    is_in_classe = classe
    dring = False
    al_moved_cour = False
    al_moved_classe = False

def classe():
    global is_in_cour, is_in_classe, dring, al_moved_classe
    if dring:
        is_in_cour = 0
        is_in_classe += 1
        al_moved_classe = True

def cour():
    global is_in_cour, is_in_classe, dring, al_moved_cour
    if dring:
        is_in_classe = 0
        is_in_cour += 1
        al_moved_cour = True

def sonnerie():
    global dring
    dring = True
    return True

def dans_classe():
    global is_in_classe
    if is_in_classe == 1:
        return True
    else:
        return False

def dans_cour():
    global is_in_cour
    if is_in_cour == 1:
        return True
    else:
        return False

def student_code_test1():
@    @Recree@@
    return {"al_moved_cour": al_moved_cour, "al_moved_classe": al_moved_classe}

if __name__ == "__main__":
    #Série de test. on test les déplacements effetués par l'élève et on print une phrase selon le type d'erreur
    #les deux cas de base sont testés (d'abord dans la cour, puis en classe))
    set_conditions_test(0,1)

    ret = None

    # FIXME(vinsifroid) The try-except should not be needed by there is a bug in blockly
    # if-block generate "false" instead of "False", if it is correct feel free
    # to remove this try-except.
    try:
        ret = student_code_test1()
    except NameError:
        import sys
        print('Il y a une petite erreur dans les blocs. Peut-être qu\'une des conditions est vide ?')
        sys.exit(0)

    if ret == {"al_moved_cour": False, "al_moved_classe": True}:
        set_conditions_test(1,0)
        ret = student_code_test1()
        if ret == {"al_moved_cour": True, "al_moved_classe": False}:
            print('True')
        elif ret == {"al_moved_cour": False, "al_moved_classe": False}:
            print('Damien ne se déplace pas. Il va être en retard !\n')
        elif ret == {"al_moved_cour": False, "al_moved_classe": True}:
            print('Damien va en classe alors qu\'ily est déjà.\n')
        else:
            print('Damien se déplace deux fois, il ne devrait se déplacer qu\'une seule fois.\n')
    elif ret == {"al_moved_cour": False, "al_moved_classe": False}:
        print('Damien ne se déplace pas. Il va être en retard !\n')
    elif ret == {"al_moved_cour": True, "al_moved_classe": False}:
        print('Damien va en cours alors qu\'ily est déjà.\n')
    else:
        print('Damien se déplace deux fois, il ne devrait se déplacer qu\'une seule fois. \n')
