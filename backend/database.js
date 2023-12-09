// backend/database.js
const sqlite3 = require("sqlite3").verbose();

// Conexión a la base de datos en memoria
const db = new sqlite3.Database(":memory:");

// Crear la tabla de tareas si no existe
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, completed BOOLEAN DEFAULT 0)"
  );
});

module.exports = db;
