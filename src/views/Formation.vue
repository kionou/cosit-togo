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
                                <h1 class="banner-title">Formations</h1>
                                <nav aria-label="breadcrumb">

                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><router-link to="/" >Accueil</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><router-link to="/formations" >Formations</router-link></li>
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
    	  <!-- Start of pricing section  
        	============================================= -->
			<div class="panier-icon" @click="togglePanier">
            <!-- Utilisez l'icône de votre choix, par exemple FontAwesome -->
            <i class="fas fa-shopping-cart"></i>
            <!-- Affichez le nombre d'articles dans le panier, si nécessaire -->
            <!-- <span v-if="panier.length > 0">{{ panier.length }}</span> -->
        </div>
        	<section id="s2-pricing" class="s2-pricing_section">
        		<div class="container">
        			<div class="saas_two_section_title saas2-headline text-center">
        				<p>
							Parcourez la liste complète de nos formations, 
							soigneusement conçues pour répondre à vos besoins professionnels.
						</p>

					
        			</div>
        			<!-- /section title -->
					<div class="class1">
						<div class="s2-pricing_content" v-for="course in courses" :key="course.id">
        				<div class="row justify-content-md-center">
        					<div class=" wow fadeFromLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        						<div class="s2-pricing_item card" >
        							<div class="s2-pricing_price relative-position clearfix">
										<div class="image" style="height: 100%; width: 100%;">
											<img :src="course.Photo" alt="" style="height: 100%; object-fit: cover;filter: brightness(75%); border-radius: 6px 6px 0 0; border-radius: 6px 6px 0 0;">
										</div>
        								<div class="s2-pricing_text">
        									<span>{{ course.Name }}</span>
        									<strong>{{course.Cost }} F CFA</strong>
        								</div>
        								<div class="s2-icon_bg">
        									<svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
        										<path d="m509.472656 259.800781c1.632813-2.449219 2.527344-5.417969 2.527344-8.363281v-236.367188c.003906-8.199218-6.859375-15.070312-15.035156-15.070312h-235.902344c-6.914062 0-13.113281 4.949219-14.65625 11.703125l-69.167969 302.890625c-7.230469 6.433594-13.390625 8.175781-21.199219 10.378906-11.878906 3.347656-26.660156 7.515625-43.347656 27.667969-16.375 19.78125-18.917968 36.898437-21.160156 52.007813-1.980469 13.351562-3.546875 23.898437-14.558594 37.199218-10.640625 12.847656-18.375 14.925782-29.078125 17.800782-12.332031 3.316406-27.683593 7.4375-44.429687 27.667968-5.300782 6.402344-4.417969 15.902344 1.96875 21.214844 2.808594 2.332031 6.210937 3.46875 9.59375 3.46875 4.320312 0 8.605468-1.855469 11.578125-5.445312 10.640625-12.847657 18.371093-14.925782 29.074219-17.800782 12.335937-3.3125 27.6875-7.4375 44.433593-27.667968 16.375-19.777344 18.917969-36.898438 21.160157-52.003907 1.984374-13.355469 3.550781-23.902343 14.5625-37.203125 10.703124-12.929687 18.101562-15.015625 28.347656-17.902344 9.886718-2.789062 21.789062-6.15625 35.121094-18.824218l301.011718-69.023438c3.710938-.851562 7.046875-3.15625 9.15625-6.328125zm-239.816406-214.820312 88.097656 88.273437-140.382812 140.664063zm27.703125-14.847657h163.308594l-81.65625 81.816407zm81.65625 124.425782 88.097656 88.277344-228.476562 52.386718zm21.261719-21.304688 81.652344-81.816406v163.636719zm0 0" />
        									</svg>
        								</div>
        							</div>
        							<div class="s2-pricing_list ul-li-block">
        								<ul>
        									<li>
        										<div class="s2-pricing_list_icon s2-checked float-left text-center"></div>
        										Up to 5 Web Pages
        									</li>
        									<li>
        										<div class="s2-pricing_list_icon s2-checked  float-left text-center"></div>
        										Meta Description Optimization
        									</li>
        									
        								</ul>
        							</div>
									<p  @click="handleCodeQr" class="codeQR">Plus de detail</p>
        							<div class="nws-button  text-capitalize">
                                        <button class="hover-btn" @click="ajouterAuPanier(course.id)"> S'abonner</button>
                                    </div>
        						</div>
        					</div>

        				</div>
        			</div>
					
				
					</div>
        			
        		</div>
        	</section>
        <!-- End of pricing section   
        	============================================= -->
    </div>
	<MazDialog v-model="isOpen" title="Dialog Title">
    <div class="qr">
		<img src="../assets/site/qr.png" alt="" >
	</div>
    
  </MazDialog>

</template>
<script>
import MazDialog from 'maz-ui/components/MazDialog'
import Formation from '@/lib/formation.json'
export default {
	components: {
        MazDialog

    },

	data(){
		return{
			isOpen:false,
			courses:[],
			panier: [],
			panierOuvert: false
		}
	},
    mounted() {
        this.fetchCourses();  
        },

	methods: {

    async fetchCourses() {
      try {
        await this.$store.dispatch('fetchPublishedCourses');
        const courses = JSON.parse(JSON.stringify(this.$store.getters.getPublishedCourses));
        console.log(courses);
        this.courses = courses;
      } catch (error) {
        console.error("Erreur lors de la récupération des cours :", error.message);
      }
    },
            ajouterAuPanier(formation) {
            
				console.log('existe deja', formation);
                const existingItem = this.panier.find(item => item.id === formation);
                if (existingItem) {
                   console.log('existe deja');
                } else {
                    this.panier.push({ id: formation});
                    this.$root.$emit('formation-ajoutee');
                }
                localStorage.setItem('panier', JSON.stringify(this.panier));
            },

			  // Fonction pour afficher/masquer le panier
		// 	  togglePanier() {
        //     this.panierOuvert = !this.panierOuvert;
        // }
        }
       
    
}
</script>
<style lang="css" scoped>


.banner-area {
   
    background-image: url('../assets/site/banner2.jpg'); 
}

.class1{

	
	display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.codeQR{
	text-align: end;
    padding: 0px 5px;
    color: var(--color-primary);
    cursor: pointer;
	margin-bottom: 0;
}

.codeQR:hover{
	
    color: rgb(114, 194, 248);
   
}

.qr{
	height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}

.qr img{
	 height: 100%;

}




.panier-icon {
    /* position: fixed; */
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1000;
    /* Ajoutez d'autres styles selon vos besoins */
}

.panier-icon span {
    background-color: #ff0000; /* Couleur de fond pour le nombre d'articles dans le panier */
    color: #ffffff; /* Couleur du texte pour le nombre d'articles dans le panier */
    padding: 5px;
    border-radius: 50%;
}

.panier-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.panier-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    /* Ajoutez d'autres styles selon vos besoins */
}
    
</style>