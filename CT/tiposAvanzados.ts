// UnionType

let puntaje: number | string = 98;

puntaje = "hola mundo";

type Animal = {
  id: number;
  estado: string;
};

type Usuario = {
  id: number;
  name: string;
};

let animal: Animal | Usuario = { id: 1, estado: "", name: "" };
