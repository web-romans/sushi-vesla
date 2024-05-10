import Swiper, { Navigation } from "swiper";

const mainSlider = document.querySelectorAll("[data-main-slider]");

function bntPrev(btn, slider) {
  if (btn) {
    btn.addEventListener("click", (e) => {
      slider.slidePrev();
    });
  }
}

function bntNext(btn, slider) {
  if (btn) {
    btn.addEventListener("click", (e) => {
      slider.slideNext();
    });
  }
}

function btnShowHide(slider, slides, btnPrev, btnNext) {
  (slider.activeIndex === 0) ?
    btnPrev.classList.add('_hide') :
    btnPrev.classList.remove('_hide');

  (slider.activeIndex === (slides.length - 1)) ?
    btnNext.classList.add('_hide') :
    btnNext.classList.remove('_hide');
}


if (mainSlider) {
  mainSlider.forEach((el) => {
    const slides = el.querySelectorAll(".swiper-slide");
    const btnPrev = el.querySelector("[data-main-prev]");
    const btnNext = el.querySelector("[data-main-next]");
    if (slides.length > 1) {

      const swiper = new Swiper(el, {
        modules: Navigation,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: btnNext,
          prevEl: btnPrev,
        },
        on: {
          init: function (swiper) {

            swiper.on('slideChange', function () {
              btnShowHide(swiper, slides, btnPrev, btnNext);
            });

            bntPrev(btnPrev, swiper)
            bntNext(btnNext, swiper)
          }
        }
      });
    }
  });
}




