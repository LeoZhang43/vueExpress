import { createStore } from 'vuex';  

export default createStore({  
  state: {  
    restaurantName: '',
    address: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  },  
  mutations: { 
    setRestaurantName(state, restaurantName){
      state.restaurantName = restaurantName;
    },
    setAddress(state, address){
      state.address = address;
    },
    setFirstName(state, firstName){
      state.firstName = firstName;
    },
    setLastName(state, lastName){
      state.lastName = lastName;
    },
    setEmail(state, email){
      state.email = email;
    },
    setPhoneNumber(state, phoneNumber){
      state.phoneNumber = phoneNumber;
    },
    setPassword(state, password){
      state.password = password;
    },
  },  
  actions: {  
    // 在这里定义提交 mutation 的方法  
  },  
  getters: {  
    restaurantName: state => state.restaurantName, 
    address: state => state.address, 
    firstName: state => state.firstName, 
    lastName: state => state.lastName, 
    email: state => state.email, 
    phoneNumber: state => state.phoneNumber, 
    password: state => state.password, 
  }   
});