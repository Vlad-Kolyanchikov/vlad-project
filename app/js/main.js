$(function () {
  var mixer = mixitup('.our-works__content');
})

$(function () {
  $('.hero__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    speed: 500,
  });

  // Скрипт появи модального вікна на js

  // Щоб скрипт модального вікна працював так, як нам потрібно, необхідно додати в розмітку спеціальні атрибути, якими скрипт буде звертатися до потрібних нам елементів.

  // data-modal-open - на кнопку виклику модалки.
  // data-modal-close - на кнопку закриття модалки.
  // data-modal - на бекдроп модалки.

  // Початковий стан модального вікна та бекдропа – прихований. Тому в початковому стані у бекдропа вказано клас is-hidden. У стилях за цим класом працюють властивості opacity і pointer-events. Якщо прибрати з бекдропу клас is-hidden, з'являється сам бекдроп і модальне вікно в ньому. Тобто. у початковому стані ми прописуємо клас is-hidden вручну. Скрипт прибиратиме цей клас і повертатиме за потребою.

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
})


//для того чтобы не скролилась страница, по клику на кнопку с классом button для body добавляю класс body-lock и потом чтобы при закрытии модалки можнно было скролить странцу далее удаляю класс body-lock для body-lock

$(function () {
  $('.button-modal, .modal__close-btn').on('click', function () {
    $('body').toggleClass('lock');
  })
});


