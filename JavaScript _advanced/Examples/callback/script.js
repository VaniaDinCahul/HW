const setCustomInterval = (f, delayMs) => {
    let count = 0
    let cb = () => { f()
        count++
        if (count < 3) {
            setTimeout(cb, delayMs)
        }
    }
    setTimeout(cb, delayMs)
}



setCustomInterval(() => {
    console.log('+')
}, 1000)