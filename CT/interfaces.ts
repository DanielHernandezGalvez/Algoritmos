interface Animal {
  name: string;
  caminar(): void;
  onomatopeya(): string;
}

class Caballo implements Animal {
  name: string = "Rocinante";

  caminar() {
    console.log("Caminando");
  }

  onomatopeya() {
    return "Relincho";
  }
}

// index Signatures

class DiccionarioUsuarios {
  [id: string]: string;
}

let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios["1a"] = "usuario 1";
diccionarioUsuarios["a1"] = "usuario 2";

console.log(diccionarioUsuarios);
