<template>
  <div id="social">
    <footer class="footer">
      <div class="social-container">
        <a :href="fb" target="_blank">
          <img class="fb" src="../assets/fb.png" />
        </a>
        <a :href="twitter" target="_blank">
          <img class="twitter" src="../assets/twitter.png" />
        </a>
        <a :href="insta" target="_blank">
          <img class="insta" src="../assets/insta.png" />
        </a>
        <a :href="linkedIn" target="_blank">
          <img class="linked" src="../assets/linkedin.png" />
        </a>
        <a :href="github" target="_blank">
          <img class="yt" src="../assets/github.png" />
        </a>
      </div>
      <div class="footer-container">
        <h1>Willem Taylor</h1>
        <h2>
          Website built with
          <a href="https://vuejs.org/">Vue.js</a> using
          <a href="https://gridsome.org/">Gridsome</a>
        </h2>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fb: "https://www.facebook.com/will.taylor.7796",
      twitter: "https://www.twitter.com/WillemTaylor",
      insta: "https://www.instagram.com/willemtaylor/",
      linkedIn: "https://www.linkedin.com/in/willem-taylor-1a9b03149/",
      github: "https://github.com/WillemTaylor?tab=repositories"
    };
  }
};
</script>
