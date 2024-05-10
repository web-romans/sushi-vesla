import { on } from "../functions/on";

let answerForm = `
<div class="reviews__item reviews__item--answer">
          <div class="comment">
            <div class="comment__form">
              <textarea class="comment__textarea" placeholder="Введите ваш ответ"></textarea>

              <div class="review-author">
                <div class="review-author__photo">
                  <picture>
                    <source srcset="img/authors/1xctabka.webp" data-srcset="img/authors/1xctabka.webp"
                      type="image/webp">
                    <img class="image lazyloaded" src="img/authors/1xctabka.png" data-src="img/authors/1xctabka.png"
                      width="70" height="70" alt="1xctabka">
                  </picture>
                  <noscript>
                    <img class="image" src="img/authors/1xctabka.png" width="70" height="70" alt="1xctabka" />
                  </noscript>
                </div>
                <div class="review-author__info">
                  <div class="review-author__name">1хСтавка</div>
                </div>
              </div>
              <button class="comment__answer-btn btn btn--primary">Ответить</button>
            </div>
          </div>
        </div>
`;

on('.page__body', 'click', '[data-question-btn]', function (e) {
  const parent = this.closest("[data-question]");
  parent.innerHTML += answerForm;
});

