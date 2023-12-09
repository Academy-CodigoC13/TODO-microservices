const express = require("express");
const bodyParser = require("body-parser");
const tasksRouter = require("./routes/tasks");
const db = require("../database");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Configurar rutas
app.use("/api", tasksRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor del backend iniciado en http://localhost:${PORT}`);
});
