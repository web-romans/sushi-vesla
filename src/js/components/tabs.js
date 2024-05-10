const tabs = document.querySelectorAll("[data-tab]");

if (tabs) {
  tabs.forEach((el) => {
    const tabsBtns = el.querySelectorAll("[data-tab-btn]");
    const tabsItems = el.querySelectorAll("[data-tab-item]");

    tabsBtns.forEach((el) => {
      el.addEventListener("click", (e) => {
        tabsBtns.forEach((el) => {
          el.classList.remove("active");
        });

        tabsItems.forEach((el) => {
          el.classList.remove("active");
        });

        for (let i = 0; i < tabsItems.length; i++) {
          if (
            el.getAttribute("data-tab-btn") ===
            tabsItems[i].getAttribute("data-tab-item")
          ) {
            el.classList.add("active");
            tabsItems[i].classList.add("active");
          }
        }
      });
    });
  });
}
