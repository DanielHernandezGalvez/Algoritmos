/**
 *  Implementa una función que verifique si una
 *  cadena de texto es un palíndromo
 */

function palindromo(texto: string): boolean {
  const textoSinEspacios = texto.replace(/\s/g, "").toLowerCase();
  const textoReverso = textoSinEspacios.split("").reverse().join("");
  return textoSinEspacios === textoReverso;
}

const palabra: string = "radar";
const esPalindromo: boolean = palindromo(palabra);
console.log(esPalindromo); // Resultado: true
