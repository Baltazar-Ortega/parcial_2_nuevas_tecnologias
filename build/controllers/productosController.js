"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productosService_1 = __importDefault(require("../services/productosService"));
class ProductosController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield productosService_1.default.getAll();
            res.json(productos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            const productos = yield productosService_1.default.getOne(codigo);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            res.status(404).json({ text: "El producto no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield productosService_1.default.create(req.body);
            res.json({ message: "Producto guardado" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield productosService_1.default.update(codigo, req.body);
            res.json({ message: "El producto fue actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield productosService_1.default.delete(codigo);
            res.json({ message: "El producto fue eliminado" });
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield productosService_1.default.deleteAll();
            res.json({ message: "Se han borrado todos los productos" });
        });
    }
}
exports.default = new ProductosController();
