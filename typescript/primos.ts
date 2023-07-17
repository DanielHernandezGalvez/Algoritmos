/**
 * Crea una función que determine si un número
 * dado es primo o no.
 */

function esPrimo(numero: number): boolean {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

const numero: number = 17;
const primo: boolean = esPrimo(numero);
console.log(esPrimo); // Resultado: true
