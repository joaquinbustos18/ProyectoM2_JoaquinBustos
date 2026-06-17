const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostsByAuthor,
} = require("../services/posts.service");

router.get("/", async (req, res) => {
  const posts = await getAllPosts();
  res.json(posts);
});

// IMPORTANTE: esta ruta va antes de "/:id"
router.get("/author/:authorId", async (req, res) => {
  const posts = await getPostsByAuthor(req.params.authorId);

  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await getPostById(req.params.id);

  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }

  res.json(post);
});

router.post("/", async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({
        error: "title, content and author_id are required",
      });
    }

    const post = await createPost(title, content, author_id, published);

    res.status(201).json(post);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, content, author_id, published } = req.body;

    const post = await updatePost(
      req.params.id,
      title,
      content,
      author_id,
      published,
    );

    if (!post) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    res.json(post);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await deletePost(req.params.id);

    if (!post) {
      return res.status(404).json({
        error: "Post not found",
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
