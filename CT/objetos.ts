const objeto: {
  readonly id: number; // eso no pude ser reasignado
  nombre?: string; // ese ? la hace opcional
} = { id: 1, nombre: "" };

// objeto.id = 23;
