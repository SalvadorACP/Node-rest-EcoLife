# Endpoint: `GET /detallesventas`

Permite obtener información sobre los detalles de las ventas.

## Parámetros de URL
- sin parametros

## Ejemplo de Solicitud
```http
GET /detallesventas
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "venta_id": 1,
        "producto_id": 1,
        "cantidad": 2
    },
    {
        "id": 2,
        "venta_id": 2,
        "producto_id": 2,
        "cantidad": 1
    },
    {
        "id": 3,
        "venta_id": 3,
        "producto_id": 4,
        "cantidad": 3
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