// trafficLights.js
// manage the behavior of macOS-style traffic lights

import { showBanner } from "./output.js";

/**
 * set up event listeners for the traffic light buttons
 */
export function setupTrafficLights() {
  const terminal = document.getElementById("terminal");
  const closeButton = document.getElementById("close-button");
  const minimizeButton = document.getElementById("minimize-button");
  const maximizeButton = document.getElementById("maximize-button");
  const terminalShortcut = document.getElementById("terminal-shortcut");

  // terminal state
  let isMaximized = false;

  // set up the initial state
  if (!terminal) return;

  // close button
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      closeTerminal(terminal);
    });
  }

  // minimize button
  if (minimizeButton) {
    minimizeButton.addEventListener("click", () => {
      minimizeTerminal(terminal);
    });
  }

  // maximize button
  if (maximizeButton) {
    maximizeButton.addEventListener("click", () => {
      if (isMaximized) {
        restoreTerminal(terminal);
        isMaximized = false;
      } else {
        maximizeTerminal(terminal);
        isMaximized = true;
      }
    });
  }

  // terminal shortcut
  if (terminalShortcut) {
    // add double-click event listener
    terminalShortcut.addEventListener("dblclick", () => {
      openTerminal(terminal);
    });
  }
}

/**
 * close the terminal window
 * @param { HTMLElement } terminal - the terminal element
 */
function closeTerminal(terminal) {
  terminal.classList.add("terminal-hidden");

  // save state to indicate the terminal was closed, not minimized
  if (window.shellState) {
    window.shellState.terminalState.isMinimized = false;

    // reset terminal content when closing
    window.shellState.terminalState.content = "";
    window.shellState.outputField.innerHTML = "";
  }
}

/**
 * minimize the terminal window
 * @param { HTMLElement } terminal - the terminal element
 */
function minimizeTerminal(terminal) {
  terminal.classList.add("terminal-hidden");

  // save state to indicate the terminal was minimized, not closed
  if (window.shellState) {
    window.shellState.terminalState.isMinimized = true;

    // store current content when minimizing
    window.shellState.terminalState.content =
      window.shellState.outputField.innerHTML;
  }
}

/**
 * maximize the terminal window with smooth transition
 * @param { HTMLElement } terminal - the terminal element
 */
function maximizeTerminal(terminal) {
  // apply transition for smooth animation
  terminal.style.transition = "all 0.3s ease";

  // maximize with slight delay to ensure smooth transition
  requestAnimationFrame(() => {
    terminal.style.top = "0";
    terminal.style.left = "0";
    terminal.style.width = "100%";
    terminal.style.height = "100%";
    terminal.style.borderRadius = "0.5rem";
    terminal.style.transform = "none";
  });
}

/**
 * restore the terminal to its previous size with smooth transition
 * @param { HTMLElement } terminal - the terminal element
 */
function restoreTerminal(terminal) {
  // apply transition for smooth animation
  terminal.style.transition = "all 0.3s ease";

  // apply restoration with slight delay for smooth transition
  requestAnimationFrame(() => {
    terminal.style.top = "50%";
    terminal.style.left = "50%";
    terminal.style.width = "80%";
    terminal.style.height = "80%";
    terminal.style.borderRadius = "0.5rem";
    terminal.style.transform = "translate(-50%, -50%)";
  });
}

/**
 * open the terminal window
 * @param { HTMLElement } terminal - the terminal element
 */
function openTerminal(terminal) {
  // remove transition first to prevent animation when opening
  terminal.style.transition = "none";

  terminal.classList.remove("terminal-hidden");

  // check if we need to restore content (from minimized state) or reset (from closed state)
  if (window.shellState) {
    if (
      window.shellState.terminalState.isMinimized &&
      window.shellState.terminalState.content
    ) {
      // restore content from minimized state
      window.shellState.outputField.innerHTML =
        window.shellState.terminalState.content;
    } else if (!window.shellState.terminalState.isMinimized) {
      // reset terminal if it was closed
      showBanner();
    }
  }

  // force reflow to ensure no transition when opening
  terminal.offsetHeight;

  // restore transition capability after opening
  setTimeout(() => {
    terminal.style.transition = "all 0.3s ease";
  }, 50);

  document.getElementById("input-field").focus();
}
