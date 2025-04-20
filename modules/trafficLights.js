// trafficLights.js
// manage the behavior of macOS-style traffic lights

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
    terminalShortcut.addEventListener("click", () => {
      openTerminal(terminal);
    });

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
}

/**
 * minimize the terminal window
 * @param { HTMLElement } terminal - the terminal element
 */
function minimizeTerminal(terminal) {
  terminal.classList.add("terminal-hidden");
}

/**
 * maximize the terminal window
 * @param { HTMLElement } terminal - the terminal element
 */
function maximizeTerminal(terminal) {
  terminal.style.top = "0";
  terminal.style.left = "0";
  terminal.style.width = "100%";
  terminal.style.height = "100%";
  terminal.style.borderRadius = "0";
  terminal.style.transform = "none";

  // keep track of the previous size and position
  terminal.dataset.prevWidth = "80%";
  terminal.dataset.prevHeight = "80%";
}

/**
 * restore the terminal to its previous size
 * @param { HTMLElement } terminal - the terminal element
 */
function restoreTerminal(terminal) {
  terminal.style.top = "50%";
  terminal.style.left = "50%";
  terminal.style.width = terminal.dataset.prevWidth || "80%";
  terminal.style.height = terminal.dataset.prevHeight || "80%";
  terminal.style.transform = "translate(-50%, -50%)";
  terminal.style.borderRadius = "0.5rem";
}

/**
 * open the terminal window
 * @param { HTMLElement } terminal - the terminal element
 */
function openTerminal(terminal) {
  terminal.classList.remove("terminal-hidden");
  document.getElementById("input-field").focus();
}
