<template>
    <div className="main-container">
        <div class="header-container">header</div>
        <div class="input-container">
            <p>{{ count }}</p>  
            <button @click="increment">Increment</button>  
            <button @click="decrement">Decrement</button> 
        </div>
        <div class="footer-container">
            <input v-model="message" placeholder="请输入内容">  
            <p>输入的内容是：{{ message }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';  
import { useStore } from 'vuex';  

export default defineComponent({  
  name: 'SignupPage',  
  setup() {  
    const store = useStore();  
    const count = computed(() => store.state.count);  
    const message = ref('');
    const increment = () => {  
      store.commit('increment');  
    };  
    const decrement = () => {  
      store.commit('decrement');  
    }; 
    return { 
        message,
        count,
        increment,
        decrement
    };  
  }  
});
</script>

<style scoped>
*{
    box-sizing: border-box;
}
.main-container{
    display: grid;
    grid-template-rows: 1fr 9fr 5fr;
    padding: 31px 31px;
    height: calc(100vh - 16px);
}
</style>