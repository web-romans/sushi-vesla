

const zItems = document.querySelectorAll("[data-z-index]");


zItems.forEach(el => {
  if (el.hasChildNodes()) {
    let children = el.children;

    for (var i = 0; i < children.length; ++i) {
      children[i].setAttribute("style", `z-index: ${children.length - i}`);
    }
  }

})
