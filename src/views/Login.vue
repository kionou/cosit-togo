<template >
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
                                    <p class="text-center mb-4">Vous êtes nouveau
                                        <router-link to="/inscription">
                                            <u style="color:#007bff !important ;">Créer un compte</u>
                                        </router-link>
                                        
                                    </p>
                                    <form data-request="onSignin" class="login_form">
                                                                                <div class="form-group">
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Email ou Telephone</label>
                                            <MazInput v-model="inputValue"  no-radius color="warning"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="font-weight-600 text-color-orange" for="loginPassword">Mot de passe</label>
                                            <MazInput v-model="inputValue"  no-radius type="password" color="warning"/>
                                        </div>

                                        <div class="nws-button  text-capitalize">
                                        <button class="hover-btn" @click="handleCodeQr"> S'inscrir</button>
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
    </div>
</template>
<script>
export default {
    
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
    
</style>