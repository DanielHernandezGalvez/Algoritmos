/**
 * Producto
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sl
 * sku
 *
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date, // no pueden ser accedidas desde afuera
    protected created_by: number // solo desde aqui y donde se hereden
  ) {}

  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDesc() {
    return this.name + " " + this.desc;
  }
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  override get fullDesc() {
    return "Producto: " + super.fullDesc;
  }
}

class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  override get fullDesc() {
    return "Categoría: " + super.fullDesc;
  }
}

let producto1 = new Producto(
  100,
  1,
  "tablet",
  "esta es una tablet",
  new Date(),
  1
);

let categoria = new Categoria("celulares", "", new Date(), 1);
categoria.agregarProducto(producto1);
console.log(producto1.fullDesc, categoria.fullDesc);
