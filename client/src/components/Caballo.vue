<template>
   <div class="card" /*:class="{'tarjetaVolteada': estaVolteada, 'tarjetaNoVolteada': !estaVolteada}" @click="voltearTarjeta">*/
    <!-- para la imagen central, uso la propiedad imagenFrente y contiene la ruta completa desde assets ademas :src porque vue evalua valor dependiendo de su propiedad/variable y asi determinar la URL, ademas utilizo require para importarla dinamicamente asi evito rutas no encontradas en tiempo de compilacion-->
     <img v-if="estaVolteada" :src="require('../assets/tarjetasPeque/${imagenFrente}.jpg')" alt="se ve un caballo con su pelota">
     <!-- para el reverse de la imagen son todas iguales y estan en la carpeta tarjetasVolteadas src porque es estatica-->
      <img v-else src="../assets/tarjetasVolteadas/diseñoAlba" alt="tarjeta al reves">
   </div>
  </template>
  
  <script setup>
 import useImageFlipper.js from '../composables/composable1';
 const { imageFront, isFlipped, flipCard} = useImageFlipper ();
  </script>
  
  <style>
  .card {
  @apply border-2 border-black rounded-lg hover:bg-pink-600 active:bg-blue-600 transition-colors duration-300 cursor-pointer;
}
  
  </style>