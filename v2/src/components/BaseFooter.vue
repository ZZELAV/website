<script lang="ts" setup></script>

<template>
  <div class="footer-wrapper">
    <div class="footer-copyright">
      <a href="/">&copy; 2024, Valentino Panico</a>
    </div>
    <!-- <div class="footer-language">
      <a href="/">DE</a>
      /
      <a href="/en">EN</a>
    </div> -->
  </div>
</template>

<style scoped>
.footer-wrapper {
  text-transform: uppercase;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}
.footer-language > a {
  padding: 0.5rem 1rem;
}
.footer-language > a:last-of-type {
  margin-right: 0;
}
</style>
