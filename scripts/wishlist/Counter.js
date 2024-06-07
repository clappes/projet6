class WhishListCounter {
    constructor(photographer, media) {
        this._media = media
        this._photographer = photographer
        
        this._count = 0
        this._$wishCount = document.querySelector('.main__stats__likes__number')
    }

    // updateMedia({action, domMediaId}) {
    //     document.querySelector(domMediaId).innerHTML = "toto"
    // }    

    update({action, domMediaId}) {
        this._countMedia = 0
        this._countMedia += parseInt(document.querySelector(domMediaId).textContent)
        if(this._count == 0) {
            this._media.forEach(function(media)  {
                this._count += media.likes
            }, this)
        }
        if (action === 'INC') {
            this._count += 1
            this._countMedia += 1
        } else if (action === 'DEC') {
            this._count -= 1
            this._countMedia -= 1
        } else {
            throw "Unknow action"
        }
        document.querySelector(domMediaId).innerHTML = this._countMedia
        this._$wishCount.innerHTML = this._count
    }
    
}