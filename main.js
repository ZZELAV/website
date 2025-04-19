// main.js
// mainfile and initialisation

import { setupAutocomplete } from "./modules/autocomplete.js";
import { setupCmdController } from "./modules/cmdController.js";
import { loadSavedTheme } from "./modules/theme.js";
import { updateTimeDisplay } from "./modules/time.js";

document.addEventListener("DOMContentLoaded", function () {
  // dom elements
  const htmlElement = document.documentElement;
  const inputPrompt = document.getElementById("input-prompt");
  const inputField = document.getElementById("input-field");
  const outputField = document.getElementById("output-wrapper");
  const version = "2.3";

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

  function initShell() {
    loadSavedTheme();
    updateTimeDisplay();

    // timer for refreshing the time every second
    setInterval(updateTimeDisplay, 1000);

    // welcome message => will be shown on startup/reload
    outputField.innerHTML =
      `<p class="output-history">valentino panico | shell<br>` +
      `version ${version}<br><br>` +
      `type 'help' for a list of all commands</p>`;

    // setup event listener
    setupEventListeners();

    // init command controller
    setupCmdController();

    // init autocomplete
    setupAutocomplete();
  }

  function setupEventListeners() {
    // focus on input field when clicking on empty area
    htmlElement.addEventListener("click", function () {
      const selection = window.getSelection().toString();
      if (selection === "") {
        inputField.focus();
      }
    });
  }
});
