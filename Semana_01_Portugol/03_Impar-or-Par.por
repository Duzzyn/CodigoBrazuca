programa {
	funcao inicio() {
		inteiro numero

		escreva("Digite um numero: ")
		leia(numero)

		se (numero % 2 == 0) {
			escreva("O numero " + numero + " é par.")
		} senao {
			escreva("O numero " + numero + " é impar.")
		}
	}
}