<template >
    <Loading v-if="loading"></Loading>
    <div>
        <div id="main-wrapper" class="oxyy-login-register">
    <div class="hero-wrap d-flex align-items-center h-100">
        <div class="hero-mask opacity-4 bg-secondary">

        </div>
        <div class="hero-bg hero-bg-scroll" ></div>
        <div class="hero-content mx-auto w-100 h-100">
            <div class="container">
                <div class="row no-gutters min-vh-100">
                    <!-- Welcome Text ========================= -->
                    <div class="col-md-5 d-flex flex-column">
                        <div class="row no-gutters my-auto">
                            <div class="col-10 col-lg-9 mx-auto text-center">
                                <div class="logo mt-5 mb-3"><img src="../assets/site/logo1.png" alt="Oxyy"> </div>
                               
                              
                            </div>
                        </div>
                    </div>
                    <!-- Welcome Text End  Login Form ========================= -->
                    <div class="col-md-7 d-flex align-items-center py-5">
                        <div class="container my-auto py-4  bg-white" id="container">
                            <div class="row">
                                <div class="col-11 col-lg-11 mx-auto">
                                    <h3 class="text-9 font-weight-600 text-center mt-2 mb-3 text-color-orange">S'inscrir</h3>
                                    <p class="text-center ">
                                        Rejoignez notre communauté d'apprentissage aujourd'hui pour faire progresser
                                         votre carrière et atteindre vos objectifs professionnels.
                                    </p>
                                    <small>{{ error }}</small>
                                    <form data-request="onSignin" class="login_form">
                                        <div class="row mb-3 mt-3 content-group">
                                        <div class="col">
                                        <div class="input-groupe">
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Nom</label>
                                            <MazInput v-model="nom"  no-radius color="warning" type="text"/>
                                             <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}}</small>
                                        </div>
                                        

                                        </div>
                                        <div class="col">
                                        <div class="input-groupe">
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Prenom</label>
                                            <MazInput v-model="prenom"  no-radius color="warning" type="text"/>
                                            <small v-if="v$.prenom.$error">{{v$.prenom.$errors[0].$message}}</small>

                                        </div>
                                        

                                        </div>
                                         </div>
                                        
                                         <div class="row mb-3 mt-3 content-group">
                                        <div class="col">
                                        <div class="input-groupe">
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Adresse Email </label>
                                            <MazInput v-model="email"  no-radius color="warning" type="email"/>
                                            <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</small>

                                        </div>
                                        

                                        </div>
                                        <div class="col">
                                        <div class="input-groupe">
                                           
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Numéro Téléphonique </label>
                                            <MazPhoneNumberInput v-model="phoneNumber" show-code-on-list no-radius color="warning" defaultCountryCode="TG"
                                            :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid"  country-locale="fr-FR" noFlags="true" />
                                            <small v-if="v$.phoneNumber.$error">{{v$.phoneNumber.$errors[0].$message}}</small>
                                        </div>
                                        </div>
                                         </div>

                                         <div class="row mb-3 mt-3 content-group">
                                        <div class="col">
                                        <div class="input-groupe">
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Mot de passe </label>
                                            <MazInput v-model="password"  no-radius color="warning" type="password"/>
                                            <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</small>
                                        </div>
                                        

                                        </div>
                                        <div class="col">
                                        <div class="input-groupe">
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Confirmé leMot de passe </label>
                                            <MazInput v-model="confirmer_password"  no-radius color="warning" type="password"/>
                                            <small v-if="v$.confirmer_password.$error">{{v$.confirmer_password.$errors[0].$message}}</small>
                                            <small v-if="!validatePasswordsMatch()">Les mots de passe ne correspondent pas.</small>

                                        </div>
                                        

                                        </div>
                                         </div>
                                         
                                         <div class="nws-button  text-capitalize">
                                        <button class="hover-btn" @click.prevent="HamdleSign"> S'inscrir</button>
                                    </div>
                                    </form>
                                 
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

<MazDialog v-model="isOpen" title="Inscription success" width="auto" >
    <div class="form-container">
	<p class="title">
    <img src="@/assets/site/success.png" alt="">
  </p>
    <p class="text-center"> 
      Félicitations ! Votre compte a été créé avec succès. Veuillez vous connecter pour commencer
       à utiliser notre plateforme. Bienvenue parmi nous !
    </p>
    <div class="nws-button  text-capitalize">
        <button class="hover-btn" @click="$router.push({ path: '/connexion', })">Se connecter</button>
                                        
        </div>
		
	
    </div> 
    
  </MazDialog>
    </div>
</template>
<script>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import MazDialog from 'maz-ui/components/MazDialog'
import useVuelidate from '@vuelidate/core';
import { require, lgmin, lgmax } from '@/functions/rules';
import axios from '../lib/axiosConfig.js'
import Loading from '@/components/others/loading.vue'

export default {
    name: 'CositLSignUser',
  components: {
    MazPhoneNumberInput,  MazDialog , Loading
  },
  data() {
    return {

        isOpen:false,
        loading:false,
        email: '',
      phoneNumber: '',
      password: '',
      confirmer_password: '',
      nom: '',
      prenom: '',
      v$: useVuelidate(),
      error:''
    }
  },
  validations: {
    email: {
      require,
    },
    phoneNumber: {
      require,
    },
    password: {
      require,
      lgmin: lgmin(8),
      lgmax: lgmax(20),
    },
    confirmer_password: {
      require,
      lgmin: lgmin(8),
      lgmax: lgmax(20),
    },
    nom: {
      require,
      lgmin: lgmin(2),
      lgmax: lgmax(20),
    },
    prenom: {
      require,
      lgmin: lgmin(2),
      lgmax: lgmax(20),
    },
  

  },
  mounted() {
    
  },
  methods: {
    validatePasswordsMatch() {
      return this.password === this.confirmer_password;
    },
 async HamdleSign(){
        this.v$.$touch()
      this.error = ''
      if (this.v$.$errors.length == 0) {
        this.loading = true
        let DataUser= {

     email:this.email,
     password:this.password,
     password_confirmation:this.confirmer_password,
     Nom:this.nom,
     Prenoms:this.prenom,
     Whatsapp:this.phoneNumber,
     role:4

    }
     console.log('data',DataUser);
     try {
        const response = await axios.post('/register/system-user',DataUser );
        console.log(response);
        if (response.data.status === 'success') {
        this.loading = false
        this.isOpen = true
            
        } else {
        this.loading = false
        console.log(response);
            
        }
        
      } catch (error) {
        if (error.response.data.errors.email) {
        console.error('error',error.response.data.errors.email);
        this.loading = false
        this.error = "L'adresse e-mail existe déjà dans notre système. Veuillez vous connecter avec cette adresse."
            
        }else{
        this.loading = false
        console.error('error',error);

        }
        
      }

      } else {
        console.log('pas bon', this.v$.$errors);

    }
  },
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




.form-container {
  width: 510px;
  border-radius: 0.75rem;

  z-index: 100;

}
.title {
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  /* font-size: 1.5rem; */
  /* line-height: 2rem; */
  /* font-weight: 700; */
}

.title img{
  width: 90px;
  height: ç0px;

}

.sign {
  display: block;
  width: 100%;
  background-color: var(--color-secondary);
  padding: 0.75rem;
  text-align: center;
  color: black;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  margin-top: 50px;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

.sign:hover{

border: 1px solid var(--color-secondary);
color: var(--color-secondary);
background-color: white;

}
    
</style>