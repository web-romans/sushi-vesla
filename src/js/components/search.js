const search = document.querySelector('[data-search]');


if (search) {
  const searchInput = search.querySelector('[data-search-input]');
  const searchBtn = search.querySelector('[data-search-btn]');

  if (window.innerWidth >= 1140) {
    search.addEventListener("mouseover", (e) => {
      search.classList.add('_focus');
      searchBtn.classList.add('_focus');
      searchInput.classList.add('_focus');
    })


    search.addEventListener("mouseout", (e) => {
      search.classList.remove('_focus');
      searchBtn.classList.remove('_focus');
      searchInput.classList.remove('_focus');
    })
  } else {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      search.classList.toggle('_focus');
      searchBtn.classList.toggle('_focus');
      searchInput.classList.toggle('_focus');
    })
  }



}
