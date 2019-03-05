// flow control
const arr = [1,2,3]

// 1
// for of
let sum = 0
for(let n of arr){
    sum += n
}
// for
sum = 0
for (let i = 0; i<arr.length; i++) {
    sum += arr[i]
}
// while
sum = 0
let i = 0
while(i<arr.length){
    sum += arr[i]
    i++
}

// 2
let result = []
for(let n of arr){
    let isEven = n % 2 === 0;
    result.push(isEven)
}