# Customer Orders API

¡Bienvenido! Este proyecto es una API para la gestión de clientes, direcciones y órdenes, desarrollada como prueba técnica. Permite registrar clientes, gestionar direcciones, crear órdenes y consultar información relevante.

## Tecnologías

- **Node.js** `v22.16.0`
- **NestJS** (estructura modular)
- **TypeORM** (ORM para base de datos relacional)
- **MySql**

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Crea un archivo `.env` en la raíz del proyecto. Puedes guiarte por el archivo `.env.example`.  
   **Importante:** Usa los valores de tu base de datos para la conexión.

## Ejecución en local

```bash
npm run start:dev
```

## Estructura del Proyecto

- **src/features/customers/**: Gestión de clientes
- **src/features/addresses/**: Gestión de direcciones
- **src/features/orders/**: Gestión de órdenes

## Endpoints Principales

### Clientes

- **Crear cliente**
  - `POST /clientes`
  - **Body:**
    ```json
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "edad": 30,
      "email": "juan@example.com"
    }
    ```
  - **Response:** Cliente creado

- **Obtener todos los clientes**
  - `GET /clientes`
  - **Response:**  
    ```json
    [
      {
        "id": 1,
        "nombre": "Juan",
        "apellido": "Pérez",
        "edad": 30,
        "email": "juan@example.com",
        "fecha_registro": "2024-01-01T06:00:00.000Z"
      },
      {
        "id": 2,
        "nombre": "María",
        "apellido": "Gómez",
        "edad": 25,
        "email": "maria@example.com",
        "fecha_registro": "2024-01-02T06:00:00.000Z"
      }
    ]
    ```

- **Obtener cliente por ID**
  - `GET /clientes/1`
  - **Response:**  
    ```json
      {
        "id": 1,
        "nombre": "Juan",
        "apellido": "Pérez",
        "edad": 30,
        "email": "juan@example.com",
        "fecha_registro": "2024-01-01T06:00:00.000Z",
        "cliente_id": 1,
        "calle": "Calle Principal 12345",
        "ciudad": "campeche",
        "codigo_postal": "97203"
      }
    ```

### Direcciones

- **Actualizar dirección**
  - `POST /direcciones?id=3`
  - Al consumir este endpoint, se actualizará la dirección pasando el id por Query param y la información por body.
  - **Body:**
    ```json
      {
          "calle": "francisco de montejo",
          "ciudad": "yucatan",
          "codigo_postal": "97203"
      }
    ```
  - **Response:** 
   ```json
      {
        "message": "Dirección actualizada correctamente",
        "data": {
          "id": 1,
          "cliente_id": 1,
          "calle": "ejemplo",
          "ciudad": "merida",
          "codigo_postal": "97203"
        }
      }
    ```

- **Obtener todas las direcciones**
  - `GET /direcciones`
  - **Response:**  
    ```json
    [
      {
        "id": 1,
        "cliente_id": 1,
        "calle": "Calle Principal 12345",
        "ciudad": "campeche",
        "codigo_postal": "97203"
      },
      {
        "id": 2,
        "cliente_id": 2,
        "calle": "Avenida Central 456",
        "ciudad": "Ciudad B",
        "codigo_postal": "23456"
      }
    ]
    ```

### Órdenes

- **Crear orden**
  - `POST /ordenes`
  - **Body:**
    ```json
      {
          "cliente_id": 1,
          "items" : [
              {
                  "producto": "Producto Laptop",
                  "cantidad": 2
              },
              {
                  "producto": "Producto Notebook",
                  "cantidad": 2
              },
              {
                  "producto": "Producto Xbox",
                  "cantidad": 2
              }
          ]
      }
    ```
  - **Response:**  
  - El requerimiento indica que el folio deberá tener el prefigo TEST seguido de 6 alfanumericos (es decir, letras o números)
    ```json
    {
      "folio": "TESTABC123"
    }
    ```

- **Obtener órdenes por cliente**
  - `GET /ordenes/3`
  - **Response:**  
    ```json
      [
        {
          "id": 4,
          "cliente_id": 4,
          "producto": "Producto D",
          "cantidad": 4,
          "fecha_pedido": "2024-01-04T06:00:00.000Z",
          "folio": "JKL012"
        }
      ]
    ```
- **Obtener órdenes por folio**
  - `GET /ordenes/folio/TEST298325`
  - **Response:**  
    ```json
    [
      {
        "id": 15,
        "cliente_id": 1,
        "producto": "Producto Laptop",
        "cantidad": 2,
        "fecha_pedido": null,
        "folio": "TEST298325"
      },
      {
        "id": 16,
        "cliente_id": 1,
        "producto": "Producto Notebook",
        "cantidad": 2,
        "fecha_pedido": null,
        "folio": "TEST298325"
      }
    ]
    ```

  - **Obtener todas las órdenes**
  - `GET /ordenes`
  - **Response:**  
    ```json
      [
        {
          "id": 1,
          "cliente_id": 1,
          "producto": "Producto A",
          "cantidad": 2,
          "fecha_pedido": "2024-01-01T06:00:00.000Z",
          "folio": "ABC123"
        },
        {
          "id": 2,
          "cliente_id": 2,
          "producto": "Producto B",
          "cantidad": 3,
          "fecha_pedido": "2024-01-02T06:00:00.000Z",
          "folio": "DEF456"
        },
      ]
    ```

## Variables de entorno

Configura tu archivo `.env` con los siguientes valores:

```
PORT=puerto_a_exponer(default: 3000)
DB_HOST=localhost
DB_PORT=3306
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=nombre_db
```

---

**¡Gracias por revisar este proyecto!**