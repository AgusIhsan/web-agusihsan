<script setup>
import logoagus from '../assets/img/logoagus.svg'
 const scroll = (refName) => {
    const element = document.getElementById(refName);
    element.scrollIntoView({ behavior: "smooth" });
 }
 document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
 });

</script>

<template>
    <div class="header d-flex align-items-center justify-content-between position-fixed w-100">
          <div class="d-flex align-items-center">
          <img class="logo" :src="logoagus" alt="logo" />
        </div>
        <header class="d-flex align-items-center">
          <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav gap-5">
                <li class="nav-item">
                <v-btn style="cursor: pointer;" text @click="scroll('home')" class="home mx-2">Home</v-btn>
                </li>
                <li class="nav-item">
                  <v-btn style="cursor: pointer;" text @click="scroll('about')" class="about mx-2">About</v-btn>
                </li>
                <li class="nav-item">
                  <v-btn style="cursor: pointer;" text @click="scroll('gallery')" class="portfolio mx-2">Gallery</v-btn>
                </li>
                <li class="nav-item">
                  <v-btn style="cursor: pointer;" text @click="scroll('portfolio')" class="portfolio mx-2">Portfolio</v-btn>
                </li>
                <li class="nav-item">
                  <v-btn style="cursor: pointer;" text @click="scroll('footer')" class="contact mx-2">Contact</v-btn>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        </div>
</template>

<style scoped>
.header {
  z-index: 1 !important;
  color: var(--text-white);
  position: sticky;
  top: 0;
  height: 6vw;
  background: transparent;
  transition: background-color 0.3s ease-in-out;
}
.header.scrolled {
  backdrop-filter: blur(10px);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.584));
  transition: background-color 0.3s ease-in-out;
}
.logo {
  margin-left: 10vw;
  width: 12vw;
}
.navbar {
  font-size: 1.25vw;
  font-weight: 200;
  margin-right: 10vw;
}
.nav-item {
  color: var(--text-white);
  transition: all .6s cubic-bezier(.25, .4, .45, 1.4);

}
.nav-item:hover {
  color: var(--text-orange);
  transition: all .6s cubic-bezier(.25, .4, .45, 1.4);
  text-shadow: 0 2px 10px rgba(241, 128, 8, 0.878) !important;

}
</style>