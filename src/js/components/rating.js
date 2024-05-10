const rating = document.querySelectorAll("[data-rating]");

if (rating) {
  rating.forEach((el) => {
    const items = el.querySelectorAll("[data-rating-item]");

    const rating = Math.round(
      el.querySelector("[data-rating-value]").innerHTML
    );

    items.forEach((item) => {
      item.setAttribute("class", "rating-active__item");
      item.removeAttribute("checked");

      if (el.getAttribute("data-rating") === "set") {
        item.addEventListener("click", () => {
          const ratingValue = el.querySelector("[data-rating-value]");
          items.forEach((newitem) => {
            newitem.setAttribute("class", "rating-active__item");
            newitem.removeAttribute("checked");
            ratingValue.innerHTML = item.value;
          });
        });
      }


      if (item.value == rating) {
        item.setAttribute("class", "rating-active__item checked");
        item.setAttribute("checked", "");
      }
    });
  });

  function getRatingForm(newRating) {
    const form = document.getElementById("new-review");
    if (form) {
      const rating = form.querySelector(".rating-active");
      if (rating) {
        const ratingItem = rating.querySelectorAll(".rating-active__item");
        const ratingValue = rating.querySelector(".rating-active__value");
        ratingValue.innerHTML = newRating;
        ratingItem.forEach((item) => {
          if (item.value == newRating) {
            item.setAttribute("class", "rating-active__item checked");
            item.setAttribute("checked", "");
          } else {
            item.setAttribute("class", "rating-active__item");
            item.removeAttribute("checked");
          }
        });
      }

      const topOffset = 200;
      const elementPosition = form.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
}
