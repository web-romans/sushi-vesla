const acardion = document.querySelectorAll("[data-acardion]");

if (acardion) {
  acardion.forEach((el) => {
    const btn = el.querySelector("[data-acardion-btn]");
    const content = el.querySelector("[data-acardion-content]");
    const hideContents = el.querySelectorAll("[data-acardion-toggle]");

    if (btn) {
      btn.addEventListener("click", (e) => {
        if (!btn.classList.contains("_open")) closeAll();

        btn.classList.toggle("_open");
        if (content) content.classList.toggle("_open");
        hideContents.forEach(a => {
          a.classList.toggle("_hide");
        })
      });
    }

    function closeAll() {
      acardion.forEach((el) => {
        const btn = el.querySelector("[data-acardion-btn]");
        const content = el.querySelector("[data-acardion-content]");
        const hideContents = el.querySelectorAll("[data-acardion-toggle]");

        if (el.getAttribute('data-acardion') === "closeAll") {
          if (btn) btn.classList.remove("_open");
          if (content) content.classList.remove("_open");
          hideContents.forEach(a => {
            a.classList.remove("_hide");
          })
        }
      });
    }


  });
}
