// Clases

class Personaje {
  id: number;
  name: string;
  nivel: number;
  private hp: number; // solo se accede desde aquí
  constructor(id: number, name: string, nivel: number, hp: number) {
    this.id = id;
    this.name = name;
    this.nivel = nivel;
    this.hp = hp;
  }

  // En clses no es necesario usar funcion
  subirNivel(): number {
    this.nivel = this.nivel++;
    return this.nivel;
  }

  cambiarHP(cantidad: number): number {
    this.hp = this.hp + cantidad;
    // no pasarse del máximo
    return this.hp;
  }
}

const personaje = new Personaje(1, "Charizard", 1, 100);
personaje.cambiarHP(-10);
console.log(personaje);

// if (personaje instanceof Personaje) {
//   // puede ser true o false
// }
