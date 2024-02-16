<template >
    <Loading v-if="loading" style="z-index: 999999;"></Loading>
    <div>
        <div class="haut"></div>
        <div id="main-wrapper" class="oxyy-login-register">
    <div class="hero-wrap d-flex align-items-center h-100">
        <div class="hero-mask opacity-4 bg-secondary">

        </div>
        <div class="hero-bg hero-bg-scroll" ></div>
        <div class="hero-content mx-auto w-100 h-100">
            <div class="container">
                <div class="row no-gutters min-vh-100">
                    <!-- Welcome Text ========================= -->
                    <div class="col-md-7 d-flex flex-column">
                        <div class="row no-gutters my-auto">
                            <div class="col-10 col-lg-9 mx-auto text-center">
                                <div class="logo mt-5 mb-3"><img src="../assets/site/logo1.png" alt="Oxyy"> </div>
                               
                              
                            </div>
                        </div>
                    </div>
                    <!-- Welcome Text End  Login Form ========================= -->
                    <div class="col-md-5 d-flex align-items-center py-5">
                        <div class="container my-auto py-4  bg-white" id="container">
                            <div class="row">
                                <div class="col-11 col-lg-11 mx-auto">
                                    <h3 class="text-9 font-weight-600 text-center mt-2 mb-3 text-color-orange">S'identifier</h3>
                                    <p class="text-center ">Vous êtes nouveau
                                        <router-link to="/inscription">
                                            <u style="color:#007bff !important ;">Créer un compte</u>
                                        </router-link>
                                        
                                    </p>
                                    <small>{{ error }}</small>
                                    <form data-request="onSignin" class="login_form">
                                         <div class="form-group">
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Adresse Email</label>
                                            <MazInput v-model="step1.email"  no-radius color="warning" type="email"/>
                                            <small v-if="v$.step1.email.$error">{{v$.step1.email.$errors[0].$message}}</small>
                                        </div>
                                        <div class="form-group">
                                            <label class="font-weight-600 text-color-orange" for="loginPassword">Mot de passe</label>
                                            <MazInput v-model="step1.password"  no-radius type="password" color="warning"/>
                                            <small v-if="v$.step1.password.$error">{{v$.step1.password.$errors[0].$message}}</small>
                                        </div>

                                        <div class="nws-button  text-capitalize">
                                        <button class="hover-btn" @click.prevent="Hamdlelogin"> Se connecter</button>
                                    </div>
                                    </form>
                                    <p class="text-center">
                                        <router-link to="/">
                                            <u style="color:#007bff !important ;">Mot de passe oublié?</u>
                                        </router-link>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Login Form End -->
                </div>
            </div>
        </div>
    </div>
</div>

<MazDialog v-model="responseEmail" title="Verification du mail">
      <p>
        Un code d'authentification vient de vous être envoyé par e-mail. 
        Veuillez le saisir ci-dessous pour finaliser votre connexion.
      </p>
      <form class="form">
    
        <div class="form-group">
            <label class="font-weight-600 text-color-orange" for="loginPassword">Code de Connection</label>
            <MazInput v-model="step2.code"  no-radius type="password" color="warning"/>
            <small v-if="v$.step2.code.$error">{{v$.step1.code.$errors[0].$message}}</small>
             </div>
        <small v-if="v$.step2.code.$error">{{v$.step2.code.$errors[0].$message}}</small>
        
    
  
        <div class="nws-button  text-capitalize">
        <button class="hover-btn" @click.prevent="HamdleOtp">Valider</button>
        </div>
   
  
  </form>
     
    </MazDialog>
    </div>
</template>
<script>
import MazDialog from 'maz-ui/components/MazDialog'
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax } from '@/functions/rules';
import axios from '../lib/axiosConfig.js'
import Loading from '@/components/others/loading.vue'
import { mapActions } from 'vuex';

export default {
    name: 'CositLoginUser',
  components: {
      MazDialog , Loading
  },

  data() {
    return {
        isOpen:false,
        loading:false,
        responseEmail:false,
        InfoUser:'',
        step1:{
            email: '',
        password: '',
        },

        step2:{
            code:'',
        },
       
        v$: useVuelidate(),
        error:''
    }
  },

  validations: {
    step1:{
        email: {
      require,
    },
    password: {
      require,
      lgmin: lgmin(8),
      lgmax: lgmax(20),
    }
    },
    step2:{
            code:{
                require,
      lgmin: lgmin(4),
      lgmax: lgmax(4),
            }
            
        },
    
  },
  mounted() {
        // Après une connexion réussie
        const fromCart = this.$route.query.fromCart;

        if (fromCart) {
            console.log('fromCart',fromCart);
            this.$store.commit('user/setFromCart', true);
        }

       
    
  },
  methods: {
    ...mapActions({  saveVerificationCode: 'saveVerificationCode', }),
    ...mapActions('user', ['setLoggedInUser']),
    async Hamdlelogin(){

        this.error = '',
         this.v$.step1.$touch()
          if (this.v$.$errors.length == 0 ) {
            this.loading = true
            
      let DataUser = {
        email:this.step1.email,
        password:this.step1.password
      }
      console.log("eeeee",DataUser);
      try {
      const response = await axios.post('/login' , DataUser);
      console.log('response.login', response.data); 
      if (response.data.status === "success") {
        this.InfoUser = response.data.data
        this.loading = false
         this.saveVerificationCode(this.InfoUser);
         this.SendOtp()
        
      } else {
        
      }
     
      
      
    } catch (error) {
      console.log('response.login', error); 

      this.loading = false
      if (error.response.data.status === 'error') {
       return this.error = "L'authentification a échoué"
        
      } else {
        
      }
    }
            }else{
            
            console.log('pas bon', this.v$.$errors);
            
            } 
    },
    async SendOtp(){
        this.responseEmail = true
        let DataSend = {
        email:1,
        value:this.step1.email
      }
        try {
            const response = await axios.post('/cosit-togo/send-otp', DataSend);
           console.log(response);
          } catch (error) {
            this.loading = false
            console.error('Erreur postlogin:', error);
          }

    },
   async  HamdleOtp(){
        this.error = '',
         this.v$.step2.$touch()
          if (this.v$.$errors.length == 0 ) {
            this.loading = true
            
            let DataUser = {
            email: true,
            value: this. step1.email,
            code: this. step2.code
        }
      console.log("eeeee",DataUser);
      this.setLoggedInUser(this.InfoUser);
      this.responseEmail = false
            this.$router.push('/mon-espace');
           this.loading = false
      try {
      const response = await axios.post('/mpme/verification-otp' , DataUser);
      console.log('response.login', response.data); 
    //   this.setLoggedInUser(this.InfoUser);
    //         this.$router.push('/mon-espace');
    //        this.loading = false
       
      
      
    } catch (error) {
      console.log('response.login', error); 

      this.loading = false
      if (error.response.data.status === 'error') {
       return this.error = "L'authentification a échoué"
        
      } else {
        
      }
    }
            }else{
            
            console.log('pas bon', this.v$.$errors);
            
            }

    }
  },
}
</script>
<style lang="css" scoped>

.hero-content{

background-image:url('../assets/img/d-marketing/img/bg/pr-bg.png');  
background-repeat: no-repeat;
/* background-size: cover; */
}

#container{
  
    box-shadow: var(--shadow-medium);
    border: 1px solid #d9d9d9;
}

#main-wrapper.oxyy-login-register {
    background: #fff;
}

.oxyy-login-register .hero-wrap {
    position: relative;
    overflow: hidden;
}

.oxyy-login-register .hero-wrap .hero-mask {
    z-index: 1;
}

.oxyy-login-register .hero-wrap .hero-mask, .oxyy-login-register .hero-wrap .hero-bg, .oxyy-login-register .hero-wrap .hero-bg-slideshow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.oxyy-login-register .bg-secondary {
    background-color: #fff !important;
}
.oxyy-login-register .opacity-4 {
    opacity: 0.4;
}

.oxyy-login-register .hero-wrap .hero-bg.hero-bg-scroll {
    background-attachment: scroll;
}

.oxyy-login-register .hero-wrap .hero-bg {
    z-index: 0;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    transition: background-image 300ms ease-in 200ms;
}
.oxyy-login-register .hero-wrap .hero-mask, .oxyy-login-register .hero-wrap .hero-bg, .oxyy-login-register .hero-wrap .hero-bg-slideshow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.oxyy-login-register .hero-wrap .hero-content {
    position: relative;
    z-index: 2;
}

.oxyy-login-register .font-weight-700 {
    font-weight: 700 !important;
}

.oxyy-login-register .text-5 {
    font-size: 21px !important;
    font-size: 1.3125rem !important;
}

.oxyy-login-register .font-weight-600 {
    font-weight: 600 !important;
}

.oxyy-login-register .text-9 {
    font-size: 36px !important;
    font-size: 2.25rem !important;
}
.text-color-orange {
    color: var(--color-primary);
}

.oxyy-login-register .text-primary, .oxyy-login-register .btn-link {
    color: #007bff !important;
}

form {
    padding: 0;
    margin: 0;
    display: inline;
}

.form-group {
    margin-bottom: 1rem;
}

.oxyy-login-register .font-weight-600 {
    font-weight: 600 !important;
}

.text-color-orange {
    color: var(--color-primary);
}

.oxyy-login-register .form-control:not(.form-control-sm) {
    padding: 0.81rem 0.96rem;
    height: inherit;
}

.oxyy-login-register .form-control, .oxyy-login-register .custom-select {
    border-color: #dae1e3;
    font-size: 16px;
    color: var(--color-defaut);
}

.oxyy-login-register .btn:not(.btn-link) {
    -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.oxyy-login-register .btn {
    padding: 0.8rem 2.6rem;
    font-weight: 500;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

.haut{

margin-bottom: 80px;
}
    
</style>