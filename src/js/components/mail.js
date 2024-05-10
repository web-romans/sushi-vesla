//import Inputmask from "inputmask";
import JustValidate from 'just-validate';

const forms = document.querySelectorAll('[data-mail]');




if (forms) {
  forms.forEach(form => {
    const validate = new JustValidate(form);
    /*
    const telElem = form.querySelector('input[type="tel"]')
    const inputMask = new Inputmask("+7 (999) 999-99-99");
    inputMask.mask(telElem);
    */
    validate
      .addField('#grade', [
        {
          rule: 'minLength',
          value: 3,
        },
        {
          rule: 'maxLength',
          value: 30,
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Оцените качество.'
        }
      ])
      .addField('#name', [
        {
          rule: 'minLength',
          value: 3,
        },
        {
          rule: 'maxLength',
          value: 30,
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваше имя.'
        }
      ])
      .addField('#review', [
        {
          rule: 'minLength',
          value: 3,
        },
        {
          rule: 'maxLength',
          value: 300,
          errorMessage: 'Максимум 300 символов.'
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите ваш отзыв.'
        }
      ])
      .addField('#doc', [
        {
          rule: 'minLength',
          value: 3,
        },
        {
          rule: 'maxLength',
          value: 30,
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите номер документа.'
        }
      ])
      .addField('#email', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Email обязателен',
        },
        {
          rule: 'email',
          value: true,
          errorMessage: 'Введите корректный Email',
        },
      ])
      .addField('#phone', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Телефон обязателен',
        },
        /*
        {
          rule: 'function',
          validator: function () {
            if (telElem.Inputmask) {
              const phone = telElem.Inputmask.unmaskedvalue();
              return phone.length === 10;
            }
          },
          errorMessage: 'Введите корректный телефон',
        },
         */
      ]).onSuccess((event) => {

        let formData = new FormData(event.target);

        let xhr = new XMLHttpRequest();

        xhr.onload = xhr.onerror = function () {
          if (this.status == 200) {
            form.innerHTML = `<h2 class="product-heading" style="text-align: center; padding-top: 200px;padding-bottom: 200px;">Ваше письмо отправлено! <br> Cпасибо!</h2>`;
          } else {
            form.innerHTML = `<h2 class="product-heading" style="text-align: center; padding-top: 200px;padding-bottom: 200px;">Что-то пошло не так <br> ${this.status}</h2>`;
          }
        };

        xhr.open('POST', 'mail.php', true);

        xhr.send(formData);
      });
  })
}
