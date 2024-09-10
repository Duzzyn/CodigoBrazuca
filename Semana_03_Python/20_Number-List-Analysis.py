list = []

while True:
    num = int(input("Informe vários números (digite 0 para sair): "))
    if(num == 0):
        break
    list.append(num)

print(list)

def maior(list):
    maior = max(list)
    print(f"O maior número da lista é {maior}")

def menor(list):
    menor = min(list)
    print(f"O menor número da lista é {menor}")

def media(list):
    soma = sum(list)
    quantidade = len(list)
    media = soma / quantidade

    print(f"A média dos números da lista é {media}")

maior(list)
menor(list)
media(list)
