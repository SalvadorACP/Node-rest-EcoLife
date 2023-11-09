CREATE DATABASE IF NOT EXISTS restaurante;

USE restaurante;

Create Table productos_tipos (
    id_tipo INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_tipo)
)

CREATE TABLE menus (
    id_menu INTEGER NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    PRIMARY KEY (id_categoria)
)

CREATE TABLE categorias (
    id_categoria INTEGER NOT NULL AUTO_INCREMENT,
    fk_id_menu INTEGER NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_categoria),
    FOREIGN KEY (fk_id_menu) REFERENCES menus(id_menu)
)

CREATE TABLE productos (
    id_producto INTEGER NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(255) NOT NULL,
    precio DECIAML(5,2) NOT NULL,
    fk_id_tipo INTEGER NOT NULL,
    fk_id_categoria INTEGER NOT NULL,
    PRIMARY KEY (id_producto),
    FOREIGN KEY (fk_id_tipo) REFERENCES productos_tipos(id_tipo),
    FOREIGN KEY (fk_id_categoria) REFERENCES productos_tipos(id_categoria)
);

