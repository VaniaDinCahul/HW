const   mold     = document.getElementsByClassName('mold')[0]
const   moldSize = 50
let     moldLeft = 225

const MoveMold = (input) => {
    switch (input.code) {
        case 'a':
            console.log('Moving Left')
            moldLeft -= 5
        break
        case 'd':
            console.log('Moving Right')
            moldLeft += 5
        break
    }
    mold.style.left = '${moldLeft}px'
}

document.body.addEventListener('keydown', MoveMold)