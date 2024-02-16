<template >
    <Loading v-if="loading" style="z-index: 999999;"></Loading>
 <div>
   
     <section id="applghu-service" class="applghu-service-area" data-background="assets/img/studio-img-32/service-bg.jpg">
         <div class="container">

             <!-- Section Heading Start -->
             <div class="row">
                 <div class="col-xl-12 text-center">
                     <div class="saas_two_section_title saas2-headline text-center">
                 
                 <p>
                    Découvrez la liste de formations et plongez dans l'excellence éducative. 
                    Voici vos dernières souscriptions, témoignages de votre engagement envers un avenir enrichissant
                 </p>
             </div>
                 </div>
             </div>
             <!-- Section Heading End -->
             <div v-if="paginatedItems.length === 0" class="noresul">
                   <span> Il n'y a aucune formation  </span>
                   </div> 
             <div class="row justify-content-center" v-else>
                 <div v-for="project in paginatedItems" :key="project.id" class="col-xl-3 col-md-4">
                     <div class="applghu-single-service wow fadeInUp" data-wow-delay="0.2s">
                         <div class="applghu-service-icon-box">
                             <img src="../../assets/site/logo1.png" alt="">
                         </div>
                         <p>Souscription réussie à la formation <span>{{ project.OrderNum }}</span> ,Vous avez actuellement souscrit à <span>{{ project.courses.length }}</span> formation(s), pour un montant total de <span>{{ project.TotalCost }}</span> F CFA</p>
                         <router-link :to="'/mon-espace/mes-formations/' + project.id"  target="blank" class="applghu-service-btn"><i class="bi bi-eye-fill"></i></router-link>
                        
                         
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
import axios from '@/lib/axiosConfig';
export default {
 components: {
      Loading , Pag,

 },
data() {
 return {
    CourseOptions: [],
   loading:true,
   currentPage: 1,
   itemsPerPage: 12,
   totalPageArray: [], 
 };
},
computed: {


totalPages() {
return Math.ceil(this.CourseOptions.length / this.itemsPerPage);
},
paginatedItems() {
const startIndex = (this.currentPage - 1) * this.itemsPerPage;
const endIndex = startIndex + this.itemsPerPage;
return this.CourseOptions.slice(startIndex, endIndex);
},

loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
},
mounted() {
 this.fetchCourse();
},
methods: {
    async fetchCourse(){

try {
    const response = await axios.get('/orders', {
    params: {  auth_user: this.loggedInUser.id,},
    headers: { Authorization: `Bearer ${this.loggedInUser.token}` },
    });
        console.log('Réponse du téléversement :', response);
     	const allUserData = response.data.data.data;
        this.CourseOptions = allUserData
         console.log(allUserData);
         this.loading =false

} catch (error) {
console.error('Erreur lors du téléversement :', error);
if (error.response.data.message==="Vous n'êtes pas autorisé." || error.response.status === 401) {
    await this.$store.dispatch('user/clearLoggedInUser');
  this.$router.push("/connexion");  //a revoir
}

}
},

    async fetchCourse(){

try {
    const response = await axios.get('/orders', {
    params: {  auth_user: this.loggedInUser.id,},
    headers: { Authorization: `Bearer ${this.loggedInUser.token}` },
    });
        console.log('Réponse du téléversement :', response);
     	const allUserData = response.data.data.data;
        this.CourseOptions = allUserData
         console.log(allUserData);
         this.loading =false

} catch (error) {
console.error('Erreur lors du téléversement :', error);
if (error.response.data.message==="Vous n'êtes pas autorisé." || error.response.status === 401) {
    await this.$store.dispatch('user/clearLoggedInUser');
  this.$router.push("/connexion");  //a revoir
}

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
   return  this.CourseOptions.slice(startIndex, endIndex);
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

.applghu-service-area .applghu-single-service {
    
    margin: 0px 8px 30px -15px !important;
   
}

 
</style>