let eventStatus = false;
const bodyEl = document.querySelector("body");
const styles = [
  "css/main.css"
];
const scripts = [
  "js/main.js"
];

window.addEventListener("load", function () {
  ["mouseover", "click", "scroll"].forEach(function (event) {
    window.addEventListener(event, function () {

      if (!eventStatus) {
        styles.forEach(el => {
          const newStyle = document.createElement("link");
          newStyle.setAttribute("rel", "stylesheet");
          newStyle.setAttribute("href", el);
          bodyEl.appendChild(newStyle);
        })

        scripts.forEach(el => {
          const newScript = document.createElement("script");
          newScript.src = el;
          bodyEl.appendChild(newScript);
        })

        eventStatus = true;
      }

    }, {
      once: true
    });

  });

});
