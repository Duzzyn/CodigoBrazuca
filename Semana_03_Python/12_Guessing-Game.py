import random 

print("\nBem-vindo ao Guessing Game!\n")

numeroAleatorio = random.randint(1, 100)
print(numeroAleatorio)

chute = int(input("Adivinhe um número para o jogo: "))

while chute != numeroAleatorio:
    if(chute > numeroAleatorio):
        print("\nDica: O número informado é maior que o número secreto")
    else:
        print("\nDica: O número informado é menor que o número secreto")
        
    chute = int(input("Tente novamente: "))

print("\nParabéns, você acertou!!")