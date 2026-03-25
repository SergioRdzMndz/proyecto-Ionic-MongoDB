# Proyecto Registro de Personas

Aplicación móvil con Ionic + Angular que permite registrar personas en una base de datos MongoDB Atlas.

## Instalación

### 1. Clonar el repositorio
git clone https://github.com/SergioRdzMndz/proyecto-Ionic-MongoDB.git

### 2. Configurar el Backend
cd backend
npm install

Crea un archivo .env dentro de la carpeta backend:
```
MONGODB_URI=mongodb+srv://USUARIO:PASSWORD@CLUSTER.mongodb.net/NOMBRE_BD?appName=NOMBRE_APP
PORT=3000
```

Inicia el servidor:
node server.js

### 3. Configurar el Frontend
cd frontend
npm install
ionic serve

## Uso

1. Inicia el backend primero
2. Luego inicia el frontend
3. Abre el navegador en http://localhost:8100/registro
4. Completa el formulario y guarda personas