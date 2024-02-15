<script lang="ts" setup></script>

<template>
  <div class="navbar-wrapper">
    <div class="navbar-title">
      <a href="/">Valentino Panico</a>
      <p>IT | FPV Drone | 3D Art</p>
    </div>
    <div class="navbar-links">
      <a href="/about">About</a>
      <!-- <a href="/3d-art">3D Art</a> -->
    </div>
  </div>
</template>

<style scoped>
.navbar-wrapper {
  text-transform: uppercase;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}
.navbar-title {
  font-size: 1.5rem;
}
.navbar-title > p {
  font-size: 0.8rem;
}
.navbar-links > a {
  padding: 0.5rem 1rem;
  margin-right: 1rem;
}
.navbar-links > a:last-of-type {
  margin-right: 0;
}
</style>
