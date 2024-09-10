soma = 0
contador = 0

while True:
    notas = int(input("Digite algumas notas para calcular a média(digite -1 pra parar): "))
    if notas == -1:
        break

    soma += notas
    contador += 1

print(f"A média das notas é:", soma / contador)
    