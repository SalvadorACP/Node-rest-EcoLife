# Endpoint: `GET /productos`

Permite obtener información sobre los productos.

## Ejemplo de Solicitud
```http
GET /productos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre": "Producto1",
        "precio": "10.99"
    },
    {
        "id": 2,
        "nombre": "Producto2",
        "precio": "24.50"
    },
    {
        "id": 3,
        "nombre": "Producto1",
        "precio": "10.99"
    },
    {
        "id": 4,
        "nombre": "gel",
        "precio": "30.99"
    },
    {
        "id": 5,
        "nombre": "agua",
        "precio": "13.99"
    },
    {
        "id": 6,
        "nombre": "jabon",
        "precio": "17.99"
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

- Asegurate de escribir correctamente la ruta