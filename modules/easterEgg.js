// easterEgg.js
// little easter egg command

/**
 * activate the easter egg
 */
export function activateEasterEgg() {
  const { htmlElement } = window.shellState;

  // clear all
  document.body.innerHTML = "";

  // body styling
  document.body.style.backgroundColor = "#000000";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.width = "100%";
  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  htmlElement.style.border = "1rem solid #ff0000";

  showHackScreen("../static/img/skull_1.png", "../static/img/skull_2.png");
}

/**
 * show hack screen with pictures
 * @param { string } image1Path - path to first image
 * @param { string } image2Path - path to second image
 */
function showHackScreen(image1Path, image2Path) {
  const hackContainer = document.createElement("div");
  hackContainer.style.display = "flex";
  hackContainer.style.flexDirection = "column";
  hackContainer.style.alignItems = "center";
  hackContainer.style.justifyContent = "center";
  hackContainer.style.textAlign = "center";
  hackContainer.style.position = "absolute";
  hackContainer.style.top = "50%";
  hackContainer.style.left = "50%";
  hackContainer.style.transform = "translate(-50%, -50%)";
  hackContainer.style.width = "100%";
  hackContainer.style.maxWidth = "500px";
  hackContainer.style.padding = "20px";
  hackContainer.style.boxSizing = "border-box";

  // create image container
  const imageContainer = document.createElement("div");
  imageContainer.style.position = "relative";
  imageContainer.style.width = "100%";
  imageContainer.style.maxWidth = "700px";
  imageContainer.style.aspectRatio = "1/1";
  imageContainer.style.margin = "0 auto";

  // first image
  const image1 = document.createElement("img");
  image1.src = image1Path;
  image1.alt = "Hacked";
  image1.style.position = "absolute";
  image1.style.top = "0";
  image1.style.left = "0";
  image1.style.width = "100%";
  image1.style.height = "100%";
  image1.style.objectFit = "contain";
  image1.style.opacity = "1";

  // second image
  const image2 = document.createElement("img");
  image2.src = image2Path;
  image2.alt = "Hacked";
  image2.style.position = "absolute";
  image2.style.top = "0";
  image2.style.left = "0";
  image2.style.width = "100%";
  image2.style.height = "100%";
  image2.style.objectFit = "contain";
  image2.style.opacity = "0";

  // text message
  const messageText = document.createElement("p");
  messageText.textContent = "SYSTEM COMPROMISED";
  messageText.style.color = "#ff0000";
  messageText.style.fontSize = "clamp(1.5rem, 5vw, 2.5rem)";
  messageText.style.margin = "1.5rem 0 0.5rem 0";
  messageText.style.textAlign = "center";
  messageText.style.fontFamily = "monospace, sans-serif";
  messageText.style.fontWeight = "bold";
  // add text shadow for glitch effect base
  messageText.style.textShadow =
    "0.05em 0 0 rgba(255,0,0,.75), -0.025em -0.05em 0 rgba(0,255,0,.75), 0.025em 0.05em 0 rgba(0,0,255,.75)";
  messageText.style.position = "relative";

  const subText = document.createElement("p");
  subText.textContent = "All your files have been deleted.";
  subText.style.color = "#ff0000";
  subText.style.fontSize = "clamp(0.8rem, 3vw, 1.2rem)";
  subText.style.margin = "0";
  subText.style.textAlign = "center";
  subText.style.fontFamily = "monospace, sans-serif";

  // create glitch overlay elements
  const glitchBefore = document.createElement("span");
  glitchBefore.textContent = "SYSTEM COMPROMISED";
  glitchBefore.style.position = "absolute";
  glitchBefore.style.top = "0";
  glitchBefore.style.left = "0";
  glitchBefore.style.width = "100%";
  glitchBefore.style.height = "100%";
  glitchBefore.style.color = "#ff0000";
  glitchBefore.style.clipPath = "rect(0, 0, 0, 0)";
  glitchBefore.style.display = "block";

  const glitchAfter = document.createElement("span");
  glitchAfter.textContent = "SYSTEM COMPROMISED";
  glitchAfter.style.position = "absolute";
  glitchAfter.style.top = "0";
  glitchAfter.style.left = "0";
  glitchAfter.style.width = "100%";
  glitchAfter.style.height = "100%";
  glitchAfter.style.color = "#ff0000";
  glitchAfter.style.clipPath = "rect(0, 0, 0, 0)";
  glitchAfter.style.display = "block";

  // add glitch elements to the message text container
  messageText.appendChild(glitchBefore);
  messageText.appendChild(glitchAfter);

  // paste elements
  imageContainer.appendChild(image1);
  imageContainer.appendChild(image2);
  hackContainer.appendChild(imageContainer);
  hackContainer.appendChild(messageText);
  hackContainer.appendChild(subText);
  document.body.appendChild(hackContainer);

  // image animation
  let showingFirstImage = true;
  setInterval(() => {
    if (showingFirstImage) {
      image1.style.opacity = "0";
      image2.style.opacity = "1";
    } else {
      image1.style.opacity = "1";
      image2.style.opacity = "0";
    }
    showingFirstImage = !showingFirstImage;
  }, 200);

  // pulse effect for text
  let pulseValue = 0.3;
  let pulseDirection = 0.05;

  setInterval(() => {
    messageText.style.opacity = pulseValue;
    pulseValue += pulseDirection;

    if (pulseValue >= 1) {
      pulseValue = 1;
      pulseDirection = -0.01;
    } else if (pulseValue <= 0.8) {
      pulseValue = 0.8;
      pulseDirection = 0.01;
    }
  }, 50);

  // glitch effect animation
  setInterval(() => {
    // random glitch timing
    if (Math.random() > 0.7) {
      // first glitch element
      const glitchOffsetX1 = Math.random() * 10 - 5 + "px";
      const glitchOffsetY1 = Math.random() * 5 - 2.5 + "px";
      const top1 = Math.floor(Math.random() * 100) + "%";
      const height1 = Math.floor(Math.random() * 12 + 5) + "px";
      const width1 = Math.floor(Math.random() * 100 + 50) + "%";

      glitchBefore.style.transform = `translate3d(${glitchOffsetX1}, ${glitchOffsetY1}, 0)`;
      glitchBefore.style.clipPath = `rect(${top1}, ${width1}, ${height1}, 0)`;
      glitchBefore.style.color = Math.random() > 0.5 ? "#0ff" : "#f00";

      // second glitch element
      const glitchOffsetX2 = Math.random() * 10 - 5 + "px";
      const glitchOffsetY2 = Math.random() * 5 - 2.5 + "px";
      const top2 = Math.floor(Math.random() * 100) + "%";
      const height2 = Math.floor(Math.random() * 12 + 5) + "px";
      const width2 = Math.floor(Math.random() * 100 + 30) + "%";

      glitchAfter.style.transform = `translate3d(${glitchOffsetX2}, ${glitchOffsetY2}, 0)`;
      glitchAfter.style.clipPath = `rect(${top2}, ${width2}, ${height2}, 0)`;
      glitchAfter.style.color = Math.random() > 0.5 ? "#ff0" : "#f0f";

      // main text displacement
      const mainOffset = Math.random() * 6 - 3 + "px";
      messageText.style.transform = `translate3d(${mainOffset}, 0, 0)`;

      // reset after short random duration (10-150ms)
      setTimeout(() => {
        glitchBefore.style.clipPath = "rect(0, 0, 0, 0)";
        glitchAfter.style.clipPath = "rect(0, 0, 0, 0)";
        messageText.style.transform = "translate3d(0, 0, 0)";
      }, Math.random() * 140 + 10);
    }
  }, 100);

  // screen distortion effect (occasional)
  setInterval(() => {
    if (Math.random() > 0.9) {
      // apply distortion to the hack container
      hackContainer.style.filter = `blur(${Math.random() * 3}px) hue-rotate(${
        Math.random() * 360
      }deg)`;

      // reset after brief moment
      setTimeout(() => {
        hackContainer.style.filter = "none";
      }, Math.random() * 100 + 50);
    }
  }, 500);

  // delete localStorage (simulate data loss)
  localStorage.clear();

  // block event handling
  document.addEventListener("keydown", blockEvents, true);
  document.addEventListener("keyup", blockEvents, true);
  document.addEventListener("keypress", blockEvents, true);
  document.addEventListener("click", blockEvents, true);
}

/**
 * block all events
 * @param { event } event - the event to block
 */
function blockEvents(event) {
  event.stopPropagation();
  event.preventDefault();
  return false;
}
