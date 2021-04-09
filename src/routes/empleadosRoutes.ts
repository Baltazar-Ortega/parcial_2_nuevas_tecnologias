import { Router } from "express";

import empleadosController from "../controllers/empleadosController";

class EmpleadosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", empleadosController.getAll);
    this.router.get("/:dni", empleadosController.getOne);
    this.router.post("/", empleadosController.create);
    this.router.put("/:dni", empleadosController.update);
    this.router.delete("/:dni", empleadosController.delete);
  }
}

export default new EmpleadosRoutes().router;
