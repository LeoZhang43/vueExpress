<template>
  <div className="main-container">
    <header className="login-header">
      <section className="icon-position header-section">
        <img className="kulaa-icon" src="/asset/kulaa.png" alt="kulaaIcon">
        <p className="position">London, Islington</p>
        <p className="change-btn"> change</p>
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
        <p className="welcome-text">Welcome to kulaa!</p>
        <p className="describe-text">To claim your restaurant start by finding your restaurant</p>
      </section>
      <section className="input-name-container">
        <input className="input input-name" type="text" placeholder="Restaurant Name">
      </section>
      <section className="or-container">
        <p className="or">- OR -</p>
      </section>
      <section className="input-add-new-restaurant-container">
        <p className="describe-text gap">Add a new restaurant</p>
        <input className="input gap" type="text" placeholder="Restaurant Name">
        <input className="input gap" type="text" placeholder="Address">
      </section>
      <section className="claim-my-resturant-container">
        <input className="claim-my-resturant" type="text" placeholder="Claim My Restaurant">
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
export default {
  name: 'LoginPage',
  props: {
      msg: String
  }
}
</script>

<style lang="scss">  
*{
  box-sizing: border-box;
}
.main-container {  
  /* height: calc(100vh - 16px); */
  padding: 24px 28px;
  display: grid;
  grid-template-rows: 1fr 9fr 5fr;
} 
.login-header{
  display: grid;
  grid-template-columns: 5fr minmax(10px, 5fr) 4fr;
}
.kulaa-icon{
  height: 42px;
  width: 200px;
}
.position{
  font-size: 15px;
  font-weight: 700;
  line-height: 21.94px;
  width: 150px;
  margin-left: -30px;
  color: #8C8C8C;
}
.change-btn{
  font-size: 15px;
  font-weight: 700;
  line-height: 18.29px;
  color: #8039DD;
}
.header-section{
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  justify-content: center;
  align-items: center;
}
.header-text{
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
}
.claim-my-restaurant{
  width: 157px;
}
.kulaa-for-restaurants{
  width: 157px;
}
.user-icon{
  width: 40px;
  height: 40px;
}
.login-section{
  padding: 0px 50px;
  display: grid;
  grid-template-rows: 2fr 2fr 1fr 4fr 2fr;
}
.welcome-text{
  font-size: 34px;
  font-weight: 700;
  line-height: 41.45px;
  margin-bottom: 0px;
}
.describe-text{
  margin-top: 0px;
}
.input-name-container{
  margin: auto 0px;
}
.input{
  border: 1px solid #E6E6E6;
  width: 750px;
  height: 72px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  color: #AFAFAF;
  padding-left: 30px;
}
.input-name{
  padding-left: 50px;
  background-repeat: no-repeat;  
  background-position: 25px center;
  background-image: url(/public/asset/search.png);
}
.or{
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
}
.gap{
  margin-bottom: 20px;
}
.claim-my-resturant{
  width: 437px;
  height: 72px;
  border-radius: 30px;
  border: 1px solid #FBFBFB;
  background: #8039DD;
}
.claim-my-resturant::placeholder{
  font-size: 18px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
}
.input-add-new-restaurant-container{
  margin: auto 0px;
}
.claim-my-resturant-container{
  margin: auto 0px;
}
.login-footer{
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;  
}
.footer-part-one-container{
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 5fr 2fr;
}
.footer-part-two-container{
  height: 50px;
  width: 100%;
}
.slogen-container{
  display: grid;
  grid-template-rows: 1fr 1fr;

}
.kulaa-icon{
  width: 135px;
  height: 46px;
}
.about-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

}
.describe-text-bold{
  font-size: 20px;
  font-weight: 600;
  line-height: 22.4px;
}
.align-left{
  /* text-align: right; */
}
.describe-text-special{
  font-size: 20px;
  font-weight: 400;
  line-height: 22.4px;
  /* text-align: right; */
}
.app-icon{
  width: 24px;
  height: 24px;
}
.icon-list{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
}
.contact-container{
  display: flex;
  flex-direction: column;
  align-items: end;
}
</style>