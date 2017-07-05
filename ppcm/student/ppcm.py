from contextlib import redirect_stdout
from lib import pgcd, context

@@ppcm-id@@

def my_calculer_ppcm(num_a,num_b):
  global res
  res = (num_a * num_b) / (pgcd(num_a,num_b))
  return res

if __name__ == "__main__":
    test1 = (8,4)
    test2 = (28,78)
    test3 = (50,250)
    test_passed = True
    for tpl in [test1,test2,test3]:
        test_result = calculer_PPCM(tpl[0],tpl[1])
        expected_result = my_calculer_ppcm(tpl[0],tpl[1])
        if test_result != expected_result :
            test_passed = { "test_result": test_result, "expected_result": expected_result}
            break
    print(test_passed)