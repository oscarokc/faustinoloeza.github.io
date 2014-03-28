def lista(n,c,f):

    for i in range(f):
        for j in range(c):
            print("esta relacionado",i+1,j+1)
            x=input()
            x=int(x)
            if x==1:
                n[i][j]=1
            else:
                n[i][j]=0
    
    print("\n")            
    for i in range(f):
        for j in range(c):
            print(n[i][j],end="")
        print()
    return n
def matriza(n,c,f):

    for i in range(f):
        for j in range(c):
            print("esta relacionado",i+1,j+1)
            x=input()
            x=int(x)
            if x==1:
                n[i][j]=1
            else:
                n[i][j]=0
    
    print("\n")            
    for i in range(f):
        for j in range(c):
            print(matriza[i][j])
    return n

f=3 #filas
c=3 #columnas
y=[[0]*c for x in range (c)]
n=[[0]*c for x in range (c)]
lista(n,c,f)
