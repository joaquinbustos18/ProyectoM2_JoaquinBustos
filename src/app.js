const express = require("express");
const pool = require("./db/db");

const authorRoutes = require("./routes/authors.routes");
const postRoutes = require("./routes/posts.routes");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows[0]);
});

app.use("/authors", authorRoutes);
app.use("/posts", postRoutes);

module.exports = app;
