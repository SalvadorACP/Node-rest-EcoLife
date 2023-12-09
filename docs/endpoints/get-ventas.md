# Endpoint: `GET /ventas`

Permite obtener información sobre las ventas.
## Ejemplo de Solicitud
```http
GET /pedidos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "usuario_id": 1,
        "fecha": "2023-01-01T00:00:00.000Z"
    },
    {
        "id": 2,
        "usuario_id": 2,
        "fecha": "2023-01-02T00:00:00.000Z"
    },
    {
        "id": 3,
        "usuario_id": 3,
        "fecha": "2023-01-01T00:00:00.000Z"
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