import offset from "../functions/offset";

const scrollBonus = document.querySelector("[data-scroll-bonus]");
const footer = document.querySelector(".footer");

let isClose = false;

if (scrollBonus) {
  const closeBtn = scrollBonus.querySelector("[data-scroll-close]");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      isClose = true;
      scrollBonus.classList.add('hide');
    })
  }

  function closeBonus() {
    scrollBonus.classList.add('hide');
  }

  function showBonus() {
    scrollBonus.classList.remove('hide');
  }

  document.addEventListener("scroll", () => {
    if (!isClose) {
      let footerOffset = offset(footer).top - document.body.clientHeight;
      window.pageYOffset < footerOffset ? showBonus() : closeBonus();
    }

  });
}



