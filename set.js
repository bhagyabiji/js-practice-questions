// Remove duplicate numbers from an array using Set.

let numbers = [10, 20, 10, 30, 40, 20, 50];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);