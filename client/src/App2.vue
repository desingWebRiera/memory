<template>
    <div>
      <h1 class="titulo">Juego Memory</h1>
      <ul class="lista">
        <li class="tarjeta" v-for="tarjeta in tarjetas" :key="tarjeta.name">
          <img :src="tarjeta.url" alt="Imagen de la targeta" >
       </li>
      </ul>
    </div>
   
  </template>
    <script >
    //importamos todos los componentes
   
  
    export default {
      name: 'App',
      data() {
        return {
          //creamos tarjetas 
         tarjetas: [
          {name: "caballo", url:"/static/tarjetasPeque/caballoPelota.jpg"},
          {name: "cocodrilo", url:"/static/tarjetasPeque/cocodrilo.jpeg"},
          {name: "elefante", url:"/static/tarjetasPeque/elefante.jpg"},
          {name: "hamster", url:/static/tarjetasPeque/hamster.jpg},
          {name: "jirafa", url:/static/tarjetasPeque/jirafa.jpg},
          {name: "leon", url:/static/tarjetasPeque/leon.jpeg},
          {name: "loroFotografo", url:/static/tarjetasPeque/loroFotografo.jpeg},
          {name: "monoMoto", url:/static/tarjetasPeque/monoMoto.jpeg},
          {name: "riniceronte", url:/static/tarjetasPeque/rinoceronte.jpg},
          {name: "vaca", url:/static/tarjetasPeque/vaca.jpg} 
          
        ]
      };
    },
  };
          
      components: {
        //registamos todos los componentes
     
      }
    
    
    </script>
  
  <style >
  .titulo { 
    text-align :center;
    color:rgba(19, 184, 234, 0.627);
    font-size: xx-large;
  }
  .lista{
    display: flex;
    flex-wrap: wrap;
  }
  .tarjeta {
    width:200px;
    height:200px;
    border:1px solid black;
    
  
  }
     
  
  
  
  
  </style>