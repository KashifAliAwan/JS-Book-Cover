// function countDown(num) {
//     console.log(num);
//     // console.log(num);
//     if (num > 1) {          // ✅ Base case: jab num 1 se zyada ho
//         countDown(num - 1);   // 👈 recursive call
//     }
// }
// countDown(5);
// const numbers = [5, 10, 15, 20];
// let result = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// },0)
// let result = numbers.reduce((acc , curr) => acc + curr)
// console.log(result);
// 



// const marks = [45, 80, 32, 90, 67];
// let result = marks.reduce((acc, curr) => {
//     if (acc < curr) {
//         return curr
//     } else {
//         return (acc)

//     }
// })

// console.log(result);





// const students = [
//     { name: "Ali", grade: "A" },
//     { name: "Sara", grade: "B" },
//     { name: "Ahmed", grade: "A" },
//     { name: "Zain", grade: "C" },
//     { name: "Aisha", grade: "B" },
// ];


// let result = students.reduce((acc, curr) => {
//     if (!acc[curr.grade]) {
//         acc[curr.grade] = []
//     }
//     acc[curr.grade].push(curr.name)

//     return acc

// }, {})

// console.log(result);






// const votes = ["Ali", "Sara", "Ali", "Zain", "Sara", "Ali"];


// let countFuntion = votes.reduce((acc, curr, i) => {
//     if (!acc[curr]) {
//         acc[curr] = 0
//     }

//     acc[curr] += 1


//     return acc

// }, {});
// console.log(countFuntion);




// const cart = [
//     { item: "Apple", price: 100 },
//     { item: "Mango", price: 120 },
//     { item: "Banana", price: 60 }
// ];

// let result = cart.reduce((acc, curr) => acc + curr.price, 0)

// console.log(result);



// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// let counting = words.reduce((acc, curr) => {
//     if (!acc[curr]) {
//         acc[curr] = 0
//     }

//     acc[curr] += 1

//     return acc

// }, {});

// console.log(counting);



// const numbers = [12, 45, 23, 67, 34, 89, 54];

// let large = numbers.reduce((acc,curr) => {
    
    
//     if(curr > acc){
//         return curr 
//     }else{
//         return acc 
//     }
// })

// console.log(large);








































































