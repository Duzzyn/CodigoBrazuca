frase = input("Escreva uma frase: ").lower()

contador = 0
vogal = ['a', 'e', 'i', 'o', 'u']

for palavra in frase:
    if palavra in vogal:
        contador += 1

print(f"\nsua frase tem {contador} vogais")