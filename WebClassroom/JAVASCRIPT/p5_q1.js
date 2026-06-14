let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let element of marks) {
    sum += element;
}
let avg = sum/marks.length;
console.log(`The average of given marks is ${avg}.`);