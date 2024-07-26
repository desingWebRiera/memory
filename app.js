const express = require('express');
const path = require('path');
const app = express();

// Configuro Express para servir archivos estáticos desde la carpeta 'src'(Phind)
app.use('/static', express.static(path.join(__dirname, 'src')));

// Inicia el servidor
app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));