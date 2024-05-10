import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const openModals = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll("[data-item]");

if (modals) {
  modals.forEach((el) => {
    const overlay = el.querySelector(".modal__overlay");
    const close = el.querySelectorAll(".close");

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        el.classList.remove("open");
        enableScroll();
      });
    }

    if (close) {
      const myEl = el;
      close.forEach((el) => {
        el.addEventListener("click", (e) => {
          myEl.classList.remove("open");
          enableScroll();
        });
      });
    }
  });
}

if (openModals) {
  openModals.forEach((el) => {
    const targets = document.querySelectorAll("[data-item]");

    for (let i = 0; i < targets.length; i++) {
      if (
        targets[i].getAttribute("data-item") === el.getAttribute("data-modal")
      ) {
        if (targets[i].getAttribute("data-item") === "promo-modal") {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            copyToClipboard(el);

            targets[i].classList.add("open");
            disableScroll();
          });
        } else {
          el.addEventListener("click", (e) => {
            targets[i].classList.add("open");
            disableScroll();
          });
        }
      }
    }
  });
}

function copyToClipboard(elem) {
  // create hidden text element, if it doesn't already exist
  var targetId = "_hiddenCopyText_";
  var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
  var origSelectionStart, origSelectionEnd;
  if (isInput) {
    // can just use the original source element for the selection and copy
    target = elem;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
  } else {
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId);
    if (!target) {
      var target = document.createElement("textarea");
      target.style.position = "fixed";
      target.style.left = "-9999px";
      target.style.top = "0";
      target.id = targetId;
      document.body.appendChild(target);
    }
    target.textContent = elem.textContent;
  }
  // select the content
  var currentFocus = document.activeElement;
  target.focus();
  target.setSelectionRange(0, target.value.length);

  // copy the selection
  var succeed;
  try {
    succeed = document.execCommand("copy");
  } catch (e) {
    succeed = false;
  }
  // restore original focus
  if (currentFocus && typeof currentFocus.focus === "function") {
    currentFocus.focus();
  }

  if (isInput) {
    // restore prior selection
    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
  } else {
    // clear temporary content
    target.textContent = "";
  }
  return succeed;
}
