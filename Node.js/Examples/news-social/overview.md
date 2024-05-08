# ES Modules

index.mjs

    data.mjs
      |
      |
      +-- news = [...]


index
  ^
  |
  +-- Ui
  |    |
  |    +-- renderNews()
  |
  |
  +-- storage
        |
        +-- getAllNews() (returns a Promise)
                  ^
                  |
                  +-- <----- readFile() (Returns a Promise)
                                  ^
                                  |
                                  +-- data/news.json
                                            |
                                            [
                                              {...},
                                              {...},
                                              ...
                                            ]

                         renderNews(news)
                           (index.mjs)
                               ^
                               |
                +--------------+--------------+
                |                             |
              news                            |
           (data.mjs)                         |
               ^                              |
               |                              |
     +---------+--------+                     |
     |                  |                     |
   User                News              renderNews
(User.mjs)          (News.mjs)            (ui.mjs)