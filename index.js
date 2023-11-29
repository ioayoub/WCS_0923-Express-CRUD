// import express
const express = require("express");

// middleware gestion d'erreurs
const { errorHandler } = require("./src/middlewares/errorHandler");

//importer dotenv pour lire les variables d'environnement
require("dotenv").config();

//stocke la function express
const app = express();

//importe router lié ax persons
const personsRouter = require("./src/router/personsRoutes");

//port depuis les variables d'environnement
const serverPort = process.env.APP_PORT;

//body parser  : permet de lire les données en format json
app.use(express.json());

//utilise router des perons
app.use("/persons", personsRouter);

//middleware gestion d'erreurs
app.use(errorHandler);

//Lancement du serveur en utilisant le port
app.listen(serverPort, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server is running on port ${serverPort} 🚀`);
});
