numeroFatorial = int(input("Digite um número: "))

resultado = 1

for i in range (1, numeroFatorial + 1):
    resultado *= i

print(f"o resultado fatorial de {numeroFatorial} é {resultado}")
