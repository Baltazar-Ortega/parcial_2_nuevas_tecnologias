"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(dni, nombre, apellido_paterno, apellido_materno, salario) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido_paterno = apellido_paterno;
        this.apellido_materno = apellido_materno;
        this.salario = salario;
    }
}
exports.Empleado = Empleado;
