let randomPromise = new Promise ((resolve, reject) => {
    if (Math.random >= 1) {
        resolve('ALL GOOD!')
    } else {
        reject(`ALL BAD!`)
    }
})


randomPromise.then((message) => {
    console.log(`promise FULFILLED with ${message}`)
})
randomPromise.catch((message) => {
    console.log(`promise FAILED with ${message}`)
})