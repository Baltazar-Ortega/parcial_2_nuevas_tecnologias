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
const database_1 = __importDefault(require("../database"));
class EmpleadosService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const empleados = yield database_1.default.query("SELECT * FROM empleados");
            return empleados;
        });
    }
    getOne(dni) {
        return __awaiter(this, void 0, void 0, function* () {
            const empleados = yield database_1.default.query("SELECT * FROM empleados WHERE dni = ?", [dni]);
            return empleados;
        });
    }
    create(empleadoBody) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO empleados SET ?", [empleadoBody]);
        });
    }
    update(dni, empleadoBody) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("UPDATE empleados SET ? WHERE dni = ?", [
                empleadoBody,
                dni,
            ]);
        });
    }
    delete(dni) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("DELETE FROM empleados WHERE dni = ?", [dni]);
        });
    }
}
exports.default = new EmpleadosService();
