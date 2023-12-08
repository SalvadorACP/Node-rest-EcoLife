# Documentación de la API rest

Bienvenido a la documentación de la API. A continuación, se presenta una descripción general de este mismo, los requisitos, instrucciones de instalación y una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General del proyecto

Lorenzzo es un sitio web dedicado a la venta de ropa, calzado y accesorios y esto es basicamente la conexión con la base de datos y el buen funcionamiento de un servidor web

### Descripción General de Endpoints

| Recurso                    | Descripción |
| -------------------------- | ----------- |
| `GET /temas`               | Recupera la lista de todos los temas disponibles. |
| [`GET /temas/{id}/usuarios`](./endpoints/get-id-usuarios.md)   | Obtiene la lista de usuarios asociados a un tema específico. |
| `GET /usuarios`              | Recupera la lista de todos los usuarios disponibles. |
| `GET /usuarios/{id}/` | Obtiene la lista de un usuario específico. |
| `GET /productos`             | Recupera la lista de todos los productos disponibles. |
| `GET /productos/{id}`        | Obtiene información detallada sobre un producto específico. |
| `GET /pedidos`             | Recupera la lista de todos los pedidos disponibles. |
| `GET /pedidos/{id}`        | Obtiene información detallada sobre un pedido específico. |
| `GET /productos`             | Recupera la lista de todos los detalles de un pedido disponibles. |
| `GET /productos/{id}`        | Obtiene información detallada sobre los detalles de un pedido específico. |

#### Requisitos

Para correr este proyecto se necesita visual studio code, docker desktop (aqui es donde se crea la magia, o sea, el contenedor de datos), tambien se necesita un sistema gestor de base de datos que en este caso optamos por utilizar HeidiSQL, y de igual forma para hacer consultas y ejecutar métodos se necesita Postman.

#### Instrucciones

# API RESTful con Node.js

Proyecto de demostración para clases de desarrollo de APIs utilizando Node.js,
con implementación en contenedores de Docker.

## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone *URL*
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd node-restful
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3000`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)