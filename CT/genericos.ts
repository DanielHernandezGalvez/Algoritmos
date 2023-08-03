// function log<T, V>(a: T, b: V): V {
//   console.log(a, b);
//   return b;
// }

// log<string, number>("dato", 69);
// log<string, boolean>("dato", true);
// log<string, string>("dato", "perro");

// log(1, 2);
// log("hola mundo", "strign");

async function fetchData(recurso: string): Promise<T> {
  const res = await fetch(`${recurso}`);
  return res.json;
}

type User = {
  id: string;
  name: string;
};

async function main() {
  const user = fetchData<User>("/usuarios");
  //   user.
}

type Computador = {
  encender: () => void;
  apagar: () => void;
};

class Programador<T> {
  computador: T;
  constructor(t: T) {
    this.computador = t;
  }
}

const programador = new Programador<Computador>({
  encender: () => {},
  apagar: () => {},
});
