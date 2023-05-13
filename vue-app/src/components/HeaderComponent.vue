<template>
  <header>
    <i
      class="fas fa-bars"
      :class="{ 'header__menu-open': isMenuOpen }"
      @click="showMenu()"
    ></i>
    <ul :class="{ 'header__menu-open': isMenuOpen }">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">Über mich</router-link>
      </li>
      <li>
        <router-link to="/projects">Projekte</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    showMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
@import "@/assets/base.css";

header {
  padding: var(--rem-300) var(--rem-300) var(--rem-200);
  border-bottom: var(--rem-100) solid var(--color-accent);
  box-shadow: 0 5px 30px var(--color-accent);
}
header i {
  display: none;
}
header ul li {
  list-style-type: none;
  display: inline-block;
}
header ul li a,
header i {
  padding: var(--rem-200) var(--rem-300);
  transition: all 0.3s ease-in-out;
  margin-right: 1rem;
  border-bottom: var(--rem-100) solid transparent;
  text-transform: uppercase;
}
header ul li a:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  box-shadow: inset 0 -10px 8px -10px var(--color-accent);
}
a.router-link-active {
  color: var(--color-accent);
  border-color: var(--color-accent);
  box-shadow: inset 0 -10px 8px -10px var(--color-accent);
}

@media screen and (max-width: 768px) {
  header i {
    display: block;
  }
  header ul {
    display: none;
    text-align: center;
  }
  header ul li {
    display: block;
    margin-bottom: 2rem;
  }
  header ul li:last-of-type {
    margin-bottom: 1.5rem;
  }
  header i.header__menu-open {
    color: var(--color-200);
  }
  header ul.header__menu-open {
    display: block;
  }
}
</style>
