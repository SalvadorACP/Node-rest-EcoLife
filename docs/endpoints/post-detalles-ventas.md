# Endpoint: `POST /detallesventas`

Permite añadir un nuevo registro en la tabla de usuarios
## Ejemplo de Solicitud
```http
POST /detallesventas
```

## Respuesta Exitosa (Código 200 OK)
```json
{
        "id": 4,
        "venta_id": 1,
        "producto_id": 1,
        "cantidad": 2
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