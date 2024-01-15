<template lang="">
    <div>
        <header id="dia-header" class="dia-main-header">
            <div class="w-100">
                <div class="dia-main-header-content clearfix">

                    <div class="dia-logo float-left">
                        <a href="#"><img src="@/assets/site/logo.jpeg" alt=""></a>
                    </div>

                    <div class="dia-logo1 float-left">
                        <a href="#"><img src="@/assets/site/logo1.jpeg" alt=""></a>
                    </div>
                    <div class="dia-main-menu-item float-right">
                        <nav class="dia-main-navigation  clearfix ul-li">
                            <ul id="main-nav" class="navbar-nav text-capitalize clearfix">
                              <li class="side-demo position-relative"><router-link to="/" ></router-link>Accueil </li>
                              <li><a href="about.html" target="_blank">A propos</a></li>
                              <li class="dropdown">
                                <a href="#">Services</a>
                                <ul class="dropdown-menu clearfix">
                                    <li><router-link to="#">Team Page</router-link></li>
                                    <li><a target="_blank" href="service.html">Service 1</a></li>
                                    <li><a target="_blank" href="service-2.html">Service 2</a></li>
                                    <li><a target="_blank" href="faq.html">FAQ Page</a></li>
                                    <li><a target="_blank" href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a target="_blank" href="terms-condition.html">Terms & Condition</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">Formations</a>
                                <ul class="dropdown-menu clearfix">
                                    <li><router-link to="#">Team Page</router-link></li>
                                    <li><a target="_blank" href="service.html">Service 1</a></li>
                                    <li><a target="_blank" href="service-2.html">Service 2</a></li>
                                    <li><a target="_blank" href="faq.html">FAQ Page</a></li>
                                    <li><a target="_blank" href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a target="_blank" href="terms-condition.html">Terms & Condition</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html" target="_blank">Contact</a></li>
                           
                          
                           
                        </ul>
                    </nav>
                </div>

                <button class="c-button c-button--gooey"> 
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
                            <a href="%21.html#"><img src="@/assets/img/d-agency/logo/logo.png" alt=""></a>
                        </div>
                        <nav class="dia-mobile-main-navigation  clearfix ul-li">
                         <ul id="m-main-nav" class="navbar-nav text-capitalize clearfix">
                          <li class="side-demo position-relative"><a href="#!">Demos</a></li>
                          <li><a href="about.html" target="_blank">About</a></li>
                          <li class="dropdown">
                            <a href="#">Pages</a>
                            <ul class="dropdown-menu clearfix">
                                <li><a target="_blank" href="team.html">Team Page</a></li>
                                <li><a target="_blank" href="service.html">Service 1</a></li>
                                <li><a target="_blank" href="service-2.html">Service 2</a></li>
                                <li><a target="_blank" href="faq.html">FAQ Page</a></li>
                                <li><a target="_blank" href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a target="_blank" href="terms-condition.html">Terms & Condition</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Contact</a>
                            <ul class="dropdown-menu clearfix">
                                <li><a target="_blank" href="contact.html">Contact 1</a></li>
                                <li><a target="_blank" href="contact-2.html">Contact 2</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Portfolio</a>
                            <ul class="dropdown-menu clearfix">
                                <li><a target="_blank" href="portfolio.html">Portfolio Filter</a></li>
                                <li><a target="_blank" href="portfolio-2.html">Portfolio Page 2</a></li>
                                <li><a target="_blank" href="project-single.html">Portfolio Details</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">Blog</a>
                            <ul class="dropdown-menu clearfix">
                                <li><a target="_blank" href="blog.html">Blog Page</a></li>
                                <li><a target="_blank" href="blog-grid.html">Blog Page</a></li>
                                <li><a target="_blank" href="blog-single.html">Blog Details</a></li>
                            </ul>
                        </li>
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