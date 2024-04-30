import { news } from "./data.mjs";
import { renderNews } from "./ui.mjs";
// 1
// import readFile from 'node:fs';
// 2
import readFile from "node:fs/promises";
import writeFile from "node:fs/promises";
// 1
// readFile('./news.txt', (err, data) => {
//     console.log(data.toString())
// })

// 2
let title = "yes"

await writeFile('./news.txt', title)

let data = await readFile('./news.json')
data = JSON.parse(data)
console.log(data.toString());


renderNews(news)