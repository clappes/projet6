class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const $wrapper = document.createElement('article')

        const photographerCard = `
        <a href="photographer.html?id=${this._photographer.id}">
        <img alt="${this._photographer.portrait}" src="${this._photographer.portrait}"/>
        <h2 class="main__photographe__title">${this._photographer.name}</h2>
        </a>
        <article>
        <p class="main__photographe__place">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="main__photographe__description">${this._photographer.tagline}</p>
        <p class="main__photographe__price">${this._photographer.price} €/jour </p>
        </article>
        
        `
        
        $wrapper.innerHTML = photographerCard
        return $wrapper
    }
}