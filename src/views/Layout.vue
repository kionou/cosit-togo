<template>
    <div>
       
        <Navbar />
        <RouterView />
        <footer id="footer" class="footer  ">
            <Footer />
        </footer>

    </div>
</template>

<script>
import Navbar from '@/components/Layouts/navbar.vue';
import Footer from '@/components/Layouts/footer.vue';

export default {
    name: 'CositTogoLayout',
    components:{
        Navbar , Footer 
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>