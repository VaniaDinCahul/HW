// Main App Module


// Settings Wrapper
let name        = "Custom App"
let version     = "1.0.0"
// Settings Wrapper End

import {name as authorName, email} from './author.mjs'
import {Card} from `./card.mjs`

let card = new Card(
    `${name} (${version})`,
    `${authorName}: ${email}`,
    '#112233'
)

let infoDiv = document.querySelector(`#info`)
card.render(infoDiv)