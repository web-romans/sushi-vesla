/* теги при выборе пункта фильтрации */
const items = document.querySelectorAll('[data-filter-item]');
const container = document.querySelector('[data-filter-tags]');

items.forEach((el, i) => {

  const input = el.querySelector(".custom-checkbox__content");
  const checkbox = el.querySelector('input[type=checkbox]');
  const radio = el.querySelector('input[type=radio]');

  if (checkbox) {
    checkbox.addEventListener("change", () => {
      if (container) {
        const newTag = document.createElement("button");
        newTag.setAttribute("class", "filter__sort-tag");
        newTag.setAttribute("id", `tag${i}`);
        newTag.innerHTML = input.innerHTML;

        if (checkbox.checked) {
          container.appendChild(newTag);
          newTag.addEventListener("click", () => {
            container.removeChild(newTag);
            checkbox.checked = false;
          });

        } else {
          const tag = document.getElementById(`tag${i}`);
          container.removeChild(tag);
        }
      }

    });
  }

  if (radio) {

    radio.addEventListener("change", () => {

      if (container) {
        const radioGroup = radio.getAttribute('name');

        const newTag = document.createElement("button");
        newTag.setAttribute("class", "filter__sort-tag");
        newTag.setAttribute("id", `tag${i}`);
        newTag.setAttribute("data-radio-group", radioGroup);
        newTag.innerHTML = input.innerHTML;

        if (radio.checked) {

          const tags = container.querySelectorAll('[data-radio-group]');
          tags.forEach(tag => {
            if (tag.getAttribute('data-radio-group') === radioGroup) {
              container.removeChild(tag);
            }
          })

          container.appendChild(newTag);
          newTag.addEventListener("click", () => {
            container.removeChild(newTag);
            radio.checked = false;
          });




        }

      }

    });
  }

})
