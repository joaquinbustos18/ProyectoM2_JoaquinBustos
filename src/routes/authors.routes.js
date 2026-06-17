const express = require("express");
const router = express.Router();

const {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../services/authors.service");

// GET todos los autores
router.get("/", async (req, res) => {
  const authors = await getAllAuthors();
  res.json(authors);
});

// GET autor por id
router.get("/:id", async (req, res) => {
  const author = await getAuthorById(req.params.id);

  if (!author) {
    return res.status(404).json({
      error: "Author not found",
    });
  }

  res.json(author);
});

// POST crear autor
router.post("/", async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: "Name and email are required",
      });
    }

    const author = await createAuthor(name, email, bio);

    res.status(201).json(author);
  } catch (error) {
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({
        error: "Email already exists",
      });
    }

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

// PUT actualizar autor
router.put("/:id", async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    const author = await updateAuthor(req.params.id, name, email, bio);

    if (!author) {
      return res.status(404).json({
        error: "Author not found",
      });
    }

    res.json(author);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const author = await deleteAuthor(req.params.id);

    if (!author) {
      return res.status(404).json({
        error: "Author not found",
      });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
