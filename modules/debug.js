// debug.js
// used to debug the website

import { activateEasterEgg } from "./easterEgg.js";

/**
 * reset localStorage
 */
function resetLocalStorage() {
  localStorage.clear();
  console.log("'localStorage' cleared. Page will be reset on next page load.");
}

/**
 * reset the dismissed state for testing
 * this can be called from console if needed
 */
function resetScreenWarningDismissed() {
  localStorage.removeItem("smallScreenWarningDismissed");
  console.log(
    "Screen warning reset. Will show again on next page load or resize."
  );
}

/**
 * trigger easter egg
 */
function triggerEasterEgg() {
  activateEasterEgg();
  console.log("Easter egg triggered. Reload the page to reset.");
}

// make functions available in the global scope for console access
window.debug = {
  resetLocalStorage,
  resetScreenWarningDismissed,
  triggerEasterEgg,
};
