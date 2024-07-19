<template>
  <div class="header">

    <h1 class="titulo">Juego de Memoria</h1>
    
    <button class="inicio"></button>
    
    <div class="nivel">Nivel</div>
  </div>
  <div class="juego">
    <ul>
      <li v-for="(card,index) in cards" :key="index" @click="flipCard(inex)">
        <div :class="{ flipped: card.flipped}">{{ cards.id }}</div>"
      </li>
    </ul>
  </div>
  <div class="footer">
    <div></div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return { 
      level:1,
      maxCards: 20,
      cards: [],
    };
  },
  methods: {
    generateCards() {
      const cards = [];
      for (let i = 0; i< this.level * 4; i++) {
        cards.push({id: i, flipped: false});
      }
      this.cards = cards;
    },
    flipCard(index) {
      this.cards[index].flipped = !this.cards[index].flipped;
    }
  },
  mounted() {
    this.generateCards();
    
  },
  
}
</script>
<style>

.header{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  
}
.titulo{
  color: blueviolet;
  text-align: center;
  margin: 0;
}
.inicio {
  cursor: pointer;
  width: 70%;
  height: auto; /*mantiene proporcion del texto*/
}
.nivel {
  margin-left: auto; /*empuja al div al lado derecho*/
}
.juego{
  display: flex;
  flex-wrap: wrap;
  border:1px solid black;
  border-radius: 5px;
 
}

  
</style>
