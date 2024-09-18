<template>
  <header class="m-8  mt-4 rounded-xl flex justify-center bg-white shadow-lg">
    <nav class="w-full mx-14 my-8 flex flex-row justify-between items-center">
      <router-link to="/">
        <img src="../assets/images/téléchargement.png" alt="you-tube-logo" style="height: 100px;">
      </router-link>
      <form action="">
        <input type="text" placeholder="search..."
          class="my-3 ml-8 px-4 py-4 bg-gray-100 text-sm outline outline-blue-500 rounded-md">
        <font-awesome-icon icon="magnifying-glass" class="ml-6 text-2xl text-blue-600" />
      </form>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar'
});
</script>

<style></style>