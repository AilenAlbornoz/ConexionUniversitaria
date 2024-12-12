// Noticias

// Crear noticias
app.post('/api/noticias', (req, res) => {
    const { titulo, contenido } = req.body;
    const noticia = { id: noticias.length + 1, titulo, contenido };
    noticias.push(noticia);
    res.json(noticia);
  });
  
  // Leer noticias
  app.get('/api/noticias', (req, res) => {
    res.json(noticias);
  });
  
  // Actualizar noticias
  app.put('/api/noticias/:id', (req, res) => {
    const id = req.params.id;
    const noticia = noticias.find(n => n.id === parseInt(id));
    if (noticia) {
      noticia.titulo = req.body.titulo;
      noticia.contenido = req.body.contenido;
      res.json(noticia);
    } else {
      res.status(404).json({ mensaje: 'Noticia no encontrada' });
    }
  });
  
  // Eliminar noticias
  app.delete('/api/noticias/:id', (req, res) => {
    const id = req.params.id;
    const noticia = noticias.find(n => n.id === parseInt(id));
    if (noticia) {
      noticias.splice(noticias.indexOf(noticia), 1);
      res.json({ mensaje: 'Noticia eliminada con éxito' });
    } else {
      res.status(404).json({ mensaje: 'Noticia no encontrada' });
    }
  });