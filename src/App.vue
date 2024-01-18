<template lang="">
  <div>
    <RouterView />
  </div>
</template>


<script>

  import AOS from "aos/dist/aos"

// import "@/assets/vendor/aos/aos.css"
import "aos/dist/aos.css"
  //  import "@/assets/css/bootstrap.min.css"
  //  import "@/assets/css/fontawesome-all.css"
   import "@/assets/css/animate.css"
   import "@/assets/css/jquery.fancybox.min.css"
   import "@/assets/css/odometer-theme-default.css"
   import "@/assets/css/owl.carousel.css"
   import "@/assets/css/side-demo.css"
   import "@/assets/css/style.css"
   
  import "@/assets/js/jquery.js"
  // import "@/assets/js/popper.min.js"
  import "@/assets/js/appear-2.js"
  // import "@/assets/js/bootstrap.min.js"
  import "@/assets/js/jquery.fancybox.js"
  import "@/assets/js/tilt.jquery.min.js"
  import "@/assets/js/owl.js"
  // import "@/assets/js/aos.js"
  // import "@/assets/js/wow.min.js"
  import "@/assets/js/slick.js"
  import "@/assets/js/jquery.barfiller.js"
  import "@/assets/js/typer-new.js"
  import "@/assets/js/jquery.mCustomScrollbar.concat.min.js"
  import "@/assets/js/parallax-scroll.js"
  import "@/assets/js/side-demo.js"
  import "@/assets/js/odometer.js"
  import "@/assets/js/script.js"

  export default {
  name:'App',
  watch: {
    created() {
      AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    },
    $route(to,) {
      const name = to.name.toLowerCase()
      const title = name 
        // ? `${name} (${to.href.split('/')[2].toLowerCase()})`
        // : name
      document.title = `cosit-Togo - ${title}`

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  
}
</script>
<style lang="css" scoped>
  
</style>