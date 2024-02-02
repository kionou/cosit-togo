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
                                        <li class="breadcrumb-item"><router-link to="/" >Accueil</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><router-link to="/services" >Services</router-link></li>
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

          <!-- Start of blog page section
    	============================================= -->
    	<section id="news-feed" class="news-feed-section">
    		<div class="container">
    			<div class="blog-feed-content">
    				<div class="row">
    					<div class="col-md-8">
    						<div class="saasio-blog-details-content">
    							
    							<div class="blog-details-text dia-headline">
    								<h2>{{  selectedService.Name}}</h2>
    								<!-- <div class="saasio-post-meta">
    									<a href="#"><i class="fas fa-calendar-alt"></i> September 12, 2021</a>
    									<a href="#"><i class="fas fa-user"></i> Admin</a>
    								</div> -->
    								<article>
                                        {{  selectedService.Description}}
    								</article>
    							</div>
    						</div>
    					</div>
    					<div class="col-md-4">
    						<div class="saasio-blog-sidebar">
    							
    							<div class="side-bar-widget">
    								<div class="category-widget dia-headline ul-li-block">
    									<h3 class="widget-title-2">Services</h3>
    									<ul>
    										<li v-for="service in services" :key="service.id"><a :href="`/services/${service.id}`">{{ service.Name }} </a></li>
    										
    									</ul>
    								</div>
    							</div>
    							<div class="side-bar-widget">
    								<div class="category-widget dia-headline ul-li-block">
    									<h3 class="widget-title-2">Actualités récentes</h3>
    									<div class="recent-post-area">
											<p v-if="actualites.lenght === 0">Il n'y a aucune actualité disponible</p>
    										<div v-else class="recent-post-img-text" v-for="actualite in actualites" :key="actualite.id">
    											<div class="recent-post-img float-left">
    												<img :src="actualite.images" alt="">
    											</div>
    											<div class="recent-post-text dia-headline">
    												<h3><a :href="`/actualites/${actualite.id}`">{{ actualite.titre }}</a></h3>
    												<span class="rec-post-meta"><a href="#">{{ formatDate(actualite.created_at) }}</a></span>
    											</div>
    										</div>
    									</div>
    								</div>
    							</div>
    							
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</section>
    <!-- End of blog section
    	============================================= --> 
        
    </div>
</template>
<script>
import Loading from '@/components/others/loading.vue';


export default {
    props:['id'],
    components: {
         Loading

    },

    data() {
        return {
            selectedService: '',
            services: [],
			actualites: [],
            loading: true, 
        }
    },

    mounted() {
        console.log(this.id);
        this.fetchServices();
		this.fetchActualites();
    },
    methods: {
        async fetchServices() {
      try {
        await this.$store.dispatch('fetchServices');
        const services = JSON.parse(JSON.stringify(this.$store.getters.getServices));
        this.services = services
        console.log(services);
        const selectedService = services.find(service => service.id === parseInt(this.id));
        this.selectedService = selectedService;
        console.log( this.selectedService);
        this.loading = false;
      } catch (error) {
        console.error("Erreur lors de la récupération des services :", error.message);
      }
    },
	async fetchActualites() {
    try {
        await this.$store.dispatch('fetchActualites');
        const actualites = JSON.parse(JSON.stringify(this.$store.getters.getActualites));

        // Trier les actualités par date (du plus récent au plus ancien)
        actualites.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        // Récupérer les 3 dernières actualités
        this.actualites = actualites.slice(0, 3);
		console.log(this.actualites);

    } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error.message);
    }
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
   
   background-image: url('@/assets/site/banner2.jpg'); 
}
</style>