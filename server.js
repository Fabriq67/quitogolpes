const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Rutas de las páginas
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/servicios', (req, res) => res.sendFile(path.join(__dirname, 'servicios.html')));
app.get('/galeria', (req, res) => res.sendFile(path.join(__dirname, 'galeria.html')));
app.get('/contacto', (req, res) => res.sendFile(path.join(__dirname, 'contacto.html')));

// Redirecciones a APIs
app.get('/api/whatsapp', (req, res) => res.redirect('https://wa.me/+593987654321'));
app.get('/api/call', (req, res) => res.redirect('tel:+593987654321'));
app.get('/api/maps', (req, res) => res.redirect('https://www.google.com/maps?q=-0.180653,-78.467838'));
app.get('/api/waze', (req, res) => res.redirect('https://www.waze.com/ul?ll=-0.180653,-78.467838'));

// Servidor activo
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
