"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleadosController_1 = __importDefault(require("../controllers/empleadosController"));
class EmpleadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", empleadosController_1.default.getAll);
        this.router.get("/:dni", empleadosController_1.default.getOne);
        this.router.post("/", empleadosController_1.default.create);
        this.router.put("/:dni", empleadosController_1.default.update);
        this.router.delete("/:dni", empleadosController_1.default.delete);
    }
}
exports.default = new EmpleadosRoutes().router;
