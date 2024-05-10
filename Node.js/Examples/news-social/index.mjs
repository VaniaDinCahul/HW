import readline from 'node:readline'

let io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

io.question('Enter how many ratings do you want separated by a space (Ex. 1 2 3 4...): ', anwser => {
  let ratings = anwser.split(" ").map((value) => parseFloat(value));

  // Using .forEach()

  // let avreageRating = 0
  // ratings.forEach(element => {
  //     avreageRating = avreageRating + element
  // });
  // avreageRating = avreageRating.toFixed(2);

  // Using .reduce()

  let avreageRating = 0;
  avreageRating = ratings.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    avreageRating
  );
  avreageRating = (avreageRating / ratings.length).toFixed(2);

  console.log("Avreagte rating is: ", avreageRating);
  io.close();
})