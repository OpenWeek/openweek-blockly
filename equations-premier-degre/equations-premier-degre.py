#!/bin/python3
#
# Copyright (c) 2017 Robin Descamps
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
import math

solution = 0
solution_test = 0
@@equations-premier-degre@@

def test_resoudre_equation_premier_degre(a, b):
    global solution_test
    solution_test = 0
    if a == 0:
        if b == 0:
            solution_test = 'ensemble des réels'
        else:
            solution_test = 'ensemble vide'
    else:
        solution_test = -b / a
            
def test_resolution_equation(a_test, b_test):
    global solution
    solution = 0
    resoudre_equation_premier_degre(a_test, b_test)
    test_resoudre_equation_premier_degre(a_test, b_test)

# This function works also with second degree
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
    if solution_test == "ensemble des réels":
        message += "solution ℝ (l'ensemble des réels)."
    elif solution_test == 'ensemble vide':
        message += "solution {} (l'ensemble vide)."
    else:
        message += "solution {"+str(solution_test)+"}"
    return message

def write_failed_test(a_test, b_test, c_test):
    message = "[Erreur] " + write_equation(a_test, b_test, c_test)
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
	
    return message

def execute_test(a_test, b_test, c_test):
    message = ""
    test = True
    test_resolution_equation(a_test, b_test)
    test = (solution == solution_test)
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
    number_of_tests = 5
    test_grade = 100/number_of_tests
    # Test 1 : solution = reels : 0 = 0
    a_test = 0
    b_test = 0
    c_test = 0
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 2 : a=0, b!=0, solution = vide
    a_test = 0
    b_test = 17
    c_test = 0
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 3 : a != 0, b != 0
    a_test = 4
    b_test = -16
    c_test = 0
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 4 : great numbers
    a_test = 19823
    b_test = 92838
    c_test = 0
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
    if test:
        grade += test_grade
    # Test 5 : negative numbers
    a_test = -28
    b_test = -95
    c_test = 0
    (test, message) = execute_test(a_test, b_test, c_test)
    feedback += message + "\n\n"
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
    