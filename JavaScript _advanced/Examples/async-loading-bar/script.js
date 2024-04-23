//functions

const cache = {
    steps: 5,
    timer: null,
    box: null
}

// async function
const rantInt = (cb, maxValue = 10) => {
    setTimeout(()=>{
        let value = parseInt( Math.random()* maxValue)
        cb(value)
    }, Math.random() * 3000)
}


const animationStart = (value) => {
    cache.steps = value
    const container = document.getElementsByClassName('container')[0]
    cache.box = document.createElement('div')
    cache.box.className = 'box'
    container.appendChild(cache.box)
    cache.timer = setInterval(animationStep.bind(this, cache.box, cache), 500)
}

const animationStep = (e, cache) => {
    let angle = parseFloat(e.style.transform.replace("rotate(","").replace(")",""))
    angle += 22.5
    e.style.transform = `rotate(${angle}deg)`
    cache.steps--
    if(cache.steps == 0) {
        clearInterval(cache.timer)
        animationEnd()
    }
    console.log(angle, cache.steps)
}

const animationEnd = () => {
    cache.box.remove()
    
}


const printLog = value => console.log(value)
////////////////////// animation //////////////////////
// random() ---> start ---> duration ---> end

rantInt(animationStart)