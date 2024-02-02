<template >
    <div>
      <!-- Start of breadcurmb section
    	============================================= -->
		<div id="banner-area" class="banner-area">
            <div class="banner-text">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="banner-heading">
                                <h1 class="banner-title">Actualités</h1>
                                <nav aria-label="breadcrumb">

                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><router-link to="/" >Accueil</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><router-link to="/formations" >Actualités</router-link></li>
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

        	<!-- Blog Section -->
	<section class="aplpg-blog-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<div class="aplpg-title-area text-center wow fadeInUp">
						
						<div class="saas_two_section_title saas2-headline text-center">
        			
						<p>
							Découvrez les dernières actualités et restez informé(e) sur nos événements, nouveautés et réussites.
						</p>
        			</div>
					</div>
				</div>
			</div>
			<div v-if="paginatedItems.length === 0" class="noresul">
                      <span> Il n'y a aucune actualité disponible </span>
                      </div> 
			<div class="aplpg-blog-content" v-else>
				<div class="aplpg-blog-slider">
				

					<div class="col-lg-3" v-for="actualite in paginatedItems " :key="actualite.id">
						<div class="aplpg-blog-column">
							<div class="aplpg-img-wrapper">
								<img :src="actualite.images" alt="">
							</div>
							<div class="aplpg-blog-meta">
								
								<span><i class="fas fa-calendar-alt"></i>{{ formatDate(actualite.created_at) }}</span>
							</div>
							<div class="aplg-blog-column-txt">
								<div class="aplpg-headline">
									<router-link :to="'/actualites/' + actualite.id"><h6>{{ actualite.titre }}</h6></router-link>
								</div>
								<div class="aplpg-pera-txt">
									<p> {{ truncateText(actualite.content, 14) }} </p>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</section>
	<!-- Blog Section End --> 

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
      actualites: [],
	  loading:true,
      currentPage: 1,
      itemsPerPage: 12,
      totalPageArray: [], 
    };
  },
  computed: {


totalPages() {
return Math.ceil(this.actualites.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.actualites.slice(startIndex, endIndex);
},
},
  mounted() {
    this.fetchActualites();
  },
  methods: {
    async fetchActualites() {
      try {
        await this.$store.dispatch('fetchActualites');
        const actualites = JSON.parse(JSON.stringify(this.$store.getters.getActualites));
		    console.log(actualites);
        this.actualites = actualites.filter(offre => offre.publish === 1);
        
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error.message);
      }
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
      return  this.actualites.slice(startIndex, endIndex);
    },
	truncateText(text, maxWords) {
      const words = text.split(' ');
      console.log(words);
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
      }
      return text;
    },
	formatDate(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString('fr-FR', options);
    },
  },
 
    
}
</script>
<style lang="css" scoped>

.banner-area {
   
   background-image: url('../assets/site/banner2.jpg'); 
}
    
</style>