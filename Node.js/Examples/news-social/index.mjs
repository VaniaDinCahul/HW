import { news } from "./data.mjs";
import { renderNews } from "./ui.mjs";
// 1
import readFile from 'node:fs';
// 2
// import readFile from "node:fs/promises";

// 1
readFile('./news.txt', (err, data) => {
    console.log(data.toString())
})

// 2

// let data = await readFile('./news.txt')
// console.log(data.toString());


renderNews(news)