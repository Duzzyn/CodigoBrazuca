lista = [4, 5, 3]
print(f"\nLista não ordenada: {lista}\n")

def sort(array):
    for i in range(1, len(array)):
        valores = array[i] # armazena cada valor da lista
        index = i - 1 # indice pra percorrer na lista
        
        while index >= 0 and valores < array[index]: #enquanto as duas condições forem verdadeiras, move o maior pra frente
            array[index + 1] = array[index] # se o elemento atual (valores < array[index]) for menor que o elemento da frente, ele
            # deve ser inserido antes 
            index -= 1 # descrementa o indice pra continuar a comparação

        array[index + 1] = valores

    print(f"Lista ordenada: {array}")

sort(lista)