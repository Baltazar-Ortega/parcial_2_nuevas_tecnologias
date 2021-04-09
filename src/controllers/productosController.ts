import { Request, Response } from "express";
import {
  IControllerAdministrador,
  IControllerEstandar,
} from "../interfaces/IController";

import { Producto } from "../models/Producto";

import productosService from "../services/productosService";

class ProductosController
  implements IControllerEstandar, IControllerAdministrador {
  public async getAll(req: Request, res: Response) {
    const productos: Producto[] = await productosService.getAll();
    res.json(productos);
  }

  public async getOne(req: Request, res: Response) {
    const { codigo } = req.params;
    const productos: Producto[] = await productosService.getOne(codigo);
    if (productos.length > 0) {
      return res.json(productos[0]);
    }
    res.status(404).json({ text: "El producto no existe" });
  }

  public async create(req: Request, res: Response) {
    await productosService.create(req.body);
    res.json({ message: "Producto guardado" });
  }

  public async update(req: Request, res: Response) {
    const { codigo } = req.params;
    await productosService.update(codigo, req.body);
    res.json({ message: "El producto fue actualizado" });
  }

  public async delete(req: Request, res: Response) {
    const { codigo } = req.params;
    await productosService.delete(codigo);
    res.json({ message: "El producto fue eliminado" });
  }

  public async deleteAll(req: Request, res: Response) {
    await productosService.deleteAll();
    res.json({ message: "Se han borrado todos los productos" });
  }
}

export default new ProductosController();
