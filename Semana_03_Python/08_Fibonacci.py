n = int(input("Digite o número de termos para fibonacci: "))

fibonacci = []

num1, num2 = 0, 1 # inicializa a lista de fibonacci

while len(fibonacci) < n:
    fibonacci.append(num1)
    num1 = num2 # na posição de indice [2], o número 1 assume o lugar do numero 2
    num2 = num1 + num2 # soma o valor anterior com o valor atual

print(fibonacci)