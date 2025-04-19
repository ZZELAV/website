// time.js
// manage the time output in the prompt

/**
 * reload the time format in the input prompt
 */
export function updateTimeDisplay() {
  const { username, inputPrompt } = window.shellState;

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  inputPrompt.innerHTML = `${username} [${timeString}]`;
}

/**
 * return the current formatted time
 */
export function getCurrentTimeString() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * extract the time from the prompt
 */
export function extractTimeFromPrompt() {
  const { inputPrompt } = window.shellState;
  const timeMatch = inputPrompt.innerHTML.match(/\[(.*?)\]/);
  return timeMatch ? timeMatch[1] : "00:00:00";
}
