#!/bin/python3
import math

solution = 0
solution_2 = 0
solution_test = 0
solution_2_test = 0

@@equations-second-degre@@

def test_resoudre_equation_second_degre(a, b, c):
    global solution_test, delta, solution_2_test
    solution_test = 0
    solution_2_test = 0
    delta = 0
    if a == 0:
        if b == 0:
            if c == 0:
            	solution_test = 'ensemble des réels'
            else:
                solution_test = 'ensemble vide'
        else:
            solution_test = -c / b
    else:
        delta = b ** 2 - 4 * (a * c)
        if delta > 0:
            solution_test = (-b - math.sqrt(delta)) / (2 * a)
            solution_2_test = (-b + math.sqrt(delta)) / (2 * a)
        elif delta == 0:
            solution_test = -b / (2 * a)
        else:
            solution_test = 'ensemble vide'
            
def test_resolution_equation(a_test, b_test, c_test):
    global solution, solution_2
    solution = 0
    solution_2 = 0
    resoudre_equation_second_degre(a_test, b_test, c_test)
    test_resoudre_equation_second_degre(a_test, b_test, c_test)

def write_equation(a_test, b_test, c_test):
    message = "**"
    if a_test == 1:
        message += "x²"
    elif a_test != 0:
        message += str(a_test)+"x²"
    if a_test != 0:
        if b_test == 1:
            message += " + x"
        elif b_test > 0:
            message += " + "+str(b_test)+"x"
        elif b_test < 0:
            message += " - "+str(abs(b_test))+"x"
    else:
        if b_test == 1:
            message += "x"
        elif b_test > 0:
            message += str(b_test)+"x"
        elif b_test < 0:
            message += "-"+str(abs(b_test))+"x"
    if a_test == 0 and b_test == 0:
        message += str(c_test)
    else:
        if c_test > 0:
            message += " + "+str(c_test)
        elif c_test < 0:
            message += " - "+str(abs(c_test))
    message += " = 0** a pour "
    return message

def write_success_test(a_test, b_test, c_test):
    message = "[OK] " + write_equation(a_test, b_test, c_test)
    if (solution_2_test == 0):
        if solution_test == "ensemble des réels":
            message += "solution ℝ (l'ensemble des réels)."
        elif solution_test == 'ensemble vide':
                message += "solution {} (l'ensemble vide)."
        else:
            message += "solution {"+str(solution_test)+"}"
    else:
        message += "solutions {"+str(solution_test)+", "+str(solution_2_test)+"}."
    return message

def write_failed_test(a_test, b_test, c_test):
    message = "[Erreur] " + write_equation(a_test, b_test, c_test)
    
    if (solution_2_test == 0 and solution_2 != 0):
        if solution_test == "ensemble des réels":
            message += "solution ℝ (l'ensemble des réels), mais votre fonction a calculé {"+str(solution)+", "+str(solution_2)+"}."
        elif solution_test == 'ensemble vide':
                message += "solution {} (l'ensemble vide), mais votre fonction a calculé {"+str(solution)+", "+str(solution_2)+"}."
        else:
            message += "solution {"+str(solution_test)+"}, mais votre fonction a calculé {"+str(solution)+", "+str(solution_2)+"}."
    
    elif (solution_2 == 0 and solution_2_test == 0):
        if solution_test == "ensemble des réels":
            if solution == 'ensemble vide':
                message += "solution ℝ (l'ensemble des réels), mais votre fonction a calculé {} (l'ensemble vide)."
            else:
                message += "solution {} (l'ensemble vide), mais votre fonction a calculé {"+str(solution)+"}."
        elif solution_test == 'ensemble vide':
            if solution == "ensemble des réels":
                message += "solution {} (l'ensemble vide), mais votre fonction a calculé ℝ (l'ensemble des réels)."
            else:
                message += "solution ℝ (l'ensemble des réels), mais votre fonction a calculé {"+str(solution)+"}."
        else:
            message += "solution {"+str(solution_test)+"}, mais votre fonction a calculé {"+str(solution)+"}."
    
    else:
        message += "solutions {"+str(solution_test)+", "+str(solution_2_test)+"}, mais votre fonction a calculé {"+str(solution)+", "+str(solution_2)+"}."
	
    return message

def execute_test(a_test, b_test, c_test):
    message = ""
    test = True
    test_resolution_equation(a_test, b_test, c_test)
    test = (((solution == solution_test) and (solution_2 == solution_2_test)) or ((solution == solution_2_test) and (solution_2 == solution_test)))
    if test:
        message = write_success_test(a_test, b_test, c_test)
    else:
        message = write_failed_test(a_test, b_test, c_test)
    return (test, message)

if __name__ == "__main__":
    test = True
    message = ""
    feedback = ""
    grade = 0
    number_of_tests = 7
    test_grade = 100/number_of_tests
    # Test 1 : solution = vide : 23 = 0
    a_test = 0
    b_test = 0
    c_test = 23
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 2 : a=0, b!=0, solution = -c/b
    a_test = 0
    b_test = 4
    c_test = -16
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 3 : delta > 0
    a_test = -197
    b_test = -263
    c_test = 792
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 4 : great numbers (delta > 0)
    a_test = 19823
    b_test = 92838
    c_test = -42819
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 5 : delta = 0
    a_test = 1
    b_test = 6
    c_test = -55
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 6 : solution = vide : delta < 0
    a_test = 10
    b_test = 0
    c_test = 3
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 7 : solution = reels : 0 = 0
    a_test = 0
    b_test = 0
    c_test = 0
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n"
    if test:
        grade += test_grade
    # Send the grade : XXXY
    # XXX : The score
    # Y : The messages
    grade = round(grade)
    if grade == 100:
        feedback = str(grade) + feedback
    elif grade == 0:
        feedback = str(grade) + "00" + feedback
    else:
        feedback = str(grade) + "0" + feedback
    print(feedback)
    