<template>
    <div>
      <!-- ======= Header ======= -->
    
    
     
     
           <header  id="header" class=" header">
          <div class="container-fluid d-flex align-items-center justify-content-around m-0 w-100">
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
          <nav id="navbar" class="navbar">
            <ul>
                <li>  <router-link to="/" class="nav-item nav-link">Accueil</router-link></li>
                              <li>  <router-link to="/apropos" class="nav-item nav-link">A propos</router-link> </li>
                              <li>  <router-link to="/services" class="nav-item nav-link">Services</router-link> </li>
                              <li>  <router-link to="/actualites" class="nav-item nav-link">Actualites</router-link> </li>
                              <li>  <router-link to="/formations" class="nav-item nav-link">Formations</router-link> </li>
                              <li>  <router-link to="/nos-realisations" class="nav-item nav-link">Nos realisations</router-link> </li>
                              <li>  <router-link to="/contact" class="nav-item nav-link">Contact</router-link> </li>
  
            </ul>
          </nav>
        <div class="second">
            <router-link to="/panier" class="btnCt" style="position: relative;" >
                <i class="bi bi-cart-fill"></i>
              <span>{{ nombreElementsPanier }}</span> 
          </router-link>
          <!-- v-if="shouldShowNavbar" -->
    
          <!-- <div v-if="shouldShowNavbar" >
            <div class="btnCt "  role="button" data-bs-toggle="dropdown" aria-expanded="false" >
          <i class="bi bi-person-fill"></i>
            <span> Mon compte </span>
            
         </div>
                  <ul class="dropdown-menu menu"  >
               <li><router-link to="/mon-espace"  class="dropdown-item d-flex justify-content-around" ><i class="bi bi-postcard pt-0"></i>Mon espace</router-link></li>
               <li><router-link to="/profil"  class="dropdown-item d-flex justify-content-around" ><i class="bi bi-building"></i>Mon profil</router-link></li>            
               <li><span class="dropdown-item d-flex justify-content-around " style="cursor:pointer;" @click="logout" ><i class="bi bi-box-arrow-in-right pt-0"></i>Déconnexion</span></li>
               
             </ul>
                 </div> -->
          <router-link to="/connexion" class="btnCt" >
            <i class=" bi bi-person-fill-lock"></i>
            
          </router-link>
        </div>
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
            <span>Menu</span>
          </i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
        </div>
      </header>
      <!-- End Top Bar -->
     
    </div>
  </template>
  
  <script>
//   import { mapGetters } from 'vuex';
  
  
  export default {
    name: 'MpmeNavbar',
  
   
    
    // computed: {
    //   ...mapGetters('user', ['isLoggedIn']),
    //  shouldShowNavbar() {
    //   this.$store.dispatch('user/loadLoggedInUser')
      
    //     return (
    //       this.isLoggedIn &&
    //       this.$route.path !== '/connexion-mpme' &&
    //       this.$route.path !== '/connexion-mpme/verification'
    //     );
    //   },
    //   loggedInUser() {
    //     return this.$store.getters['user/loggedInUser'];
    //   },
    // },
    
    // watch: {
    //   isLoggedIn(newValue) {
    //     console.log('User is logged in:', newValue);
    //   },
    // },
    computed: {
    panier() {
      return this.$store.state.panier;
    },
  },
  
    data() {
      return {
        // panier:[],
        nombreElementsPanier: 0
  
      };
    },
   
  
    mounted() {
//    console.log("navbarrrr",this.loggedInUser);

this.mettreAJourNombreElementsPanier();
  
      document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
   
      if(event.target.classList.contains('dropdown-toggle') ){
        event.target.classList.toggle('toggle-change');
      }
      else if(event.target.parentElement.classList.contains('dropdown-toggle')){
        event.target.parentElement.classList.toggle('toggle-change');
      }
    })
  });
  
  
  
      /**
  * Mobile nav toggle
  */
      const mobileNavShow = document.querySelector('.mobile-nav-show');
      const mobileNavHide = document.querySelector('.mobile-nav-hide');
  
      document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
        el.addEventListener('click', function (event) {
          event.preventDefault();
          mobileNavToogle();
        })
      });
  
      function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
  
      }
  
      document.querySelectorAll('#navbar a').forEach(navbarlink => {
  
    navbarlink.addEventListener('click', (e) => {
      e.preventDefault();
  
      if (navbarlink.nextElementSibling && navbarlink.nextElementSibling.tagName === 'UL') {
        navbarlink.nextElementSibling.classList.toggle('dropdown-active');
        navbarlink.classList.toggle('active');
        const dropdownIndicator = navbarlink.querySelector('.dropdown-indicator');
        dropdownIndicator.classList.toggle('bi-chevron-up');
        dropdownIndicator.classList.toggle('bi-chevron-down');
      } else {
        if (document.querySelector('.mobile-nav-active')) {
          document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
        }
      }
    });
  });
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll('#navbar a');
  
    function navbarlinksActive() {
      navbarlinks.forEach(navbarlink => {
   
  
        if (!navbarlink.hash) return;
  
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
  
        let position = window.scrollY + 200;
  
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);
  
    const selectHeader = document.querySelector('#header');
  
  
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;
  
      const headerFixed = () => {
        if ((headerOffset - window.scrollY) <= 0) {
          selectHeader.classList.add('sticked');
          if (nextElement) nextElement.classList.add('sticked-header-offset');
        } else {
          selectHeader.classList.remove('sticked');
          if (nextElement) nextElement.classList.remove('sticked-header-offset');
        }
      }
      window.addEventListener('load', headerFixed);
      document.addEventListener('scroll', headerFixed);
    }
  
  

    },
    watch: {
    $route: 'mettreAJourNombreElementsPanier'
  },
  
    methods: {
        mettreAJourNombreElementsPanier() {
      const panier = JSON.parse(localStorage.getItem('panier')) || [];
      this.nombreElementsPanier = panier.length;
    }
    
    //   async logout() {
    //   try {      
        
                    
    //                       await this.$store.dispatch('user/clearLoggedInUser'); // Appel de l'action pour déconnecter l'utilisateur
    //                      this.$router.push('/connexion-mpme'); // Redirection vers la page de connexion
                  
  
    //   } catch (error) {
    //     console.error('Erreur lors de la déconnexion :', error);
    //   }
    // }
    },
  };
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

@media screen and (max-width: 991px){
 .dia-logo {
display: none;
}
.dia-logo1 {
display: block;
width: 100px;
    height: 70px;
margin-top: 0 !important;
}

.dia-logo1 img{

width: 100%;
height: 100%;
}


}  



  .dropdown-toggle::after{
    display:none;
  
  }
  
  .btnCt{
      /* padding: 12px 0 0 0; */
      font-size: 14px;
      font-weight: 500;
      color: var(--color-primary);
      cursor: pointer;
      outline: none;
      display: flex;
      flex-direction: column;
      align-items: center;
  
  }
  .btnCt i{
  font-size: 25px;
  }

  .btnCt span{
  position: absolute;
  border-radius: 50%;
    font-size: 25px;
    top: -11px;
    display: flex;
    width: 40px;
    height: 23px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-default);
    font-weight: 900;
  }
  .btnCt:hover{
  /* color: #fff; */
  }
  .btnLogin {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    background-color: #F9D310;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    outline: none;
  }
  i span{
  font-size: 12px;
  
  }

  .second{

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (min-width: 1280px) {
  
    .second{
  
    width: 104px;
    height: 59px;
   
   
  }
  }
  @media (max-width: 1280px) {
    
    .second{
    /* border: 1px solid red; */
    justify-content: flex-end !important;
    width: 100%;
    margin-right: 14px;
  }
  
  .header .logo{
  
    width: 330px;
  }
  .btnCt{
    
    /* color:  rgba(255, 255, 255, 0.6) ; */
    font-style: italic;
    margin-left: 20px;
    }
    .btnCt i{
  padding-top: 10px;
    
    
    }

    .btnCt span{
  
    font-size: 25px;
    top: 5px;
   
  }
  
  }
  
  .header-right {
    float: right;
    width: 436px;
  
  }
  
  ul.top-info-box {
    list-style: none;
    margin: 0;
    padding: 0;
    float: right;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  ul.top-info-box li {
    position: relative;
    float: left;
    margin-left: 0;
    border-right: 1px solid #dedede;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  
    padding: 5px 10px;
  
  }
  
  ul.top-info-box li .info-box .info-box-content {
    display: inline-block;
    font-family: "Montserrat", sans-serif;
    flex-direction: column;
  }
  
  ul.top-info-box li .info-box .info-box-title {
    font-size: 11px;
    margin-bottom: 8px;
    line-height: normal;
  }
  
  ul.top-info-box li .info-box .info-box-subtitle {
    margin: 0;
    line-height: normal;
    font-size: 12px;
    font-weight: 700;
    color: #111;
  }
  
  
  @media (max-width: 1100px) {
    .header-right {
    
      width: 320px;
  
    }
    ul.top-info-box {
     flex-direction: column;
    }
  
    ul.top-info-box li {
      border-bottom: 1px solid #dedede;
      border-right:none ;
      width: 100%;
      text-align: center;
  }
  
  }
  
  @media (max-width: 800px) {
  
    ul.top-info-box li .info-box .info-box-title {
      font-size: 11px;
    
    }
    
    ul.top-info-box li .info-box .info-box-subtitle {
   
      font-size: 12px;
    
    }
  }
  
  @media (max-width: 600px) {
  
    .header-right {
    
      width: auto;
  
    }
  }
  


  section {
  padding: 60px 0;
  overflow: hidden;
}
#shadow-host-companion{

padding: 0 !important;
}

/* .sections-bg {
  background-color: #f6f6f6;
} */

.section-header {
  text-align: center;
  padding-bottom: 30px;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: var(--color-primary);
}

.section-header h2:after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: var(--color-primary);
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.section-header p {
  margin-bottom: 0;
  /* color: #6f6f6f; */
  font-size: 18px;
}

@media (max-width: 768px) {
  .section-header p {
   
    font-size: 16px;
    text-align: justify;
  }

  .section-header {
    text-align: center;
    padding-top: 20px;
  }

  .sign{

    font-size: 14px !important;
  }
  
}


/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs .page-header {
  padding: 60px 0 60px 0;
  min-height: 20vh;
  position: relative;
  background-color: var(--color-primary);
}

.breadcrumbs .page-header h2 {
  font-size: 56px;
  font-weight: 500;
  color: #fff;
  font-family: var(--font-secondary);
}

.breadcrumbs .page-header p {
  color: rgba(255, 255, 255, 0.8);
}

.breadcrumbs nav {
  background-color: #f6f6f6;
  padding: 20px 0;
}

.breadcrumbs nav ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-default);
}

.breadcrumbs nav ol a {
  color: var(--color-primary);
  transition: 0.3s;
}

.breadcrumbs nav ol a:hover {
  text-decoration: underline;
}

.breadcrumbs nav ol li+li {
  padding-left: 10px;
}

.breadcrumbs nav ol li+li::before {
  display: inline-block;
  padding-right: 10px;
  color: var(--color-secondary);
  content: "/";
}

/*--------------------------------------------------------------
# Scroll top button
--------------------------------------------------------------*/
.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: -15px;
  z-index: 99999;
  background: var( --color-secondary);
  width: 44px;
  height: 44px;
  border-radius: 50px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}

.scroll-top:hover {
  background: rgba(248, 90, 64, 0.8);
  color: #fff;
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
  bottom: 15px;
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  overflow: hidden;
  background: #fff;
  transition: all 0.6s ease-out;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #fff;
  border-color: var(--color-primary) transparent var(--color-primary) transparent;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: animate-preloader 1.5s linear infinite;
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Disable aos animation delay on mobile devices
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }

  .section-header h2 {
    font-size: 23px;
    margin-bottom: 0 !important;
   
  }

  .text-justify{

    font-size: 16px !important;
    margin-bottom: 10px !important;
  }


}



/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.topbar {
  /* background: var(--color-secondary); */
  height: 130px;
  font-size: 14px;
  transition: all 0.5s;
  /* color: #fff; */
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.topbar1{

/* border: 1px solid red; */
height: 100%;
align-items: center;
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
}
.topbar1 img {
  max-height: 90px;
  margin-right: 6px;
}
.top-right1{

  display: flex;
  align-items: center;
}


.topbar .texte{

/* border: 1px solid red; */
display: flex;
flex-direction: column;
font-family: cursive;
align-items: center;
color: var(--color-primary);
/* width: 198px; */
}
.topbar .texte span{

  font-size: 11px;
  font-family: 'Dai Banna SIL', serif;
  }
  

  
  .topbar .texte h1 {
    font-size: 20px;
    margin: 0;
    letter-spacing: 0.8px;
    font-family: 'Racing Sans One', cursive;
  
  }

  @media (max-width: 1100px) {

    .topbar {
     
      height: 170px;
    
    }
    .topbar1 img {
      max-height: 100px;
    }
  

    .topbar1{

     
      width: 97%;
      }
  }
  @media (max-width: 800px) {

    .topbar1 img {
      max-height: 80px;
    }
    
    
  
    .topbar .texte span{
    
      font-size: 9px;
      }
        
      .topbar .texte h1 {
        font-size: 17px;
      
      }
  }

  @media (max-width: 768px) {
    .topbar{
      display: none;
    }

  }

  @media (max-width: 450px) {


      .header .logo h1 {
        font-size: 12px;
   
      
      }

      .header .logo span{

        font-size: 5px;

        }
  }
/* .topbar .contact-info i {
  font-style: normal;
  color: #fff;
  line-height: 0;
}

.topbar .contact-info i a,
.topbar .contact-info i span {
  padding-left: 5px;
  color: #fff;
} */



/* .topbar .contact-info i a {
  line-height: 0;
  transition: 0.3s;
} */

/* .topbar .contact-info i a:hover {
  color: #fff;
  text-decoration: underline;
}

.topbar .social-links a {
  color: rgba(255, 255, 255, 0.7);
  line-height: 0;
  transition: 0.3s;
  margin-left: 20px;
}

.topbar .social-links a:hover {
  color: #fff;
} */

.header {
  transition: all 0.5s;
  z-index: 997;

  background-color: #fff;
  width: 100%;
  display: flex;
    align-items: center;
    justify-content: center;
}

.header.sticked {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 90px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);

}
.header .logo{

/* border: 1px solid red; */
color: white !important;
display: flex;
flex-direction: column;
font-family: 'Racing Sans One', cursive;
align-items: center;
width: 198px;
/* display: none; */
}
.header .logo span{

font-size: 8px;
font-family: var(--font-primary);
}

/* .header .logo img {
  max-height: 40px;
  margin-right: 6px;
} */

.header .logo h1 {
  font-size: 20px;
  margin: 0;
  /* font-weight: 600; */
  letter-spacing: 0.8px;
  color: #fff;
  font-family: 'Racing Sans One', cursive;

}

@media (max-width: 450px) {

  


    .header .logo h1 {
      font-size: 17px;
 
    
    }

    .header .logo span{

      font-size: 6px;

      }
}

/* .header .logo h1 span {
  color: #f96f59;
} */

.sticked-header-offset {
  margin-top: 70px;
}

section {
  scroll-margin-top: 70px;
}

/*--------------------------------------------------------------
# Desktop Navigation
--------------------------------------------------------------*/

@media (min-width: 1281px) {
  .navbar {
    padding: 0;
  }

  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navbar li {
    position: relative;
  }

  .navbar>ul>li {
    white-space: nowrap;
    padding: 10px 0 10px 28px;
  }

  .navbar a,
  .navbar a:focus {
    /* display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px; */
    font-family: var(--font-secondary);
    font-size: 14px;
   
    white-space: nowrap;
    transition: 0.3s;
    color: #282350;
    font-weight: 700;
    padding-bottom: 20px;
    display: inline;
    position: relative;
    font-family: Poppins;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar a:before {
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

.navbar a:hover:before, 
.navbar a.active:before {
  width: 100%;
}

  /* .navbar>ul>li>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color:var( --color-secondary);
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }

  .navbar a:hover:before,
  .navbar li:hover>a:before,
  .navbar .active:before {
    visibility: visible;
    width: 100%;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover>a {
    color: #fff;
  } */

  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 28px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 4px;
  }

  .navbar .dropdown ul li {
    min-width: 200px;
  }

  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    font-weight: 600;
    color: #006a5d;
  }

  .navbar .dropdown ul a i {
    font-size: 12px;
  }

  .navbar .dropdown ul a:hover,
  .navbar .dropdown ul .active:hover,
  .navbar .dropdown ul li:hover>a {
    color: var(--color-secondary);
  }

  .navbar .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  .navbar .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }
}

@media (min-width: 1280px) and (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

@media (min-width: 1280px) {

  .mobile-nav-show,
  .mobile-nav-hide {
    display: none;
  }
}

/*--------------------------------------------------------------
# Mobile Navigation
--------------------------------------------------------------*/
@media (max-width: 1279px) {
  .navbar {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    max-width: 400px;
    bottom: 0;
    transition: 0.3s;
    z-index: 9997;
    height: 100%;
  }

  .header {
    
    justify-content: flex-end;
}

  .navbar ul {
    position: absolute;
    inset: 0;
    padding: 50px 0 10px 0;
    margin: 0;
    background-color: #fff;
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 900;
    color: var(--color-default);
    white-space: nowrap;
    transition: 0.3s;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover>a {
    color: var(--color-default);
  }

  .navbar .getstarted,
  .navbar .getstarted:focus {
    background: var(--color-primary);
    padding: 8px 20px;
    border-radius: 4px;
    margin: 15px;
    color: #fff;
  }

  .navbar .getstarted:hover,
  .navbar .getstarted:focus:hover {
    color: #fff;
    background: rgba(0, 131, 116, 0.8);
  }

  .navbar .dropdown ul,
  .navbar .dropdown .dropdown ul {
    position: static;
    display: none;
    padding: 10px 0;
    margin: 10px 20px;
    transition: all 0.5s ease-in-out;
    background-color: #007466;
    border: 1px solid #006459;
  }

  .navbar .dropdown>.dropdown-active,
  .navbar .dropdown .dropdown>.dropdown-active {
    display: block;
  }

  .mobile-nav-show {
    /* color: #fff; */
    font-size: 28px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    z-index: 100;
    margin-right: 10px;
  }
  .mobile-nav-show:hover{
  
    color: var(--color-default);
  }
  .mobile-nav-hide {
    color: var(--color-default);
    font-size: 32px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 9999;
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .navbar {
    right: 0;
  }

  .mobile-nav-active .navbar:before {
    content: "";
    position: fixed;
    inset: 0;
    background: #d9d9d9a1;;
    z-index: 9996;
  }
}
 
  </style>