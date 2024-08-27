celsius = float(input("Digite a temperatura em graus Celsius: "))

def celsiusToFahrenheit(c):
    conversor = (c * 9/5) + 32
    print(f"A temperatura em Fahrenheit é: {conversor}")

def celsiusToKelvin(c):
    conversor = c + 273.15
    print(f"A temperatura em Kelvin é: {conversor}")

celsiusToFahrenheit(celsius)
celsiusToKelvin(celsius)