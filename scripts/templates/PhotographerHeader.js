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
          <button type="button" aria-haspopup="dialog" aria-controls="dialog" aria-label="Bouton pour ouvrir le formulaire de contact" class="main__header__modal__btn">Contactez-moi</button>
          <span class="main__header__modal__overlay"></span>
          <div class="main__header__modal__dialog" id="dialog" role="dialog" aria-labelledby="dialog-title" aria-modal="true" aria-hidden="true" tabindex="-1">
            <div role="document" class="main__header__modal__dialog__box">
            <header class="main__header__modal__box__header">
              <h2 id="dialog-title" class="main__header__modal__box__header__title">Contactez-moi ${this._photographer.name}</h2>
              <img id="close-dialog" tabindex="0" aria-label="Fermer" data-dismiss="dialog" alt="Croix qui permet de fermer la page modale" class="main__header__modal__box__header__close" src="assets/icons/close.svg"/>
            </header>
            <form class="main__header__modal__box__form">
              <p>
                <label for="firstname">Prénom</label>
                <input type="text" name="Firstname" id="firstname" minlength="2" required/>
              </p>
              <p>
                <label for="lastname">Nom</label>
                <input type="text" name="Lastname" id="lastname" minlength="2" required/>
              </p>
              <p> 
                <label for="email">Email</label>
                <input type="email" name="Email" id="email" required/>
              </p>
              <p>
                <label for="message">Votre message</label>
                <textarea  name="Message" id="message" rows="5" cols="33" required></textarea>
              </p>
              <button class="main__header__modal__box__form__button">Envoyer</button>
            </form>
            </div>
          </div>
        </section>
        <img class="main__header__img" src="/assets/photographers/${this._photographer.portrait}" alt="${this._photographer.portrait}" width="200" height="200">
        `
    }
}