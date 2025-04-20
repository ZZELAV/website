// main.js
// mainfile and initialisation

import { setupAutocomplete } from "./modules/autocomplete.js";
import { setupCmdController } from "./modules/cmdController.js";
import { loadSavedTheme } from "./modules/theme.js";
import { updateTimeDisplay } from "./modules/time.js";
import { scrollToBottom, observeOutputChanges } from "./modules/utils.js";
import { setupTrafficLights } from "./modules/trafficLights.js";
import { setRandomBackground } from "./modules/background.js";
import { showBanner } from "./modules/output.js";

document.addEventListener("DOMContentLoaded", function () {
  // dom elements
  const htmlElement = document.documentElement;
  const inputPrompt = document.getElementById("input-prompt");
  const inputField = document.getElementById("input-field");
  const outputField = document.getElementById("output-wrapper");
  const desktopBackground = document.getElementById("desktop-background");
  const version = "2.4";

  // state variables
  window.shellState = {
    username: localStorage.getItem("username") || "guest",
    commandHistory: [],
    historyIndex: 0,
    inputPrompt,
    inputField,
    outputField,
    htmlElement,
    version,
    terminalState: {
      isMinimized: false,
      content: "",
    },
  };

  // load random background image
  setRandomBackground(desktopBackground);

  // init shell
  initShell();

  function initShell() {
    loadSavedTheme();
    updateTimeDisplay();

    // timer for refreshing the time every second
    setInterval(updateTimeDisplay, 1000);

    // welcome message => will be shown on startup/reload
    showBanner();

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
