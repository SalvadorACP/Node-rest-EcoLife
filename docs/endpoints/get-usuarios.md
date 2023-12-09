# Endpoint: `GET /usuarios`

Permite obtener información sobre los usuarios.

## Ejemplo de Solicitud
```http
GET /usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
    {
        "id": 1,
        "nombre": "Usuario1",
        "email": "usuario1@email.com",
        "contraseña": "contraseña1"
    },
    {
        "id": 2,
        "nombre": "Usuario2",
        "email": "usuario2@email.com",
        "contraseña": "contraseña2"
    },
    {
        "id": 3,
        "nombre": "Salvador",
        "email": "SACP@email.com",
        "contraseña": "contraseña311"
    },
    {
        "id": 4,
        "nombre": "Angelica",
        "email": "angelica@email.com",
        "contraseña": "hola12345"
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