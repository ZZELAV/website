// cmdController.js
// manage the command processing

import {
  outputGenerator,
  displayCommandInOutput,
  clearOutput,
} from "./output.js";
import { extractTimeFromPrompt } from "./time.js";
import { changeUser, logout } from "./user.js";
import { switchTheme } from "./theme.js";

/**
 * setup the command controller
 */
export function setupCmdController() {
  // no init
}

/**
 * processes an entered command
 * @param { string } command - the entered command
 */
export function processCommand(command) {
  const currentTime = extractTimeFromPrompt();
  displayCommandInOutput(command, currentTime);

  const commandParts = command.toLowerCase().split(" ");
  const mainCommand = commandParts[0];
  const parameter = commandParts.slice(1).join(" ");

  // special commands with parameters
  if (mainCommand === "user" && parameter) {
    changeUser(parameter);
    return;
  }

  if (mainCommand === "theme" && parameter) {
    switchTheme(parameter);
    return;
  }

  // standard commands
  switch (mainCommand) {
    case "":
      const { outputField } = window.shellState;
      outputField.innerHTML += `<p></p>`;
      break;

    case "about":
      showAbout();
      break;

    case "clear":
      clearOutput();
      break;

    case "help":
      showHelp();
      break;

    case "projects":
      showProjects();
      break;

    case "repo":
      showRepo();
      break;

    case "socials":
      showSocials();
      break;

    case "whois":
      showWhois();
      break;

    case "logout":
      logout();
      break;

    default:
      outputGenerator(
        `unknown command<br>` + `type 'help' for a list of all commands`
      );
  }
}

/**
 * show the about
 */
function showAbout() {
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
}

/**
 * show the help
 */
function showHelp() {
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
}

/**
 * show projects
 */
function showProjects() {
  outputGenerator(
    `<a href="https://github.com/ZZELAV/lernjournal" target="_blank">lernjournal</a>              documentation of different tasks durring my apprenticeship<br>` +
      `<a href="https://github.com/ZZELAV/docusaurus-template" target="_blank">docusaurus-template</a>      customized docusaurus<br>` +
      `<a href="https://github.com/ZZELAV/ventoy-usb" target="_blank">ventoy-usb</a>               template for a ventoy boot usb-stick<br>` +
      `<a href="https://github.com/ZZELAV/DogeRadio" target="_blank">dogeradio</a>                a small application to play different radio stations`
  );
}

/**
 * show repo
 */
function showRepo() {
  outputGenerator(
    `<a href="https://github.com/ZZELAV/website" target="_blank">https://github.com/ZZELAV/website</a>`
  );
}

/**
 * show socials
 */
function showSocials() {
  outputGenerator(
    `<a href="https://github.com/ZZELAV" target="_blank">github/zzelav</a><br>` +
      `<a href="https://www.linkedin.com/in/valentino-panico-87ba49262" target="_blank">linkedin/valentino-panico</a><br>` +
      `<a href="https://x.com/zzelavX" target="_blank">x/zzelavX</a>`
  );
}

/**
 * show whois
 */
function showWhois() {
  outputGenerator(
    `hi 👋. i'm valentino panico.<br>` +
      `i was born on the 28th of august in 2004.<br>` +
      `i live in kreuzlingen 🇨🇭 and i'm doing an apprenticeship<br>` +
      `as a computer scientist 🖥️ at lenze swiss ag in romanshorn 🇨🇭.<br>` +
      `currently i'm doing my military service as infantry crew member 🛡️.<br><br>` +
      `in my free time i like to work on my homeserver.<br>` +
      `i constantly try new technologies to learn about them.`
  );
}
