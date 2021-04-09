import { Request, Response } from "express";

// Mala implementacion
interface IController {
  getAll(req: Request, res: Response): Promise<void>;
  getOne(req: Request, res: Response): Promise<Response | undefined>;
  create(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
  deleteAll(req: Request, res: Response): Promise<void>;
}

// Codigo corregido siguiendo el principio de "Interface Segregation"
// No todos los controladores deberian implementar el metodo "deleteAll"
// Por ejemplo, EmpleadosController no debería implementarlo (por seguridad)
export interface IControllerEstandar {
  getAll(req: Request, res: Response): Promise<void>;
  getOne(req: Request, res: Response): Promise<Response | undefined>;
  create(req: Request, res: Response): Promise<void>;
  update(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
}

export interface IControllerAdministrador {
  deleteAll(req: Request, res: Response): Promise<void>;
}
