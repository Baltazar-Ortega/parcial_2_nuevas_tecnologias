"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = __importDefault(require("../controllers/productosController"));
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", productosController_1.default.getAll);
        this.router.get("/:codigo", productosController_1.default.getOne);
        this.router.post("/", productosController_1.default.create);
        this.router.put("/:codigo", productosController_1.default.update);
        this.router.delete("/delete-all", productosController_1.default.deleteAll);
        this.router.delete("/:codigo", productosController_1.default.delete);
    }
}
exports.default = new ProductosRoutes().router;
