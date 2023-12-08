# Endpoint: `GET /temas/{id}/usuarios`

Permite obtener información sobre los usuarios relacionados a un tema mediante su
identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /temas/usuarios
```

## Respuesta Exitosa (Código 200 OK)
```json
[
   {
        "id_usuario": 1,
        "nombre_usuario": "Usuario1",
        "correo_electronico": "usuario1@email.com",
        "contrasena": "contrasena1",
        "fecha_registro": "2023-12-07T20:31:31.000Z"
    },
    {
        "id_usuario": 2,
        "nombre_usuario": "Usuario2",
        "correo_electronico": "usuario2@email.com",
        "contrasena": "contrasena2",
        "fecha_registro": "2023-12-07T20:31:31.000Z"
    },
    {
        "id_usuario": 3,
        "nombre_usuario": "Usuario3",
        "correo_electronico": "usuario3@email.com",
        "contrasena": "contrasena3",
        "fecha_registro": "2023-12-07T20:31:31.000Z"
    },
    {
        "id_usuario": 4,
        "nombre_usuario": "Usuario4",
        "correo_electronico": "usuario4@email.com",
        "contrasena": "contrasena4",
        "fecha_registro": "2023-12-07T20:31:31.000Z"
    },
    {
        "id_usuario": 5,
        "nombre_usuario": "Usuario5",
        "correo_electronico": "usuario5@email.com",
        "contrasena": "contrasena5",
        "fecha_registro": "2023-12-07T20:31:31.000Z"
    },
    {
        "id_usuario": 6,
        "nombre_usuario": "Usuario1",
        "correo_electronico": "usuario1@email.com",
        "contrasena": "contrasena1",
        "fecha_registro": "2023-12-07T20:31:31.000Z"
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