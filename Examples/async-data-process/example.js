const pGetNumbers = (size = 10) => { 
return new Promise ((resolve, reject)=> {
    let numbers = []
    setTimeout(() =>{
        while (numbers.leght<size) {
            numbers.puh (Math.ceil( -5 + Math.random * 10 ()))
        }
        resolve(numbers)
    }, Math.random() * 1000)
})
    
}

const pMaxNumber = (cb, numbers) => { 
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(Math.max(...numbers))
    }, Math.random() * 1000)
})
}

const renderNumber = (cb, number) => {
    return new Promise((resolve, reject) => {
        let result = ``
        setTimeout(()=>{
            result = `{number: ${number}}`
            resolve(result)
        }, Math.random * 1000)
    })
    
}

async function execute () {

    let numbers = await pGetNumbers(5)
    let max_number = await pMaxNumber(numbers)
    let result = await renderNumber(max_number)
    console.log(result)

    // pGetNumbers(5)
    // .then((numbers) => {
    //     return pMaxNumber(numbers)
    // })
    // .then((max_number) => {
    //     return renderNumber(max_number)
    // })
    // .then((result) => {
    //     console.log(result)
    // })
}

