import readline from "node:readline";
import writeFile from "node:fs/promises";



let io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

io.question(
  "Insert How many different Ratings you want separated by a Space",
  (answear) => {
    let ratings = answear.split(" ").map((value) => parseFloat(value));

    let avreageRating = 0;
    ratings.forEach((element) => {
      avreageRating = avreageRating + element;
    });
    avreageRating = avreageRating.toFixed(2);
    writeFile("./ratings.json", avreageRating);
  }
);