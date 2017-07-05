#!/bin/python3
# Code to be verified

is_in_classe = 0
is_in_cour = 0
#condition pour savoir si sonnerie() a été appelée en premier
dring = False

def set_conditions_test(classe, cour):
    global is_in_cour, is_in_classe, dring
    is_in_cour = cour
    is_in_classe = classe
    dring = False

def classe():
    global is_in_cour, is_in_classe, dring
    if dring:
        is_in_cour = 0
        is_in_classe += 1

def cour():
    global is_in_cour, is_in_classe, dring
    if dring:
        is_in_classe = 0
        is_in_cour += 1

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

def student_code():
@    @Recree@@
    return {"is_in_classe": is_in_classe, "is_in_cour": is_in_cour}

if __name__ == "__main__":
    erreur_test1 = False
    #Premier test - cas il est dans la cour -> il va en classe
    set_conditions_test(0,1)
    retVal = student_code()
    if retVal == {"is_in_classe": 1, "is_in_cour": 0}:  #Cas de base
        pass
    elif retVal == {"is_in_classe": 0, "is_in_cour": 1}:
        print('Damien ne se déplace pas, peut-être n\'a t\'il pas entendu la sonnerie ?')
        erreur_test1 = True
    elif retVal == {"is_in_classe": 0, "is_in_cour": 2}:
        print('Es-tu sûr que Damien va au bon endroit ?')
        erreur_test1 = True
    else:
        print("Il y a une erreur dans votre code.")
        erreur_test1 = True
    #Si un test est faux, on ne print rien d'autre
    if erreur_test1 == False:
        #Second test - cas il est dans la classe -> il va dans la cour
        set_conditions_test(1,0)
        retVal2 = student_code()
        if retVal2 == {"is_in_classe": 0, "is_in_cour": 1}: #Cas de base
            print('True')
        elif retVal2 == {"is_in_classe": 1, "is_in_cour": 0}:
            print('Damien ne se déplace pas, peut-être n\'a t\'il pas entendu la sonnerie ?')
        elif retVal2 == {"is_in_classe": 2, "is_in_cour": 0}:
            print('Es-tu sûr que Damien va au bon endroit ?')
        else:
            print("Il y a une erreur dans votre code.")
