numeroAnterior = 0

for i in range(1, 101):
    if(i % 2 == 0):
        numeroAnterior += i
        
print(f"A soma de todos os números pares é {numeroAnterior}")