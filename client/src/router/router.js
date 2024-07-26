import { createRouter, createWebHistory } from 'vue-router';
import UsersComponent from '../components/Usuario.vue'; // Ajustar la ruta si es necesario

const routes = [
    {
        path: '/',
        name: 'Home',
        component: UsersComponent,
      },
 
    {
      path: '/',
      name: 'Usuarios',
      component: UsersComponent,
    },
    {
        path: '/acceso',
        name: 'Acceso',
        component: Acesso,
      },
      {
        path: '/registro',
        name: 'Registro',
        component: Registro,
      },
    // Puedes agregar más rutas aquí según sea necesario
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
