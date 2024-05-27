class PhotographerHeader {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerHeader() {

        return  `
        <article class="main__header__info">
          <h1 class="main__header__info__title">${this._photographer.name}</h1>
          <p class="main__header__info__place">${this._photographer.city}, ${this._photographer.country}</p>
          <p class="main__header__info__subtitle">${this._photographer.tagline}</p>
        </article>
        <section class="main__header__modal">
          <button class="main__header__modal__btn" onclick="onClickModal()" >Contactez-moi</button>
          <span class="main__header__modal__overlay"></span>
          <div class="main__header__modal__box">
            <header class="main__header__modal__box__header">
              <h2 class="main__header__modal__box__header__title">Contactez-moi ${this._photographer.name}</h2>
              <img class="main__header__modal__box__header__close" src="assets/icons/close.svg" onclick="closeModal()" />
            </header>
            <form class="main__header__modal__box__form">
              <div>
                <label for="firstname">Prénom</label>
                <input type="text" name="firstname" id="fistname" minlength="2" required/>
              </div>
              <div>
                <label for="lastname">Nom</label>
                <input type="text" name="lastname" id="lastname" minlength="2" required/>
              </div>
              <div>
                <label for="email">Prénom</label>
                <input type="email" name="email" id="email" required/>
              </div>
              <div>
                <label for="message">Votre message</label>
                <textarea  name="message" id="message" rows="5" cols="33" required></textarea>
              </div>
              <button class="main__header__modal__box__form__button">Envoyer</button>
            </form>
          </div>
        </section>
        <img class="main__header__img" src="/assets/photographers/${this._photographer.portrait}" alt="${this._photographer.portrait}" width="200" height="200">
        `
    }
}