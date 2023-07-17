""" 
Escribe una función que convierta grados 
Celsius a Fahrenheit y viceversa 
"""

def celsius_a_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_a_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# Convertir 25 grados Celsius a Fahrenheit
grados_celsius = 25
fahrenheit = celsius_a_fahrenheit(grados_celsius)
print(grados_celsius, "grados Celsius son", fahrenheit, "grados Fahrenheit.")

# Convertir 77 grados Fahrenheit a Celsius
grados_fahrenheit = 77
celsius = fahrenheit_a_celsius(grados_fahrenheit)
print(grados_fahrenheit, "grados Fahrenheit son", celsius, "grados Celsius.")
