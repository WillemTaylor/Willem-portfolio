<template>
  <div>
    <Header />
    <Intro />
    <about-me />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '../layouts/header';
import Intro from '../layouts/intro';
import AboutMe from '../layouts/about-me';
import Experience from '../layouts/experience';
import Projects from '../layouts/projects';
import Contact from '../layouts/contact';
import Footer from '../layouts/footer';

export default {
  name: 'Portfolio',
  components: {
    Header,
    Intro,
    AboutMe,
    Experience,
    Projects,
    Contact,
    Footer,
  },
};
</script>
