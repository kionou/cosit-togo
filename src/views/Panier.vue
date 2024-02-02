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
                            <button class="hover-btn" @click="$router.push({ path: '/mon-espace/mes-formations', })">Procéder au paiement </button>
                                                            
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        <!-- Cart Page End -->
    </div>
</template>
<script>

export default {
    data() {
        return {
            
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
  },
 
  
    mounted() {
 
},
    methods: {
        removeFromCart(index) {
      this.$store.dispatch('panier/removeFromCart', index);
    },

    formatCurrency(amount) {
      // Formater le montant comme devise avec le symbole F CFA
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF', // Code ISO de la devise pour F CFA
        minimumFractionDigits: 0,
      }).format(amount);
    },
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