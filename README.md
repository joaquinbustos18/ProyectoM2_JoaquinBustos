# MiniBlog API

## Descripción

API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y publicaciones.

## Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- Jest
- Supertest

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/joaquinbustos18/ProyectoM2_JoaquinBustos.git
```

Instalar dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto basado en `.env.example`.

Ejemplo:

```env
PORT=3000
DATABASE_URL=postgresql://postgres:tu_password@localhost:5432/miniblog
```

> En producción (Railway) el valor de `DATABASE_URL` lo provee automáticamente
> el servicio de PostgreSQL — no es necesario armarlo a mano.

## Preparar la base de datos (local)

Antes de levantar el servidor, ejecutar el script SQL contra tu base de datos
local `miniblog` usando pgAdmin (o el cliente que prefieras):

1. Crear la base de datos `miniblog`.
2. Ejecutar el contenido de `sql/setup.sql` (crea las tablas `authors` y `posts`).
3. Ejecutar el contenido de `sql/seed.sql` (carga datos de ejemplo).

## Ejecutar el proyecto

```bash
node index.js
```

Servidor disponible en:

```txt
http://localhost:3000
```

## Ejecutar tests

```bash
npm test
```

## Endpoints

### Authors

- GET /authors
- GET /authors/:id
- POST /authors
- PUT /authors/:id
- DELETE /authors/:id

### Posts

- GET /posts
- GET /posts/:id
- GET /posts/author/:authorId
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

## OpenAPI

La documentación OpenAPI se encuentra en:

```txt
docs/openapi.yaml
```

### Ver documentación OpenAPI (Swagger UI)

1. Abrir https://editor.swagger.io
2. Copiar el contenido de `docs/openapi.yaml` y pegarlo en el editor.
3. Se genera automáticamente la documentación interactiva, con la opción de
   probar cada endpoint contra el servidor de producción o local.

## Deployment en Railway

1. Crear un nuevo proyecto en Railway y agregar un servicio de **PostgreSQL**.
2. Crear un segundo servicio para la API, conectado a este repositorio de GitHub.
3. En el servicio de la API, ir a la pestaña **Variables** y agregar
   `DATABASE_URL` con el valor que provee el servicio de Postgres
   (se encuentra en la pestaña **Variables** del servicio Postgres).
4. Entrar al servicio de Postgres → pestaña **Data**, y ejecutar ahí el
   contenido de `sql/setup.sql` y `sql/seed.sql` para crear las tablas y
   cargar los datos iniciales en la base de producción.
5. En el servicio de la API, ir a **Settings → Networking** y generar el
   dominio público con **Generate Domain**.
6. La API queda disponible públicamente, por ejemplo:

```txt
   https://proyectom2joaquinbustos-production.up.railway.app
```

## Uso de IA

Se utilizó ChatGPT como herramienta de apoyo para:

- Organización de la estructura del proyecto.
- Resolución de errores puntuales.
- Generación de ejemplos de consultas SQL.
- Orientación para pruebas con Jest y Supertest.
  Todas las decisiones finales y la implementación fueron revisadas y adaptadas
  durante el desarrollo del proyecto.
