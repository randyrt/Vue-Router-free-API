<template>
  <div class="ml-3 container-fluid row">
    <div class="col-12">
      <h1 class="text-white display-4">Welcome to WWE</h1>
    </div>
  </div>
  <div class="container-fluid mb-9">
    <div class="row">
      <CardVideo v-for="video in videos" :key="video.id" :videoInfo="video" class="mb-4 col-md-4" />
    </div>
  </div>

</template>

<script>
import { defineComponent } from "vue"
import CardVideo from "../components/CardVideo.vue";

export default defineComponent({
  name: 'Home',
  components: { CardVideo },
  data() {
    return {
      videos: [],
    }
  },
  mounted() {
    const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&filter=videos_latest&hl=en&gl=US';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '438da88480mshba35dde24d4c118p10f149jsn0932b90da999',
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then((data) => console.log(this.videos = data.contents))
      .catch((error) => console.log('erreur : ', error));
  }
});
</script>