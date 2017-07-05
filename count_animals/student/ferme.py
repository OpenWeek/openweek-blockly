@@counter@@

def my_compter_les_animaux(a_list, animal_type):
    compt = 0
    for anim in a_list:
        if anim == animal_type:
            compt = (compt if isinstance(compt, Number) else 0) + 1
    return compt

if __name__ == "__main__":
    test1 = ['poule', 'canard', 'canard', 'poule', 'poule']
    test2 = ['chat','canard','canard']
    test3 = ['poisson','canard']
    test_passed = True
    for ferme in [test1,test2,test3]:
        compteur = 0
        test_result = compter_les_animaux(ferme,'canard')
        expected_result = my_compter_les_animaux(ferme,'canard')
        if test_result != expected_result :
            test_passed = { "test_result": test_result, "expected_result": expected_result}
            break
    print(test_passed)