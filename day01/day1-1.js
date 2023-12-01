const fs = require('fs');
// const ex = fs.readFileSync('example').toString().split("\n");
const array = fs.readFileSync('input1').toString().split("\n");
// console.log(ex);

// const numerics = [...Array(10).keys()];
const nums = array.map(str => [...str].filter(el => parseInt(el)))

// console.log(nums)
const flat = nums.map(el => el[0].concat(el[el.length - 1]))
// console.log(flat.map(f => parseInt(f)))

const sum = flat.map(f => parseInt(f)).reduce((accumulator, currentValue) => {
return accumulator + currentValue
}, 0);

console.log(sum);

