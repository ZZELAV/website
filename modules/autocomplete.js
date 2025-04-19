// autocomplete.js
// implement the autocomplete functionality

import { processCommand } from "./cmdController.js";
import { setCursorToEnd } from "./utils.js";

// available commands for autocomplete
const availableCommands = [
  "about",
  "clear",
  "help",
  "projects",
  "repo",
  "socials",
  "whois",
  "user",
  "logout",
  "theme",
];

// autocomplete state
let autocompleteOptions = [];
let autocompleteIndex = -1;
let originalInput = "";

/**
 * setup for autocomplete functionality
 */
export function setupAutocomplete() {
  const { inputField } = window.shellState;

  // event listener for keypress
  inputField.addEventListener("keydown", handleKeyDown);
}

/**
 * handles keyboard events
 * @param { KeyboardEvent } event - the keyboard event
 */
function handleKeyDown(event) {
  const { inputField } = window.shellState;
  const input = inputField.value.trim();

  // handle events on key "Enter"
  if (event.key === "Enter") {
    event.preventDefault();

    // process command
    processInputCommand(input);

    // handle events on key "ArrowUp"
  } else if (event.key === "ArrowUp") {
    event.preventDefault();

    // check, if autocomplete is active
    if (autocompleteOptions.length > 0) {
      navigateAutocomplete(-1);
    } else {
      navigateHistory(-1);
    }

    // handle events on key "ArrowDown"
  } else if (event.key === "ArrowDown") {
    event.preventDefault();

    // check, if autocomplete is active
    if (autocompleteOptions.length > 0) {
      navigateAutocomplete(1);
    } else {
      navigateHistory(1);
    }

    // handle events on key "Tab"
  } else if (event.key === "Tab") {
    event.preventDefault();

    if (input) {
      if (autocompleteOptions.length > 0) {
        // autocomplete options are available which can be cycled
        if (autocompleteIndex === -1) {
          // choose first suggestion, if none is selected
          autocompleteIndex = 0;
          inputField.value = autocompleteOptions[autocompleteIndex];
        } else {
          // go to next suggestion or start from beginning
          autocompleteIndex =
            (autocompleteIndex + 1) % autocompleteOptions.length;
          inputField.value = autocompleteOptions[autocompleteIndex];
        }
      } else {
        // generate new suggestions
        startAutocomplete(input);
      }
    }
  } else {
    // reset autocomplete on every other key
    resetAutocomplete();
  }
}

/**
 * process the entered command
 * @param { string } input - the entered command
 */
function processInputCommand(input) {
  const { inputField, commandHistory } = window.shellState;
  const trimmedInput = input.trim();

  // reset autocomplete
  resetAutocomplete();

  if (trimmedInput !== "") {
    // add command to history
    if (
      commandHistory.length === 0 ||
      commandHistory[commandHistory.length - 1] !== trimmedInput
    ) {
      commandHistory.push(trimmedInput);
      if (commandHistory.length > 50) {
        commandHistory.shift();
      }
    }
    window.shellState.historyIndex = commandHistory.length;
  }

  processCommand(trimmedInput);
  inputField.value = "";
}

/**
 * navigate through the command history
 * @param { number } direction - direction (-1 for backwards, 1 for forwards)
 */
function navigateHistory(direction) {
  const { inputField, commandHistory } = window.shellState;
  let { historyIndex } = window.shellState;

  if (direction < 0 && historyIndex > 0) {
    // navigate upwards in history
    historyIndex--;
    inputField.value = commandHistory[historyIndex];
    setCursorToEnd(inputField);
  } else if (direction > 0) {
    // navigate downwards in history
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      inputField.value = commandHistory[historyIndex];
    } else if (historyIndex === commandHistory.length - 1) {
      // arrived at the end of history, clear input field
      historyIndex = commandHistory.length;
      inputField.value = "";
    }
  }
  window.shellState.historyIndex = historyIndex;
}

/**
 * start the autocomplete process
 * @param { string } input - the current input
 */
function startAutocomplete(input) {
  const { inputField } = window.shellState;
  originalInput = input;

  // filter suggestions based on input
  autocompleteOptions = availableCommands.filter((cmd) =>
    cmd.startsWith(input.toLowerCase())
  );

  if (autocompleteOptions.length > 0) {
    // select first suggestion
    autocompleteIndex = 0;
    inputField.value = autocompleteOptions[autocompleteIndex];

    setCursorToEnd(inputField);
  }
}

/**
 * navigate through autocomplete suggestions
 * @param { number } direction - direction (-1 for backwards, 1 for forwards)
 */
function navigateAutocomplete(direction) {
  const { inputField } = window.shellState;
  if (autocompleteOptions.length === 0) return;

  autocompleteIndex += direction;

  // check borders
  if (autocompleteIndex < 0) {
    autocompleteIndex = autocompleteOptions.length - 1;
  } else if (autocompleteIndex >= autocompleteOptions.length) {
    autocompleteIndex = 0;
  }

  inputField.value = autocompleteOptions[autocompleteIndex];
  setCursorToEnd();
}

/**
 * reset the autocomplete state
 */
function resetAutocomplete() {
  autocompleteOptions = [];
  autocompleteIndex = -1;
  originalInput = "";
}
