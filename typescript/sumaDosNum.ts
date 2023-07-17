/**
 * implementa una función que encuentre dos números
 * en una matriz cuya suma sea igual a un valor
 * objetivo
 */

function sumaElementos(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

const numeros: number[] = [1, 2, 3, 4, 5];
const sumaTotal: number = sumaElementos(numeros);
console.log(sumaTotal); // Resultado: 15
