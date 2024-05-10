const bettingName = document?.querySelectorAll(".bookmakers__item");
const bettingCompare = document?.querySelector(".betting-compare");
const bettingCompareHeader = document?.querySelector(
  ".betting-compare__header"
);

const bettingCompareRemove = document?.querySelector(
  ".betting-compare__remove"
);
const bettingCompareFooter = document?.querySelector(
  ".betting-compare__footer"
);

const content = document?.querySelector(".betting-compare__content");
const bettingNum = document?.querySelector(".betting-compare__num");

let newEl = [];
let count = 0;

if (bettingCompareRemove) {
  bettingCompareRemove.addEventListener("click", (e) => {
    e.preventDefault();
    newEl = [];
    count = 0;
    const bettingItems = document?.querySelectorAll(".betting-compare__item");
    const bettingStar = document?.querySelectorAll(".bookmakers__star");
    bettingStar.forEach((el) => {
      el.classList.remove("checked");
    });

    bettingItems.forEach((el) => {
      content.removeChild(el);
    });

    bettingCompare.classList.remove("show");
    bettingNum.innerHTML = count;
  });
}

if (bettingName) {
  bettingName.forEach((el, i) => {
    const bettingStar = el?.querySelector(".bookmakers__star");
    const bettingLogo = el?.querySelector(".bookmakers__logo");
    const bettingTitle = el?.querySelector(".bookmakers__company-name");
    if (bettingStar) {
      bettingStar.addEventListener("click", (e) => {
        e.preventDefault();

        if (!newEl[i]) {
          newEl[i] = document.createElement("div");
          newEl[i].setAttribute("class", "betting-compare__item");
          newEl[i].innerHTML = bettingLogo.outerHTML + bettingTitle.outerHTML;
        }

        if (!bettingStar.classList.contains("checked")) {
          content.appendChild(newEl[i]);
          count++;
          bettingNum.innerHTML = count;
          bettingStar.classList.add("checked");
        } else {
          bettingStar.classList.remove("checked");
          content.removeChild(newEl[i]);
          count--;
          bettingNum.innerHTML = count;
        }

        if (count < 1) {
          bettingCompare.classList.remove("show");
        } else {
          bettingCompare.classList.add("show");
        }

        if (count == 1) {
          bettingCompareFooter.innerHTML =
            "<p>Вы можете сравнить трех букмекеров.</p>";
        } else {
          bettingCompareFooter.innerHTML = `<button class="betting-compare__btn btn btn--primary">Сравнить</button>`;
        }
      });
    }

  });
}

if (bettingCompareHeader) {
  bettingCompareHeader.addEventListener("click", (e) => {
    bettingCompare.classList.toggle("min");
  });
}
