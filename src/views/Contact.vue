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
                                <h1 class="banner-title">Contact</h1>
                                <nav aria-label="breadcrumb">

                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><router-link to="/" >Accueil</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page"><router-link to="/contact" >Contact</router-link></li>
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

  <!-- Contact Section Begin -->
  <section class="contact spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_phone"></span>
                        <h4>Téléphone</h4>
                        <p>(+228) 92 67 91 05</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_pin_alt"></span>
                        <h4>Adresse</h4>
                        <p> Lomé, Qt Agoè-Fiovi, proche du CCL ; Camp FIR</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_clock_alt"></span>
                        <h4>Heure d'ouverture</h4>
                        <p>08h00 à 16h00 </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_mail_alt"></span>
                        <h4>Email</h4>
                        <p>cosittogo@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->

    <!-- Map Begin -->
    <div class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
            height="500" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <div class="map-inside">
            <i class="icon_pin"></i>
            <!-- <div class="inside-widget">
                <h4>New York</h4>
                <ul>
                    <li>Phone: +12-345-6789</li>
                    <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                </ul>
            </div> -->
        </div>
    </div>
    <!-- Map End -->

    <!-- Contact Form Begin -->
    <div class="contact-form spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact__form__title">
                        <h2>Laissez un message</h2>
                    </div>
                </div>
            </div>
            <form >
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="input-groupe">
							<label class="font-weight-600 text-color-orange" for="emailAddress">Nom</label>
							<MazInput v-model="inputValue"  no-radius color="warning" type="text"/>
						</div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="input-groupe">
							<label class="font-weight-600 text-color-orange" for="emailAddress">Email</label>
							<MazInput v-model="inputValue"  no-radius color="warning" type="email"/>
						</div>
                    </div>
					<div class="col-lg-6 col-md-6">
						<div class="input-groupe">
                                           
										   <label class="font-weight-600 text-color-orange" for="emailAddress">Numéro Téléphonique </label>
										   <MazPhoneNumberInput v-model="phoneNumber" show-code-on-list no-radius color="warning" defaultCountryCode="TG"
										   :ignored-countries="['AC']" @update="results = $event" :success="results?.isValid"  country-locale="fr-FR" noFlags="true" />

									   </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
						<div class="input-groupe">
							<label class="font-weight-600 text-color-orange" for="emailAddress">Que recherchez-vous?</label>
							<MazInput v-model="inputValue"  no-radius color="warning" type="text"/>
						</div>
                    </div>
                    <div class="col-lg-12 text-center mt-4">
                        <MazTextarea v-model="msg" name="comment" id="comment"  no-radius color="warning" />
                       
						<div class="nws-button  text-capitalize">
                                        <button class="hover-btn" @click="handleCodeQr"> Envoyer</button>
                                    </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Contact Form End --> 
    </div>
</template>
<script>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import MazTextarea from 'maz-ui/components/MazTextarea'
export default {
    name: 'CositLSignUser',
  components: {
    MazPhoneNumberInput,MazTextarea
  },
  data() {
	return {
		msg:''
	}
  },
    
}
</script>
<style lang="css" scoped>

.banner-area {
   
   background-image: url('../assets/site/banner2.jpg'); 
}

.text-color-orange {
    color: var(--color-primary) !important;
}
    
</style>