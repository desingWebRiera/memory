import { createApp } from 'vue';
import App from './App.vue'; // Ajustar la ruta si es necesario
import router from './router/router';
import './style.css';

createApp(App)
  .use(router)
  .mount('#app');
 