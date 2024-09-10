numero1 = int(input("Informe um número: "))
numero2 = int(input("Informe o segundo número: "))

operacao = int(input("\nEscolha a operação desejada: \n1: Multiplicação \n2: Divisão \n3: Soma \n4: Subtração\n"))

if(operacao == 1):
    print("A multiplicação dos valores é: ",numero1 * numero2)
elif(operacao == 2):
    print("A divisão dos valores é: ",numero1 / numero2)
elif(operacao == 3):
    print("A soma dos valores é: ",numero1 + numero2)
else:
    print("A subtração dos valores é: ",numero1 - numero2)