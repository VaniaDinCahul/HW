const carousel      = document.getElementsByClassName('carousel')[0]

const renderSlide   = () => {
    let slide = document.createElement('div')
    slide.className='slide'

    for (let y = 1; y <= 12; y++) {
        for (let x = 1; x <= 16; x++) {
            let sq = document.createElement('div')
            sq.className='sq'
            sq.style.top = '${(y-1)*50}px'
            sq.style.left = '${(x-1)*50}px'

            sq.style.backgroundImage = 'url(./img/img-1.jpg)'
            sq.style.backgroundPositionY = '${(y-1)*50}px'
            sq.style.backgroundPositionX = '${(x-1)*50}px'
            slide.appendChild(sq)
        }
    }

    
    carousel.appendChild(slide)
}

renderSlide()