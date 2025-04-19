// theme.js
// manage the themes of the terminal

import { outputGenerator } from "./output.js";
import { scrollToBottom } from "./utils.js";

// the count of available themes
const countAvailableThemes = 7;

/**
 * change to a selected theme
 * @param { string|number} themeNumber - the theme number
 */
export function switchTheme(themeNumber) {
  const { htmlElement } = window.shellState;
  const themeNum = parseInt(themeNumber, 10);

  if (themeNum > 0 && themeNum < countAvailableThemes + 1) {
    htmlElement.removeAttribute("data-theme");
    htmlElement.setAttribute("data-theme", themeNum.toString());

    outputGenerator(`theme switched to ${themeNum}`);
    saveTheme(themeNum);

    scrollToBottom();
  } else {
    outputGenerator(`theme ${themeNumber} does not exist`);
  }
}

/**
 * save the current them in localStorage
 * @param { number } themeNumber - the theme number to save
 */
export function saveTheme(themeNumber) {
  localStorage.setItem("selectedTheme", themeNumber.toString());
}

/**
 * load the saved theme from localStorage
 */
export function loadSavedTheme() {
  const savedTheme = localStorage.getItem("selectedTheme");

  if (savedTheme) {
    switchTheme(savedTheme);
  }
}
