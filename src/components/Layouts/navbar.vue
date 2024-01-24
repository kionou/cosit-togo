<template >
    <div>
        <header id="dia-header" class="dia-main-header">
            <div class="w-100">
                <div class="dia-main-header-content clearfix">

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
                    <div class="dia-main-menu-item float-right">
                        <nav class="dia-main-navigation  clearfix ul-li">
                            <ul id="main-nav" class="navbar-nav text-capitalize clearfix">
                              <li>  <router-link to="/">Accueil</router-link></li>
                              <li>  <router-link to="/apropos">A propos</router-link> </li>
                              <li>  <router-link to="/services">Services</router-link> </li>
                              <li>  <router-link to="/formations">Formation</router-link> </li>
                              <li>  <router-link to="/contact">Contact</router-link> </li>
                              
                           
                        </ul>
                    </nav>
                </div>

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
            <!-- /desktop menu -->
            <div class="dia-mobile_menu relative-position">
                <div class="dia-mobile_menu_button dia-open_mobile_menu">
                    <i class="bi bi-list"></i>
                </div>
                <div class="dia-mobile_menu_wrap">
                    <div class="mobile_menu_overlay dia-open_mobile_menu"></div>
                    <div class="dia-mobile_menu_content">
                        <div class="dia-mobile_menu_close dia-open_mobile_menu">
                            <i class="far fa-times-circle"></i>
                        </div>
                        <div class="m-brand-logo text-center">
                            <router-link to="/">
                            <img src="@/assets/site/logo1.jpeg" alt="">
                        </router-link>
                        </div>
                        <nav class="dia-mobile-main-navigation  clearfix ul-li">
                         <ul id="m-main-nav" class="navbar-nav text-capitalize clearfix">
                            <li>  <router-link to="/">Accueil</router-link></li>
                              <li>  <router-link to="/apropos">A propos</router-link> </li>
                              <li>  <router-link to="/services">Services</router-link> </li>
                              <li>  <router-link to="/formations">Formation</router-link> </li>
                              <li>  <router-link to="/contact">Contact</router-link> </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- /mobile-menu -->
    </div>
</div>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        
    },

    methods: {
        DiaMobileMenu: function (){
				$('.dia-open_mobile_menu').on("click", function() {
					$('.dia-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.dia-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.dia-mobile_menu li.dropdown ul').length){
					$('.dia-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.dia-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
    },

    DiaHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.dia-main-header').addClass('dia-sticky-menu')
					} else {
						jQuery('.dia-main-header').removeClass('dia-sticky-menu')
					}
				})
				$('.dia-main-navigation ul li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -0
							}, 1000);
							return false;
						}
					}
				});

                
			},

            StrOnePageNav: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.str-main-header').addClass('str-sticky-menu')
					} else {
						jQuery('.str-main-header').removeClass('str-sticky-menu')
					}
				})
			},
            StrMobileMenu: function (){
				$('.str-open_mobile_menu').on("click", function() {
					$('.str-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.str-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.str-mobile_menu li.dropdown ul').length){
					$('.str-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.str-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
            SaaSCMobileMenu: function (){
				$('.s2-open_mobile_menu').on("click", function() {
					$('.s2-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.s2-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.s2-mobile_menu li.dropdown ul').length){
					$('.s2-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.s2-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},
    
}
</script>
<style lang="css" scoped>
.dia-main-header-content {
    display: flex !important;
    width: 100% !important;
    justify-content:  space-around;
    align-items: center;
}
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



    
</style>