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
                                <h1 class="banner-title">Formations en {{ name }}</h1>
                                <nav aria-label="breadcrumb">

                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><router-link to="/" >Accueil</router-link></li>
                                        <li class="breadcrumb-item"><router-link to="/formations" >Formations</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><router-link to="#" >{{ name }}</router-link></li>
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
		
        	<section id="s2-pricing" class="s2-pricing_section">
        		<div class="container">
        			<div class="saas_two_section_title saas2-headline text-center">
        				<p>
							Parcourez la liste complète de nos formations en {{ name }}, 
							soigneusement conçues pour répondre à vos besoins professionnels.
						</p>

					
        			</div>
                    <div v-if="paginatedItems.length === 0" class="noresul">
                      <span> Il n'y a aucune formation disponible </span>
                      </div> 
        			<!-- /section title -->
					<div class="class1" v-else>
						<div class="s2-pricing_content" v-for="course in paginatedItems" :key="course.id">
                           

        				<div class="row justify-content-md-center">
        					<div class=" wow fadeFromLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
        						<div class="s2-pricing_item card" >
        							<div class="s2-pricing_price relative-position clearfix">
										<div class="image" style="height: 100%; width: 100%;">
											<img :src="course.Photo" :alt="course.Name" style="height: 100%; width: 100%; object-fit: cover;filter: brightness(75%); border-radius: 6px 6px 0 0; border-radius: 6px 6px 0 0;">
										</div>
        								<div class="s2-pricing_text">
        									<span>{{ course.Name }}</span>
        									<strong>{{ formatCurrency(course.Cost) }}</strong>
        								</div>
        								
        							</div>
        							<div class="s2-pricing_list ul-li-block">
                                        <div  class="texte" style="margin-left: 18px;">
                                                <p  class="texte-content open">
                                                <i  class="bi bi-calendar-plus-fill"></i>
                                                 <span style="font-weight: bolder;">{{course.StartDate }}</span>
                                                </p>
                                                <p  class="texte-content close">
                                                    <i  class="bi bi-calendar2-x-fill"></i> 
                                                    <span style="font-weight: bolder;" >{{course.EndDate }}</span>
                                                </p>
                                            </div>
                                            <ul v-if="course.Prerequires && course.Prerequires.length > 0">
                                                <li v-for="prerequisite in parsePrerequisites(course.Prerequires)" :key="prerequisite">
                                                    <div class="s2-pricing_list_icon s2-checked float-left text-center"></div>
                                                    {{ prerequisite }}
                                                </li>
                                            </ul>
                                            <p v-else class="text-center">Aucun prérequis requis</p>
        							</div>
									<p  @click="handleCodeQr(course.FichierInfo)" class="codeQR">Plus de detail</p>
        							<div class="nws-button  text-capitalize">
                                        <button class="hover-btn" @click="ajouterAuPanier(course.id)" > S'inscrir</button>
                                    </div>
        						</div>
        					</div>

        				</div>
        			</div>
					
				
					</div>
        			
        		</div>

                <MazDialog v-model="isOpen" v-if="isOpen && selectedCourseId !== null"  :key="selectedCourseId" title="Télécharger le pdf" height="400px">
                <div class="qr">
                    <qrcode-vue :value="selectedCourseId" :size ="170" />
                   

                </div>
                <div class="nws-button  text-capitalize">
                        <a :href="selectedCourseId" class="hover-btn" > Télécharger pdf</a>
                    </div>
            </MazDialog>

            <MazDialog v-model="showModale"  v-if="showModale && cartSize"   title="Télécharger le pdf" height="400px">
               <p>hhhhh</p>
            </MazDialog>

         
        	</section>
        <!-- End of pricing section   
        	============================================= -->
            <div class="container_pagination">
  <Pag :current-page="currentPage" :total-pages="totalPages" @page-change="updateCurrentPage" />
</div>
    </div>
	
</template>
<script>
import MazDialog from 'maz-ui/components/MazDialog'
import Loading from '@/components/others/loading.vue';
import Pag from '@/components/others/pagination.vue';
import QrcodeVue from 'qrcode.vue';

export default {
props:['id'],
	components: {
        MazDialog , Loading ,QrcodeVue,Pag

    },

	data(){
		return{
			isOpen:false,
            loading:true,
			courses:[],
            showModale:false,
            alertMessage: null,
            selectedCourseId: null,
            name:'',
            currentPage: 1,
            itemsPerPage: 12,
            totalPageArray: [], 
            previousCartSize: 0,

			
		}
	},
    watch: {
    '$store.state.panier.alertMessage'(newValue) {
    
      alert(newValue)
      // Effacer le message d'alerte après quelques secondes (ajustez le délai selon vos besoins)
      setTimeout(() => {
        this.alertMessage = null;
      }, 3000);
    },
  },

  computed: {


totalPages() {
return Math.ceil(this.courses.length / this.itemsPerPage);
},
paginatedItems() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.courses.slice(startIndex, endIndex);
},
showModal() {
    console.log('modal',this.$store.getters['panier/showModal'])
    return this.$store.getters['panier/showModal'];
    },

    cartSize() {
    console.log('modal2',this.$store.getters['panier/cartItems'].length)

    const currentCartSize = this.$store.getters['panier/cartItems'].length;
    if (currentCartSize > this.previousCartSize) {
        this.handleCartSizeChange()
    
      console.log('La taille du panier a augmenté !');
      
    } else {
      // La taille du panier n'a pas changé ou a diminué
      console.log('La taille du panier n\'a pas changé ou a diminué.');
    }

    },
},
    mounted() {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
        this.fetchCourses();  
        
        },

	methods: {

        handleCartSizeChange() {
            console.log('bonjour');
    //   const currentCartSize = this.$store.getters['panier/cartItems'].length;

    //   if (currentCartSize > this.previousCartSize) {
    //     this.showModale = true;
    //     console.log('La taille du panier a augmenté !');
    //   } else {
    //     // La taille du panier n'a pas changé ou a diminué
    //     console.log('La taille du panier n\'a pas changé ou a diminué.');
    //   }

    //   // Mettre à jour la valeur précédente
    //   this.previousCartSize = currentCartSize;
    },

        async fetchCourses() {
  try {
    await this.$store.dispatch('fetchPublishedCourses');
    const courses = JSON.parse(JSON.stringify(this.$store.getters.getPublishedCourses));
    console.log(courses);

    const filteredCourses = courses.filter(course => {
      // Vérifiez si l'identifiant de la catégorie correspond et si isActive est égal à 1
      return course.category.id === parseInt(this.id) && course.IsActive === 1;
    });

    console.log(filteredCourses);
    this.courses = filteredCourses;
    
    this.loading = false;
  } catch (error) {
    console.error("Erreur lors de la récupération des cours :", error.message);
  }
},

    ajouterAuPanier(courseId) {
      const course = this.courses.find((c) => c.id === courseId);
      this.$store.dispatch('panier/addToCart', course);
     
    },
    formatCurrency(amount) {
      // Formater le montant comme devise avec le symbole F CFA
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF', // Code ISO de la devise pour F CFA
        minimumFractionDigits: 0,
      }).format(amount);
    }, 

    handleCodeQr(courseId) {
        console.log(courseId);
        this.isOpen = true;
        this.selectedCourseId = courseId;
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
      return this.courses.slice(startIndex, endIndex);
    },

    parsePrerequisites(prerequiresString) {
        try {
            // Convertir la chaîne JSON en tableau JavaScript
            const prerequisitesArray = JSON.parse(prerequiresString);
            return Array.isArray(prerequisitesArray) ? prerequisitesArray : [];
        } catch (error) {
            console.error("Erreur lors de la conversion des prérequis :", error.message);
            return [];
        }
    },
    hideModal() {
      this.$store.commit('panier/hideModal');
    },
    
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
	text-align: center;
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

.texte-content {
 
    /* font-size: 13px; */
    margin-bottom: 0!important;
}

.bi-calendar-plus-fill {
    color: #04f37b;
    margin-right: 14px;
}

.bi-calendar2-x-fill{
    color: red;
    margin-right: 14px;
}
    
</style>