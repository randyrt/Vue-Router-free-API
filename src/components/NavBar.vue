<template>
  <header class="flex justify-center m-8 mt-4 bg-white shadow-lg rounded-xl">
    <nav class="flex flex-row items-center justify-between w-full my-8 mx-14 navbar navbar-expand-xl sticky-top">
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
              <a class="text-black nav-link" aria-current="page" href="#">Accueil</a>
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
            class="px-4 py-4 my-3 ml-8 text-sm bg-gray-100 rounded-md outline outline-blue-500">
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