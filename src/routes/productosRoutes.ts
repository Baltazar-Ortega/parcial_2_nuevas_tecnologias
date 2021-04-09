import { Router } from "express";

import productosController from "../controllers/productosController";

class ProductosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", productosController.getAll);
    this.router.get("/:codigo", productosController.getOne);
    this.router.post("/", productosController.create);
    this.router.put("/:codigo", productosController.update);
    this.router.delete("/delete-all", productosController.deleteAll);
    this.router.delete("/:codigo", productosController.delete);
  }
}

export default new ProductosRoutes().router;
