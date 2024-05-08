import { readFile } from 'node:fs/promises'
import User from './user.mjs'
import News from './News.mjs'

const getAllNews = async () => {
    let news = await readFile("./news.json");

    news = JSON.parse(news);

    news = news.map(item => {
        return new News(
            item.title, 
            item.publishedOn, 
            new User(
                item.author.name,
                item.author.email,
                item.author.password
            ),
            item.rating
        );
    })

    return news
}

export default getAllNews