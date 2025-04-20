// output.js
// manage the output in the terminal

import { scrollToBottom } from "./utils.js";

/**
 * generate an output in the terminal
 * @param { string } output - the text to show
 */
export function outputGenerator(output) {
  const { outputField } = window.shellState;
  outputField.innerHTML += `<p class="output-history">${output}</p>`;
  scrollToBottom(outputField);
}

/**
 * clear the terminal output
 */
export function clearOutput() {
  const { outputField } = window.shellState;
  outputField.innerHTML = "";
}

/**
 * show empty line in output
 */
export function showEmpty() {
  const { outputField } = window.shellState;
  outputField.innerHTML += `<p></p>`;
  scrollToBottom(outputField);
}

/**
 * show the entered command in the output
 * @param { string } command - the entered command
 * @param { string } currentTime - the current time
 */
export function displayCommandInOutput(command, currentTime) {
  const { outputField, username } = window.shellState;
  outputField.innerHTML += `<span class="output-history">${username} [${currentTime}] ~ % ${command}</span>`;
  scrollToBottom(outputField);
}
