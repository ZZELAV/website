// main.js
// mainfile and initialisation

import { setupAutocomplete } from "./modules/autocomplete.js";
import { setupCmdController } from "./modules/cmdController.js";
import { loadSavedTheme } from "./modules/theme.js";
import { updateTimeDisplay } from "./modules/time.js";
import { scrollToBottom, observeOutputChanges } from "./modules/utils.js";
import { setupTrafficLights } from "./modules/trafficLights.js";
import { setRandomBackground } from "./modules/background.js";

document.addEventListener("DOMContentLoaded", function () {
  // dom elements
  const htmlElement = document.documentElement;
  const inputPrompt = document.getElementById("input-prompt");
  const inputField = document.getElementById("input-field");
  const outputField = document.getElementById("output-wrapper");
  const desktopBackground = document.getElementById("desktop-background");
  const version = "2.3.1";

  // state variables
  window.shellState = {
    username: localStorage.getItem("username") || "guest",
    commandHistory: [],
    historyIndex: 0,
    inputPrompt,
    inputField,
    outputField,
    htmlElement,
  };

  // init shell
  initShell();

  // load random background image
  setRandomBackground(desktopBackground);

  function initShell() {
    loadSavedTheme();
    updateTimeDisplay();

    // timer for refreshing the time every second
    setInterval(updateTimeDisplay, 1000);

    // welcome message => will be shown on startup/reload
    outputField.innerHTML =
      `<p class="output-history">valentino panico | shell<br>` +
      `version ${version}<br><br>` +
      `type 'commands' for a list of all commands<br>` +
      `type 'help CMD' to learn about a command</p>`;

    // setup event listener
    setupEventListeners();

    // init command controller
    setupCmdController();

    // init autocomplete
    setupAutocomplete();

    // init traffic lights functionality
    setupTrafficLights();

    // set up output observer for automatic scrolling
    observeOutputChanges(outputField);

    // initial scroll to bottom
    scrollToBottom(outputField);
  }

  function setupEventListeners() {
    // focus on input field when clicking on empty area
    htmlElement.addEventListener("click", function () {
      const selection = window.getSelection().toString();
      if (selection === "") {
        inputField.focus();
      }
    });

    // focus input when clicking in the terminal content area
    document
      .querySelector(".content-area")
      .addEventListener("click", function (e) {
        // only focus if we're not selecting text
        if (window.getSelection().toString() === "") {
          inputField.focus();
        }
      });
  }
});
