// user.js
// manage the user functionality

import { outputGenerator, updatePromptDisplay } from "./output.js";
import { scrollToBottom } from "./utils.js";

/**
 * change the current user
 * @param { string } newUsername - the new username
 */
export function changeUser(newUsername) {
  if (!newUsername || newUsername.trim() === "") {
    outputGenerator(`user cannot be empty`);
    return;
  }

  window.shellState.username = newUsername;
  localStorage.setItem("username", newUsername);
  updatePromptDisplay();

  outputGenerator(`user changed to ${newUsername}`);
  scrollToBottom();
}

/**
 * logout the current user and reset the settings
 */
export function logout() {
  const { htmlElement } = window.shellState;

  htmlElement.removeAttribute("data-theme");
  localStorage.removeItem("selectedTheme");

  htmlElement.removeAttribute("data-font");
  localStorage.removeItem("selectedFont");

  window.shellState.username = "guest";
  localStorage.removeItem("username");
  updatePromptDisplay();

  outputGenerator(`user logged out<br>` + `all settings reset to default`);
}
