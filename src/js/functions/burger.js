import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const burger = document?.querySelector("[data-burger]");
const menu = document?.querySelector("[data-menu]");

export const closeMenu = () => {
  menu?.classList.add("_show");
}

burger?.addEventListener("click", (e) => {
  burger?.classList.toggle("burger--active");
  menu?.classList.toggle("_show");
  menu?.classList.contains("_show") ? disableScroll() : enableScroll();
});




