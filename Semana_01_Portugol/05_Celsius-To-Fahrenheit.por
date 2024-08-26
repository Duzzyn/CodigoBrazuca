programa {
	funcao inicio() {
		real celsius, fahrenheit

		escreva("Digite o valor em Celsius: ")
		leia(celsius)

		fahrenheit = (celsius * 9 / 5) + 32
		escreva("O valor em Fahrenheit é: " + fahrenheit)
	}
}