

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
        let raitng = Math.round(newsItem.rating);

        let template = ` ${newsItem.title} <<${ratingMap[raitng]}>> \n 
     \t - ${newsItem.publishedOn}\n
     \t - <${newsItem.author.name}>\n
    `;
        console.log(template);
    });
}

export default renderNews