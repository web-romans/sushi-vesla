const map = document.querySelector("[data-map]");
const header = document.querySelector(".header");
const showMapBtn = document.querySelector("[data-show-map]");
const closeMapBtn = document.querySelector("[data-close-map]");

let scriptLoad = false;

if (showMapBtn) {
  showMapBtn.addEventListener("click", () => {
    addMap();
    showMapBtn.classList.add("_hide");
    map.classList.add("_show");
    const elementPosition = map.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });

  })
}

if (closeMapBtn) {
  closeMapBtn.addEventListener("click", () => {
    showMapBtn.classList.remove("_hide");
    map.classList.remove("_show");

    const elementPosition = header.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  })
}

function addMap() {
  map.innerHTML = `
  <div class="y-map" style="overflow:hidden;"><a href="https://yandex.by/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a href="https://yandex.by/maps/geo/moskva/53166393/?ll=37.692614%2C55.754544&utm_medium=mapframe&utm_source=maps&z=11.65" style="color:#eee;font-size:12px;position:absolute;top:14px;">Москва — Яндекс Карты</a><iframe src="https://yandex.by/map-widget/v1/-/CCURzZTkcA" width="1900" height="800" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
  `;
}
