export class Empleado {
  dni: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  salario: number;

  constructor(
    dni: number,
    nombre: string,
    apellido_paterno: string,
    apellido_materno: string,
    salario: number
  ) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido_paterno = apellido_paterno;
    this.apellido_materno = apellido_materno;
    this.salario = salario;
  }
}
