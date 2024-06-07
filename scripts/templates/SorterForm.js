class SorterForm {
    constructor(Media) {
        this._Media = Media

        this.$wrapper = document.querySelector('.main__filter__select')
        this.$sorterFormWrapper = document.querySelector('.main__filter')
        this.$mediaWrapper = document.querySelector('.main__galerie')
        this.$countWrapper = document.querySelector('.main__stats')

        this.photographersApi = new PhotographerApi('/data/photographers.json')
        this.mediaApi = new MediaApi('/data/media.json')
    }

    async sorterMedia(sorter) {
        this.clearMediaWrapper()
        const url = new URLSearchParams(document.location.search);
        const id = url.get("id")

        const photographersData = await this.photographersApi.getPhotographers()
        const mediaData = await this.mediaApi.getMedia()

        const photographerById = photographersData.find(photographer => photographer.id == id);
        const mediaById = mediaData.filter(media => media.photographerId == id);
        const sortedMedia = this._Media

        if (sorter === "titre") {
            sortedMedia.sort(function(a, b) {
                let titreA = a.title.split(" ").join("");
                a = titreA.toLowerCase();
                let titreB = b.title.split(" ").join("");
                b = titreB.toLowerCase();
                if (a < b) {
                    return -1
                } else {
                    return 1
                }
            }) 
        } else if(sorter === "date") {
            sortedMedia.sort(function(a, b) {
                let dateA = new Date(a.date);
                let dateB = new Date(b.date);
                if (dateA < dateB) {
                    return 1
                } else if (dateA == dateB) {
                    return 0
                } else {
                    return -1
                }
            })
        } else if(sorter === "popularite") {
            sortedMedia.sort((a, b) => b.likes - a.likes)
        }
        this.WishlistSubject = new WishlistSubject()
        this.WhishListCounter = new WhishListCounter(photographerById, mediaById)

        this.WishlistSubject.subscribe(this.WhishListCounter)
        sortedMedia
            .map(media => new Media(media))
            .forEach(Media => {
                const Template = new MediaCard(Media, this.WishlistSubject)
                const TemplateCount = new Wishlist(photographerById, mediaById)
                this.$mediaWrapper.appendChild(Template.createMediaCard())
            })
        Lightbox.init()
        
    }
    keyHandler(e) {
    if(e.keyCode === 13) {
        return this.onChangeSorter()
    }
  }

    onChangeSorter() {
        const tab = this.$wrapper.querySelectorAll('.main__filter__select__options__option')
        const self = this
        tab.forEach(function(item) {
            item.addEventListener('click', e => {
                const sorterValue = e.currentTarget.getAttribute('data-name')
                self.sorterMedia(sorterValue)
            })
            item.addEventListener('keydown', e => {
                if(e.key === 'Enter') {
                    const sorterValue = e.currentTarget.getAttribute('data-name')
                    self.sorterMedia(sorterValue)
                }
            })
        })    
            
    }

    clearMediaWrapper() {
        this.$mediaWrapper.innerHTML = ""
    }

    render() {
        const sorterForm = `
            <div tabindex="0" aria-label="Menu déroulant du filtre" class="main__filter__select__btn">
                <span class="main__filter__select__btn__text">Select your option</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <ul class="main__filter__select__options">
                <li class="main__filter__select__options__option" data-name="popularite">
                    <span  tabindex="0" class="main__filter__select__options__option__text">Popularité</span>
                </li>
                <li class="main__filter__select__options__option" data-name="date">
                    <span  tabindex="0" class="main__filter__select__options__option__text">Date</span>
                </li>
                <li tabindex="2" class="main__filter__select__options__option" data-name="titre">
                    <span tabindex="0" class="main__filter__select__options__option__text">Titre</span>
                </li>
            </ul>
        `

        this.$wrapper.innerHTML = sorterForm
        this.onChangeSorter()

        this.$sorterFormWrapper.appendChild(this.$wrapper)
    }
}