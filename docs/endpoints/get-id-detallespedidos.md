# Endpoint: `GET /temas/{id}/detallespedidos`

Permite obtener información sobre los detalles del pedido relacionados a un tema mediante su
identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /temas/detallespedidos
```

## Respuesta Exitosa (Código 200 OK)
```json
[
     {
        "id_detalle": 43,
        "id_pedido": null,
        "id_producto": 1,
        "cantidad": 2,
        "precio_unitario": "19.99"
    },
    {
        "id_detalle": 44,
        "id_pedido": null,
        "id_producto": 3,
        "cantidad": 1,
        "precio_unitario": "29.99"
    },
    {
        "id_detalle": 45,
        "id_pedido": null,
        "id_producto": 2,
        "cantidad": 1,
        "precio_unitario": "49.99"
    },
    {
        "id_detalle": 46,
        "id_pedido": null,
        "id_producto": 4,
        "cantidad": 1,
        "precio_unitario": "79.99"
    },
    {
        "id_detalle": 47,
        "id_pedido": null,
        "id_producto": 5,
        "cantidad": 3,
        "precio_unitario": "14.99"
    },
    {
        "id_detalle": 48,
        "id_pedido": null,
        "id_producto": 1,
        "cantidad": 2,
        "precio_unitario": "19.99"
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