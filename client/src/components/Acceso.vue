<template>
    <div>
      <h1>Acceso</h1>
      <p>Aquí va el formulario de acceso.</p>
      <form>
        <form method="post" action="">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" required><br>
        <label for="contraseña">Contraseña:</label><br>
        <input type="password" id="contraseña" name="contraseña" required><br>
        <button type="submit">Ingresar</button>
    </form>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Acceso'
  }
  const connection = require('./db');

// Hacer una consulta
connection.query('SELECT * FROM usuarios', (err, results) => {
  if (err) {
    console.error('Error en la consulta:', err);
    return;
  }
  console.log('Resultados:', results);
});

  </script>
  
  <style scoped>
  /* Estilos para el componente de acceso */
  </style>