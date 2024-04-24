const news = [
    {
        title: "News one",
        publishedOn: "2024-04-24",
        author: "Igor",
        rating: 4,
    },
    {
        title: "News Two", 
        publishedOn: "2024-02-12",
        author: "Ion",
        rating: 5,
    },
    {
        title: "News Three", 
        publishedOn: "2023-11-23",
        author: "Petru",
        rating: 2.1,
    },
]

const ratingMap = [
    `☆☆☆☆☆`,
    `★☆☆☆☆`,
    `★★☆☆☆`,
    `★★★☆☆`,
    `★★★★☆`,
    `★★★★★`
]

console.clear()
console.log("NEWS\n\n")

for(let i=0; i< news.length; i++) {

    let raitng = Math.round(news[i].rating)

    let template = ` ${news[i].title} <<${ratingMap[raitng]}>> \n 
     \t - ${news[i].publishedOn}\n
     \t - <${news[i].author}>\n
    `
    console.log(template);
}