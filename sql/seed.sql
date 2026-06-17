INSERT INTO authors (name, email, bio)
VALUES
('Ana Garcia', 'ana@example.com', 'Desarrolladora Full Stack'),
('Carlos Ruiz', 'carlos@example.com', 'Escritor tecnico');

INSERT INTO posts (title, content, author_id, published)
VALUES
('Mi primer post', 'Contenido del primer post', 1, true),
('Post de prueba', 'Contenido de prueba', 2, false);