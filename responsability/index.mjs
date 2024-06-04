// High order Function / Low order Function

const parseCSS = ( cssString ) => {
    let temp_1 = cssString.split( ";" )

    let temp_2 = temp_1.map( rule => rule.trim() )

    let temp_3 = temp_2.filter( rule => rule.length > 0 )

    let temp_4 = temp_3.map( rule => rule.split( ":" ).map( value => value.trim()))

    let temp_5 = temp_4.map((rule) => [
      rule[0]
        .split("-")
        .map((value, idx) =>
          idx == 0 ? value : value[0].toUpperCase() + value.substring(1)
        )
        .join(""),
      rule[1],
    ]);

    let temp_6 = {}

    // temp_5.forEach( rule => {
    //   temp_6[rule[0]] = rule[1] 
    //     if ( rule === undefined ) {
    //       throw new Error('Error -1')
    //     }
    // });

    let initialValue = 0;
    let temp_7 = temp_5.reduce(
      (rule, currentValue) => (temp_6[rule[0]] = rule[1]),
      initialValue
    );


    console.log(temp_6)
    console.log(temp_7)
    return temp_6
}

parseCSS("color: red; background-color: white;")


// HIGH
const processMultipleCss = ( cssTables ) => {
  let processedStyles;
  try {
    processedStyles = cssTables.map(css => parseCSS(css))
  } catch (error) {
    console.log('ERROR: cssTables containes invalid CSS')
  }

  return cssTables.map(css => parseCSS(css))
}




// Consumer
let styles = [
  "color: red; background-color: white;",
  "font-size: 20px; padding: 10px; margin: 10px;",
  "background-image: url(1.jpg); padding: 5px;"
]