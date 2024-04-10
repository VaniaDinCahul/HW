const fadeOut = [
    {opacity: 1},
    {opacity: 0}
]

class Carousel {
    constructor (rootSelector, slides) {
        this.rootSelector = rootSelector
        this.slides = slides
    }

    render(slideIndex) {
        this.slides[slideIndex].render(this.rootSelector)
    }

    next() {
        this.slides.push(this.slides.shift())
        this.render(0)
        this.slides[0].addEffect()
        
    }
}


class Slide {

    constructor (url) {
        this.url = url
    }

    render = (rootSelector) => {
        let carousel = document.querySelector(rootSelector)
        this.slideElement = document.createElement('div')

        this.slideElement.className='slide'
    
        for (let y = 1; y <= 12; y++) {
            for (let x = 1; x <= 16; x++) {
                let sq = document.createElement('div')
                sq.className='sq'
                sq.style.top = `${(y-1)*50}px`
                sq.style.left = `${(x-1)*50}px`
    
                sq.style.animationFillMode = ''

                sq.style.backgroundImage = `url(${this.url})`
                sq.style.backgroundPositionY = `${-(y-1)*50}px`
                sq.style.backgroundPositionX = `${-(x-1)*50}px`
    
                this.slideElement.appendChild(sq)
            }
        }

        if (carousel.firstElementChild) {
            carousel.removeChild(carousel.firstElementChild)
        }
            
            carousel.appendChild(this.slideElement)
        }
    
        addEffect() {
            for (let i = 0; i < this.slideElement.children.length; i++) {
                // this.slideElement.children[i].style.animation = `fadeOut 1s linear ${i * 0.1}s forwards`
                let animationParams = {
                    duration: 1000,
                    delay: Math.random() * 500,
                    easing: 'linear',
                    fill: 'forwards'
                }

                this.slideElement.children[i].animate(fadeOut, animationParams)
            }
        }

}

const carousel = new Carousel('.carousel',[
    new Slide('./img/img-1.jpg'),
    new Slide('./img/img-2.jpg'),
    new Slide('./img/img-3.jpg'),
])

carousel.render(0)
carousel.next()