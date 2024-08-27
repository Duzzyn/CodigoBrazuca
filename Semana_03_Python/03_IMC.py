print("Calcule seu IMC\n")

peso = float(input("Quanto você pesa?: "))
altura = float(input("Qual sua altura?: "))

resultado = peso/(altura * altura)
print(f"Seu IMC é: {resultado}")

if(resultado < 18.5):
    print("Estado: Magreza")
elif(18.5 < resultado < 24.9):
    print("Estado: Normal")
elif(25 < resultado < 29.9):
    print("Estado: Sobrepeso")
elif(30 < resultado < 39.9):
    print("Estado: Obesidade")
else:
    print("Estado: Obesidade Grave")
