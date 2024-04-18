class App {
    constructor() {
        this.$photographersWrapper = document.querySelector('.main')
        this.photographersApi = new PhotographerApi('/data/photographers.json')
    }

    async main() {
        // Ici je récupère mes photographes de mon fichier photographers.json
        const photographersData = await this.photographersApi.getPhotographers()

        photographersData
        // Ici, je transforme mon tableau de données en un tableau de classe photographer
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            this.$photographersWrapper.appendChild(
                Template.createPhotographerCard()
            )        
        })    
    }
}

const app = new App()
app.main()