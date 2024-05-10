const message = document.querySelectorAll('[data-message]');

if (message) {
  message.forEach(el => {
    const btn = el.querySelector('[data-message-btn]');
    const hide = el.querySelector('[data-message-hide]');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        let name = btn.getAttribute('data-message-btn');
        let lastName = btn.innerHTML;

        btn.innerHTML = name;
        btn.setAttribute('data-message-btn', lastName);

        if (hide) {
          hide.classList.toggle('hide');
        }
      })
    }
  })

}
