def numeroPrimo(numero):
    if (numero <= 1):
        return False
    for i in range(2, int(numero ** 0.5) + 1):
        if (numero % i == 0):
            return False
    return True

intervaloInicio = int(input("Digite um número para o intervalo inicial: "))
intervaloFim = int(input("Digite um número para o intervalo final: "))

print("\nNúmeros Primos entre o intervalo:")
for n in range(intervaloInicio, intervaloFim + 1):
    if (numeroPrimo(n)):
        print("\n", n)


