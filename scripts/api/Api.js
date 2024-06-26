class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
    }
}


class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.get()
    }

}

class MediaApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getMedia() {
        return await this.get()
    }
    // async getMediaByPhotographerId(id) {
    //     const allMedia = await this.getMedia();
    //     const mediaList = [];
    //     allMedia.find(media => {
    //         (media.photographerId == id) && mediaList.push(media);
    //     });
    
    //     return mediaList;
    // }
}
