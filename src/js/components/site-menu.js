import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const openBtn = document.querySelector("[data-open-menu]");
const siteMenu = document.querySelector("[data-site-menu]");
const overlay = document.querySelector("[data-overlay]");
const closeBtn = document.querySelector("[data-close-menu]");

const openSubBtns = document.querySelectorAll("[data-open-sub]");
const subMenus = document.querySelectorAll("[data-sub-menu]");
const closeSubMenus = document.querySelectorAll("[data-close-sub]");



function openSiteMenu() {
  if (siteMenu) siteMenu.classList.remove("_hide");
  if (overlay) overlay.classList.remove("_hide");
  closeSubs();
  disableScroll();
}

function closeSiteMenu() {
  if (siteMenu) siteMenu.classList.add("_hide");
  if (overlay) overlay.classList.add("_hide");
  enableScroll();
}

if (openBtn) {
  openBtn.addEventListener("click", () => {
    openSiteMenu();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    closeSiteMenu();
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    closeSiteMenu();
  });
}

if (openSubBtns) {
  openSubBtns.forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      let menuNum = el.getAttribute("data-open-sub");

      for (let i = 0; i < subMenus.length; i++) {
        if (menuNum === subMenus[i].getAttribute("data-sub-menu")) {
          subMenus[i].classList.remove("_hide");
        }
      }
    })
  })
}


function closeSubs() {
  subMenus.forEach(el => {
    el.classList.add("_hide");
  })
}

if (closeSubMenus) {
  closeSubMenus.forEach(el => {
    el.addEventListener("click", () => {
      closeSubs();
    })
  })
}
