numero = int(input("Digite um número: "))

print(f"\nA tabuada de {numero} é:")

lista = []
for i in range(1, 11):
    tabuada = i*numero
    lista.append(tabuada)

print(lista)