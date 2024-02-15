<script lang="ts" setup></script>

<template>
  <div class="article-wrapper">
    <table>
      <tbody>
        <tr>
          <th>Über mich</th>
          <th></th>
        </tr>
        <tr>
          <td>Name</td>
          <td>Panico</td>
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
          <th>Berufliche Erfahrung</th>
          <th></th>
        </tr>
        <tr>
          <td>2020 - jetzt</td>
          <td>Informatiker - Lenze Swiss AG, Romanshorn</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th>Bildung</th>
          <th></th>
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
    <a href="https://www.linkedin.com/in/valentino-panico-87ba49262" target="_blank"><img src="../assets/linkedin_logo.png" alt="LinkedIn Logo"></a>
  </div>
</template>

<style scoped>
.article-wrapper {
  padding: 2rem 0;
  width: 50%;
  margin-inline: auto;
}
table {
  width: 100%;
  margin-bottom: 3rem;
}
table th {
  text-align: left;
  font-weight: bold;
}
th {
  height: 3rem;
  vertical-align: bottom;
}
td {
  height: 1.5rem;
}
img[alt="LinkedIn Logo"] {
  height: 1.5rem;
}
</style>
