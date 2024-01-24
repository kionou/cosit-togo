<template >
    <div>
         <div class="container-fluid fixed-top">

            <!-- <div class="container topbar bg-primary d-none d-lg-block">
              
            </div> -->
            
            <div class="">
                <nav class="navbar navbar-light bg-white navbar-expand-xl">
                    <!-- <a href="index.html" class="navbar-brand"><h1 class="text-primary display-6">Fruitables</h1></a> -->
                    <div class="dia-logo float-left">
                        <router-link to="/">
                            <img src="@/assets/site/logo.jpeg" alt="">
                        </router-link>
                       
                    </div>

                    <div class="dia-logo1 float-left">
                        <router-link to="/">
                            <img src="@/assets/site/logo1.jpeg" alt="">
                        </router-link>
                    </div>
                    
                  
                    <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div class="navbar-nav mx-auto dia_main">
                            <li>  <router-link to="/" class="nav-item nav-link">Accueil</router-link></li>
                              <li>  <router-link to="/apropos" class="nav-item nav-link">A propos</router-link> </li>
                              <li>  <router-link to="/services" class="nav-item nav-link">Services</router-link> </li>
                              <li>  <router-link to="/actualites" class="nav-item nav-link">Actualites</router-link> </li>
                              <li>  <router-link to="/formations" class="nav-item nav-link">Formations</router-link> </li>
                              <li>  <router-link to="/nos-realisations" class="nav-item nav-link">Nos realisations</router-link> </li>
                              <li>  <router-link to="/contact" class="nav-item nav-link">Contact</router-link> </li>

                        </div>
                       
                    </div>

                    <div class="d-flex m-3 me-0">
                            <button class="c-button c-button--gooey"  @click="$router.push({ path: '/connexion' })" > 
                    <i class="bi bi-box-arrow-in-right"></i>
                       Se Connecter
                        <div class="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: block; height: 0; width: 0;">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                </defs>
                </svg>
                        </div>

                        <div class="navbar-toggler py-2 px-3"  data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="bi bi-list"></span>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <div class="haut"></div>

</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>


.dia-logo {

width: auto;
height: 80px;
margin-top: 0 !important;
}

.dia-logo1 {

display: none;
}

.dia-logo img{

width: 100%;
height: 100%;
}

.c-button {
color: #000;
font-weight: 700;
font-size: 13px;
text-decoration: none;
padding: 0.9em 1em;
cursor: pointer;
background-color: white;
display: inline-block;
vertical-align: middle;
position: relative;
z-index: 1;
display: flex;
justify-content: space-between;
align-items: center;
}

.c-button--gooey {
color: var(--color-primary);
text-transform: uppercase;
letter-spacing: 2px;
/* border: 2px solid #06c8d9; */
border: none;
border-radius: 0;
position: relative;
transition: all 700ms ease;
}

.c-button--gooey .c-button__blobs {
height: 100%;
filter: url(#goo);
overflow: hidden;
position: absolute;
top: 0;
left: 0;
bottom: -3px;
right: -1px;
z-index: -1;
}

.c-button--gooey .c-button__blobs div {
background-color: var(--color-primary);
width: 34%;
height: 100%;
border-radius: 100%;
position: absolute;
transform: scale(1.4) translateY(125%) translateZ(0);
transition: all 700ms ease;

}

.c-button--gooey .c-button__blobs div:nth-child(1) {
left: -5%;
}

.c-button--gooey .c-button__blobs div:nth-child(2) {
left: 30%;
transition-delay: 60ms;
}

.c-button--gooey .c-button__blobs div:nth-child(3) {
left: 66%;
transition-delay: 25ms;
}

.c-button--gooey:hover {
color: var(--color-blanc);
}

.c-button--gooey:hover .c-button__blobs div {
transform: scale(1.4) translateY(0) translateZ(0);
}


@media screen and (max-width: 991px){
 .dia-logo {
display: none;
}
.dia-logo1 {
display: block;
width: auto;
height: 50px;
margin-top: 0 !important;
}

.dia-logo1 img{

width: 100%;
height: 100%;
}


}

.navbar-toggler{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    font-size: 40px;
    color: var(--color-primary);
    border:none;
    cursor: pointer;
    
}

.dia_main li a {
  color: #282350;
  font-weight: 700;
  padding-bottom: 20px;
  display: inline;
  position: relative;
  font-family: "Poppins";
}

.dia_main li a:before {
  content: "";
  left: 0;
  right: 0;
  bottom: 0;
  height: 5px;
  width: 0%;
  margin: 0 auto;
  position: absolute;
  transition: 0.5s all ease-in-out;
  background-image: linear-gradient(81deg, #e02b29 0%, #ff0303ed 75%, #ff3505 100%);
}

.dia_main li a:hover:before, 
.dia_main li a.active:before {
  width: 100%;
}


@media (min-width: 1200px) {
  .navbar-toggler{

    display: none;
  }
}
    
</style>