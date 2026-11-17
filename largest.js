let n = Number(prompt("Enter array size:"));

let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt("Enter element:"));
}

let largest = arr[0];

for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest element:", largest);