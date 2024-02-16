<template>
    <Loading v-if="loading" style="z-index: 999999;"></Loading>
    <div class="page-header">
           <div class="container">
               <div class="page-header__inner">
                <h1 class="display-2">Bienvenue {{ loggedInUser.prenom }} {{ loggedInUser.nom }}</h1>
                   <p>
                     
                   </p>
               </div>
           </div>
       </div>

       
        	<!-- Blog Section -->
	<section class="aplpg-blog-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<div class="aplpg-title-area text-center wow fadeInUp">
						
						<div class="saas_two_section_title saas2-headline text-center">
        			
						<p>				
              Voici la liste des formations auxquelles vous avez souscrit et que vous pouvez maintenant payer.
						</p>
            <p class="aider" @click="PayeCourse(CourseOptions[0].OrderId)">Cliquez ici pour régler toutes les formations souscrites.</p>
        			</div>
					</div>
				</div>
			</div>
			<div class="aplpg-blog-content">
				<div class="aplpg-blog-slider">

					<div class="col-lg-3" v-for="course in CourseOptions" :key="course.id">
						  <span style="display: none;">{{  getCourseDetails(course.CourseId) }}</span>
						<div class="aplpg-blog-column card" style="height: auto !important;">
							<div class="aplpg-img-wrapper">
								<img :src="CourseDetails[course.CourseId]?.Photo" alt="">
							</div>
							<div :style="{ backgroundColor: getCourseStatusStyle(CourseDetails[course.CourseId]?.StartDate, CourseDetails[course.CourseId]?.EndDate).backgroundColor}" class="aplpg-blog-meta" >
                                 <span style="color: '#fff !important'">{{ getCourseStatusStyle(CourseDetails[course.CourseId]?.StartDate, CourseDetails[course.CourseId]?.EndDate).text }}</span>
                             </div>
			
							<div class="aplg-blog-column-txt">
								<div class="aplpg-headline">
									<a href="#"><h6>{{ CourseDetails[course.CourseId]?.Name }}</h6></a>
								</div>
								
							</div>
              <p @click="() => { isOpen = true; selectedCourseId = CourseDetails[course.CourseId]?.FichierInfo; }" class="codeQR">Plus de détail</p>
              <p>Le payement concerne uniquement que cette formation</p>

        							<div class="nws-button  text-capitalize">
                                        <button class="hover-btn" @click="ajouterAuPanier(course.id)"> Payer</button>
                                    </div>
							
						</div>
					</div>

           
					
				</div>
			</div>
		</div>
	</section>
            <MazDialog v-model="isOpen" v-if="isOpen && selectedCourseId !== null"  :key="selectedCourseId" title="Télécharger le pdf" height="400px">
                <div class="qr">
                    <qrcode-vue :value="selectedCourseId" :size ="170" />
                   

                </div>
                <div class="nws-button  text-capitalize">
                        <a :href="selectedCourseId" class="hover-btn" > Télécharger pdf</a>
                    </div>
            </MazDialog>

            <MazDialog v-model="Payement"   title="payement en cours">
              Le paiement est en cours. Veuillez cliquer pour finaliser le paiement.
              <template #footer>
                <div class="supp"  style="background-color: blue; ">
                  <a v-if="validerpay" :href="validerpay">Valider</a> 
                  </div>
                </template>
            </MazDialog>
  
</template>

<script>
import axios from '@/lib/axiosConfig';
import QrcodeVue from 'qrcode.vue';
import Loading from '@/components/others/loading.vue';
import MazDialog from 'maz-ui/components/MazDialog'


export default {
   name: 'DNPMECLFormulaire',
   components: {QrcodeVue ,Loading ,MazDialog},
   props:['id'],
   data() {
       return {
			CourseOptions:[],
			CourseDetails: {},
      isOpen:false,
      loading:true,
      selectedCourseId: null,
      Payement:false,
      validerpay:''


       };
   },
   computed: {
    
    loggedInUser() {
      return this.$store.getters['user/loggedInUser'];
    },
  },

  async mounted() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    await  this.fetchCourse() 
    
    
	this.CourseOptions.forEach(course => {
      this.getCourseDetails(course.CourseId);
    });
 const selectHeader = document.querySelector('.class1');
 console.log(this.id);


if (selectHeader) {
 let headerOffset = selectHeader.offsetTop;
 let nextElement = selectHeader.nextElementSibling;
 console.log('headerOffset',headerOffset);
 console.log('headerOffset222',nextElement);

 const headerFixed = () => {
   if ((headerOffset - window.scrollY) <= 0) {
     selectHeader.classList.add('sticked');
     if (nextElement) nextElement.classList.add('sticked-header-offset');
   } else {
     selectHeader.classList.remove('sticked');
     if (nextElement) nextElement.classList.remove('sticked-header-offset');
   }
 }
 window.addEventListener('load', headerFixed);
 document.addEventListener('scroll', headerFixed);
}

   },

   methods: {
		async fetchCourse(){

			try {
				const response = await axios.get(`/orders/detail/${this.id}`, {
				headers: { Authorization: `Bearer ${this.loggedInUser.token}` },
				});
      			  console.log('Réponse du téléversement :', response);
					const allUserData = response.data.data.courses;
					this.CourseOptions = allUserData
                   
        
      } catch (error) {
        console.error('Erreur lors du téléversement :', error);
        if (error.response.data.message==="Vous n'êtes pas autorisé." || error.response.status === 401) {
            await this.$store.dispatch('user/clearLoggedInUser');
              this.$router.push("/connexion");  //a revoir
            }
         
    }
		},
		async getCourseDetails(courseId) {
      try {
		
       		 const response = await axios.get(`/courses/detail/${courseId}`, {
				headers: { Authorization: `Bearer ${this.loggedInUser.token}` },
				});
       		//  console.log('Détails de la course :', response.data.data);
				this.$data.CourseDetails[courseId] = response.data.data;
        this.loading = false
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de la course :', error);
        if (error.response.data.message==="Vous n'êtes pas autorisé." || error.response.status === 401) {
            await this.$store.dispatch('user/clearLoggedInUser');
              this.$router.push("/connexion");  //a revoir
            }
      }
    },
	getCourseStatusStyle(start,end) {
      const currentDate = new Date();
      const startDate = new Date(start) ;
      const endDate =  new Date(end) ;
		
      if (currentDate < startDate) {
        return { backgroundColor: 'rgb(21, 255, 0)', text:"À venir" }; // À venir
      } else if (currentDate >= startDate && currentDate <= endDate) {
        return { backgroundColor: 'rgb(250, 186, 9)' , text:"En cours"  }; // En cours
      } else {
        return { backgroundColor: 'red' , text:"Terminé" }; // Terminé
      }
    },
    handleCodeQr(courseId) {
    console.log('Context:', this); 
        console.log(courseId);
        this.isOpen = true;
        this.selectedCourseId = courseId;
    },

   async PayeCourse(id){

      try {
		
            const response = await axios.post('/orders/payment-flooz-tmoney',{"order_id":id} ,{
          headers: { Authorization: `Bearer ${this.loggedInUser.token}` },
          });

          console.log('Réponse du téléversement :', response);
         
          this.validerpay = response.data.data
         
          this.Payement = true

           
          } catch (error) {
          console.error('Erreur lors de la récupération des détails de la course :', error);
          if (error.response.data.message==="Vous n'êtes pas autorisé." || error.response.status === 401) {
            await this.$store.dispatch('user/clearLoggedInUser');
              this.$router.push("/connexion");  //a revoir
            }
          }


      
    },
    validerPay(){
      console.log('Réponse du téléversement :', this.validerpay);


      this.Payement = false
      this.$router.push(this.validerpay);
    }
	},

 
};
</script>

<style lang="css" scoped>
.fade:not(.show) {
   display: none;
   opacity: 0;
}
.class1{
background-color: #d9d9d9;
height: 50px;

}
.btns{

   padding: 0 33px;
   font-weight: 500;
   color: #fff;
   border: none;
   cursor: pointer;
   outline: none;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;

}
.btns.active{
background: var(--color-primary);


}

@media (max-width: 768px) {
 .sticked-header-offset {
   margin-top: 0 !important;
    

 }

 .class1{

   margin-top:70px;
 }
}


.aplpg-blog-column{
    -webkit-box-shadow: none !important;
    box-shadow: none !important;

}
.codeQR{
	text-align: center;
    padding: 0px 5px;
    color: var(--color-primary);
    cursor: pointer;
	margin-bottom: 0;
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



.codeQR:hover{
	
    color: rgb(114, 194, 248);
   
}

.aider {
  text-align: center;
  color: var(--color-primary);
  cursor: pointer;
  margin-bottom: 0 !important;
  font-weight: bold;
}

.aider:hover {
  color: var(--color-secondary);
}

</style>