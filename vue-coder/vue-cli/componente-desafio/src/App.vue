<template>
  <v-app>
    <Navigation />

    <Header />

    <Carousel />

    <Footer />
    
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import Header from "@/components/Header.vue"
import Carousel from "@/components/Carousel.vue"
import Footer from "@/components/Footer.vue"
export default {
  data() {
    return {
    }
  },
  components: {
    Navigation,
    Header,
    Carousel,
    Footer
  }
}
</script>
