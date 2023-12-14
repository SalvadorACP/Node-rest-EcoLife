# Documentación de la API rest

Bienvenido a la documentación de la API. A continuación, se presenta una descripción general de este mismo, los requisitos, instrucciones de instalación y una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General del proyecto

EcoLife Market es una appweb que busca centralizar la venta de productos de bienestar, salud e higiene. pero que ademas busca que estos productos sean sostenibles e idealmente organicos.

### Descripción General de Endpoints

| Recurso                    | Descripción |
| -------------------------- | ----------- |
| `GET /usuarios`               | Recupera la lista de todos los usuarios. |
| [`POST /usuarios`]   | Añade un nuevo registro en la base de datos en la tabla de usuarios. |
| `GET /productos`             | Recupera la lista de todos los productos disponibles. |
| `POST /productos`        | Añade un nuevo registro en la base de datos en la tabla de productos |
| `GET /ventas`             | Recupera la lista de todos las ventas realizadas. |
| `POST /ventas`        | Añade un nuevo registro en la base de datos en la tabla de ventas. |
| `GET /detallesventas`             | Recupera la lista de todos los detalles de las ventas disponibles. |
| `POST /detallesventas`        | Añade un nuevo registro en la base de datos en la tabla de detalles_ventas. |

#### Requisitos

Para poder usuar este proyecto es necesario que se tenga descargado docker, pues la aplicacion funciona a traves del uso de contenedores de docker, por otra parte tambien es necesario utilizar un editor de codigo para poder visualizar el codigo fuente y por ultimo un manejador de base de datos, si quieres realizar pruebas de la API tambien será necesario que uses Postman.

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
consulta la [documentación detallada](./endpoints).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)