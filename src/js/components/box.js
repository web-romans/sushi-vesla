const img = document.querySelectorAll("[data-box-src]");
const modal = document.querySelector("[data-box-modal]");

if (modal) {
  const container = modal.querySelector(".box-modal__content");
  const overlay = modal.querySelector(".modal__overlay");
  const close = modal.querySelectorAll(".close");

  function closeModal() {
    modal.classList.remove("open");
    container.innerHTML = "";
  }

  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }

  if (close) {
    close.forEach((el) => {
      el.addEventListener("click", closeModal);
    });
  }

  img.forEach((el) => {
    const format = el.getAttribute("data-box-src").split('.');
    if (format[1] === "mp4") {
      const videoLink = el.getAttribute("data-box-src");
      el.parentNode.parentNode.addEventListener("click", (e) => {
        const newVideo = document.createElement("video");
        newVideo.setAttribute("class", "box-modal__video");
        newVideo.autoplay = false;
        newVideo.src = videoLink;
        newVideo.controls = true;
        newVideo.muted = false;
        newVideo.height = 500; // 👈️ in px
        newVideo.width = 900; // 👈️ in px
        container.innerHTML = "";
        container.appendChild(newVideo);
        modal.classList.add("open");
      });
    } else if (format[0] === "https://www") {
      const videoLink = el.getAttribute("data-box-src");
      el.parentNode.parentNode.addEventListener("click", (e) => {
        const obj = {
          "video": {
            "value": `<iframe class="box-modal__video" width="730" height="357" src="${videoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          }
        }
        container.innerHTML = obj.video.value;
        modal.classList.add("open");
      });
    } else {
      const bigImg = el.getAttribute("data-box-src");
      if (el.parentNode.parentNode.classList.contains('zoom')) {
        el.parentNode.parentNode.addEventListener("click", (e) => {
          const newImg = document.createElement("img");
          newImg.setAttribute("class", "image box-modal__img");
          newImg.setAttribute("src", bigImg);
          container.innerHTML = "";
          container.appendChild(newImg);
          modal.classList.add("open");
        });
      } else {
        el.addEventListener("click", (e) => {
          const newImg = document.createElement("img");
          newImg.setAttribute("class", "image box-modal__img");
          newImg.setAttribute("src", bigImg);
          container.innerHTML = "";
          container.appendChild(newImg);
          modal.classList.add("open");
        });
      }

    }
  });
}
