class Wishlist {
    constructor(photographer, media) {
        this._media = media
        this._photographer = photographer
    }

    createWishlist() {
        let mediatab = this._media
        let mediaLikesCount = 0
        mediatab.forEach(function(media)  {
            mediaLikesCount += media.likes
        }, this)

        return `
        <article class="main__stats__likes">
            <p class="main__stats__likes__number">${mediaLikesCount}</p>
	        <i class="fa-solid fa-heart"></i>
        </article>
        <article class="main__stats__price">
            <p class="main__stats__price__number">${this._photographer.price}€ / jour</p>
        </article>
        `
    }
}