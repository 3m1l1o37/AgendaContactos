Estructura de backend para el proyecto Agenda_contactos
Se usa node, express y mySql como database

backend-agenda/
│── src/
│   ├── db/
│   │   └── connection.js
│   ├── routes/
│   │   └── contactos.routes.js
│   ├── controllers/
│   │   └── contactos.controller.js
│   └── app.js
│── .env
│── package.json

Dependencias
npm install express mysql2 cors dotenv
npm install nodemon -D


modificaciones al package.json: 
      "type": "module" from   "type": "commonjs", 
          "dev": "nodemon src/app.js", agregado en script
