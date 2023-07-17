'''
Crea funciones para calcular el área de diferentes
figuras geométricas, como un cuadrado, un triángulo 
o un círculo.
'''

def area_cuadrado(lado):
    return lado ** 2

lado = 5
area = area_cuadrado(lado)
print("El área del cuadrado es:", area)


def area_triangulo(base, altura):
    return (base * altura) / 2

base = 6
altura = 4
area = area_triangulo(base, altura)
print("El área del triángulo es:", area)

import math

def area_circulo(radio):
    return math.pi * radio ** 2

radio = 3
area = area_circulo(radio)
print("El área del círculo es:", area)
