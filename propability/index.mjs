// High order Function / Low order Function

const parseCSS = ( cssString ) => {
    let temp_1 = cssString.split ( ";" )

    let temp_2 = temp_1.map ( rule => rule.trim() )

    let temp_3 = temp_2.filter ( rule => rule.length > 0 )

    let temp_4 = temp_3.map ( rule => rule.split( ":" ).map( value => value.trim()))

    let temp_5 = temp_4.map ( rule => {
        rule[0].split("-").map((value, idx) => idx == 0 ? value : value[0].toUpperCase() + value.substring(1).join(""))
        rule[1]
    })

    let temp_6 = temp_5.reduce()

    // let temp_6 = {}
    // temp_5.forEach( rule => temp_6[rule[0]] = rule[1]);

    return temp_6
}
