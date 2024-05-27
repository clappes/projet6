class Lightbox {

    static init () {
        const links = Array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]'))
        const titleLinks = Array.from(links.map(link => link.getAttribute('data-alt')))
        const gallery = links.map(link => link.getAttribute('href', 'data-alt'))
        links.forEach(link => link.addEventListener('click', e => {
                e.preventDefault();
                new Lightbox(e.currentTarget.getAttribute('href'), e.currentTarget.getAttribute('data-alt') , gallery)
            }))
    }

    constructor (url, alt, images) {
        this.element = this.buildDOM(url, alt)
        this.images = images
        this.loadImage(url, alt)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    buildDOM(url , alt) {
        const dom = document.createElement('div')
        dom.classList.add('main__lightbox')
        dom.innerHTML = `<button class="main__lightbox__close">Fermer</button>
            <button class="main__lightbox__next">Suivant</button>
            <button class="main__lightbox__prev">Précédent</button>
            <div class="main__lightbox__container">
            </div>`
        dom.querySelector('.main__lightbox__close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.main__lightbox__next').addEventListener('click', this.next.bind(this))
        dom.querySelector('.main__lightbox__prev').addEventListener('click', this.prev.bind(this))
        return dom
    }
    loadImage(url, alt) {
        this.url = null
        this.alt = null
        const image = new Image()
        console.log(image)
        const container = this.element.querySelector('.main__lightbox__container')
        const loader = document.createElement('div')
        const titleMedia = document.createElement('h2')
        titleMedia.style.width = container.firstChild.clientWidth
        titleMedia.classList.add('main__lightbox__container__title')
        titleMedia.innerHTML = alt
        loader.classList.add('main__lightbox__loader')
        container.innerHTML = ''
        container.appendChild(loader)
        image.onload = () => {
            container.removeChild(loader)
            container.appendChild(image)
            container.appendChild(titleMedia)
            this.url = url
            this.alt = alt
        }
        image.src = url
        image.alt = alt
    }
    onKeyUp(e) {
        if(e.key === 'Escape') {
            this.close(e)
        } else if(e.key === 'ArrowLeft') {
            this.prev(e)
        } else if (e.key === 'ArrowRight') {
            this.next(e)
        }
    }
    close(e){
        this.element.classList.add('fadeOut')
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    }
    next (e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        let p = this.images.findIndex(image => image === this.alt)
        if (i === this.images.length - 1) {
        i = -1
        }
        this.loadImage(this.images[i + 1], this.images[p + 1])
    }

    prev (e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        let p = this.images.findIndex(image => image === this.alt)
        if (i === 0) {
        i = this.images.length
        }
        this.loadImage(this.images[i - 1] , this.images[p - 1])
    }

}