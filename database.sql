CREATE DATABASE IF NOT EXISTS lorenzzositio;

USE lorenzzositio;

CREATE TABLE Usuarios (
    id_usuario INT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Productos (
    id_producto INT PRIMARY KEY,
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    talla VARCHAR(10),
    marca VARCHAR(50),
    imagen_url VARCHAR(255),
    disponible BOOLEAN DEFAULT TRUE
);

CREATE TABLE Pedidos (
    id_pedido INT PRIMARY KEY,
    id_usuario INT,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Detalles_Pedido (
    id_detalle INT PRIMARY KEY,
    id_pedido INT,
    id_producto INT,
    cantidad INT,
    precio_unitario DECIMAL(10, 2),
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);
