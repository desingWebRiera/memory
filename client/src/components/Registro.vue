<template>
  <div>
    <h1>Registro</h1>
    <h2>Registrar Nuevo Usuario</h2>
    <form method="post" action="procesar_registro.php">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" required><br>
        <label for="contraseña">Contraseña:</label><br>
        <input type="password" id="contraseña" name="contraseña" required><br>
        <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Registro'
}
</script>

<style scoped>
/* Estilos para el componente de registro */
</style>