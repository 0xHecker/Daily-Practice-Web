// const subreddit = ['cringe', 'books', 'me_irl', 'alps', 'images', 'memes'];

// for (sub of subreddit) {
//     console.log(`this refers to ${sub} subreddit`);
// }

const testScores = {
    keenan: 80,
    damon: 38,
    kim: 27,
    marlon: 91,
    nadia: 83,
    dwane: 32,
    voinne: 70
}

// for (person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

// Object.keys(testScores);
let total = 0;
scores = Object.values(testScores);

for (let score of Object.values(testScores)) {
    total += score;
    console.log(total);
}
console.log("");
console.log(total / scores.length);