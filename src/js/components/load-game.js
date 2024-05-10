import offset from "../functions/offset";

const gameBtn = document.querySelector("[data-game-src]");
const gameContainer = document.querySelector("[data-game-container]");

const iframes = document.querySelectorAll("[data-iframe-load]");
let iframeLoad = [];

if (iframes) {
  iframes.forEach((el, i) => {
    iframeLoad[i] = false
    document.addEventListener("scroll", () => {
      if (!iframeLoad[i]) {
        let elOffset = offset(el).top - document.body.clientHeight;
        if (window.pageYOffset > elOffset) {
          const src = el.getAttribute("data-iframe-load");
          addFrame(el, src);
          iframeLoad[i] = true;
        }
      }
    });
  });
}

if (gameBtn) {
  gameBtn.addEventListener("click", () => {
    const src = gameBtn.getAttribute("data-game-src");
    addFrame(gameContainer, src);
  });
}

function addFrame(container, src) {
  const newFrame = document.createElement("iframe");
  newFrame.setAttribute("src", src);
  newFrame.setAttribute("allowfullscreen", "allowfullscreen");
  container.innerHTML = "";
  container.appendChild(newFrame)
}




