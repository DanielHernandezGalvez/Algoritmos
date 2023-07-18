"use strict";
const fn = () => {
    let x = 2;
    if (x > 5) {
        return 7;
    }
    else {
        return 4;
    }
};
const fn2 = (edad) => {
    if (edad > 17)
        return "puedes ingresar";
    return "no puedes pasar";
};
function validaEdad(edad, msg = "default") {
    // quiero que me devuelva un string
    if (edad > 17) {
        return `puedes ingresar ${msg}`;
    }
    return "no puedes pasar";
}
validaEdad(18, "Hola soy Dani");
