CREATE DATABASE IF NOT EXISTS restaurante;

USE restaurante;

-- Correcciones en las definiciones de las tablas
/*CREATE TABLE productos_tipos (
    id_tipo         INT             NOT NULL        AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id_tipo)
);

CREATE TABLE menus (
    id_menu         INT             NOT NULL        AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    hora_inicio     TIME            NOT NULL,
    hora_fin        TIME            NOT NULL,
    PRIMARY KEY     (id_menu)
);

CREATE TABLE categorias (
    id_categoria    INT             NOT NULL        AUTO_INCREMENT,
    id_menu         INT             NOT NULL,
    nombre          VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id_categoria),
    FOREIGN KEY     (id_menu)       REFERENCES menus(id_menu)
);

CREATE TABLE productos(
    id_producto     INT             NOT NULL        AUTO_INCREMENT,
    descripcion     VARCHAR(255)    NOT NULL,
    precio          DECIMAL(5, 2)   NOT NULL,
    fk_id_tipo      INT             NOT NULL,
    fk_id_categoria INT             NOT NULL,
    PRIMARY KEY     (id_producto),
    FOREIGN KEY     (fk_id_tipo)    REFERENCES productos_tipos(id_tipo),
    FOREIGN KEY     (fk_id_categoria) REFERENCES categorias(id_categoria)
);*/

-- Inserciones para la tabla productos_tipos
INSERT INTO productos_tipos (nombre) VALUES
('Entrada'),
('Plato principal'),
('Postre'),
('Bebida'),
('Acompañamiento');

-- Inserciones para la tabla menus
INSERT INTO menus (nombre, hora_inicio, hora_fin) VALUES
('Menú del día', '12:00:00', '15:00:00'),
('Menú especial', '18:00:00', '22:00:00'),
('Menú infantil', '11:30:00', '14:30:00'),
('Menú ejecutivo', '12:30:00', '14:30:00'),
('Menú nocturno', '20:00:00', '23:00:00');

-- Inserciones para la tabla categorias
INSERT INTO categorias (id_menu, nombre) VALUES
(1, 'Entradas'),
(1, 'Platos principales'),
(2, 'Especialidades'),
(3, 'Infantil'),
(4, 'Ejecutivo');

-- Inserciones para la tabla productos
INSERT INTO productos (descripcion, precio, fk_id_tipo, fk_id_categoria) VALUES
('Ensalada César', 8.99, 1, 1),
('Lomo Saltado', 15.50, 2, 2),
('Tiramisú', 6.99, 3, 3),
('Refresco de cola', 2.50, 4, 4),
('Papas fritas', 4.99, 5, 5);

-- Puedes agregar más filas según sea necesario
