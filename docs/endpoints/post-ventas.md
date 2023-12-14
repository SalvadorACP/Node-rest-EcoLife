# Endpoint: `POST /ventas`

Permite añadir un nuevo registro en la tabla de ventas
## Ejemplo de Solicitud
```http
POST /Ventas
```

## Respuesta Exitosa (Código 200 OK)
```json
{
        "usuario_id": 3,
        "fecha": "2023-01-01 00:00:00.000"
    }
    
    {
    "status": 201,
    "message": "Created"
}
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