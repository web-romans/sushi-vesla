const tocBtn = document.querySelectorAll("[data-toc]");

if (tocBtn) {
  tocBtn.forEach(el => {
    el.addEventListener("click", () => {
      const tocContainer = el.closest(".toc");
      tocContainer.classList.toggle("open");
      let lastName = el.innerHTML;
      let newName = el.getAttribute("data-toc");
      el.innerHTML = newName;
      el.setAttribute("data-toc", lastName);
    })

  })
}
