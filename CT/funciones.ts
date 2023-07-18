const fn: () => number = () => {
  let x = 2;
  if (x > 5) {
    return 7;
  } else {
    return 4;
  }
};

const fn2: (a: number) => string = (edad: number) => {
  if (edad > 17) return "puedes ingresar";
  return "no puedes pasar";
};

function validaEdad(edad: number, msg = "default"): string {
  // quiero que me devuelva un string
  if (edad > 17) {
    return `puedes ingresar ${msg}`;
  }
  return "no puedes pasar";
}

// console.log(validaEdad(18, "Hola soy Dani"));

function ErrorUsuario(): never {
  throw new Error("Error de usuario");
}
