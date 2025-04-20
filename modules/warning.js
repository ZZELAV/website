// warning.js
// display a warning

/**
 * check screen size and display warning if necessary
 */
export function checkScreenSize() {
  // skip if banner has been dismissed before
  if (localStorage.getItem("smallScreenWarningDismissed") === "true") {
    return;
  }

  // define minimum recommend screen size (width in pixels)
  const minRecommendWidth = 768;

  // check if current screen is smaller than recommended
  if (window.innerWidth < minRecommendWidth) {
    showScreenWarning();
  }

  // also check on resize, but with throttling
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // only show if not already dismissed and screen is too small
      if (
        localStorage.getItem("smallScreenWarningDismissed") !== "true" &&
        window.innerWidth < minRecommendWidth
      ) {
        showScreenWarning();
      }
    }, 250);
  });
}

/**
 * create and show the screen size warning banner
 */
function showScreenWarning() {
  // check if banner already exists
  if (document.getElementById("screen-warning-banner")) {
    return;
  }

  // create banner element
  const banner = document.createElement("div");
  banner.id = "screen-warning-banner";
  banner.className = "screen-warning-banner";

  // create warning text
  const warningText = document.createElement("div");
  warningText.className = "warning-text";
  warningText.textContent =
    "This website is optimized for larger screens. Some functionality may be limited on small displays.";

  // create dismiss button
  const dismissButton = document.createElement("button");
  dismissButton.className = "dismiss-button";
  dismissButton.textContent = "×";
  dismissButton.setAttribute("aria-label", "Dismiss warning");

  // add click handler to dismiss
  dismissButton.addEventListener("click", dismissWarning);

  // assemble banner
  banner.appendChild(warningText);
  banner.appendChild(dismissButton);

  // add to document
  document.body.appendChild(banner);

  // animate in
  setTimeout(() => {
    banner.classList.add("visible");
  }, 100);
}

/**
 * dismiss the warning and save preference
 */
function dismissWarning() {
  const banner = document.getElementById("screen-warning-banner");

  if (banner) {
    // animate out
    banner.classList.remove("visible");

    // remove after animation
    setTimeout(() => {
      if (banner.parentNode) {
        banner.parentNode.removeChild(banner);
      }
    }, 300);

    // save dismissal in localStorage
    localStorage.setItem("smallScreenWarningDismissed", "true");
  }
}
