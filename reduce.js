let marks = [75, 80, 65, 90, 85];

let total = marks.reduce((sum, mark) => sum + mark, 0);

console.log("Total marks:", total);
console.log("Average:", total / marks.length);