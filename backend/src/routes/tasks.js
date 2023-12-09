const express = require("express");
const router = express.Router();
const db = require("../../database");

// Obtener todas las tareas
router.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks", (err, tasks) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error al obtener las tareas." });
    } else {
      res.json({ tasks });
    }
  });
});

// Agregar una nueva tarea
router.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  // Validar que se proporcionó un título para la tarea
  if (!title) {
    return res
      .status(400)
      .json({ error: "El título de la tarea es obligatorio." });
  }

  // Insertar la nueva tarea en la base de datos
  const stmt = db.prepare(
    "INSERT INTO tasks (title, description) VALUES (?, ?)"
  );
  stmt.run(title, description || "");
  stmt.finalize();

  res.json({ message: "Tarea agregada exitosamente." });
});

// Eliminar una tarea
router.delete("/tasks/:id", (req, res) => {
  const taskId = req.params.id;

  if (!taskId) {
    return res.status(400).json({ error: "ID de tarea no proporcionado." });
  }

  // Eliminar la tarea de la base de datos
  db.run("DELETE FROM tasks WHERE id = ?", taskId, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error al eliminar la tarea." });
    } else {
      res.json({ message: "Tarea eliminada exitosamente." });
    }
  });
});

// Marcar una tarea como completada
router.put("/tasks/:id/completed", (req, res) => {
  const taskId = req.params.id;

  if (!taskId) {
    return res.status(400).json({ error: "ID de tarea no proporcionado." });
  }

  // Marcar la tarea como completada en la base de datos
  db.run("UPDATE tasks SET completed = 1 WHERE id = ?", taskId, (err) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Error al marcar la tarea como completada." });
    } else {
      res.json({ message: "Tarea marcada como completada exitosamente." });
    }
  });
});

module.exports = router;
