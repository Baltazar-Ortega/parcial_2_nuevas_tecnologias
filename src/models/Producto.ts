export class Producto {
  codigo: number;
  nombre: string;
  cantidad: number;
  precio: number;

  constructor(
    codigo: number,
    nombre: string,
    cantidad: number,
    precio: number
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}
