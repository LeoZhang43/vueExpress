import { createRouter, createWebHistory } from 'vue-router';  
import LoginPage from '@/components/LoginPage.vue';  
import AboutPage from '@/components/AboutPage.vue';
import SignupPage from '@/components/SignupPage.vue';
  
const routes = [  
    {  
        path: '/login',  
        name: 'LoginPage',  
        component: LoginPage,  
    },  
    {  
        path: '/about',  
        name: 'AboutPage',  
        component: AboutPage,  
    }, 
    {  
        path: '/signup',  
        name: 'SignupPage',  
        component: SignupPage,  
    },
];  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes,  
});  
  
export default router;