
class MediaCard {
    constructor(media, WishListSubject) {
        this._media = media
        this.WishListSubject = WishListSubject

        this.$wrapper = document.createElement('article')
        this.$wrapper.classList.add('main__galerie__project')

    }
    handleWishButton() {
      const that = this
      
      this.$wrapper
          .querySelector('.main__galerie__project__info__heart__wish-btn')
          .addEventListener('click', function(e) {
            const domMediaId = "#" + e.currentTarget.dataset.id
              if (this.classList.contains('wished')) {
                  this.classList.remove('wished')
                  that.WishListSubject.fire({action:'DEC', domMediaId})
              } else {
                  this.classList.add('wished')
                  that.WishListSubject.fire({action:'INC', domMediaId})
              }
          })
          this.$wrapper
            .querySelector('.main__galerie__project__info__heart__wish-btn')
            .addEventListener('keydown', function(e) {
            if(e.key === 'Enter'){
              const domMediaId = "#" + e.currentTarget.dataset.id
              if (this.classList.contains('wished')) {
                  this.classList.remove('wished')
                  that.WishListSubject.fire({action:'DEC', domMediaId})
              } else {
                  this.classList.add('wished')
                  that.WishListSubject.fire({action:'INC', domMediaId})
              }
            }
          })
    }

    createMediaCard() {
        
        let media
        if (this._media._image) {
          media = `<a aria-label="Lien pour afficher l'image ${this._media.title} dans la lightbox" href="/assets/photographers/${this._media.image}" data-alt="${this._media.title}" ><img class="main__galerie__project__img" src="/assets/photographers/${this._media.image}" alt="${this._media.title}" width="350" height="300"></img></a>`
        } else {
          media = `<a aria-label="Lien pour afficher la vidéo ${this._media.title} dans la lightbox" href="/assets/photographers/${this._media.video}" data-alt="${this._media.title}" ><video width="350" height="300" style="object-fit: cover;border-radius: 5px;" ><source src="/assets/photographers/${this._media.video}" type="video/mp4" /></video></a>`
        }
        const mediaCard = media + 
        `
          <div class="main__galerie__project__info">
            <h2 class="main__galerie__project__info__title">${this._media.title}</h2>
            <div class="main__galerie__project__info__heart">
              <p id="count-${this._media.id}-id" class="main__galerie__project__info__heart__number">${this._media.likes}</p>
              <div data-id="count-${this._media.id}-id" aria-label="Bouton pour like l'image" tabindex="0" class="main__galerie__project__info__heart__wish-btn">
                    <svg class="heart" viewBox="0 0 241.59736 220.05746">
                        <g transform="translate(-175.32265,-1696.4765)">
                            <path d="m 243.45243,1708.9786 c -26.9341,0.2312 -51.58009,21.4767 -55.08178,48.2939 -3.11346,23.844 7.32949,47.3995 23.96855,64.2142 27.5148,27.8054 61.22631,49.7939 83.44686,82.5473 4.39089,-4.6889 9.27818,-12.0655 14.22742,-17.529 25.22951,-27.8509 58.1653,-48.0133 80.86454,-78.1545 17.17546,-22.8065 19.10279,-58.1138 -0.53802,-80.4051 -18.24975,-20.7125 -51.76012,-25.1712 -74.36972,-9.2543 -8.22594,5.791 -15.27469,13.3707 -19.93251,22.3123 -10.05314,-19.3195 -30.53412,-32.2142 -52.58534,-32.0248 z" />
                        </g>
                    </svg>
              </div>
            </div>
          </div>
        `
        
        this.$wrapper.innerHTML = mediaCard
        this.handleWishButton()

        return this.$wrapper
    }
}