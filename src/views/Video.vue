<template>
  <div class="flex flex-col items-center px-8">
    <div>
      <iframe class="rounded-lg" :src="`https://youtube.com/embed/${$route.params.id}`" width="900" height="400"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <h3 class="mt-4">{{ videoInfo.title }}</h3>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Video',
  data() {
    return {
      videoInfo: {}
    }
  },
  mounted() {
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${this.$route.params.id}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '438da88480mshba35dde24d4c118p10f149jsn0932b90da999',
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        this.videoInfo = data;
        console.log(this.videoInfo);
      })
      .catch((error) => console.log('Erreur :', error));
  }
});
</script>

<style scoped></style>
