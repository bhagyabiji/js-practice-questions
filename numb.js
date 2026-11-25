// Use filter() to get numbers greater than 50 and then map() to multiply each by 2

let numbers = [10, 60, 25, 80, 45, 90];

let result = numbers
    .filter(num => num > 50)
    .map(num => num * 2);

console.log(result);