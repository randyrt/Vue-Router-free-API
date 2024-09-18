<template>
  <router-link :to="`/video/${videoInfo.video.videoId}`">
    <div class="m-6 col column" @mouseover="isHovering = true" @mouseleave="isHovering = false">
      <div class="car-video">
        <div class="flex-row d-flex g-4">
          <div class="">
            <div class="card">
              <img :src="isHovering && videoInfo.video.movingThumbnails.length > 0 && videoInfo.video.thumbnails
                ? videoInfo.video.movingThumbnails[0].url
                : videoInfo.video.thumbnails[0].url" class="card-img-top" alt="image">
              <div class="card-body">
                <h5 class="card-title text-primary">www.werstling.com</h5>
                <p class="card-text title">{{ videoInfo.video.title }}</p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">{{ videoInfo.video.stats.views }} views,
                  {{ videoInfo.video.publishedTimeText }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardVideo',
  props: {
    videoInfo: Object
  },
  data() {
    return {
      isHovering: false,
    }
  }
});
</script>

<style>
body {
  background-color: grey;
}

.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1rem;
  font-weight: bolder;
}

.column {
  height: 300px !important;
  width: 400px !important;
}
</style>