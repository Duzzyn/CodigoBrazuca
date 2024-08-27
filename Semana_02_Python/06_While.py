soma = 0

while True: 
    numero = int(input("Digite um número pra somar (0 pra sair)"))
    if(numero == 0):
        break
    soma += numero

print(f"A soma dos números é: {soma}")