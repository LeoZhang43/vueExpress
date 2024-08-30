<template>  
    <div>  
        <div v-if="showLinks">  
            <router-link to="/login">Login</router-link>    
            <router-link to="/about">About</router-link>  
            <router-link to="/signup">Signup</router-link> 
        </div>  
        <router-view></router-view>   
    </div>  
</template>  

<script>  
export default {  
    name: 'HomePage',  
    computed: {  
        showLinks() {  
            return this.$route.path === '/';  
        }  
    }  
};  
</script>

<style>

</style>