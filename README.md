**creditos del front a los sgtes codepens**

https://codepen.io/kh3996/pen/pojXrBj - login/signup

https://codepen.io/GilaniRabbu/pen/rNPrqoN - navbar

---

# Inicializar con
```
npm i
node server.js
```
---
# Entrega 1
Explicacion y descripcion paso a paso de como se completo el proyecto

# Paso 1:
## inicializacion

creamos nuestro folder con mkdir y entramos a el para inicializar nuestro proyecto de node

# Paso 2:
## estructura de carpetas
creamos una estructura de carpetas algo asi:
- config
    - db.config.js | configure MySQL database & Sequelize
    - auth.config.js | configure Auth Key
- routes
    - auth.routes.js| POST del signup & signin
    - user.routes.js| GET de los mensajes mostrados en las vistas
- middlewares
    - verifySignUp.js: verificacion de usuarios
    - authJwt.js: verificacion de token y roles correctos
- controllers
    - auth.controller.js: maneja las acciones del signup y signin
    - user.controller.js: maneja los mensajes mostrados en las vistas
-  models 
    - user.model.js modelo de squelize de usuario
    - role.model.js mmodelo de sequelize de rol
- server.js: base de nuestro proyecto que maneja los modulos necesarios para el funcionamiento del proyecto

# Paso 3:
## Dependencias
Para esta entrega se utilizaron las dependencias:
- express
- mysql2
- jsonwebtoken
- cors
- sequelize

# Paso 4:
## tutorial

seguimos las bases del [tutorial visto en clase](https://www.bezkoder.com/node-js-jwt-authentication-mysql/) hasta tener un backend funcional con autenticacion jwt

# Paso 5:
## Front

Creamos una carpeta public, donde tendremos nuestras vistas 
- [Entry](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/entry.html) Para el login y signup | asignado a la ruta "/signin"
- [Home](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/home.html) La pagina base, donde podemos ver el mensaje de info publica | asignado a las rutas "/" y "/all"
- [User](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/user.html) Pagina de usuario, todo aquel que este logueado correctamente con un token podra ver el mensaje | asignado a la ruta "/user"
- [Mod](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/mod.html) Pagina de moderador, solo aquellos con rol de admin o moderador podran ver el mensaje | asignado a la ruta "/mod"
- [Admin](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/admin.html) Pagina de administrador, solo administradores podran ver el mensaje | asignado a la ruta "/admin"

utilizando los recursos mencionados anteriormente y modificandolos para que nos sean de utilidad

en estas se encontraran los fetch a nuestra api para podernos registrar, loguear y visualizar los mensajes de cada rol correspondiente

cada opcion en el navbar nos llevara a una accion o mensaje diferente y tambien tendremos la opcion de desloguearnos

las funciones de signin y signup que se encuentran en [Entry](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/entry.html) guardan el token que nos devuelve la api en el localstorage para su uso al momento de llamar los mensajes desde la api en las paginas de user, mod, y admin

# Paso 6:
## Rutas del front

adaptamos y creamos las diferentes rutas para el front en un archivo [front.routes.js](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/app/routes/front.routes.js) en la carpeta correspondiente

y finalmente añadimos las rutas nuevas a la app configurandolas correctamente en nuestro archivo [server.js](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/server.js)

