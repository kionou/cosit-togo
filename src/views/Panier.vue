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
                                <h1 class="banner-title">Panier</h1>
                                <nav aria-label="breadcrumb">

                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><router-link to="/" >Accueil</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><router-link to="/panier" >Panier</router-link></li>
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

            <!-- Cart Page Start -->
            <div v-if="cartItems.length === 0" class="noresul my-5">
                  
                  <span> Votre panier est vide. </span>
                </div>
            <div class="container-fluid py-5" v-else>
            <div class="">
                <div class="row">
                    <div class="table-responsive col-lg-8">
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Formations</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Total</th>
                            <th scope="col">Suprrimer</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in cartItems" :key="index" >
                                <th scope="row">
                                    <div class="d-flex align-items-center">
                                        <img :src="item.Photo" class="img-fluid " style="width: 80px; height: 80px;" alt="">
                                    </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4">{{ item.Name }}</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4"> {{ formatCurrency(item.Cost) }}</p>
                                </td>
                               
                                <td>
                                    <p class="mb-0 mt-4">{{ formatCurrency(item.Cost) }}</p>
                                </td>
                                <td>
                                    <button class="btn btn-md rounded-circle bg-light border mt-4" @click="removeFromCart(index)">
                                        <i class="fa fa-times text-danger"></i>
                                    </button>
                                </td>
                            
                            </tr>

                           
                            
                        </tbody>
                    </table>
                </div>
               
                <div class="row justify-content-end col-lg-4">
                    
                    <div class="">
                        <div class="bg-light rounded">
                            <div class="p-4">
                                <h1 class="display-6 mb-4">Total  <span class="fw-normal">du panier</span></h1>
                                <div class="d-flex justify-content-between mb-4">
                                    <h5 class="mb-0 me-4">Total:</h5>
                                    <p class="mb-0">{{ formatCurrency(totalAmount) }} </p>
                                </div>
                               
                                
                            </div>
                            <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                <h5 class="mb-0 ps-4 me-4">Total</h5>
                                <p class="mb-0 pe-4">{{ formatCurrency(totalAmount) }}</p>
                            </div>
                           
                            <div class="nws-button  text-capitalize">
                            <button class="hover-btn" @click="handleOrderClick()">Procéder au paiement </button>
                                                            
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <!-- Cart Page End -->
        <MazDialog v-model="isdeletedoc" title="souscription succès">
      <p>
        Souscription validée avec succès ! Voulez-vous voir la souscription ?
      </p>
      <template #footer="{ close }">

        <div class="supp" @click="close" style="background-color: red; "> Non</div>

        <div class="supp" @click="confirmDeletedoc" style="background-color: rgb(5, 197, 5)"> Oui</div>

      </template>
    </MazDialog>
    </div>
</template>
<script>
import store from '@/store';
import axios from '../lib/axiosConfig.js'
import MazDialog from 'maz-ui/components/MazDialog'
import Loading from '@/components/others/loading.vue';

export default {
 components: {
       Loading , MazDialog ,
  }, 
    data() {
        return {
            isdeletedoc:false,
            loading:false
            
        };
    },
    computed: {
    cartItems() {
      return this.$store.getters['panier/cartItems'];
    },
    totalAmount() {
      // Calculer la somme totale des prix des articles dans le panier
      return this.cartItems.reduce((total, item) => total + item.Cost, 0);
    },
  
    loggedInUser() {
    return this.$store.getters['user/loggedInUser'];
  
  },
},
 
  
    mounted() {
        console.log("datadossiers", this.loggedInUser);
},
    methods: {
        removeFromCart(index) {
      this.$store.dispatch('panier/removeFromCart', index);
    },

    handleOrderClick(){
        const isLoggedIn = store.getters['user/isLoggedIn'];
        console.log('isLoggedIn',isLoggedIn);
        if (isLoggedIn) {
           
            this.SendSubscriptions()
        } else {
            console.log('non');
            this.$router.push({ name: 'connexion', query: { fromCart: true } });
          
            
        }

    },
    formatCurrency(amount) {
      // Formater le montant comme devise avec le symbole F CFA
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF', // Code ISO de la devise pour F CFA
        minimumFractionDigits: 0,
      }).format(amount);
    },
 async SendSubscriptions(){
    this.loading = true
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
            this.isdeletedoc = true
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
    },
    confirmDeletedoc(){
        this.isdeletedoc = false
        this.$router.push({ path: '/mon-espace/mes-formations',  });
    }
    },
}
</script>
<style lang="css" scoped>

.banner-area {
   
   background-image: url('@/assets/site/banner2.jpg'); 
}
.nws-button {
    text-align: left !important;
}
.nws-button button{

    width: 210px !important;
}

</style>