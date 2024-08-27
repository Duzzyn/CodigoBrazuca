compras = []

while True:
    inserirItem = input("Insira o nome de um item pra adicionar a lista (digite exit pra sair):")
    if(inserirItem.lower() == 'exit'):
        break
    compras.append(inserirItem)

print("Carrinho de compras:", "\n", compras)