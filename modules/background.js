// background.js
// manage the background of the desktop

/**
 * set a random background
 */
export function setRandomBackground(backgroundElement) {
  const backgroundImages = [
    "../static/img/background/1.jpg",
    "../static/img/background/2.jpg",
    "../static/img/background/3.jpg",
    "../static/img/background/4.jpg",
    "../static/img/background/5.jpg",
    "../static/img/background/6.jpg",
    "../static/img/background/7.jpg",
    "../static/img/background/8.jpg",
    "../static/img/background/9.jpg",
    "../static/img/background/10.jpg",
    "../static/img/background/11.jpg",
    "../static/img/background/12.jpg",
    "../static/img/background/13.jpg",
    "../static/img/background/14.jpg",
    "../static/img/background/15.jpg",
    "../static/img/background/16.jpg",
    "../static/img/background/17.jpg",
    "../static/img/background/18.jpg",
    "../static/img/background/19.jpg",
    "../static/img/background/20.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const imageUrl = backgroundImages[randomIndex];

  // new image element, to lazy load the image
  const img = new Image();
  img.onload = function () {
    // when image is loaded, set it as background
    backgroundElement.style.backgroundImage = `url(${imageUrl})`;
  };

  // error handling - if loading has failed
  img.onerror = function () {
    console.error("Loading of image failed. Using default background.");
  };

  // start the loading of the image
  img.src = imageUrl;
}
