const timers = document.querySelectorAll("[data-end]");
const secondTimer = document.querySelectorAll("[data-second-end]");

timers.forEach(el => {
  let dateTime = el.getAttribute("data-end");
  let dateEnd = new Date(dateTime).getTime();

  let x = setInterval(updateTimer, 60000);

  function updateTimer() {
    let nowTime = new Date().getTime();
    let offset = new Date().getTimezoneOffset();
    let now = offset * 60000 + nowTime;

    let distance = dateEnd - now;

    if (distance < 0) {
      clearInterval(x);
      el.innerHTML = "";
    } else {
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24)) + "д ";
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "ч:";
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + "м";

      let generateStr = null;
      if (days < 0) generateStr = hours + minutes;
      else generateStr = days + hours + minutes;

      // Display the result in the element with id="demo"
      el.innerHTML = generateStr;
    }
  }

  updateTimer()
});

secondTimer.forEach(el => {
  let dateTime = el.getAttribute("data-second-end");
  let dateEnd = new Date(dateTime).getTime();

  let x = setInterval(updateTimer, 1000);

  function updateTimer() {
    let nowTime = new Date().getTime();
    let offset = new Date().getTimezoneOffset();
    let now = offset * 60000 + nowTime;

    let distance = dateEnd - now;

    if (distance < 0) {
      clearInterval(x);
      el.innerHTML = "";
    } else {
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24)) + "д ";
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "ч:";
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + "м:";
      let seconds = Math.floor((distance % (1000 * 60)) / 1000) + "c";

      let generateStr = null;
      if (days < 0) generateStr = hours + minutes + seconds;
      else generateStr = days + hours + minutes + seconds;

      // Display the result in the element with id="demo"
      el.innerHTML = generateStr;
    }
  }

  updateTimer()
});


