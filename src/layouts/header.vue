<template>
  <div class="header-container">
    <header>
      <h1>Willem Taylor</h1>
      <h2>Front-end Developer</h2>
    </header>
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#" v-scroll-to="'#home'">
            <li>Home</li>
          </a>
          <a href="#about" v-scroll-to="'#about'">
            <li>About Me</li>
          </a>
          <a href="#experience" v-scroll-to="'#experience'">
            <li>Experience</li>
          </a>
          <a href="#projects" v-scroll-to="'#projects'">
            <li>Projects</li>
          </a>
          <a href="#contact" v-scroll-to="'#contact'">
            <li>Contact</li>
          </a>
          <a href="#social" v-scroll-to="'#social'">
            <li>Social</li>
          </a>
        </ul>
      </div>
    </nav>
  </div>
</template>
