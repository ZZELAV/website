<template>
  <main>
    <div class="home__container">
      <p class="home__name"><span>Valentino</span><br />Panico</p>
      <img
        class="home__portrait"
        src="@/assets/Panico_Valentino.jpg"
        alt="Valentino Panico"
      />
    </div>
    <p class="home__description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga asperiores
      aut dignissimos voluptatum sequi autem magni provident delectus
      consequatur explicabo.
    </p>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
@import "@/assets/base.css";

main {
  margin: var(--rem-700) auto;
  width: fit-content;
}
.home__name {
  font-size: var(--font-500);
  font-weight: bold;
  line-height: 3.4rem;
  text-shadow: 5px 5px 0 var(--color-500);
}
.home__name span {
  background: linear-gradient(90deg, var(--color-200), var(--color-400));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 0.65rem;
  text-shadow: 0 0 10px var(--color-200);
  animation: flicker 3s linear 1s forwards;
}
.home__portrait {
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 20px var(--color-200);
  animation: flicker-shadow 5s linear infinite;
  position: relative;
  left: 20rem;
  top: -2rem;
}
.home__description {
  margin: 0 5.7rem;
  width: 20rem;
}

@media screen and (max-width: 768px) {
  main {
    margin-top: var(--rem-600);
  }
  .home__name {
    font-size: var(--font-400);
    line-height: 2.6rem;
  }
  .home__name span {
    margin-left: 0.45rem;
  }
  .home__portrait {
    left: 0;
    top: 2rem;
    margin: 0 auto;
    display: block;
  }
  .home__description {
    margin: 0;
    margin-top: 4rem;
  }
}

@keyframes flicker {
  0% {
    filter: brightness(1);
  }
  3% {
    filter: brightness(0);
  }
  6% {
    filter: brightness(1);
  }
  7% {
    filter: brightness(0);
  }
  8% {
    filter: brightness(1);
  }
  9% {
    filter: brightness(0);
  }
  10% {
    filter: brightness(1);
  }
  20% {
    filter: brightness(0);
  }
  50% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(1);
  }
}

@keyframes flicker-shadow {
  0% {
    box-shadow: 0 0 20px var(--color-200);
  }
  3% {
    box-shadow: 0 0 10px var(--color-200);
  }
  6% {
    box-shadow: 0 0 20px var(--color-200);
  }
  7% {
    box-shadow: 0 0 10px var(--color-200);
  }
  8% {
    box-shadow: 0 0 20px var(--color-200);
  }
  9% {
    box-shadow: 0 0 10px var(--color-200);
  }
  10% {
    box-shadow: 0 0 20px var(--color-200);
  }
  20% {
    box-shadow: 0 0 10px var(--color-200);
  }
  30% {
    box-shadow: 0 0 20px var(--color-200);
  }
  100% {
    box-shadow: 0 0 20px var(--color-200);
  }
}
</style>
