class Lib:
    pass

context = Lib()
context.count_eat = 0
context.count_slept = 0

def eat():
    context.count_eat += 1


def sleep():
    context.count_slept += 1

def tired():
    return range(3)
