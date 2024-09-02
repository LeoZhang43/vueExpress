<template>
    <div className="main-container">
        <button className="back-btn" @click="goToPage('/login')">
          back to signup page
        </button>
        <p>account info</p>
        <p>restaurant Name: {{restaurantName}} </p>
        <p>address: {{address}} </p>
        <p>first Name: {{firstName}} </p>
        <p>last Name: {{lastName}} </p>
        <p>email: {{email}} </p>
        <p>phoneNumber: {{phoneNumber}} </p>
        <p>password: {{password}} </p>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue';  
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter();  
    const store = useStore();  
    const restaurantName = computed(() => store.state.restaurantName);
    const address = computed(() => store.state.address);
    const firstName = computed(() => store.state.firstName);
    const lastName = computed(() => store.state.lastName);
    const email = computed(() => store.state.email);
    const phoneNumber = computed(() => store.state.phoneNumber);
    const password = computed(() => store.state.password);

    const goToPage = (url) => {  
      router.push(`${url}`); // 替换 '/your-path' 为你想跳转的路径  
    };  
  
    return { 
      goToPage,
      restaurantName,
      address,
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    }; 
  }
})
</script>

<style scoped>
*{
    box-sizing: border-box;
}
.back-btn{
    font-size: 14px;
    font-weight: 500;
    line-height: 22.4px;
    color: #8039DD;
    margin: 0px 0px;
    border: none; /* 去除边框 */  
    background-color: transparent; /* 设置背景颜色为透明 */
    cursor: pointer; 

    &:hover{
      color: #330dcb;
    }
}
</style>