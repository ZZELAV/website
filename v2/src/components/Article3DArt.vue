<script lang="ts" setup>
import dataJson from '../assets/3d-art_data.json'

const data = dataJson
</script>

<template>
  <div class="article-wrapper">
    <div class="gallery" v-for="obj in data">
      <img :src="obj.image" :alt="obj.description">
      <p>{{ obj.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.article-wrapper {
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.gallery {
  flex: 0 0 33.3333%;
  position: relative;
}
.gallery::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  background: linear-gradient(to top, #000, transparent);
  width: 100%;
  height: 8rem;
}
.gallery > img {
  width: 100%;
}
.gallery > p {
  position: absolute;
  font-size: 1.5rem;
  bottom: 1rem;
  left: 1rem;
  z-index: 99;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
.gallery:hover > p {
  opacity: 1;
}
</style>
