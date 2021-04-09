CREATE DATABASE examen_parcial_2;
USE examen_parcial_2;

CREATE TABLE empleados(
    dni INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    apellido_paterno VARCHAR(180),
    apellido_materno VARCHAR(180),
    salario INT(11)
);

DESCRIBE empleados;

/* Crear tabla especialidad */

INSERT INTO empleados VALUES (DEFAULT, 'Maria', 'Lopez', 'Aguilar', 15000);
INSERT INTO empleados VALUES (DEFAULT, 'Armando', 'Martinez', 'Najera', 20500);
INSERT INTO empleados VALUES (DEFAULT, 'Sofia', 'Villanueva', 'Garcia', 10800);

CREATE TABLE productos(
    codigo INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    cantidad INT,
    precio FLOAT
);

INSERT INTO productos VALUES (DEFAULT, 'Carro de juguete', 50, 49.99);
INSERT INTO productos VALUES (DEFAULT, 'Tratamiento para pestañas', 10, 249.99);
INSERT INTO productos VALUES (DEFAULT, 'Television LG 50 pulgadas', 8, 29999.99);

DESCRIBE productos;



