<template >
    <div>
        <div id="main-wrapper" class="oxyy-login-register">
    <div class="hero-wrap d-flex align-items-center h-100">
        <div class="hero-mask opacity-4 bg-secondary">

        </div>
        <div class="hero-bg hero-bg-scroll" style="background-image:url('https://www.agenceemploijeunes.ci/site/themes/refonteaej/assets/images/login/group-jeune-1.jpg');"></div>
        <div class="hero-content mx-auto w-100 h-100">
            <div class="container">
                <div class="row no-gutters min-vh-100">
                    <!-- Welcome Text ========================= -->
                    <div class="col-md-7 d-flex flex-column">
                        <div class="row no-gutters my-auto">
                            <div class="col-10 col-lg-9 mx-auto text-center">
                                <div class="logo mt-5 mb-3"> <a href="https://www.agenceemploijeunes.ci/site" title="Agence Emploi Jeune"><img src="https://www.agenceemploijeunes.ci/site/themes/refonteaej/assets/images/logo_ft.png" alt="Oxyy"></a> </div>
                                <h1 class="text-5 font-weight-700 text-white mb-5">
                                    Guichet Unique pour l’Emploi des Jeunes En Côte d’Ivoire
                                </h1>
                                <!--<h1 class="text-5 font-weight-400 text-white mb-5">Connectez-vous pour accéder à votre espace jeunes.
                                </h1>
                                <p class="text-white mb-0">Nous sommes heureux de vous revoir ! </p>-->
                            </div>
                        </div>
                    </div>
                    <!-- Welcome Text End  Login Form ========================= -->
                    <div class="col-md-5 d-flex align-items-center py-5">
                        <div class="container my-auto py-4 shadow-lg bg-white">
                            <div class="row">
                                <div class="col-11 col-lg-11 mx-auto">
                                    <h3 class="text-9 font-weight-600 text-center mt-2 mb-3 text-color-orange">S'identifier</h3>
                                    <p class="text-center mb-4">Vous êtes nouveau
                                        <a class="btn-link" href="demandeur_inscription">
                                            <u>Créer un compte</u>
                                        </a>
                                    </p>
                                    <form data-request="onSignin" class="login_form">
                                                                                <div class="form-group">
                                            <label class="font-weight-600 text-color-orange" for="emailAddress">Email ou Telephone</label>
                                            <input class="form-control rounded-0" type="text" id="emailAddress" name="email_name" placeholder="Entrez votre Email ou Numero Téléphone">
                                        </div>
                                        <div class="form-group">
                                            <label class="font-weight-600 text-color-orange" for="loginPassword">Mot de passe</label>
                                            <input class="form-control rounded-0" type="password" id="loginPassword" name="password" placeholder="Entrez votre Mot de Passe">
                                        </div>

                                        <!-- <button class="btn btn-success btn-block rounded-0 my-4" type="submit" style="margin-right: 10px" data-attach-loading>
                                            Connexion
                                        </button> -->
                                        <button type="submit" class="btn btn-success btn-block rounded-0 my-4" data-attach-loading="">Connexion</button>
                                    </form>
                                    <p class="text-center">
                                        <a class="btn-link" href="https://www.agenceemploijeunes.ci/site">
                                            <u>Retourner à la page d'accueil</u>
                                        </a> ou
                                        <a class="btn-link" href="mot_de_passe_oublie">
                                            <u>Mot de passe oublié?</u>
                                        </a>
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
    background-color: #0c2f55 !important;
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
    color: #F8941E;
}

.oxyy-login-register .text-primary, .oxyy-login-register .btn-link {
    color: #007bff !important;
}

form {
    padding: 0;
    margin: 0;
    display: inline;
}

.oxyy-login-register .font-weight-600 {
    font-weight: 600 !important;
}

.text-color-orange {
    color: #F8941E;
}

.oxyy-login-register .form-control:not(.form-control-sm) {
    padding: 0.81rem 0.96rem;
    height: inherit;
}

.oxyy-login-register .form-control, .oxyy-login-register .custom-select {
    border-color: #dae1e3;
    font-size: 16px;
    color: #656565;
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