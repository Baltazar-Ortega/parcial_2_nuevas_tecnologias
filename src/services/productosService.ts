import pool from "../database";
import { IProductoBody } from "../interfaces/IProductoBody";
import { Producto } from "../models/Producto";

class ProductosService {
  public async getAll() {
    const productos: Producto[] = await pool.query("SELECT * FROM productos");
    return productos;
  }

  public async getOne(codigo: number) {
    const productos: Producto[] = await pool.query(
      "SELECT * FROM productos WHERE codigo = ?",
      [codigo]
    );
    return productos;
  }

  public async create(productoBody: IProductoBody) {
    await pool.query("INSERT INTO productos SET ?", [productoBody]);
  }

  public async update(codigo: number, productoBody: IProductoBody) {
    await pool.query("UPDATE productos SET ? WHERE codigo = ?", [
      productoBody,
      codigo,
    ]);
  }

  public async delete(codigo: number) {
    await pool.query("DELETE FROM productos WHERE codigo = ?", [codigo]);
  }

  public async deleteAll() {
    await pool.query("DELETE FROM productos");
  }
}

export default new ProductosService();
