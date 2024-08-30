import { createStore } from 'vuex';  

export default createStore({  
  state: {  
    count: 0,
  },  
  mutations: {  
    increment(state){
        state.count++;
    },
    decrement(state){
        state.count--;
    },
  },  
  actions: {  
    // 在这里定义提交 mutation 的方法  
  },  
  getters: {  
    // 在这里定义获取状态的方法  
  }  
});