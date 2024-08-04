const randInt = (min=0, max=1) => {
    return Math.floor(
        Math.random() * (max-min) + min
    )
}

const randColor = ({
        redish=1,
        greenish=1,
        blueish=1,
    }={}) => {
    let red = randInt(0, 255 * redish)
    let green = randInt(0, 255 * greenish)
    let blue = randInt(0, 255 * blueish)
    let color = `rgb(${red},${green},${blue})`;

    return color
};


export { randInt, randColor};