<template>
  <div id="home" class="header-container">
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
          <a v-scroll-to="'#home'">
            <li>Home</li>
          </a>
          <a v-scroll-to="'#about'">
            <li>About Me</li>
          </a>
          <a v-scroll-to="'#experience'">
            <li>Experience</li>
          </a>
          <a v-scroll-to="'#projects'">
            <li>Projects</li>
          </a>
          <a v-scroll-to="'#contact'">
            <li>Contact</li>
          </a>
          <a v-scroll-to="'#social'">
            <li>Social</li>
          </a>
        </ul>
      </div>
    </nav>
  </div>
</template>
