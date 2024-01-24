<template>
    <div>
       
        <Navbar />
        <div class="haut"></div>

        <RouterView />
        <footer v-if="!isPageConnexion && !isPageInscription" id="footer" class="footer  ">
            <Footer />
        </footer>

    </div>
</template>

<script>
import Navbar from '@/components/Layouts/navbar1.vue';
import Footer from '@/components/Layouts/footer.vue';

export default {
    name: 'CositTogoLayout',
    components:{
        Navbar , Footer 
    },

    data() {
        return {
            isPageConnexion: false,
            isPageInscription: false,
        };
    },
    watch: {
        // Observer le changement de route pour déterminer si la page est celle de connexion ou d'inscription
        $route(to, from) {
            this.isPageConnexion = to.name === 'connexion';
            this.isPageInscription = to.name === 'inscription';
        },
    },
    mounted() {
        this.isPageConnexion = this.$route.name === 'connexion';
        this.isPageInscription = this.$route.name === 'inscription';
    },

    methods: {

    },
};
</script>

<style lang="css" scoped>
.haut{

    margin-bottom: 80px;
}</style>