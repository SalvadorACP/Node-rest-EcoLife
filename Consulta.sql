
USE lorenzzositio;

CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
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
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   	FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Detalles_Pedido (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_producto INT,
    cantidad INT,
    precio_unitario DECIMAL(10, 2),
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

INSERT INTO Usuarios (nombre_usuario, correo_electronico, contrasena)
VALUES
    ('Usuario1', 'usuario1@email.com', 'contrasena1'),
    ('Usuario2', 'usuario2@email.com', 'contrasena2'),
    ('Usuario3', 'usuario3@email.com', 'contrasena3'),
    ('Usuario4', 'usuario4@email.com', 'contrasena4'),
    ('Usuario5', 'usuario5@email.com', 'contrasena5');

INSERT INTO Productos (nombre_producto, descripcion, precio, categoria, talla, marca, imagen_url, disponible)
VALUES
    ('Camiseta Casual', 'Camiseta de algodón para uso diario', 19.99, 'Ropa', 'M', 'MarcaA', 'url_imagen1.jpg', true),
    ('Zapatos Deportivos', 'Zapatos para correr con suela antideslizante', 49.99, 'Calzado', '9', 'MarcaB', 'url_imagen2.jpg', true),
    ('Bolso Elegante', 'Bolso de cuero con diseño elegante', 29.99, 'Accesorios', NULL, 'MarcaC', 'url_imagen3.jpg', true),
    ('Vestido de Noche', 'Vestido largo para ocasiones especiales', 79.99, 'Ropa', 'L', 'MarcaD', 'url_imagen4.jpg', true),
    ('Gafas de Sol', 'Gafas de sol con protección UV', 14.99, 'Accesorios', NULL, 'MarcaE', 'url_imagen5.jpg', true);*/

INSERT INTO Pedidos (id_usuario) VALUES (1);
INSERT INTO Pedidos (id_usuario) VALUES (2);
INSERT INTO Pedidos (id_usuario) VALUES (3);
INSERT INTO Pedidos (id_usuario) VALUES (4);
INSERT INTO Pedidos (id_usuario) VALUES (5);

INSERT INTO Detalles_Pedido (id_pedido, id_producto, cantidad, precio_unitario)
VALUES
    ((id_pedido), 1, 2, 19.99),
    ((id_pedido), 3, 1, 29.99),
    ((id_pedido), 2, 1, 49.99),
    ((id_pedido), 4, 1, 79.99),
    ((id_pedido), 5, 3, 14.99);