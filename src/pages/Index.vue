<template>
  <div>
    <Header />
    <Intro />
    <about-me />
    <current-role />
    <previous-role />
    <personal-projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "../layouts/header";
import Intro from "../layouts/intro";
import AboutMe from "../layouts/about-me";
import CurrentRole from "../layouts/current-role";
import PreviousRole from "../layouts/previous-role";
import PersonalProjects from "../layouts/personal-projects";
import Contact from "../layouts/contact";
import Footer from "../layouts/footer";

export default {
  name: "Portfolio",
  components: {
    Header,
    Intro,
    AboutMe,
    CurrentRole,
    PreviousRole,
    PersonalProjects,
    Contact,
    Footer
  }
};
</script>
