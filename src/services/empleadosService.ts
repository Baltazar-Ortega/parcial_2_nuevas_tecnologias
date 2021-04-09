import pool from "../database";
import { IEmpleadoBody } from "../interfaces/IEmpleadoBody";
import { Empleado } from "../models/empleado";

class EmpleadosService {
  public async getAll() {
    const empleados: Empleado[] = await pool.query("SELECT * FROM empleados");
    return empleados;
  }

  public async getOne(dni: number) {
    const empleados: Empleado[] = await pool.query(
      "SELECT * FROM empleados WHERE dni = ?",
      [dni]
    );
    return empleados;
  }

  public async create(empleadoBody: IEmpleadoBody) {
    await pool.query("INSERT INTO empleados SET ?", [empleadoBody]);
  }

  public async update(dni: number, empleadoBody: IEmpleadoBody) {
    await pool.query("UPDATE empleados SET ? WHERE dni = ?", [
      empleadoBody,
      dni,
    ]);
  }

  public async delete(dni: number) {
    await pool.query("DELETE FROM empleados WHERE dni = ?", [dni]);
  }
}

export default new EmpleadosService();
