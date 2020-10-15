<template>
  <div id="current-role">
    <section class="about" style="padding-bottom: 30px;">
      <div>
        <h1>In my current role at Ocean Finance, my responsibilities include:</h1>
        <ul>
          <li>Supporting the delivery of industry leading web applications in an E-Commerce environment.</li>
          <li>Building the front end of web based applications (full websites, customer journeys, landing pages), using a tech stack including Vue.js, VueX, Vue router, SCSS, Javascript & .Net C#.</li>
          <li>Following the CI pipeline using Azure DevOps and Octopus.</li>
          <li>
            Working in a cross functional team, and attending SCRUMs and project
            meetings.
          </li>
          <li>
            Liaising with other front-end and back-end developers, designers,
            SEO team, testers and implementation staff.
          </li>
          <li>
            Interpreting customer requirements to deliver efficient, functional
            solutions.
          </li>
          <li>Working within a fast changing environment.</li>
          <li>Investigating and resolving web/software bugs.</li>
        </ul>
      </div>
      <br />
      <br />
      <div>
        <h1 style="margin-bottom: 30px;">Projects I've worked on at Ocean include:</h1>
        <p>
          Building a brand new 'carousel-style' application form for secured loans from the ground up. I decided to use the Vue.js framework, due to it's lovely VueX state management pattern, and Vue router. This allowed me to easily pass values across the forms fields to give the 'carousel' animation.
          <br />I also rewrote the blog pages for the site, which included URL redirects, as well as fun CSS animations.
        </p>
      </div>
    </section>

    <section id="work-projects" class="project">
      <div class="project">
        <div class="slideshow-container">
          <ocean-form />
          <ocean-blog />
          <a class="prev" @click="plusSlides(-1)">&#10094;</a>
          <a class="next" @click="plusSlides(1)">&#10095;</a>

          <div class="dot-container">
            <span class="dots" @click="currentSlide(1)"></span>
            <span class="dots" @click="currentSlide(2)"></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import OceanForm from "../components/ocean-form";
import OceanBlog from "../components/ocean-blog";

export default {
  components: {
    OceanForm,
    OceanBlog
  },
  data() {
    return {
      slideIndex: 1
    };
  },
  mounted() {
    let slides = document.getElementsByClassName("oceanSlides");
    let dots = document.getElementsByClassName("dots");

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
      let slides = document.getElementsByClassName("oceanSlides");
      let dots = document.getElementsByClassName("dots");

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