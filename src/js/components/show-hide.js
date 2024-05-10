import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const showBtns = document.querySelectorAll("[data-show-btn]");
const showContents = document.querySelectorAll("[data-show-content]");
const overlay = document.querySelector("[data-overlay-2]");

if (showBtns && showContents) {
  showBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      showContents.forEach((cont) => {
        if (cont.getAttribute("data-show-content") === "constructor") {
          let heightBl = cont.offsetHeight;
          let clientHeight = document.documentElement.clientHeight;

          if (heightBl > clientHeight) {
            cont.style.height = clientHeight + "px";
          }

        }

        let listener = function (e) {
          let target = e.target;
          let itsContent = target == cont || cont.contains(target);
          let itsBtn = target == el;
          let contentIsHide = cont.classList.contains("_hide");
          if (!itsContent && !itsBtn && !contentIsHide) {
            closed()
          }
        };

        function show() {
          cont.classList.remove("_hide");
          overlay.classList.remove("_hide");
          disableScroll();
          document.addEventListener('click', listener, false);
        }

        function closed() {
          cont.classList.add("_hide");
          overlay.classList.add("_hide");
          enableScroll();
          document.removeEventListener('click', listener, false);
        }

        if (el.getAttribute("data-show-btn") === cont.getAttribute("data-show-content")) {
          const close = cont.querySelector("[data-close]");
          show();
          if (close) {
            close.addEventListener("click", e => {
              e.preventDefault();
              closed()
            });
          }



        }

      });
    });
  });
}
