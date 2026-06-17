const express = require("express");
const pool = require("./db/db");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows[0]);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

const authorRoutes = require("./routes/authors.routes");

app.use("/authors", authorRoutes);
