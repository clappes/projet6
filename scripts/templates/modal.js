function onClickModal() {
    const section = document.querySelector(".main__header__modal")
    overlay = document.querySelector(".main__header__modal__overlay")
    section.classList.add("active")
    overlay.addEventListener("click", () => section.classList.remove("active"))
}

function closeModal() {
    const section = document.querySelector(".main__header__modal")
    section.classList.remove("active")
}