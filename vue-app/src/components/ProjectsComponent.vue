<template>
  <main>
    <div class="projects__card-container">
      <section class="projects__card" v-for="item in items">
        <img :src="item.img" :alt="item.title" />
        <div class="projects__card-text-container">
          <p class="projects__card-title">{{ item.title }}</p>
          <p class="projects__card-description">{{ item.description }}</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          img: "https://picsum.photos/300/200",
          title: "Card-1",
          description: "Description-1",
        },
        {
          img: "https://picsum.photos/300/200",
          title: "Card-2",
          description: "Description-2",
        },
        {
          img: "https://picsum.photos/300/200",
          title: "Card-3",
          description: "Description-3",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "@/assets/main.css";

.projects__card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.projects__card {
  margin: var(--rem-300);
  border: var(--rem-100) solid var(--color-500);
  border-radius: 10px;
  background-color: var(--color-500);
}
.projects__card img {
  padding: var(--rem-200);
}
.projects__card-text-container {
  background-color: var(--color-600);
  border-radius: 0 0 10px 10px;
  padding: var(--rem-200);
}
.projects__card-title {
  color: var(--color-200);
  font-weight: bold;
}
.projects__card-description {
  font-size: 0.8rem;
}
</style>
