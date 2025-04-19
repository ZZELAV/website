// utils.js
// general helper functions

/**
 * set the cursor to the end of the input field
 * @param { HTMLInputElement|HTMLTextAreaElement } inputElement - the input field
 * @param { number } [ delay=0 ] - optional delay in milliseconds
 */
export function setCursorToEnd(inputElement, delay = 0) {
  if (!inputElement) return;

  if (delay > 0) {
    setTimeout(() => {
      inputElement.selectionStart = inputElement.selectionEnd =
        inputElement.value.length;
      inputElement.focus();
    }, delay);
  } else {
    inputElement.selectionStart = inputElement.selectionEnd =
      inputElement.value.length;
    inputElement.focus();
  }
}

/**
 * scroll to the end of the site
 */
export function scrollToBottom() {
  window.scrollTo(0, document.documentElement.scrollHeight);
}
