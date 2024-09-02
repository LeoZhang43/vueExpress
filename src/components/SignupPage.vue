<template>
  <div className="main-container">
    <header className="login-header">
      <section className="icon-position header-section">
        <img className="kulaa-icon" src="/asset/kulaa.png" alt="kulaaIcon">
        <p className="position">London, Islington</p>
        <p className="change-btn">change</p>
      </section>
      <section className="blank-space">
      </section>
      <section className="user-restaurant header-section">
        <p className="claim-my-restaurant header-text">Claim My Restaurant</p>
        <p className="kulaa-for-restaurants header-text">Kulaa For Restaurants </p>
        <img className="user-icon" src="/asset/userIcon.png" alt="userIcon">
      </section>
    </header>
    <section className="login-section">
      <section className="welcome">
        <button class='back-btn' @click="goToPage('/login')">
          &lt; Back
        </button>
        <p className="welcome-text">Create a free account to manage your kulaa page</p>
        <p className="describe-text">Your Login Details</p>
      </section>
      <section className="input-container">
        <input v-model="firstName" className="input gap" type="text" placeholder="First Name">
        <input v-model="lastName" className="input gap" type="text" placeholder="Last Name">
        <input v-model="email" className="input gap" type="text" placeholder="Email">
        <input v-model="phoneNumber" className="input gap" type="text" placeholder="Phone Number">
        <input v-model="password" className="input gap" type="password" placeholder="Password">
        <section className="check-list gap">
          <span :class="['checkCircle', {'checked': termsAndConditionIsChecked}]" @click="termsAndConditionToggleCheck"></span>
          <span>By continuing you agree to Kulaa's 
            <a href="/terms">Terms of Service</a>
             & 
            <a href="/privacy">Privacy Policy</a>
          </span>
        </section>
        <section className="check-list gap">
          <span :class="['checkCircle', {'checked': subscribtionIsChecked}]" @click="subscribtionToggleCheck"></span>
          <span>We may send you marketing emails about Kulaa products and service. You can unsubscribe at any time.</span>
        </section>
        <button className="claim-my-resturant" :disabled="!termsAndConditionIsChecked || !subscribtionIsChecked" @click="goToPage('/accountinfo')">
          Claim My Resturant
        </button>
      </section>
    </section>
    <footer className="login-footer">
      <section className="footer-part-one-container">
        <section className="slogen-container">
          <img className="kulaa-icon" src="/asset//kulaa-2.png" alt="kulaa-icon">
          <p className="describe-text">For the foodies that want to discover  & eat the best dishes in the world.</p>
        </section>
        <section className="about-container">
          <section className="about-users">
            <p className="describe-text-bold">Users</p>
            <p className="describe-text">Sign-in</p>
            <p className="describe-text">Get the app</p>
            <p className="describe-text">Become an influencer</p>
          </section>
          <section className="about-restaurant">
            <p className="describe-text-bold">Restaurants</p>
            <p className="describe-text">Sign-in</p>
            <p className="describe-text">Claim my</p>
            <p className="describe-text">Restaurant</p>
          </section>
          <section className="about-about">
            <p className="describe-text-bold">About</p>
            <p className="describe-text">About kulaa</p>
            <p className="describe-text">Mission & vision</p>
            <p className="describe-text">Careers</p>
          </section>
        </section>
        <section className="contact-container">
          <p className="describe-text-bold align-left">Contact</p>
          <p className="describe-text-special">team@kulaa.co.uk</p>
          <section className="icon-list">
            <img className="app-icon" src="/asset/ins-icon.png" alt="facebook-icon">
            <img className="app-icon" src="/asset/facebook-icon.png" alt="facebook-icon">
            <img className="app-icon" src="/asset/twitter-icon.png" alt="facebook-icon">
          </section>
        </section>
      </section>
      <section className="footer-part-two-container">
        <p className="describe-text">
          © 2024 Kula Global Limited. Terms & Conditions / Privacy Policy / Cookies Policy
        </p>
      </section>
    </footer>
  </div>
</template>

<script scoped>
import { defineComponent, ref, computed } from 'vue';  
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SignupPage',
  setup() {
    const store = useStore();
    const router = useRouter();  
    const termsAndConditionIsChecked = ref(false);  
    const subscribtionIsChecked = ref(false);

    const firstName = computed({  
      get: () => store.getters.firstName,  
      set: (value) => store.commit('setFirstName', value),  
    });  
    const lastName = computed({  
      get: () => store.getters.lastName,  
      set: (value) => store.commit('setLastName', value),  
    });
    const email = computed({  
      get: () => store.getters.email,  
      set: (value) => store.commit('setEmail', value),  
    });  
    const phoneNumber = computed({  
      get: () => store.getters.phoneNumber,  
      set: (value) => store.commit('setPhoneNumber', value),  
    });
    const password = computed({  
      get: () => store.getters.password,  
      set: (value) => store.commit('setPassword', value),  
    });
    const termsAndConditionToggleCheck = () => {  
      termsAndConditionIsChecked.value = !termsAndConditionIsChecked.value; 
    }; 
    const subscribtionToggleCheck = () => {  
      subscribtionIsChecked.value = !subscribtionIsChecked.value;
    }; 
    const goToPage = (url) => {  
      if(!firstName.value){
        alert("名字为必填！");
        return;
      }
      if(!lastName.value){
        alert("姓氏为必填！");
        return;
      }
      if(!email.value){
        alert("邮箱为必填！");
        return;
      }
      if(!phoneNumber.value){
        alert("电话号码为必填！");
        return;
      }
      if(!password.value){
        alert("密码为必填！");
        return;
      }
      router.push(`${url}`);
    };  
  
    return { 
      termsAndConditionIsChecked,
      subscribtionIsChecked,
      goToPage,
      termsAndConditionToggleCheck,
      subscribtionToggleCheck,
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    }; 
  }
})
</script>

<style lang="scss" scoped>  
$primary-color: #8039DD;  
$secondary-color: #8C8C8C;  
$text-color: #000000;  
$border-color: #E6E6E6;  
$background-color: #FBFBFB;  
$font-size-regular: 14px;  
$font-size-bold: 16px;  
$font-size-larger: 20px;  
$border-radius: 30px;  
  
*{  
  box-sizing: border-box;  
}  
  
.main-container {    
  padding: 24px 28px;  
  display: grid;  
  grid-template-rows: 1fr 9fr 5fr;  
}   
  
.login-header {  
  display: grid;  
  grid-template-columns: 5fr minmax(10px, 5fr) 4fr;  
  
  .header-section {  
    display: grid;  
    grid-template-columns: 2fr 2fr 1fr;  
    justify-content: center;  
    align-items: center;  
  
    .position {  
      font-size: $font-size-regular;  
      font-weight: 700;  
      line-height: 21.94px;  
      width: 150px;  
      margin-left: -30px;  
      color: $secondary-color;  
    }  
  
    .change-btn {  
      font-size: $font-size-regular;  
      font-weight: 700;  
      line-height: 18.29px;  
      color: $primary-color;  
    }  
  
    .header-text {  
      font-size: $font-size-regular;  
      font-weight: 500;  
      line-height: 22.4px;  
      text-align: left;  
    }  
  }  
}  
  
.login-section {  
  padding: 0px 50px;  
  
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

  .welcome-text {  
    font-size: 34px;  
    font-weight: 700;  
    line-height: 41.45px;  
    margin-bottom: 20px;  
  }  
  
  .describe-text {  
    margin-top: 0px;  
  }  
  
  .input {  
    border: 1px solid $border-color;  
    width: 750px;  
    height: 72px;  
    border-radius: $border-radius;  
    font-size: $font-size-regular;  
    font-weight: 400;  
    line-height: 22.4px;  
    color: $text-color;  
    padding-left: 30px;  
  }   

  .check-list{
    display: flex;
    flex-direction: row;

    .checkCircle{
      width: 25px;
      height: 25px;
      border: 4px solid #8039DD;
      background: #FFFFFF;
      border-radius: 10px;
      margin-right: 10px;

      &.checked{
        background: #8039DD;
      }
    }
  }
  
  .gap {  
    margin-bottom: 20px;  
  }  
  
  .claim-my-resturant {  
    width: 437px;  
    height: 72px;  
    border-radius: $border-radius;  
    border: 1px solid $background-color;  
    background: $primary-color;  
    font-size: 18px;  
    font-weight: 300;  
    line-height: 20px;  
    text-align: center;  
    color: #FFFFFF;  
    cursor: pointer; 

    &:hover{
      color: #330dcb;
    }

    &:disabled{
      background: $secondary-color;
    }
  }  
}  
  
.login-footer {  
  padding: 0px 50px;  
  display: flex;  
  flex-direction: column;  
  justify-content: flex-end;    
  
  .footer-part-one-container {  
    width: 100%;  
    display: grid;  
    grid-template-columns: 3fr 5fr 2fr;  
  
    .slogen-container {  
      display: grid;  
      grid-template-rows: 1fr 1fr;  
    }  
  
    .about-container {  
      display: grid;  
      grid-template-columns: 1fr 1fr 1fr;  
    }  
  
    .describe-text-bold {  
      font-size: $font-size-larger;  
      font-weight: 600;  
      line-height: 22.4px;  
    }  
  
    .describe-text-special {  
      font-size: $font-size-larger;  
      font-weight: 400;  
      line-height: 22.4px;  
    }  
  
    .app-icon {  
      width: 24px;  
      height: 24px;  
    }  
  
    .icon-list {  
      display: flex;  
      flex-direction: row;  
      justify-content: space-between;  
      width: 130px;  
    }  
  
    .contact-container {  
      display: flex;  
      flex-direction: column;  
      align-items: end;  
    }  
  }  
  
  .footer-part-two-container {  
    height: 50px;  
    width: 100%;  
  }  
}  
</style>