
class App {
    constructor() {
        
        this.$photographerWrapper = document.querySelector('.main__header')
        this.$mediaWrapper = document.querySelector('.main__galerie')
        this.$countWrapper = document.querySelector('.main__stats')

        this.photographersApi = new PhotographerApi('/data/photographers.json')
        this.mediaApi = new MediaApi('/data/media.json')

    }

    async main() {

        const url = new URLSearchParams(document.location.search);
        const id = url.get("id")

        const photographersData = await this.photographersApi.getPhotographers()
        const mediaData = await this.mediaApi.getMedia()

        const photographerById = photographersData.find(photographer => photographer.id == id);
        const mediaById = mediaData.filter(media => media.photographerId == id);

        const Sorter = new SorterForm(mediaById)
        Sorter.render()

        const self = this   
        photographersData
        // Ici, je transforme mon tableau de données en un tableau de classe photographer
        .map(photographer => new Photographer(photographer))
            const TemplateHeader = new PhotographerHeader(photographerById)
            const TemplateCount = new Wishlist(photographerById, mediaById)
            self.$photographerWrapper.innerHTML = TemplateHeader.createPhotographerHeader()
            self.$countWrapper.innerHTML = TemplateCount.createWishlist()    

        this.WishlistSubject = new WishlistSubject()
        this.WhishListCounter = new WhishListCounter(photographerById, mediaById)

        this.WishlistSubject.subscribe(this.WhishListCounter)

        select()

        mediaById
            .map(media => new Media(media))
            .forEach(media =>  {
                const TemplateGalerie = new MediaCard(media, this.WishlistSubject)
                self.$mediaWrapper.appendChild(
                    TemplateGalerie.createMediaCard()
                )  
            })
        Lightbox.init() 
              
    }
}

const app = new App()
app.main()
