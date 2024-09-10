numPerfect = int(input("Digite um número pra verificar se ele é perfeito: "))

divisores = 0

for i in range(1, numPerfect-1):
    if(numPerfect % i == 0):
        divisores += i

if(divisores == numPerfect):
    print(f"\nO número é perfeito, a soma de seus divisores dá: {divisores}")
else:
    print("\nO número não é perfeito, pois a soma de seus divisores não é igual a ele mesmo.")