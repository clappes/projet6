const section = document.querySelector(".main__header__modal"),
overlay = document.querySelector(".main__header__modal__overlay"),
showBtn = document.querySelector(".main__header__modal__btn"),
closeBtn = document.querySelector(".main__header__modal__box__header__close");
showBtn.addEventListener("click", () => section.classList.add("active"));
overlay.addEventListener("click", () => section.classList.remove("active"));
closeBtn.addEventListener("click", () => section.classList.remove("active"));