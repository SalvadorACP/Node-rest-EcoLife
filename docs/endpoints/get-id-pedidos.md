# Endpoint: `GET /temas/{id}/pedidos`

Permite obtener información sobre los pedidos relacionados a un tema mediante su
identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /temas/pedidos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
   {
        "id_pedido": 2,
        "id_usuario": 1,
        "fecha_pedido": "2023-12-07T20:32:12.000Z"
    },
    {
        "id_pedido": 3,
        "id_usuario": 2,
        "fecha_pedido": "2023-12-07T20:32:12.000Z"
    },
    {
        "id_pedido": 4,
        "id_usuario": 3,
        "fecha_pedido": "2023-12-07T20:32:12.000Z"
    },
    {
        "id_pedido": 5,
        "id_usuario": 4,
        "fecha_pedido": "2023-12-07T20:32:12.000Z"
    },
    {
        "id_pedido": 6,
        "id_usuario": 5,
        "fecha_pedido": "2023-12-07T20:32:12.000Z"
    },
    {
        "id_pedido": 7,
        "id_usuario": 1,
        "fecha_pedido": "2023-12-07T20:39:33.000Z"
    },
    {
        "id_pedido": 8,
        "id_usuario": 2,
        "fecha_pedido": "2023-12-07T20:39:33.000Z"
    },
    {
        "id_pedido": 9,
        "id_usuario": 3,
        "fecha_pedido": "2023-12-07T20:39:33.000Z"
    },
    {
        "id_pedido": 10,
        "id_usuario": 4,
        "fecha_pedido": "2023-12-07T20:39:33.000Z"
    },
    {
        "id_pedido": 11,
        "id_usuario": 5,
        "fecha_pedido": "2023-12-07T20:39:33.000Z"
    },
    {
        "id_pedido": 12,
        "id_usuario": 1,
        "fecha_pedido": "2023-12-07T20:32:12.000Z"
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