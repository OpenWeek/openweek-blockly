class Lib:
    pass

context = Lib()

def pgcd(a, b):
    r = a%b
    while r != 0:
        a = b
        b = r
        r = a%b
    return b