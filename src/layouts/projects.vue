<template>
  <div id="projects">
    <section class="project">
      <div class="slideshow-container">
        <nc-news />
        <rest-countries />
        <rock-paper-scissors />
        <rick-and-morty />
        <jupiter-landing />
        <easybank />
        <job-listings />
        <pricing-component />
        <covid-dashboard />
        <cryptovox />
        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>
      </div>

      <div class="dot-container">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
        <span class="dot" @click="currentSlide(4)"></span>
        <span class="dot" @click="currentSlide(5)"></span>
        <span class="dot" @click="currentSlide(6)"></span>
        <span class="dot" @click="currentSlide(7)"></span>
        <span class="dot" @click="currentSlide(8)"></span>
        <span class="dot" @click="currentSlide(9)"></span>
        <span class="dot" @click="currentSlide(10)"></span>
      </div>
    </section>
  </div>
</template>
<script>
import NcNews from "../components/nc-news";
import JupiterLanding from "../components/jupiter-landing";
import Easybank from "../components/easybank";
import Cryptovox from "../components/cryptovox";
import PricingComponent from "../components/pricing-component";
import JobListings from "../components/job-listings";
import RickAndMorty from "../components/rick-and-morty";
import RestCountries from "../components/rest-countries";
import CovidDashboard from "../components/covid-dashboard";
import RockPaperScissors from "../components/rock-paper-scissors";

export default {
  components: {
    NcNews,
    JupiterLanding,
    Easybank,
    Cryptovox,
    PricingComponent,
    JobListings,
    RickAndMorty,
    RestCountries,
    CovidDashboard,
    RockPaperScissors
  },
  data() {
    return {
      slideIndex: 1
    };
  },
  mounted() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    }
  }
};
</script>
