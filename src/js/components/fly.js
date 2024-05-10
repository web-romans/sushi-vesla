import { throttle } from '../functions/throttle';

const mediumTablet = 1140;
let documentWIdth = document.documentElement.clientWidth;

function move(elSelector, tabletParentSelector, tabletPosSelector, descParentSelector, descPosSelector) {
  const clientWidth = document.documentElement.clientWidth;

  const el = document.querySelector(elSelector);
  const tabletParent = document.querySelector(tabletParentSelector);
  const descParent = document.querySelector(descParentSelector);
  const tabletPos = document.querySelector(tabletPosSelector);
  const descPos = document.querySelector(descPosSelector);

  (clientWidth <= mediumTablet) ? moveBlock(el, tabletParent, tabletPos) : moveBlock(el, descParent, descPos);

}

function moveBlock(item, content, pos) {
  pos !== "" ? content.insertBefore(item, pos) : content.appendChild(item);
}

const fly = () => {
  // move(".userbox", ".header__menu", ".menu__list", ".header__top", ".burger");
  move(".search", ".header__menu", ".menu__list", ".header__top", ".header__lang ");
}
fly();
window.addEventListener("resize", () => {
  const clientWidth = document.documentElement.clientWidth;

  if (clientWidth !== documentWIdth) {
    fly();
  }
});
