const objeto: {
  readonly id: number; // eso no pude ser reasignado
  nombre?: string; // ese ? la hace opcional
} = { id: 1, nombre: "" };

// objeto.id = 23;
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};
type Persona = {
  readonly id: number;
  nombre: string;
  direccion: Direccion;
};

const objetoDos: Persona = {
  id: 1,
  nombre: "Samantha",
  direccion: {
    numero: 2222,
    calle: "colinas",
    pais: "Samuelandia",
  },
};

const arr: Persona[] = [];
