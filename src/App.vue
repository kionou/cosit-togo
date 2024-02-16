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
   import "@/assets/css/fontawesome-all.css"
   import "@/assets/css/animate.css"
   import "@/assets/css/jquery.fancybox.min.css"
   import "@/assets/css/odometer-theme-default.css"
   import "@/assets/css/owl.carousel.css"
   import "@/assets/css/side-demo.css"
   import "@/assets/css/style.css"
   import "@/assets/css/business-4.css"
   import "@/assets/css/rs6.css"
	import "@/assets/css/flaticon-11.css"
	import "@/assets/css/jquery.mCustomScrollbar.min.css"
	import "@/assets/css/slick.css"
	import "@/assets/css/slick-theme.css"
  import "@/assets/css/swiper.css"
	import "@/assets/css/app-landing.css"

  import "@/assets/css/flaticon-32.css"
		import "@/assets/css/rs6-32.css"
		import "@/assets/css/revulation-arrow-32.css"
		import "@/assets/css/style-32.css"
   import  "@/assets/fruits/css/font-awesome.min.css" 
   import  "@/assets/fruits/css/elegant-icons.css" 
   import  "@/assets/fruits/css/nice-select.css" 
   import  "@/assets/fruits/css/jquery-ui.min.css" 
  
   import  "@/assets/fruits/css/slicknav.min.css" 
   import  "@/assets/fruits/css/style.css" 

   import "@/assets/fruit/css/style.css"
  

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
      document.title = `Cosit-Togo - ${title}`

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  },
  
}
</script>
<style lang="css" scoped>
  
</style>