# Plataforma de Gestión de Eventos — Backend II

API REST desarrollada con Node.js y Express para una plataforma de gestión de eventos. Este proyecto corresponde a la primera pre-entrega del curso Backend II y tiene como objetivo establecer una estructura inicial organizada por capas, preparada para incorporar nuevas funcionalidades en futuras entregas.

## 🎯 Objetivo del proyecto

Construir la estructura base de una API REST aplicando una arquitectura en capas, con separación de responsabilidades y una organización que facilite el mantenimiento y la escalabilidad del proyecto.

En esta primera etapa se prepara la estructura para los siguientes recursos:

- **Events:** estructura inicial para la gestión de eventos.
- **Sessions:** estructura inicial para las sesiones de usuario, sin implementar autenticación todavía.
- **Users:** modelo base para representar a los usuarios de la plataforma.

## 🛠️ Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express 5:** framework para desarrollar la API REST.
- **JavaScript ES Modules (ESM):** sistema de módulos mediante `import` y `export`.
- **dotenv:** gestión de variables de entorno.
- **Nodemon:** reinicio automático del servidor durante el desarrollo.

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/MartinfMelendez/BackEnd-2.git
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd BackEnd-2
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto, tomando como referencia `.env.example`.

```env
PORT=8080
NODE_ENV=development
MONGO_URL=mongodb://127.0.0.1:27017/eventos
JWT_SECRET=clave_secreta_para_desarrollo
```

**Importante:** los valores son de ejemplo. La conexión a MongoDB y la autenticación con JWT corresponden a futuras implementaciones; no implica que estén activas en esta primera entrega. No subir el archivo `.env` al repositorio.

## ▶️ Ejecución del servidor

Para iniciar el servidor en modo desarrollo, ejecutar:

```bash
npm run dev
```

Este comando utiliza Nodemon para reiniciar automáticamente la aplicación cuando detecta cambios en los archivos.

Una vez iniciado el servidor, se podrá acceder a la API en:

```text
http://localhost:8080
```

El puerto utilizado dependerá del valor configurado en la variable de entorno `PORT`.

## 🗂️ Estructura del proyecto

La organización propuesta para el proyecto sigue una arquitectura en capas:

```text
BackEnd-2/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   ├── routes/
│   │   ├── events.router.js
│   │   └── sessions.router.js
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── dao/
│   ├── models/
│   │   ├── User.js
│   │   └── Event.js
│   ├── middlewares/
│   └── utils/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── Readme.md
```

### Responsabilidades de cada capa

| Carpeta o archivo | Responsabilidad |
|---|---|
| `app.js` | Configura Express, los middlewares y las rutas de la aplicación. |
| `server.js` | Inicia el servidor y escucha en el puerto configurado. |
| `config/` | Centraliza la configuración de la aplicación. |
| `routes/` | Define los endpoints y vincula las rutas con sus controladores. |
| `controllers/` | Recibe las solicitudes HTTP y gestiona las respuestas. |
| `services/` | Contiene la lógica de negocio. |
| `repositories/` | Abstrae las operaciones de acceso a los datos. |
| `dao/` | Organiza la capa de acceso a datos (*Data Access Object*). |
| `models/` | Define la estructura de los datos, como usuarios y eventos. |
| `middlewares/` | Aloja funciones intermedias para procesar las solicitudes. |
| `utils/` | Contiene funciones auxiliares reutilizables. |

## 📡 Endpoints de la API

La API utiliza el prefijo `/api` para organizar sus recursos.

### 1. Estado del servidor

**GET** `/api/health`

Permite comprobar si el servidor está activo.

Respuesta esperada:

```json
{
  "status": "ok",
  "message": "Servidor activo"
}
```

Código HTTP esperado: `200 OK`.

### 2. Listado de eventos

**GET** `/api/events`

Endpoint inicial para consultar los eventos disponibles. En esta primera etapa puede devolver una lista vacía.

Respuesta esperada:

```json
{
  "status": "success",
  "payload": []
}
```

Código HTTP esperado: `200 OK`.

### 3. Sesiones de usuario

**Base de ruta:** `/api/sessions`

Se prepara la estructura de rutas y controladores para futuras funcionalidades relacionadas con las sesiones de usuario.

La autenticación, el inicio de sesión y la emisión de tokens no forman parte del alcance de esta primera entrega.

> Nota: las respuestas anteriores describen el comportamiento esperado según las consignas. Para considerarlas endpoints disponibles, las rutas y los controladores correspondientes deben estar implementados y registrados en la aplicación.

## 🔐 Seguridad y configuración

El proyecto utiliza un archivo `.env` para configurar valores específicos del entorno de ejecución.

Las variables previstas para la evolución del proyecto son:

| Variable | Descripción |
|---|---|
| `PORT` | Puerto en el que escucha el servidor. |
| `NODE_ENV` | Entorno de ejecución, por ejemplo `development`. |
| `MONGO_URL` | Cadena de conexión prevista para MongoDB. |
| `JWT_SECRET` | Clave prevista para firmar tokens JWT. |

El archivo `.gitignore` excluye `.env` y `node_modules` para evitar publicar credenciales y dependencias instaladas.

## 🚀 Próximas etapas

El proyecto está preparado para evolucionar progresivamente con las siguientes funcionalidades:

- Completar la arquitectura en capas.
- Incorporar persistencia de datos con MongoDB.
- Desarrollar las operaciones de gestión de eventos.
- Implementar el registro y la autenticación de usuarios.
- Agregar validaciones y middlewares.
- Incorporar gestión de errores y respuestas estandarizadas.

## 📚 Alcance de esta entrega

Esta pre-entrega se centra en la refactorización arquitectónica inicial, la configuración de Express, la separación entre `app.js` y `server.js`, la preparación de los recursos `events` y `sessions` y la documentación necesaria para ejecutar el proyecto.

---

**Proyecto académico — Backend II**  
Repositorio: [BackEnd-2](https://github.com/MartinfMelendez/BackEnd-2)