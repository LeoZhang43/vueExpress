import { createRouter, createWebHistory } from 'vue-router';  
import LoginPage from '@/components/LoginPage.vue';  
import AboutPage from '@/components/AboutPage.vue';
import SignupPage from '@/components/SignupPage.vue';
import AccountInfoPage from '@/components/AccountInfoPage.vue';
import TermsPage from '@/components/TermsPage.vue';
import PrivacyPage from '@/components/PrivacyPage.vue';
  
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
    {  
        path: '/accountinfo',  
        name: 'AccountInfoPage',  
        component: AccountInfoPage,  
    },
    {  
        path: '/terms',  
        name: 'TermsPage',  
        component: TermsPage,  
    },
    {  
        path: '/privacy',  
        name: 'PrivacyPage',  
        component: PrivacyPage,  
    },
];  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes,  
});  
  
export default router;