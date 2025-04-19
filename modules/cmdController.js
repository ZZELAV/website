// cmdController.js
// manage the command processing

import {
  outputGenerator,
  displayCommandInOutput,
  clearOutput,
  showEmpty,
} from "./output.js";
import { extractTimeFromPrompt } from "./time.js";
import { changeUser, logout } from "./user.js";
import { switchTheme, showThemes } from "./theme.js";

// available commands for autocomplete
export const availableCommands = [
  "about",
  "clear",
  "commands",
  "help",
  "logout",
  "projects",
  "repo",
  "socials",
  "theme",
  "themes",
  "user",
  "whois",
];

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
  if (mainCommand === "help" && parameter) {
    showHelp(parameter);
    return;
  }

  if (mainCommand === "theme" && parameter) {
    switchTheme(parameter);
    return;
  }

  if (mainCommand === "user" && parameter) {
    changeUser(parameter);
    return;
  }

  // standard commands
  switch (mainCommand) {
    case "":
      showEmpty();
      break;

    case "about":
      showAbout();
      break;

    case "clear":
      clearOutput();
      break;

    case "commands":
      showCommands();
      break;

    case "help":
      showHelp();
      break;

    case "logout":
      logout();
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

    case "themes":
      showThemes();
      break;

    case "whois":
      showWhois();
      break;

    default:
      outputGenerator(
        `unknown command<br>` +
          `type 'commands' for a list of all commands<br>` +
          `type 'help CMD' to learn about a command`
      );
  }
}

/**
 * show the about
 */
function showAbout() {
  outputGenerator(
    `# about me<br>` +
      `lastname             panico<br>` +
      `prename              valentino<br>` +
      `birthday             28th of august 2004<br>` +
      `residence            kreuzlingen, ch-8280 switzerland<br>` +
      `job                  computer scientist<br>` +
      `e-mail               <a href="mailto:valentino.panico@icloud.com">valentino.panico@icloud.com</a><br><br>` +
      `# job experience<br>` +
      `2020 - now           computer scientist - lenze swiss ag, romanshorn<br><br>` +
      `# education<br>` +
      `2020 - 2024          apprenticeship (computer scientist efz) - bzt, frauenfeld<br>` +
      `2017 - 2020          secondary school (level e) - sbw talent campus bodensee, kreuzlingen<br>` +
      `2011 - 2017          primary school - kreuzlingen<br><br>` +
      `# others <br>` +
      `2024 - now           military service as infantry crew member`
  );
}

/**
 * show the list of commands
 */
function showCommands() {
  outputGenerator(
    `about                help CMD              repo                  themes<br>` +
      `clear                logout                socials               user NAME<br>` +
      `commands             projects              theme #               whois`
  );
}

/**
 * show the help page to a command
 * @param { string } command - the command to show the help page
 */
function showHelp(command) {
  if (command === undefined) {
    command = "";
  }
  switch (command) {
    case "about":
      outputGenerator(`about<br>` + `- shows the about page`);
      break;

    case "clear":
      outputGenerator(`clear<br>` + `- clear the terminal`);
      break;

    case "commands":
      outputGenerator(`commands<br>` + `- shows a list of available commands`);
      break;

    case "help":
      outputGenerator(`help<br>` + `- shows this page to describe a command`);
      break;

    case "logout":
      outputGenerator(
        `logout<br>` + `- logout the current user and reset settings`
      );
      break;

    case "projects":
      outputGenerator(`projects<br>` + `- list my projects`);
      break;

    case "repo":
      outputGenerator(`repo<br>` + `- link to the github repository`);
      break;

    case "socials":
      outputGenerator(`socials<br>` + `- show links to my socials`);
      break;

    case "theme":
      outputGenerator(`theme<br>` + `- switch to an other theme`);
      break;

    case "themes":
      outputGenerator(`themes<br>` + `- show the available themes`);
      break;

    case "user":
      outputGenerator(`user<br>` + `- change user`);
      break;

    case "whois":
      outputGenerator(`whois<br>` + `- show a text to explain who i am`);
      break;

    default:
      outputGenerator(
        `unknown parameter '${command}'<br>` +
          `type a valid command to show the help page`
      );
  }
}

/**
 * show projects
 */
function showProjects() {
  outputGenerator(
    `<a href="https://github.com/ZZELAV/lernjournal" target="_blank">lernjournal</a>                  documentation of different tasks durring my apprenticeship<br>` +
      `<a href="https://github.com/ZZELAV/docusaurus-template" target="_blank">docusaurus-template</a>          customized docusaurus<br>` +
      `<a href="https://github.com/ZZELAV/ventoy-usb" target="_blank">ventoy-usb</a>                   template for a ventoy boot usb-stick<br>` +
      `<a href="https://github.com/ZZELAV/DogeRadio" target="_blank">dogeradio</a>                    a small application to play different radio stations`
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
      `i live in kreuzlingen 🇨🇭 and i've done an apprenticeship<br>` +
      `as a computer scientist 🖥️ at lenze swiss ag in romanshorn 🇨🇭.<br>` +
      `currently i'm doing my military service as infantry crew member 🛡️.<br><br>` +
      `in my free time i like to work on my homeserver.<br>` +
      `i constantly try new technologies to learn about them.`
  );
}
