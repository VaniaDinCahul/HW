import { readFile } from "node:fs/promises";


let data = await readFile('./ratings.json')
let avreageRating = 0

data = JSON.parse(data)

data.ratings.forEach(rating => {
  avreageRating = avreageRating + rating  
});
avreageRating = (avreageRating / data.ratings.length).toFixed(2);

console.log("Average rating is: ", avreageRating)