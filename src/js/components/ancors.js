document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);
    if (scrollTarget) {
      const topOffset = 70;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
