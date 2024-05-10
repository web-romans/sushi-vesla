import Choices from "choices.js";

const loadChoise = () => {
  const sortItemtEl = document.querySelectorAll("select.sort");

  if (sortItemtEl) {
    sortItemtEl.forEach((el) => {
      const sortItem = new Choices(el, {
        shouldSort: false,
        searchEnabled: false,
        itemSelectText: "",
        position: "selectItems-one",
        removeItems: false,
        classNames: {
          containerOuter: "sort",
          containerInner: "sort__inner",
          input: "sort__input",
          inputCloned: "sort__input--cloned",
          list: "sort__list",
          listItems: "sort__list--multiple",
          listSingle: "sort__list--single",
          listDropdown: "sort__list--dropdown",
          item: "sort__item",
          itemSelectable: "sort__item--sort-itemable",
          itemDisabled: "sort__item--disabled",
          itemChoice: "sort__item--choice",
          placeholder: "sort__placeholder",
          group: "sort__group",
          groupHeading: "sort__heading",
          button: "sort__button",
          activeState: "is-active",
          focusState: "is-focused",
          openState: "is-open",
          disabledState: "is-disabled",
          highlightedState: "is-highlighted",
          selectedState: "is-selected",
          flippedState: "is-flipped",
          loadingState: "is-loading",
          noResults: "has-no-results",
          nosort: "has-no-choices",
        },
      });
    });
  }
}

loadChoise();

export default loadChoise;
