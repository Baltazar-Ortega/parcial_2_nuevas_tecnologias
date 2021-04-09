import { Request, Response } from "express"; // Pedimos estos tipos de datos
import { IControllerEstandar } from "../interfaces/IController";

import empleadosService from "../services/empleadosService";

class EmpleadosController implements IControllerEstandar {
  public async getAll(req: Request, res: Response) {
    const empleados = await empleadosService.getAll();
    res.json(empleados);
  }

  public async getOne(req: Request, res: Response) {
    const { dni } = req.params;
    const empleados = await empleadosService.getOne(dni);
    if (empleados.length > 0) {
      return res.json(empleados[0]);
    }
    res.status(404).json({ text: "El empleado no existe" });
  }

  public async create(req: Request, res: Response) {
    await empleadosService.create(req.body);

    res.json({ message: "Empleado guardado" });
  }

  public async update(req: Request, res: Response) {
    const { dni } = req.params;
    await empleadosService.update(dni, req.body);
    res.json({ message: "El empleado fue actualizado" });
  }

  public async delete(req: Request, res: Response) {
    const { dni } = req.params;
    await empleadosService.delete(dni);
    res.json({ message: "El empleado fue eliminado" });
  }
}

export default new EmpleadosController();
