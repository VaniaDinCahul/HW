import News from "./News.mjs";
import User from "./user.mjs";

const news = [
  new News("News one", "2024-04-24", new User("John Doe", "jd@example.host", '123'), 4),
  new News("News Two", "2024-02-12", new User("Ion", "ic@example.ru", '321'), 5),
  new News("News Three", "2023-11-23", new User("Petru", "pm@example.com", '1234'), 2.1),
];

export default news;
