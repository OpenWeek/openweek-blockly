import random
import copy

def upRange(start, stop, step): 
  while start <= stop: 
    yield start 
    start += abs(step) 

def downRange(start, stop, step): 
  while start >= stop: 
    yield start 
    start -= abs(step) 

def trier(tab): 
  global pos, i, current, min2, j 
  i_end = float(len(tab)) 
  for i in (1 <= i_end) and upRange(1, i_end, 1) or downRange(1, i_end, 1): 
    min2 = tab[int(i - 1)] 
    pos = i 
    j_end = float(len(tab)) 
    print("Current min :"+str(min2))
    for j in (float(i) <= j_end) and upRange(float(i), j_end, 1) or downRange(float(i), j_end, 1): 
      current = tab[int(j - 1)] 
      if current < min2: 
        print("new min : "+str(current) +"(at indice "+str(j)+")")
        pos = j 
        min2 = current
    if(pos != i):
      temp=tab[int(i-1)] 
      print("temp : "+str(temp))
      tab[int(i-1)]=tab[int(pos-1)] 
      tab[int(pos-1)] = temp
      print("after swap : "+str(tab))
  return tab


random.seed(55)
tab = list()
for j in range(6): #lists of 6 elements
  tab.append(random.randint(-10,10))
old = copy.deepcopy(tab)
print("before : "+str(old))
trier(tab)
old.sort()
if(tab != old):
  print("output : "+str(tab) + "old : "+str(old))
  exit()
print("True")