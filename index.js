// const sum = () => {
//     let sum = 0;
//     for (let i = 1; i < 1000; i++) {
//         if(i % 3 === 0 || i % 5 === 0) {
//             sum+= i;
//         }
//     }
//     console.log(sum);
// }

// const fibonacci = (n) => {
//     if (n === 1 || n === 2)  {
//         return n;
//     } else {
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }

// let fiboSum = 0;
// for (let i = 1; i<=4000000; i++) {
//     if (fibonacci(i) <= 4000000 && fibonacci(i) % 2 === 0) {
//         fiboSum += fibonacci(i);
//     }
//     if (fibonacci(i) > 4000000) {
//         break;
//     }
// }

const squareDifference = (n) => {
    let sumSquares = n*(n+1)*(2*n+1)/6;
    let squareSum = Math.pow( n*(n+1)/2, 2);
    return console.log(squareSum - sumSquares);
}

squareDifference(100);