"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const empleadosRoutes_1 = __importDefault(require("./routes/empleadosRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        // La API retornará JSON
        this.app.use(express_1.default.json());
        // Recibir datos de formularios HTML por x-www-form-urlencoded
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/api/empleados", empleadosRoutes_1.default);
        this.app.use("/api/productos", productosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
