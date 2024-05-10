import { enableScroll } from "../functions/enable-scroll";

//id букмекера на странице которого мы находимся
const curentId = "1";

//ajax-ом полученные данные
const companys = {
  "1": {
    "img": {
      "webp": "img/bookmakers/1xctabka.webp",
      "img": "img/bookmakers/1xctabka.png",
      "width": "74",
      "height": "10"
    },
    "link": "#",
    "company": "1хСтавка",
    "rank": "10/10",
    "text": "25 000 ₽",
    "margin": "2,5 - 7,5%",
    "redemptionRate": "Да",
    "legality": "Да",
    "taxRefund": "Да"
  },
  "2": {
    "img": {
      "webp": "img/bookmakers/melbet.webp",
      "img": "img/bookmakers/melbet.png",
      "width": "77",
      "height": "13"
    },
    "link": "#",
    "company": "Мелбет",
    "rank": "9/10",
    "text": "18 000 ₽",
    "margin": "2,5 - 8,5%",
    "redemptionRate": "Да",
    "legality": "Да",
    "taxRefund": "Нет"
  },
  "3": {
    "img": {
      "webp": "img/bookmakers/astrabet.webp",
      "img": "img/bookmakers/astrabet.png",
      "width": "94",
      "height": "30"
    },
    "link": "#",
    "company": "Астрабет",
    "rank": "5/10",
    "text": "25 000 ₽",
    "margin": "2,5 - 7,5%",
    "redemptionRate": "Да",
    "legality": "Да",
    "taxRefund": "Да"
  },
  "4": {
    "img": {
      "webp": "img/bookmakers/liga-stavok.webp",
      "img": "img/bookmakers/liga-stavok.png",
      "width": "74",
      "height": "28"
    },
    "link": "#",
    "company": "Лига Ставок",
    "rank": "2/10",
    "text": "13 999 ₽",
    "margin": "5,5 - 9,5%",
    "redemptionRate": "Нет",
    "legality": "Да",
    "taxRefund": "Нет"
  },
  "5": {
    "img": {
      "webp": "img/bookmakers/winline.webp",
      "img": "img/bookmakers/winline.png",
      "width": "74",
      "height": "28"
    },
    "link": "#",
    "company": "Винлайн",
    "rank": "3/10",
    "text": "999 ₽",
    "margin": "5,5 - 9,5%",
    "redemptionRate": "Нет",
    "legality": "Да",
    "taxRefund": "Нет"
  },
  "6": {
    "img": {
      "webp": "img/bookmakers/paribet.webp",
      "img": "img/bookmakers/paribet.png",
      "width": "74",
      "height": "28"
    },
    "link": "#",
    "company": "Paribet",
    "rank": "3/10",
    "text": "999 ₽",
    "margin": "5,5 - 9,5%",
    "redemptionRate": "Нет",
    "legality": "Да",
    "taxRefund": "Нет"
  },
  "7": {
    "img": {
      "webp": "img/bookmakers/marafon-bet.webp",
      "img": "img/bookmakers/marafon-bet.png",
      "width": "64",
      "height": "34"
    },
    "link": "#",
    "company": "Марафон",
    "rank": "3/10",
    "text": "999 ₽",
    "margin": "5,5 - 9,5%",
    "redemptionRate": "Нет",
    "legality": "Да",
    "taxRefund": "Нет"
  },
  "8": {
    "img": {
      "webp": "img/bookmakers/betsiti.webp",
      "img": "img/bookmakers/betsiti.png",
      "width": "74",
      "height": "28"
    },
    "link": "#",
    "company": "Бетсити",
    "rank": "6/10",
    "text": "999 ₽",
    "margin": "5,5 - 9,5%",
    "redemptionRate": "Нет",
    "legality": "Да",
    "taxRefund": "Нет"
  },
  "9": {
    "img": {
      "webp": "img/bookmakers/ivanbet.webp",
      "img": "img/bookmakers/ivanbet.png",
      "width": "74",
      "height": "28"
    },
    "link": "#",
    "company": "ivanbet",
    "rank": "7/10",
    "text": "999 ₽",
    "margin": "5,5 - 9,5%",
    "redemptionRate": "Нет",
    "legality": "Да",
    "taxRefund": "Нет"
  },
  "10": {
    "img": {
      "webp": "img/bookmakers/betboom.webp",
      "img": "img/bookmakers/betboom.png",
      "width": "83",
      "height": "30"
    },
    "link": "#",
    "company": "BetBoom",
    "rank": "7/10",
    "text": "999 ₽",
    "margin": "5,5 - 9,5%",
    "redemptionRate": "Нет",
    "legality": "Да",
    "taxRefund": "Нет"
  }
}

const data = companys;
const items = document.querySelector("[data-compare-table]");
const grid = document.querySelector("[data-compare-grid]");
const select = document.querySelector("[data-search-list]");
const confirmBtn = document.querySelector("[data-compare-confirm]");
const resetBtn = document.querySelector("[data-compare-reset]");
const selectBtn = document.querySelector("[data-search-item]");

let firstRender = true;

// чиска перед отрисовкой
function clear(el) {
  el.innerHTML = "";
}

function createTableItem() {
  const item = document.createElement('div');
  item.setAttribute("class", "bookmakers__item");
  return item;
}

// рисуем таблицу
function renderTable(item, data, key) {
  item.innerHTML = `
      <div class="bookmakers__company">
        <div class="bookmakers__company-content">
          <a href="${data[key].link}" rel="nofollow" target="_blank" class="bookmakers__logo">
            <picture>
              <source srcset="${data[key].img.webp}" type="image/webp">
              <img class="image" src="${data[key].img.img}" width="${data[key].img.width}" height="${data[key].img.height}" alt="${data[key].company}" />
            </picture>
            <noscript>
            <img class="image" src="${data[key].img.img}" width="${data[key].img.width}" height="${data[key].img.height}" alt="${data[key].company}" />
            </noscript>
          </a>

          <a href="#" class="bookmakers__company-name">${data[key].company}</a>
        </div>
      </div>
      `;

  item.innerHTML += `<div class="bookmakers__rating">${data[key].rank}</div>`;

  item.innerHTML += `
      <div class="bookmakers__bonus">
            <div class="bookmakers__bonus-container">
              <div class="bookmakers__bonus-line heading-info">
                <a href="#" rel="nofollow" target="_blank" class="heading-info__heading"><span>${data[key].text}</span></a>
              </div>
            </div>
          </div>
      `;

  item.innerHTML += `<div class="bookmakers__rating"><b>${data[key].margin}</b></div>`;

  item.innerHTML += `<div class="bookmakers__rating">${data[key].redemptionRate}</div>`;

  item.innerHTML += `<div class="bookmakers__rating">${data[key].legality}</div>`;

  item.innerHTML += `<div class="bookmakers__rating">${data[key].taxRefund}</div>`;

  // и добавляем
  items.appendChild(item);
}

function loadTable() {

  const showCount = 3; //сколько показывать припервой отрисовке
  let count = 0; // сколько  показал

  clear(items); //чистим

  // впервые
  if (firstRender) {
    // меняем состояние
    firstRender = false;

    // рисуем
    //первый текущий
    for (let key in data) {
      if (curentId === key) {
        const item = createTableItem();
        renderTable(item, data, key);

        data[key].isAppend = true;
        count++;
      } else {
        data[key].isAppend = false;
      }
    }

    // потом еще сколько нужно кроме добавленного
    for (let key in data) {
      if (!data[key].isAppend && count < showCount) {
        const item = createTableItem();
        renderTable(item, data, key);

        data[key].isAppend = true;
        count++;
      }
    }
  }
  // повторные отрисовки
  else {
    for (let key in data) {
      if (data[key].isAppend) {
        const item = createTableItem();
        renderTable(item, data, key);
      }
    }
  }
}

// рисуем модалку
function loadModal() {
  clear(grid);

  for (let key in data) {
    if (key !== curentId) {
      const item = document.createElement('div');

      // тут что-то с close
      const close = document.createElement('button');
      close.setAttribute("class", "modal-compare__item-close");

      // добавили close
      item.appendChild(close);

      //проверяем выбран ли
      !data[key].isAppend
        ? item.setAttribute("class", "modal-compare__item")
        : item.setAttribute("class", "modal-compare__item active")

      //генерируем item
      item.innerHTML += `
      <div class="modal-compare__logo">
        <picture>
          <source srcset="${data[key].img.webp}" type="image/webp">
          <img class="image" src="${data[key].img.img}" width="${data[key].img.width}" height="${data[key].img.height}" alt="${data[key].company}" />
        </picture>
        <noscript>
        <img class="image" src="${data[key].img.img}" width="${data[key].img.width}" height="${data[key].img.height}" alt="${data[key].company}" />
        </noscript>
      </div>
      <div class="modal-compare__name">${data[key].company}</div>
    `;

      // навешиваем на Item
      item.addEventListener('click', () => {
        data[key].isAppend ? data[key].isAppend = false : data[key].isAppend = true;
        loadModal();
        loadSelect();
      })

      // добавлено модалку!
      grid.appendChild(item);
    }
  }

}

// добавляем option
function addOption(newSelect, data, key) {
  const newOption = document.createElement("div");
  newOption.setAttribute("class", "sort__item sort__item--choice sort__item--sort-itemable")
  newOption.innerHTML += data[key].company;
  if (data[key].isAppend) newOption.classList.add("is-append");

  newOption.addEventListener("click", () => {
    data[key].isAppend ? data[key].isAppend = false : data[key].isAppend = true;
    loadSelect();
    loadModal();
  });
  newSelect.appendChild(newOption);
}

// рисуем select
function loadSelect() {
  clear(select);

  const newSelect = document.createElement("div");
  newSelect.setAttribute("class", "sort__item sort__item--sort-itemable");

  for (let key in data) {
    if (key !== curentId) addOption(newSelect, data, key);
  }

  select.appendChild(newSelect);
}

function closeModal() {
  const modal = document.querySelector("[data-item]");
  if (modal.getAttribute("data-item") === "modal-compare") {
    modal.classList.remove("open");
    enableScroll();
  }
}

// вызываем поле того как получили данные
if (items) {
  const parent = selectBtn.closest(".sort");
  const list = parent.querySelector(".sort__list--dropdown");

  confirmBtn.addEventListener("click", () => {
    loadTable();
    closeModal();
  })

  resetBtn.addEventListener("click", () => {
    firstRender = true;
    loadTable();
    loadModal();
    loadSelect();
  })

  selectBtn.addEventListener("click", (e) => {
    list.classList.toggle("is-active");
  })

  list.addEventListener("mouseleave", () => {
    list.classList.remove("is-active");
  })

  loadTable();
  loadModal();
  loadSelect();
}



