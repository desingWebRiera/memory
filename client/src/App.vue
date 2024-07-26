<template>
  <div>
    <div class="header text-center">
      <h1 class="titulo">Juego de Memoria</h1>
      
      <div class="nivel">Nivel: {{ level }}</div>
    </div>
    <div class="juego">
      <ul class="lista">
        <li class="tarjeta" v-for="(tarjeta, index) in tarjetasMostradas" :key="index" @click="flipCard(index)">
          <img :src="tarjeta.flipped ? tarjeta.url : backImage" alt="Imagen de la tarjeta">
        </li>
      </ul>
    </div>
    <div class="footer flex justify-end">
      <button class="inicio" @click="startGame">Iniciar Juego</button>
      <button class="opciones" @click="showOptions = !showOptions">Opciones</button>
    </div>

    <div v-if="showOptions" class="modal">
      <div class="modal-content">
        <h3>Opciones</h3>
        <button @click="navigateTo('acceso')">Acceso</button>
        <button @click="navigateTo('registro')">Registro</button>
        <button @click="showOptions = false">Cerrar</button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tarjetas: [
        { name: "caballo", url: "/static/tarjetasPeque/caballoPelota.jpg", flipped: false },
        { name: "cocodrilo", url: "/static/tarjetasPeque/cocodrilo.jpeg", flipped: false },
        { name: "elefante", url: "/static/tarjetasPeque/elefante.jpg", flipped: false },
        { name: "hamster", url: "/static/tarjetasPeque/hamster.jpg", flipped: false },
        { name: "jirafa", url: "/static/tarjetasPeque/jirafa.jpg", flipped: false },
        { name: "leon", url: "/static/tarjetasPeque/leon.jpeg", flipped: false },
        { name: "loroFotografo", url: "/static/tarjetasPeque/loroFotografo.jpeg", flipped: false },
        { name: "monoMoto", url: "/static/tarjetasPeque/monoMoto.jpeg", flipped: false },
        { name: "rinoceronte", url: "/static/tarjetasPeque/rinoceronte.jpg", flipped: false },
        { name: "vaca", url: "/static/tarjetasPeque/vaca.jpg", flipped: false }
      ],
      tarjetasMostradas: [],
      backImage: "/static/tarjetasVolteadas/diseñoAlba.png",
      level: 1,
      flippedCards: [],
      matchedCards: [],
    };
  },
  methods: {
    startGame() {
      this.flippedCards = [];
      this.matchedCards = [];
      this.generateCards();
    },
    generateCards() {
      const numPairs = 4 + (this.level - 1) * 2;  // 4 parejas para el nivel 1 y 2 más por cada nivel adicional
      const tarjetasDuplicadas = [];
      for (let i = 0; i < numPairs; i++) {
        tarjetasDuplicadas.push({ ...this.tarjetas[i % this.tarjetas.length], id: i });
        tarjetasDuplicadas.push({ ...this.tarjetas[i % this.tarjetas.length], id: i + numPairs });
      }
      this.tarjetasMostradas = this.shuffleCards(tarjetasDuplicadas);
    },
    flipCard(index) {
      if (this.flippedCards.length < 2 && !this.tarjetasMostradas[index].flipped && !this.matchedCards.includes(index)) {
        this.tarjetasMostradas[index].flipped = true;
        this.flippedCards.push(index);

        if (this.flippedCards.length === 2) {
          setTimeout(this.checkMatch, 1000);
        }
      }
    },
    checkMatch() {
      const [firstIndex, secondIndex] = this.flippedCards;
      if (this.tarjetasMostradas[firstIndex].url === this.tarjetasMostradas[secondIndex].url) {
        this.matchedCards.push(firstIndex, secondIndex);
      } else {
        this.tarjetasMostradas[firstIndex].flipped = false;
        this.tarjetasMostradas[secondIndex].flipped = false;
      }
      this.flippedCards = [];

      if (this.matchedCards.length === this.tarjetasMostradas.length) {
        this.level++;
        setTimeout(this.startGame, 1000);
      }
    },
    shuffleCards(array) {
      return array.sort(() => Math.random() - 0.5);
    }
  },
  mounted() {
    this.startGame();
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.titulo {
  color: blueviolet;
  text-align: center;
  margin: 0;
}

.inicio {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.nivel {
  margin-left: auto;
}

.juego {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}

.lista {  
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.tarjeta {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.tarjeta img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
</style>