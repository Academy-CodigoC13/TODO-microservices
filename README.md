# Explicación de la Estructura:

- `microservices-app`: Carpeta principal del proyecto.

* `frontend`: Carpeta del microservicio de frontend.

  - `public`: Contiene archivos estáticos para el frontend.

    - `index.html`: Página principal del frontend.
    - `style.css`: Hoja de estilos del frontend.
    - `script.js`: Lógica del frontend.

  - `package.json`: Archivo de configuración del frontend. 
  - `server.js`: Servidor del frontend. 
* `backend`: Carpeta del microservicio de backend. 
    * `src`: Carpeta de código fuente del backend. 
        * `routes`: Carpeta para manejar rutas específicas.
            * `tasks.js`: Archivo de manejo de rutas para las tareas.
            * `server.js`: Archivo principal del servidor del backend. 
        * `package.json`: Archivo de configuración del
  backend. 
        * `database.js`: Archivo para manejar la conexión a la base de datos.
* `package.json`: Archivo de configuración principal del proyecto.
