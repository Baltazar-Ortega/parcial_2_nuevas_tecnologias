import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import empleadosRoutes from "./routes/empleadosRoutes";
import productosRoutes from "./routes/productosRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);

    this.app.use(morgan("dev"));
    this.app.use(cors());
    // La API retornará JSON
    this.app.use(express.json());
    // Recibir datos de formularios HTML por x-www-form-urlencoded
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use("/api/empleados", empleadosRoutes);
    this.app.use("/api/productos", productosRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
