// const colors = ["red", "green", "blue", "yellow"];

// let [first, second] = colors
// console.log("First = ", first);
// console.log("Second = ", second);


// const numbers = [10, 20, 30, 40, 50];
// let [aa, ...rest] = numbers
// console.log(aa);
// console.log(rest);


// let a = 5;
// let b = 10;
// [a, b] = [b, a]

// console.log(a, b);

// const nested = [1, [2, 3], 4];
// let [secon , third] = nested

// console.log(secon);
// console.log(third);



// const car = { brand: "Toyota", model: "Corolla" };
// let { brand: brandName, model: modelName } = car
// console.log(brandName);
// console.log(modelName);


// const user = { name: "Ali", age: 25, city: "Lahore" };
// let { name: fullName, age } = user
// console.log(fullName, age);

// const people = [
//     { name: "Ali", age: 24 },
//     { name: "Sara", age: 21 }
// ];

// let [{ name: firstPersonName, age: firstPersonAge, course = "Full Stack Developer" }, { name: secondPersonName, age: secondPersonAge }] = people
// console.log(firstPersonName, firstPersonAge,course);
// console.log(secondPersonName, secondPersonAge);




// const arr = [5];
// const [x = 1, y = 2] = arr;
// console.log(x, y); // 5 2

// const arr = [null]
// let [x = 1] = arr
// console.log(x);



// const obbj = { a: 1, b: 2, c: 3 };
// let {a, ...all} = obbj;
// console.log(a, all);


const student = { name: "Sara", marks: { math: 90, eng: 85 } };
const { name , marks:{math} } = student
console.log(name,math);
