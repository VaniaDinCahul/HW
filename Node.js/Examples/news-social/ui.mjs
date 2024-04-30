

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

const renderNews = (news) => {
    console.clear()
    console.log("NEWS\n\n")

    news.forEach(newsItem => {
        let raitng = Math.round(news[i].rating);

        let template = ` ${news[i].title} <<${ratingMap[raitng]}>> \n 
     \t - ${news[i].publishedOn}\n
     \t - <${news[i].author.name}>\n
    `;
        console.log(template);
    });
}

export default renderNews