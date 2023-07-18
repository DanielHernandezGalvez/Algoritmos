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

function sumaDos(n: number | string): number {
  if (typeof n === "number") {
    return n + 2;
  }
  return parseInt(n) + 2;
}

// console.log(sumaDos("2"));

type Audit = {
  created_at: string;
  modified_at: string;
};

type Product = {
  name: string;
};

const product: Audit & Product = {
  created_at: "",
  modified_at: "",
  name: "",
};

// Literales
type Fibo = 0 | 1 | 2 | 3 | 5;
const nDFibo: Fibo = 1;
