# Proyecto Registro de Personas

Aplicación móvil con Ionic + Angular que permite registrar personas en una base de datos MongoDB Atlas.

## Instalación

### 1. Clonar el repositorio
git clone https://github.com/SergioRdzMndz/proyecto-Ionic-MongoDB.git
cd tu-repositorio

### 2. Configurar el Backend
cd backend
npm install

Crea un archivo .env dentro de la carpeta backend:
```
MONGODB_URI=mongodb+srv://adminUser:d9qF13AjH0DvMHfk@clusterpractica.iui3pfz.mongodb.net/practica_db?appName=ClusterPractica
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
3. Abre el navegador en http://localhost:8100
4. Completa el formulario y guarda personas