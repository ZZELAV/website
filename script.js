document.addEventListener("DOMContentLoaded", function () {
  const htmlElement = document.documentElement;
  const inputPrompt = document.getElementById("input-prompt");
  const inputField = document.getElementById("input-field");
  const outputField = document.getElementById("output-wrapper");

  let username = localStorage.getItem("username") || "guest";

  const commandHistory = [];
  let historyIndex = 0;

  const availableCommands = [
    "about",
    "clear",
    "help",
    "projects",
    "repo",
    "socials",
    "whois",
    "user",
    "logout",
    "theme",
  ];

  let autocompleteOptions = [];
  let autocompleteIndex = -1;
  let originalInput = "";

  loadSavedTheme();
  updateTimeDisplay();

  setInterval(updateTimeDisplay, 1000);

  outputField.innerHTML =
    `<p class="output-history">valentino panico | shell<br>` +
    `version 2.1<br><br>` +
    `type 'help' for a list of all commands</p>`;

  htmlElement.addEventListener("click", function () {
    const selection = window.getSelection().toString();

    if (selection === "") {
      inputField.focus();
    }
  });

  inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const input = event.target.value.trim();

      resetAutocomplete();

      if (input !== "") {
        if (
          commandHistory.length === 0 ||
          commandHistory[commandHistory.length - 1] !== input
        ) {
          commandHistory.push(input);
          if (commandHistory.length > 50) {
            commandHistory.shift();
          }
        }
        historyIndex = commandHistory.length;
      }

      processCommand(input);
      event.target.value = "";
    } else if (event.key === "ArrowUp") {
      event.preventDefault();

      if (autocompleteOptions.length > 0) {
        navigateAutocomplete(-1);
      } else {
        if (historyIndex > 0) {
          historyIndex--;
          inputField.value = commandHistory[historyIndex];

          setTimeout(() => {
            inputField.selectionStart = inputField.selectionEnd =
              inputField.value.length;
          }, 0);
        }
      }

      // if (historyIndex > 0) {
      //   historyIndex--;
      //   inputField.value = commandHistory[historyIndex];

      //   setTimeout(() => {
      //     inputField.selectionStart = inputField.selectionEnd =
      //       inputField.value.length;
      //   }, 0);
      // }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();

      if (autocompleteOptions.length > 0) {
        navigateAutocomplete(1);
      } else {
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          inputField.value = commandHistory[historyIndex];
        } else if (historyIndex === commandHistory.length - 1) {
          historyIndex = commandHistory.length;
          inputField.value = "";
        }
      }

      // if (historyIndex < commandHistory.length - 1) {
      //   historyIndex++;
      //   inputField.value = commandHistory[historyIndex];
      // } else if (historyIndex === commandHistory.length - 1) {
      //   historyIndex = commandHistory.length;
      //   inputField.value = "";
      // }
    } else if (event.key === "Tab") {
      event.preventDefault();
      const input = event.target.value.trim();

      if (autocompleteOptions.length > 0) {
        if (autocompleteIndex === -1) {
          autocompleteIndex = 0;
          inputField.value = autocompleteOptions[autocompleteIndex];
        } else {
          autocompleteIndex =
            (autocompleteIndex + 1) % autocompleteOptions.length;
          inputField.value = autocompleteOptions[autocompleteIndex];
        }
      } else if (input) {
        startAutocomplete(input);
      }
    } else {
      resetAutocomplete();
    }
  });

  function startAutocomplete(input) {
    originalInput = input;

    autocompleteOptions = availableCommands.filter((cmd) =>
      cmd.startsWith(input.toLowerCase())
    );

    if (autocompleteOptions.length > 0) {
      autocompleteIndex = 0;
      inputField.value = autocompleteOptions[autocompleteIndex];

      setTimeout(() => {
        inputField.selectionStart = inputField.selectionEnd =
          inputField.value.length;
      }, 0);
    }
  }

  function navigateAutocomplete(direction) {
    if (autocompleteOptions.length === 0) return;

    autocompleteIndex += direction;

    if (autocompleteIndex < 0) {
      autocompleteIndex = autocompleteOptions.length - 1;
    } else if (autocompleteIndex >= autocompleteOptions.length) {
      autocompleteIndex = 0;
    }

    inputField.value = autocompleteOptions[autocompleteIndex];

    setTimeout(() => {
      inputField.selectionStart = inputField.selectionEnd =
        inputField.value.length;
    }, 0);
  }

  function resetAutocomplete() {
    autocompleteOptions = [];
    autocompleteIndex = -1;
    originalInput = "";
  }

  function updateTimeDisplay() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    inputPrompt.innerHTML = `${username} [${timeString}]`;
  }

  function processCommand(command) {
    let timeMatch = inputPrompt.innerHTML.match(/\[(.*?)\]/);
    const currentTime = timeMatch ? timeMatch[1] : "00:00:00";

    outputField.innerHTML += `<span class="output-history">${username} [${currentTime}] &#10148; ${command}</span>`;

    const commandParts = command.toLowerCase().split(" ");
    const mainCommand = commandParts[0];
    const parameter = commandParts.slice(1).join(" ");

    if (mainCommand === "user" && parameter) {
      changeUser(parameter);
      return;
    }

    if (mainCommand === "theme" && parameter) {
      switchTheme(parameter);
      return;
    }

    switch (mainCommand) {
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
            `2011 - 2017      primary school - kreuzlingen<br><br>` +
            `# others <br>` +
            `2024 - now       military service as infantry crew member`
        );
        break;
      case "clear":
        outputField.innerHTML = ``;
        break;
      case "help":
        outputGenerator(
          `about          about me<br>` +
            `clear          clear the terminal<br>` +
            `help           show this help page<br>` +
            `projects       list my projects<br>` +
            `repo           link to the github repository<br>` +
            `socials        show links to socials<br>` +
            `whois          who am i<br><br>` +
            `user NAME      change user to NAME<br>` +
            `logout         logout current user<br>` +
            `theme #        switch theme to #`
        );
        break;
      case "projects":
        outputGenerator(
          `<a href="https://github.com/ZZELAV/lernjournal" target="_blank">lernjournal</a>              documentation of different tasks durring my apprenticeship<br>` +
            `<a href="https://github.com/ZZELAV/docusaurus-template" target="_blank">docusaurus-template</a>      customized docusaurus<br>` +
            `<a href="https://github.com/ZZELAV/ventoy-usb" target="_blank">ventoy-usb</a>               template for a ventoy boot usb-stick<br>` +
            `<a href="https://github.com/ZZELAV/DogeRadio" target="_blank">dogeradio</a>                a small application to play different radio stations`
        );
        break;
      case "repo":
        outputGenerator(
          `<a href="https://github.com/ZZELAV/website" target="_blank">https://github.com/ZZELAV/website</a>`
        );
        break;
      case "socials":
        outputGenerator(
          `<a href="https://github.com/ZZELAV" target="_blank">github/zzelav</a><br>` +
            `<a href="https://www.linkedin.com/in/valentino-panico-87ba49262" target="_blank">linkedin/valentino-panico</a><br>` +
            `<a href="https://x.com/zzelavX" target="_blank">x/zzelavX</a>`
        );
        break;
      case "whois":
        outputGenerator(
          `hi 👋. i'm valentino panico.<br>` +
            `i was born on the 28th of august in 2004.<br>` +
            `i live in kreuzlingen 🇨🇭 and i'm doing an apprenticeship<br>` +
            `as a computer scientist 🖥️ at lenze swiss ag in romanshorn 🇨🇭.<br>` +
            `currently i'm doing my military service as infantry crew member 🛡️.<br><br>` +
            `in my free time i like to work on my homeserver.<br>` +
            `i constantly try new technologies to learn about them.`
        );
        break;
      case "logout":
        document.documentElement.removeAttribute("data-theme");
        localStorage.removeItem("selectedTheme");

        document.documentElement.removeAttribute("data-font");
        localStorage.removeItem("selectedFont");

        username = "guest";
        localStorage.removeItem("username");
        updateTimeDisplay();

        outputGenerator(
          `user logged out<br>` + `all settings reset to default`
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

  function changeUser(newUsername) {
    if (!newUsername || newUsername.trim() === "") {
      outputGenerator(`user cannot be empty`);
      return;
    }

    username = newUsername;
    localStorage.setItem("username", username);
    updateTimeDisplay();

    outputGenerator(`user changed to ${username}`);

    window.scrollTo(0, htmlElement.scrollHeight);
  }

  function switchTheme(themeNumber) {
    const themeNum = parseInt(themeNumber, 10);

    if (themeNum > 0 && themeNum < 8) {
      document.documentElement.removeAttribute("data-theme");
      document.documentElement.setAttribute("data-theme", themeNum.toString());

      outputGenerator(`theme switched to ${themeNum}`);

      saveTheme(themeNum);

      window.scrollTo(0, htmlElement.scrollHeight);
    } else {
      outputGenerator(`theme ${themeNumber} does not exist`);
    }
  }

  function saveTheme(themeNumber) {
    localStorage.setItem("selectedTheme", themeNumber.toString());
  }

  function loadSavedTheme() {
    const savedTheme = localStorage.getItem("selectedTheme");

    if (savedTheme) {
      switchTheme(savedTheme);
    }
  }
});
