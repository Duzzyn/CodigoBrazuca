numberUser = int(input("Digite um número "))

def impar_par(number):
    if (number % 2) == 0:
        print(number, "é par")
    else:
        print(number, "é ímpar") 

impar_par(numberUser)