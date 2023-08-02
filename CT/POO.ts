// Clases

class Personaje {
  // readonly id: number; // no se puede modificar esta propiedad
  // name: string;
  // nivel: number;
  // private _hp: number; // solo se accede desde aquí
  profesion?: string; // lo hace opcional para agregar despues
  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {
    // this.id = id;
    // this.name = name;
    // this.nivel = nivel;
    // this._hp = _hp;
  }

  // En clses no es necesario usar funcion
  subirNivel(): number {
    this.nivel = this.nivel++;
    return this.nivel;
  }

  cambiarHP(cantidad: number): number {
    this._hp = this._hp + cantidad;
    // no pasarse del máximo
    return this._hp;
  }
}

const personaje = new Personaje(1, "Charizard", 1, 100);
personaje.cambiarHP(-10);
console.log(personaje);

// if (personaje instanceof Personaje) {
//   // puede ser true o false
// }
