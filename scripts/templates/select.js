
function select() {
    const optionMenu = document.querySelector(".main__filter__select"),
       selectBtn = document.querySelector(".main__filter__select__btn"),
       options = document.querySelectorAll(".main__filter__select__options__option"),
       sBtn_text = document.querySelector(".main__filter__select__btn__text")
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"))      
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".main__filter__select__options__option__text").innerText
        sBtn_text.innerText = selectedOption
        sBtn_text.setAttribute("data-name", selectedOption)
        optionMenu.classList.remove("active")
    });
});
}
