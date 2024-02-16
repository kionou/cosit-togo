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
                                <h1 class="banner-title">Réalisations</h1>
                                <nav aria-label="breadcrumb">

                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><router-link to="/" >Accueil</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><router-link to="/nos-realisations" >Réalisations</router-link></li>
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

		<!-- Service Start -->
		<section id="applghu-service" class="applghu-service-area" data-background="assets/img/studio-img-32/service-bg.jpg">
			<div class="container">

				<!-- Section Heading Start -->
				<div class="row">
					<div class="col-xl-12 text-center">
						<div class="saas_two_section_title saas2-headline text-center">
        			
					<p>
						Plongez dans notre liste de réalisations pour découvrir comment nous avons transformé des
						 idées en résultats concrets. Ensemble, nous bâtissons un avenir prometteur.
					</p>
				</div>
					</div>
				</div>
				<!-- Section Heading End -->
				<div v-if="paginatedItems.length === 0" class="noresul">
                      <span> Il n'y a aucun projet disponible </span>
                      </div> 
				<div class="row justify-content-center" v-else>
					<div v-for="project in paginatedItems" :key="project.id" class="col-xl-3 col-md-4">
						<div class="applghu-single-service wow fadeInUp" data-wow-delay="0.2s">
							<div class="applghu-service-icon-box">
								<!-- <img :src="project.Images" alt=""> -->
                <img v-if="isValidImage(project.Images)" :src="project.Images" alt="">
                <img v-else src="@/assets/site/logo1.jpeg" alt="">
							</div>
							<h3>{{ project.Name }}</h3>
							<p> {{ project.Description }} </p>
							<a :href="project.ProjectOwner" target="blank" class="applghu-service-btn"><i class="bi bi-eye-fill"></i></a>
							<div v-if="project.ProgressDone === 0" class="ProgressDone cours">
								En cours...
							</div>
							<div v-else class="ProgressDone termine">
								Terminer
							</div>
							
						</div>
					</div>

					
					

					
					
				
				</div>
			</div>
		</section>
		<!-- Service End -->

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
         Loading , Pag,

    },
  data() {
    return {
      projects: [],
	  loading:true,
	  currentPage: 1,
      itemsPerPage: 12,
      totalPageArray: [], 
    };
  },
  computed: {


totalPages() {
return Math.ceil(this.projects.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.projects.slice(startIndex, endIndex);
},
},
  mounted() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        await this.$store.dispatch('fetchProjects');
        const projects = JSON.parse(JSON.stringify(this.$store.getters.getProjects));
	      	console.log(projects);
       
        this.projects = projects.filter(offre => offre.Publish === 1);
	      this.loading = false
      } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error.message);
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
      return  this.projects.slice(startIndex, endIndex);
    },
    isValidImage(src) {
      console.log(src);
      
      return src && src.indexOf('.') !== -1;
    },
  },

};
</script>
<style lang="css" scoped>
.banner-area {
   
   background-image: url('../assets/site/banner2.jpg'); 
}

.applghu-service-area .applghu-single-service .applghu-service-icon-box img{
	width: 100%;
	height: 100%;

}

.ProgressDone{
	position: absolute;
	position: absolute;
    bottom: 37px;
	color: #fff;
    padding: 3px 9px;

}

 .cours{

	background-color: rgb(255, 177, 8);
}

 .termine{
	background-color: red;

}

    
</style>