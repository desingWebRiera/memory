<template>
  <div>
    <h1 class="titulo">Juego Memory</h1>
    <ul class="lista">
      <li class="tarjeta" v-for="tarjeta in tarjetas">
       <img :src="tarjeta.url" alt="tarjeta.name">
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
        {name: "caballo", url:"caballoPelota.jpg"},
        {name: "cocodrilo", url:"cocodrilo.jpeg"},
        {name: "elefante", url:"elefante.jpg"},
        {name: "hamster", url:"hamster.jpg"},
        {name: "jirafa", url:"jirafa.jpg"},
        {name: "leon", url:"leon.jpeg"},
        {name: "loroFotografo", url:"loroFotografo.jpeg"},
        {name: "monoMoto", url:"monoMoto.jpeg"},
        {name: "riniceronte", url:"rinoceronte.jpg"},
        {name: "vaca", url:"vaca.jpg"} 
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
