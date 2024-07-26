<template>
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Opciones de Acceso</h2>
        <button @click="register">Registrarse</button>
        <button @click="login">Acceder</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      register() {
        console.log("Registrarse");
        this.showModal = false;
      },
      login() {
        console.log("Acceder");
        this.showModal = false;
      },
    },
  };
  </script>