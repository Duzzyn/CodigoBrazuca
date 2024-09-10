frase = input("Digite uma frase ou palavra: ")

inversao = frase[::-1]

if(frase == inversao):
    print("É um palíndromo")
else:
    print("não é um palíndromo")
