/*
 *  Implementa una función que calcule el factorial
 *  de un número dado
 */

function factorial(numero: number): number {
  if (numero <= 1) {
    return 1;
  }

  return numero * factorial(numero - 1);
}

const num: number = 2;
const factorialResultado: number = factorial(num);
console.log(factorialResultado); // Resultado: 120
