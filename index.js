const express = require("express");
require("dotenv").config();

const app = express();
const personsRouter = require("./src/router/personsRoutes");

const serverPort = process.env.APP_PORT;

app.use(express.json());

app.use("/persons", personsRouter);

app.listen(serverPort, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server is running on port ${serverPort} 🚀`);
});
