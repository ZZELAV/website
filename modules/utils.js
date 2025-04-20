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
 * scroll to the bottom of the output area
 * @param { HTMLElement } [ outputElement=document.querySelector('.output-wrapper') ] - the output element to scroll
 */
export function scrollToBottom(
  outputElement = document.querySelector(".output-wrapper")
) {
  if (!outputElement) return;

  // scroll the output element to its bottom
  outputElement.scrollTop = outputElement.scrollHeight;
}

/**
 * observe output changes and scroll to bottom when content is added
 * @param { HTMLElement } outputElement - the output element to observe
 */
export function observeOutputChanges(
  outputElement = document.querySelector(".output-wrapper")
) {
  if (!outputElement) return;

  // create a mutation observer to watch for changes in the output area
  const observer = new MutationObserver(() => {
    scrollToBottom(outputElement);
  });

  // start observing the output element for changes in its children or content
  observer.observe(outputElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  return observer;
}
