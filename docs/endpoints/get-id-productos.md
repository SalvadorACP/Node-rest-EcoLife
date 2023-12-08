# Endpoint: `GET /temas/{id}/productos`

Permite obtener información sobre los productos relacionados a un tema mediante su
identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /temas/productos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id_producto": 1,
        "nombre_producto": "Camiseta Casual",
        "descripcion": "Camiseta de algodón para uso diario",
        "precio": "19.99",
        "categoria": "Ropa",
        "talla": "M",
        "marca": "MarcaA",
        "imagen_url": "url_imagen1.jpg",
        "disponible": 1
    },
    {
        "id_producto": 2,
        "nombre_producto": "Zapatos Deportivos",
        "descripcion": "Zapatos para correr con suela antideslizante",
        "precio": "49.99",
        "categoria": "Calzado",
        "talla": "9",
        "marca": "MarcaB",
        "imagen_url": "url_imagen2.jpg",
        "disponible": 1
    },
    {
        "id_producto": 3,
        "nombre_producto": "Bolso Elegante",
        "descripcion": "Bolso de cuero con diseño elegante",
        "precio": "29.99",
        "categoria": "Accesorios",
        "talla": null,
        "marca": "MarcaC",
        "imagen_url": "url_imagen3.jpg",
        "disponible": 1
    },
    {
        "id_producto": 4,
        "nombre_producto": "Vestido de Noche",
        "descripcion": "Vestido largo para ocasiones especiales",
        "precio": "79.99",
        "categoria": "Ropa",
        "talla": "L",
        "marca": "MarcaD",
        "imagen_url": "url_imagen4.jpg",
        "disponible": 1
    },
    {
        "id_producto": 5,
        "nombre_producto": "Gafas de Sol",
        "descripcion": "Gafas de sol con protección UV",
        "precio": "14.99",
        "categoria": "Accesorios",
        "talla": null,
        "marca": "MarcaE",
        "imagen_url": "url_imagen5.jpg",
        "disponible": 1
    },
    {
        "id_producto": 6,
        "nombre_producto": "Camiseta Casual",
        "descripcion": "Camiseta de licra",
        "precio": "19.99",
        "categoria": "Ropa",
        "talla": "M",
        "marca": "MarcaA",
        "imagen_url": "url_imagen1.jpg",
        "disponible": 1
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
  }
  ```

- Código 400 Bad request:
  ```json
  {
    "errno": 400,
    "error": "bad_request",
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información correcta