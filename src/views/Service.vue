<template >
       <Loading v-if="loading" style="z-index: 999999;"></Loading>
    <div>
        
          <!-- Start of breadcurmb section
    	============================================= -->
		<div id="banner-area" class="banner-area">
            <div class="banner-text">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="banner-heading">
                                <h1 class="banner-title">Services</h1>
                                <nav aria-label="breadcrumb">

                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><router-link to="/" >Services</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><router-link to="/services" >A propos</router-link></li>
                                    </ol>
                                </nav>
                            </div>
                        </div><!-- Col end -->
                    </div><!-- Row end -->
                </div><!-- Container end -->
            </div><!-- Banner text end -->
        </div>
    <!-- End of breadcurmb section
    	============================================= -->  

    <!-- Start of Service page section
        ============================================= -->
        <section id="saas_two_service" class="saas_two_service_section">
            <div class="container">
                <div class="saas_two_section_title saas2-headline text-center">
                    <div class="saas_two_section_title saas2-headline text-center">
        			
					<p>
						Découvrez notre gamme complète de services conçus pour répondre à vos besoins spécifiques. De la conception à la mise 
                        en œuvre, nous offrons des solutions adaptées à chaque étape de votre parcours.
					</p>
				</div>
                </div>
                <!-- /section title -->
                <div class="service_content">
                  <div v-if="paginatedItems.length === 0" class="noresul">
                      <span> Il n'y a aucun service disponible </span>
                      </div> 
                    <div class="row justify-content-md-center" v-else>
                        <div v-for="service in paginatedItems" :key="service.id" class="col-lg-4 col-md-6  wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div class="service_content_box relative-position">
                                <div class="service_icon_box relative-position">
                                        <img :src="service.Photos" alt="">
                                </div>
                                <div class="service_text_box saas2-headline pera-content">
                                    <h3><router-link :to="'/services/' + service.id">{{ service.Name }}</router-link></h3>
                                    <p>{{ truncateText(service.Description, 14) }}.</p>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    
                </div>
            </section>
    <!-- End of Service section
        ============================================= --> 

        <div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
    </div>
</template>
<script>
import Loading from '@/components/others/loading.vue';
import Pag from '@/components/others/pagination.vue';


export default {
    components: {
         Loading ,  Pag,

    },
  data() {
    return {
      services: [],
      loading:true,
      currentPage: 1,
      itemsPerPage: 12,
      totalPageArray: [], 
   
    };
  },
  computed: {


totalPages() {
return Math.ceil(this.services.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.services.slice(startIndex, endIndex);
},
},

  
  mounted() {
    this.fetchServices();
  },
  methods: {
    async fetchServices() {
      try {
        await this.$store.dispatch('fetchServices');
        const services = JSON.parse(JSON.stringify(this.$store.getters.getServices));
        console.log(services);
        this.services = services.filter(offre => offre.Publish === 1);
        
        this.loading = false
      } catch (error) {
        console.error("Erreur lors de la récupération des services :", error.message);
      }
    },
    truncateText(text, maxWords) {
      const words = text.split(' ');
      console.log(words);
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
      }
      return text;
    },

    updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Utilisez 'auto' pour un défilement instantané
      });
    },
    updatePaginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
     
      const endIndex = startIndex + this.itemsPerPage;
      return  this.services.slice(startIndex, endIndex);
    },
    
  },
  
};
</script>
<style lang="css" scoped>
.banner-area {
   
   background-image: url('@/assets/site/banner2.jpg'); 
}


    
</style>