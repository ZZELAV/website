document.addEventListener("DOMContentLoaded", function () {
  const htmlElement = document.documentElement;
  const inputPrompt = document.getElementById("input-prompt");
  const inputField = document.getElementById("input-field");
  const outputField = document.getElementById("output-wrapper");

  var username = "guest";

  inputPrompt.innerHTML = username;
  outputField.innerHTML +=
    `<p class="output-history">valentino panico | shell<br>` +
    `version 1.0<br><br>` +
    `type 'help' for a list of all commands</p>`;

  htmlElement.addEventListener("click", function () {
    const selection = window.getSelection().toString();

    if (selection === "") {
      inputField.focus();
    }
  });

  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const input = event.target.value;
      proccessCommand(input);
      event.target.value = "";
    }
  });

  function proccessCommand(command) {
    outputField.innerHTML += `<span class="output-history">${username} &#10148; ${command}</span>`;
    switch (command.toLowerCase()) {
      case "":
        outputField.innerHTML += `<p></p>`;
        break;
      case "about":
        outputGenerator(
          `# about me<br>` +
            `lastname         panico<br>` +
            `prename          valentino<br>` +
            `birthday         28th of august 2004<br>` +
            `residence        kreuzlingen, ch-8280 switzerland<br>` +
            `job              computer scientist<br>` +
            `e-mail           <a href="mailto:valentino.panico@icloud.com">valentino.panico@icloud.com</a><br><br>` +
            `# job experience<br>` +
            `2020 - now       computer scientist - lenze swiss ag, romanshorn<br><br>` +
            `# education<br>` +
            `2020 - 2024      apprenticeship (computer scientist efz) - bzt, frauenfeld<br>` +
            `2017 - 2020      secondary school (level e) - sbw talent campus bodensee, kreuzlingen<br>` +
            `2011 - 2017      primary school - kreuzlingen`
        );
        break;
      case "clear":
        outputField.innerHTML = ``;
        break;
      case "help":
        outputGenerator(
          `about            about me<br>` +
            `clear            clear the terminal<br>` +
            `help             show this help page<br>` +
            `projects         list my projects<br>` +
            `repo             link to the github repository<br>` +
            `skills           list my skills<br>` +
            `socials          show links to socials<br>` +
            `whois            who am i`
        );
        break;
      case "projects":
        outputGenerator(``);
        break;
      case "repo":
        outputGenerator(
          `<a href="https://github.com/ZZELAV/website" target="_blank">https://github.com/ZZELAV/website</a>`
        );
        break;
      case "skills":
        outputGenerator(``);
        break;
      case "socials":
        outputGenerator(
          `<a href="https://github.com/ZZELAV" target="_blank">github</a><br>` +
            `<a href="https://www.linkedin.com/in/valentino-panico-87ba49262" target="_blank">linkedin</a>`
        );
        break;
      case "whois":
        outputGenerator(
          `hi 👋. i'm valentino panico.<br>` +
            `i was born on the 28th of august in 2004.<br>` +
            `i live in kreuzlingen 🇨🇭 and i'm doing an apprenticeship<br>` +
            `as a computer scientist 🖥️ at lenze swiss ag in romanshorn 🇨🇭.`
        );
        break;
      default:
        outputGenerator(
          `unknown command<br>` + `type 'help' for a list of all commands`
        );
    }
    window.scrollTo(0, htmlElement.scrollHeight);
  }

  function outputGenerator(output) {
    outputField.innerHTML += `<p class="output-history">${output}</p>`;
  }
});
