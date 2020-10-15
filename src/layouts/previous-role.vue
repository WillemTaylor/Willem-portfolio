<template>
  <div>
    <section class="about" style="padding-bottom: 30px;">
      <div>
        <h1>Before my role in Ocean, I'd enrolled onto a 12 week full-stack coding bootcamp:</h1>
        <p>
          The
          <b>Northcoders</b> coding bootcamp. This was my first steps to a career change into coding, having previously come from a role in social media marketing and only dabbling with code in my spare time. I was keen to bring my coding skills up to a level where I could get my foot into the industry door, which led me to Northcoders. During the course, I was taught an industry-led curriculum, and completed full-stack projects including 'NC-News': A fully responsive Reddit-style news board where users can vote and comment on different
          articles. A RESTful API built with Node.js, SQL, Express.js and
          front-end built in React.js. Northcoders allowed me to shape and define my coding knowledge, and bring me from a novice to a junior level in 12 weeks.
        </p>
      </div>
    </section>

    <section class="project">
      <div class="project">
        <div class="slideshow-container">
          <nc-news />
        </div>
      </div>
    </section>

    <div class="parallax2"></div>
    <section></section>
  </div>
</template>

<script>
import NcNews from "../components/nc-news";

export default {
  components: {
    NcNews
  }
};
</script>