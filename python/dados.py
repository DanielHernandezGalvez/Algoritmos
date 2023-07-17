"""
Crea un programa que simule el lanzamiento de
dados y muestre los resultados.
"""

import random

def lanzamiento_dado():
    return random.randint(1, 6)

def simular_lanzamiento_dados(cantidad_lanzamientos):
    resultados = []
    for _ in range(cantidad_lanzamientos):
        resultado = lanzamiento_dado()
        resultados.append(resultado)
    return resultados

cantidad_lanzamientos = 5
resultados = simular_lanzamiento_dados(cantidad_lanzamientos)

print("Resultados de los lanzamientos de dados:")
for i, resultado in enumerate(resultados):
    print("Lanzamiento", i+1, ":", resultado)
