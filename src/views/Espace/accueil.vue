<template>
    <div>
        <div class="page-header">
            <div class="container">
                <div class="page-header__inner">
                    <h1 class="display-2">Bienvenue {{ loggedInUser.prenom }} {{ loggedInUser.nom }}</h1>
                    <p>
                        Explorez, personnalisez et suivez votre parcours d'apprentissage. Besoin de mettre à jour vos informations ou
                         de découvrir de nouvelles formations ? Vous êtes au bon endroit.
                    </p>
                </div>
            </div>
        </div>
        <section class="section discover-section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 md:w-100 col-lg-4 d-flex mb-4">
                        <div class="card w-100 card-round scard">
                            <div class="card-body d-flex flex-column">
                                <div class="row">
                                   
                                </div>
                                <div class="row mt-2">
                                    <div class="col-sm-12"><b class="" style="color: var(--color-default);">Mes formations </b>
                                        <p class="py-3 mb-2">
                                            Consultez la liste de vos formations souscrites et
                                            plongez dans un monde d'apprentissage stimulant.
                                        </p>
                                        
                                    </div>
                                </div>
                              
                            <div class="mt-auto text-center">
                               <router-link class="btnLogin" to="/mon-espace/mes-formations">Voir</router-link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 md:w-100 col-lg-4 d-flex mb-4">
                        <div class="card w-100 card-round scard">
                            <div class="card-body d-flex flex-column">
                                <div class="row">
                                   
                                </div>
                                <div class="row mt-2">
                                    <div class="col-sm-12"><b class="" style="color: var(--color-default);">Mon profil </b>
                                    <p class="py-3 mb-2"> personnaliser votre profil selon vos préférences ici</p>
                                   
                                </div>
                            </div>
                            <div class="mt-auto text-center">
                               <router-link class="btnLogin" to="/mon-espace/profil">Modifier</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-sm-12 md:w-100 col-lg-4 d-flex mb-4">
                    <div class="card w-100 card-round scard">
                        <div class="card-body d-flex flex-column">
                            <div class="row">
                              
                            </div>
                            <div class="row mt-2">
                                <div class="col-sm-12"><b class="" style="color: var(--color-primary);">Mes Opportunités</b>
                                    <p class="py-3 mb-3">Soyez informé en temps réel de l'état de toutes les opportunités liées 
                                        à vos sous-secteurs d'activité.</p>
                                   
                                </div>
                            </div>
                            <div class="mt-auto text-center">
                                <router-link class="btnLogin" to="/appel_offre">Tout voir</router-link>
                              
                                </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</div>

</template>

<script>
 import axios from '@/lib/axiosConfig.js'
 export default {
     name: 'CositEspace',
     components: {
      
   
     },
     computed: {
    
     loggedInUser() {
       return this.$store.getters['user/loggedInUser'];
         
     },

     fromCart() {
        return this.$store.state.user.fromCart;
    },
     
   },
 
     data() {
         return {
             
 
         };
     },
 
  async mounted() {
         console.log("dataespace", this.loggedInUser);
        

         window.scrollTo({
                 top: 0,
                 behavior: 'smooth',
             });
             if (this.fromCart) {
                console.log(this.fromCart);
        const storedIds = JSON.parse(localStorage.getItem('formationIds')) || [];
        console.log('Identifiants stockés dans le panier :', storedIds);
              let DataSubscriptions = {
                  courses: storedIds,
             };
            console.log('dataMpme',DataSubscriptions);

    try {
        const response = await axios.post('/orders', DataSubscriptions, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          
          }
        });
        console.log('Réponse du téléversement :', response);
        if (response.data.status === 'success') {
            this.$store.dispatch('panier/clearCart');
            this.$store.commit('user/setFromCart', false);
            this.loading= false
        }else{
          
        }
      } catch (error) {
        console.error('Erreur lors du téléversement :', error);
        if (error.response.data.message==="Vous n'êtes pas autorisé." || error.response.status === 401) {
            await this.$store.dispatch('user/clearLoggedInUser');
        this.$router.push("/connexion");  //a revoir
        }
         
    }
    }
     },
 
     methods: {
 
     },
    }

</script>

<style lang="css" scoped>
.page-header {
  
  /* background-image: url('@/assets/img/img1.webp');  */
 

}



</style>