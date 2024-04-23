const   mold     = document.getElementsByClassName('mold')[0]
const   eggs     = document.getElementsByClassName('egg')
const   scoreDiv = document.getElementsByClassName('score')[0]
const   moldSize = 50
let     moldLeft = 225
let     score    = 0
let     duration = 5

const MoveMold = (input) => {
    switch (input.code) {
        case 'a':
            if (moldLeft >= 500 + 5 + 50)
                moldLeft -= 5
        break
        case 'd':
            if (moldLeft <= 500 - 5 - 50)
            moldLeft += 5
        break
    }
    mold.style.left = '${moldLeft}px'
}

const AnimationEnd = (egg) => {
    let egg = e.target
    if (e.animation == 'move') {
        if (125 <= moldLeft && moldLeft <= 150) {
            score++
            egg.classList.remove('move')
            setTimeout(()=>{
                egg.classList.add('move')
            },10)
        } else {
            score --
            egg.className = egg.className.replace('move', 'fall')
        }

        if (duration >= 1) {
            duration--
            egg.style.animationDuration = '${duration}s'
        } 
    }
    if (e.animation == 'fall') {
        egg.classList.add('egg-broken')
    }
    
    scoreDiv.innerHTML = 'score: ${score}'
}

document.body.addEventListener('keydown', MoveMold)
const eggElements = [...eggs]
eggElements.forEach(element => {
    element.addEventListener('animationEnded', AnimationEnd)
});