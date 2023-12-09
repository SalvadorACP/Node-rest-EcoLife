CREATE DATABASE IF NOT EXISTS EcoLife;

USE EcoLife;

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    contraseña VARCHAR(50)
);

-- Tabla de Productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    precio DECIMAL(10, 2)
);

-- Tabla de Ventas
CREATE TABLE IF NOT EXISTS ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    fecha DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla de Detalle de Ventas
CREATE TABLE IF NOT EXISTS detalle_ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venta_id INT,
    producto_id INT,
    cantidad INT,
    FOREIGN KEY (venta_id) REFERENCES ventas(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Inserts de ejemplo

-- Insertar usuarios
INSERT INTO usuarios (nombre, email, contraseña) VALUES
    ('Usuario1', 'usuario1@email.com', 'contraseña1'),
    ('Usuario2', 'usuario2@email.com', 'contraseña2');

-- Insertar productos
INSERT INTO productos (nombre, precio) VALUES
    ('Producto1', 10.99),
    ('Producto2', 24.50);

-- Insertar ventas
INSERT INTO ventas (usuario_id, fecha) VALUES
    (1, '2023-01-01'),
    (2, '2023-01-02');

-- Insertar detalle de ventas
INSERT INTO detalle_ventas (venta_id, producto_id, cantidad) VALUES
    (1, 1, 2),
    (2, 2, 1);
