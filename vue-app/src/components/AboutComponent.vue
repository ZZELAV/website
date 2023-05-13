<template>
  <main>
    <div class="about__container">
      <h1 class="about__heading">Lebenslauf</h1>
      <table>
        <tbody>
          <tr>
            <td>Über mich</td>
            <td></td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              Panico
              <img
                class="about__portrait"
                src="@/assets/Panico_Valentino.jpg"
                alt="Valentino Panico"
              />
            </td>
          </tr>
          <tr>
            <td>Vorname</td>
            <td>Valentino</td>
          </tr>
          <tr>
            <td>Geburtsdatum</td>
            <td>28.08.2004</td>
          </tr>
          <tr>
            <td>Wohnort</td>
            <td>Kreuzlingen, CH-8280, Schweiz</td>
          </tr>
          <tr>
            <td>Beruf</td>
            <td>Informatik</td>
          </tr>
          <tr>
            <td>E-Mail</td>
            <td>
              <a href="mailto:valentino.panico@icloud.com">
                valentino.panico@icloud.com
              </a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Berufliche Erfahrung</td>
            <td></td>
          </tr>
          <tr>
            <td>2020 - jetzt</td>
            <td>Informatiker - Lenze Swiss AG, Romanshorn</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Bildung</td>
            <td></td>
          </tr>
          <tr>
            <td>2020 - jetzt</td>
            <td>Lehre (Informatiker EFZ) - BZT, Frauenfeld</td>
          </tr>
          <tr>
            <td>2017 - 2020</td>
            <td>
              Oberstufe (Niveau E) - SBW Talent Campus Bodensee, Kreuzlingen
            </td>
          </tr>
          <tr>
            <td>2011 - 2017</td>
            <td>Primarschule - Kreuzlingen</td>
          </tr>
        </tbody>
      </table>
      <a class="button-100 about__download-pdf" href="./CV.pdf" target="_blank">
        <i class="fas fa-download"></i> PDF
      </a>
      <TextShortComponent class="about__description" />
    </div>
  </main>
</template>

<script setup>
import TextShortComponent from "./TextShortComponent.vue";
</script>

<script>
export default {};
</script>

<style scoped>
@import "@/assets/main.css";

.about__heading {
  display: none;
  text-transform: uppercase;
  padding-bottom: var(--rem-600);
}
.about__container table {
  border-collapse: collapse;
}
.about__container table tbody tr:first-of-type td {
  text-transform: uppercase;
}
.about__container table tbody tr:last-of-type td {
  padding-bottom: var(--rem-500);
  border-bottom: none;
}
.about__container table tbody tr td {
  padding: var(--rem-200) var(--rem-500) var(--rem-200) var(--rem-200);
  text-align: right;
  font-weight: bold;
  border-bottom: 1px solid var(--color-500);
}
.about__container table tbody tr td:last-of-type {
  padding-right: var(--rem-200);
  text-align: left;
  font-weight: normal;
}
.about__portrait {
  display: none;
  height: 210px;
  position: absolute;
  top: 10rem;
  left: 34.5rem;
  border-inline: 1rem solid white;
}
.about__download-pdf {
  float: right;
}
.about__description {
  display: none;
  width: 20rem;
  margin: var(--rem-500) 0 0 var(--rem-200);
}

@media screen and (max-width: 768px) {
  .about__container table tbody tr td {
    display: block;
    text-align: left;
    padding-left: var(--rem-300);
  }
  .about__container table tbody tr td:first-of-type {
    border-bottom: none;
  }
  .about__container table tbody tr td:last-of-type {
    padding-top: 0;
    padding-left: var(--rem-500);
  }
  .about__container table tbody tr:last-of-type td:first-of-type {
    padding-bottom: var(--rem-200);
  }
  .about__container table tbody tr:last-of-type td:last-of-type {
    padding-right: var(--rem-200);
  }
  .about__download-pdf {
    margin-right: var(--rem-300);
  }
}
</style>

<style>
@media print {
  header {
    display: none;
  }
  html,
  body {
    background-color: transparent;
    color: black;
    font-size: 1rem;
  }
  a {
    color: black !important;
  }
  main {
    margin: 0 !important;
  }
  .about__container table {
    width: 100%;
  }
  .about__heading,
  .about__container table tbody tr td:first-of-type {
    color: var(--color-400);
  }
  .about__heading,
  .about__portrait,
  .about__description {
    display: block !important;
  }
  .about__download-pdf {
    display: none;
  }
}
</style>
