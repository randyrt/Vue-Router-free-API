<template>
  <header class="m-8  mt-4 rounded-xl flex justify-center bg-white shadow-lg">
    <nav class="w-full mx-14 my-8 flex flex-row justify-between items-center navbar navbar-expand-xl sticky-top">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img class="img-fluid" src="../assets/images/téléchargement.png" alt="you-tube-logo">
        </router-link>
        <button class="navbar-toggler bgbtn" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="mb-2 ml-6 navbar-nav mb-lg-0">
            <li class="ml-3 nav-item">
              <a class="nav-link text-black" aria-current="page" href="#">Accueil</a>
            </li>
            <li class="ml-3 nav-item">
              <a class="nav-link" aria-current="page" href="#">Suivi</a>
            </li>
            <li class="ml-3 nav-item">
              <a class="nav-link" aria-current="page" href="#">Commandes</a>
            </li>
            <li class="ml-3 nav-item">
              <a class="nav-link" aria-current="page" href="#">A propos</a>
            </li>
          </ul>
        </div>
        <form>
          <input type="text" placeholder="search..."
            class="my-3 ml-8 px-4 py-4 bg-gray-100 text-sm outline outline-blue-500 rounded-md">
          <font-awesome-icon icon="magnifying-glass" class="ml-6 text-2xl text-blue-600" />
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar'
});
</script>

<style scoped>
@import '../styles/navBar.css';
</style>