// alert("Learning Javascript By Kashif Ali")
// window.alert("Learning Javascript By Kashif Ali")

// var Name = "Kashif Ali"
// alert(Name)


// var weight = 50;
// alert(weight + 50)


// let x = 5;
// console.log("x++ ", x--);
// console.log("x++ ", x);


// a = 10;
// b = 20;

// console.log(a != b);

// console.log(2 + 3 * 4);
// console.log(10 - 4 + 2);
// console.log(10 - (4 + 2));

// let Name = "Kashif Ali"
// console.log(typeof(Name));


// let FirstName = "Kashif"
// let LastName = "Ali"
// let FullName = FirstName + " " + LastName
// console.log(FullName);

// let des = "Lorem ipsum, dolor\nsit amet consectetur adipisicing elit. \nQuisquam, consequuntur unde? Consequuntur possimus voluptas cum! Debitis\n dolores veniam nobis ipsam laborum \nexpedita nostrum quisquam, nesciunt mollitia a sit consequatur magni?"

// console.log(des);


// var num = 4
// var plus = num + num++ + ++num
// console.log(plus);

// var a = 2;
// var b = a++ + ++a + --a + a + a++;
//     //  2      4      3   3   3
// console.log(b , "15");


// var m = 5;
// var n = m-- + m + ++m + m++ + --m;
//     //   5    4    5     5     5 
// console.log(n, "24");

// let Name = prompt("what's Your Full Name")
// let num1 = +prompt("Enter First Number");
// let num2 = +prompt("Enter Second Number");

// // alert((Name) + " The Sum OF First And Last Number is\n " + (num1 + num2))
// alert(`${Name} The Sum OF First And Last Number is\n  ${num1 + num2}`)



// let num1 = +prompt("1st Number");
// let Operator = prompt("Select Operator");
// let num2 = +prompt("2nd Number");

// if(Operator == "+" ){
//     console.log(num1 + num2);
// }else if (Operator == "-" ){
//     console.log(num1 - num2);
// }else if (Operator == "*" ){
//     console.log(num1 * num2);
// }else if (Operator == "/" ){
//     console.log(num1 / num2);
// }else{
//     console.log("Enter Correct Operator => + , - , * , /");
// }


// let number = +prompt("Enter Numbers");

// if (number % 2 == 0){
//     console.log("Even Number")
// }else{
//     console.log("Odd Number");
// }


// let physics = +prompt("Enter Physics Marks");
// let maths = +prompt("Enter Maths Marks");
// let urdu = +prompt("Enter Urdu Marks");
// let English = +prompt("Enter English Marks");

// let total = physics + maths + urdu + English

// if (physics > 100 || maths > 100 || urdu > 100 || English > 100) {
//     alert("Marks should not be greater than 100 in any subject!");
// } else {
//     if (total <= 400) {
//         console.log(total);
//         console.log(`Your Percentage is ${total / 400 * 100}%`);
//     } else {
//         console.log("Each Subject Contain 100 Marks");
//     }
// }

// let tr = true;
// let fls = false;

// if(tr && tr){
//    console.log("And Operator &&");
// }else if (tr || fls){
//     console.log("Or Operator ||");
// }
// else{
//     console.log("Condition False");

// }



// 🔹 Task 1: Movie Ticket System 🎬
// User se age aur hasTicket (true/false) input lena hai.
// Agar age < 18 → "You are not allowed"
// Agar age >= 18 && hasTicket == true → "Enjoy your movie!"
// Agar age >= 18 && hasTicket == false → "You need a ticket to watch the movie"

// Fail

// 🔹 Task 2: Online Shopping Discount 🛒
// User se cartAmount aur isMember input lena hai.
// Agar cartAmount >= 5000 && isMember == true → "You get 20% discount"
// Agar cartAmount >= 5000 && isMember == false → "You get 10% discount"
// Agar cartAmount < 5000 && isMember == true → "You get 5% discount"
// Otherwise → "No discount"

// let cartAmount = +prompt("Enter Your Amount");
// let isMember = prompt("You Already a Member (Yes/not)")

// let dis = (isMember.toLowerCase() === "yes");

// if(cartAmount >= 5000 && dis == true){
//     console.log("You get 20% discount");
// }else if (cartAmount >= 5000 && dis == false){
//     console.log("You get 10% discount");
// }else if (cartAmount < 5000 && dis == true){
//     console.log("You get 5% discount")
// }else{
//     console.log("No discount");

// }


// 🔹 Question 1: Exam Result 🎓
// User se marks input lo. Nested if-else use karke grade print karo:
// Agar marks >= 90 → "Grade A"
// Agar marks >= 80 → "Grade B"
// Agar marks >= 70 → "Grade C"
// Agar marks >= 60 → "Grade D"
// Warna → "Fail"

// let marks = +prompt("Enter Your Marks")

// if (marks != "") {
//     if(marks > 100){
//         console.log("Dont Enter Marks Above 100");     
//     }
//     else if (marks >= 90) {
//         console.log("You got A Grade");
//     } else if (marks >= 80) {
//         console.log("You got B Grade");
//     } else if (marks >= 70) {
//         console.log("You got C Grade");
//     } else if (marks >= 60) {
//         console.log("You got D Grade");
//     } else {
//         console.log("Sorry You are Fail");

//     }

// } else {
//     console.log("Fill Input Field");

// }



// 🔹 Question 2: ATM Machine 🏧
// User se pin aur amount input lo.
// Agar pin sahi hai →
// Agar amount <= balance → "Transaction Successful"
// Warna → "Insufficient Balance"
// Agar pin ghalat hai → "Invalid PIN"


// let pin = +prompt("Enter Your Pin");
// let amount = +prompt("Enter Your Amount");

// let yourBalance = 10000

// if (!pin) {
//     console.log("Enter Your Pin🤬");
// } else {
//     if (pin === 2233) {
//         if (amount <= yourBalance) {
//             console.log("Transaction Successful");
//         } else {
//             console.log("Insufficient Balance");

//         }
//     } else {
//         console.log("Invalid PIN");
//     }
// }

// let arr = ["Kashif Ali", "Awan","Jan"]
// let numbers = new Array(1, 2, 3, 4, 5);
// console.log(typeof numbers);
// console.log(typeof arr);



// let arr = new Array(5);
// console.log(arr); // [ <5 empty items> ]
// console.log(arr.length); // 5

// let friend = ["Kashif Ali", "Awan", "Ali", "Noman"];
// let req = prompt("Enter Name to Search ....");

// if (friend.includes(req)) {
//     console.log("Friend Found Successfully✅");

// } else {
//     console.log("Friend Not Found 🚩❌");

// }

// let arr = ["Pc","Mouse", "Keyboard", "Pc", "Speaker","Pc","Mouse"];
// arr.push("HeadPhones","Handfree")
// arr.pop()
// arr.unshift("Kashif Ali Order: ")
// let add = arr.unshift("Bags")
// let dlt = arr.shift()
// console.log(dlt);



// let arr = ["Mouse","Pc", "Keyboard", "Pc", "Speaker","Pc","Mouse"];
// let checkIndexof = arr.lastIndexOf("Pc")
// console.log(checkIndexof);



// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrNum.reverse()
// console.log(arrNum);



// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arrNum.splice(1,6,"Kashi Ali")
// // console.log(arrNum);
// console.log(splce);


// document.write("<h1>Kashif Ali Js</h1>");

// let numArr = [1,20,2,3,30,10,50,6,7,8,80,9]
// numArr.sort()
// console.log(numArr);


// let bakery = ['Cake','Bisket','Snackes','Pastery','Juice','Samosa'];
// let user = prompt("Welcome to Our Bakery! 🍰 \nWhat would you like to buy today?")


// if (bakery.indexOf(user) !== -1) {
//     console.log("🥐 Good News! Your favorite item is fresh & available 🎊 \nGrab it now from Counter No.😍", bakery.indexOf(user));
// }else{
//     console.log("😔 Sorry! This item is currently not available in our bakery.\nPlease check back later or try our other fresh items 🥐☕");

// }



// Q1: Grocery List
// Ek array banao ['Milk', 'Bread', 'Eggs', 'Butter', 'Juice'].
// User se poochho wo kya kharidna chahta hai.
// Agar item array me hai to bolo:
// 👉 "Yes! {item} is available at shelf number X" (index ka use karo).
// Agar nahi hai to bolo:
// 👉 "Sorry! {item} is out of stock".

// let store = ['Milk', 'Bread', 'Eggs', 'Butter', 'Juice'];
// let userInput = prompt("What you have to buy?")

// if(store.indexOf(userInput) !== -1){
//     console.log(`Yes! ${userInput} is available at shelf number ${store.indexOf(userInput)}`); 
// }else{
//     console.log(`Sorry! ${userInput} is out of stock`);
// }


/* Q2: Student Marks
Ek student ke marks array me rakho: [85, 72, 90, 68, 77].
User se subject number (0–4) puchho.
Us index ka marks print karo.
Agar marks >= 80 hain to bolo "Excellent", warna agar >= 60 hain to bolo "Good", warna "Needs Improvement". */

// let marks = [85, 72, 90, 68, 77];
// let subjectIndex = +prompt("Enter Subject Number (0 - 4):");

// if(subjectIndex >= 0 && subjectIndex < marks.length){
//     let obtainedMarks = marks[subjectIndex];
//     console.log(`Marks in Subject ${subjectIndex}: ${obtainedMarks}`);

//     if(obtainedMarks >= 80){
//         console.log("🌟 Excellent!");
//     } else if(obtainedMarks >= 60){
//         console.log("👍 Good!");
//     } else {
//         console.log("⚠️ Needs Improvement");
//     }

// }else{
//     console.log("❌ Invalid subject number! Please enter between 0 - 4");
// }

// ???????????????????????????????????????????????????????????????????????


// Q3: ATM Machine
// Ek variable balance = 10000.
// User se amount poochho.
// Agar amount <= balance ho to "Transaction Successful" aur balance update karo.
// Agar zyada ho to "Insufficient Balance".
// Extra: agar user 0 ya negative amount dale to "Invalid Amount".

// let balance = 10000;
// let userAmount = +prompt("Enter Amount");

// if (userAmount == 0 || userAmount < 0) {
//     console.log("Invalid Amount");

// } else {
//     if (userAmount <= balance) {
//         console.log("Transaction Successful");
//         balance -= userAmount
//         console.log(balance);

//     } else if (userAmount > balance) {
//         console.log("Insufficient Balance");
//     }

// }


// for(let i = 1; i <= 10; i++){
//     console.log("Kashif Ali",i);

// }

// let store = ['Milk', 'Bread', 'Eggs', 'Butter', 'Juice'];

// for (let i = 0; i < store.length; i++){
//     console.log(store[i]);
//     c

// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);

// }



// let store = ['Milk', 'Bread', 'Eggs', 'Butter', 'Juice'];
// store.reverse()
// console.log(store);
// for (let i = 0; i < store.length; i++){
//     console.log(store[i]);

// }
// for (let i = store.length - 1; i >= 0; i--) {
//     console.log(store[i]);

// }




// 🔹 Easy Level
// 1 se 10 tak numbers print karo.
// 5 ka table print karo.
// 1 se 20 tak sirf even numbers print karo.
// 1 se 15 tak sirf odd numbers print karo.
// 10 se 1 tak reverse numbers print karo.


// for (let i = 1; i <= 10; i++) {
//     console.log(i);

// }
// console.log("------------------");

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${i * 5} `);

// }
// console.log("------------------");

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);

//     }
// }
// console.log("------------------");

// for (let i = 1; i <= 15; i++) {
//     if (i % 3 == 0) {
//         console.log(i);

//     }
// }
// console.log("------------------");

// for (let i = 10; i >= 1; i--) {
//     console.log(i);

// }


/* 🔹 Medium Level
1 se 100 tak numbers ka sum nikal ke print karo.
1 se 50 tak numbers ka sum nikal ke print karo.
Ek number lo (e.g. 7) aur uske table ko 1 se 20 tak print karo.
Ek string "Pakistan" ke har character ko alag alag line par print karo.
Ek array of names rakho aur unhe ek ek karke print karo. */

// let sum = 0;
// for (let i = 1; i <= 100 ; i++) {
//     sum += i
//     console.log(sum);
// }

// let sum = 0
// for (let i = 1; i <= 50; i++){
//     sum += i;
//     console.log(sum);    
// }

/* Medium Level

1 se 100 tak numbers ka sum nikal ke print karo.

Ek array me [2, 5, 8, 12, 15] rakho → sirf odd numbers print karo.

Ek array me sab numbers ka sum nikal ke print karo.

User se ek number lo → check karo ye prime number hai ya nahi.

Ek array of names rakho, aur un sab ko ek ek karke print karo. */


// let arr = [2, 5, 8, 12, 15] ;

// for(let i = 0; i < arr.length ; i++){
//     // console.log(arr[i]);
//     if(arr[i] % 2 != 0 ){
//         console.log(arr[i]);   
//     }  
// }


/* Hard Level (Logic Building 🔥)
1 se 50 tak numbers print karo, lekin:
Agar number 3 se divisible ho → "Fizz" print karo.
Agar 5 se divisible ho → "Buzz" print karo.
Agar dono se divisible ho → "FizzBuzz" print karo.
Ek number lo aur uska factorial nikal ke print karo (e.g. 5! = 120).
Ek array of numbers rakho aur sabse bara number find karo.
Ek array of numbers rakho aur sabse chota number find karo.
Ek string lo (e.g. "javascript") → uske har character ko alag alag line par print karo. */


// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }



// for (let i = 1; i <= 10; i++) {
//     console.log("---------");
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }


// let found = false;   // flag start me false hai
// let items = ["Milk", "Eggs", "Juice"];

// for (let i = 0; i < items.length; i++) {
//     if (items[i] === "Juice") {
//         found = true;   // agar mila to flag true ho gaya
//     }
// }

// if (found) {
//     console.log("Juice mil gaya!");
// } else {
//     console.log("Juice nahi mila!");
// }



// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// let usr = prompt("Enter Fruit Name")
// let found = false;


// for (let i = 0; i < fruits.length; i++) {
//     if (usr == fruits[i]) {
//         found = true
//     }
// }

// if (found) {
//     console.log(usr, "Is Available");
// } else {
//     console.log("Not Available")
// }



// let numbers = [11, 23, 7, 45, 19,22];
// let nmfound = false;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         nmfound = true;
//         break
//     }
// }

// if (nmfound) {
//     console.log("Even Number Found At Index");
// } else {
//     console.log("All are Odd Number");

// }



// let passwords = ["1234", "abcd", "xyz", "admin"];
// let user = prompt("Enter 4 Digit Password");
// let pass = false;

// for (let i = 0; i < passwords.length; i++) {
//     if (user == passwords[i]) {
//         pass = true;
//         break
//     }


// }

// if (pass) {
//     console.log("%c♻ Login Successful", "color: green; font-size:16px;");

// } else{
//     console.log("%c❌Access Denied", "color: red; font-size:16px;");

// }




// for (let i = 1; i <= 20; i++) {
//     if (i % 5 == 0) {
//         continue

//     }

//     console.log(i);
// }


// for (let i = 1; i <= 15; i++) {
//     if (i % 2 == 0) {
//         continue
//     }
//     console.log(i);

// }


// let student = ["Ali", "Sara", "Fail", "Ahmed", "Fail", "Hina"]


// for (let i = 1; i < student.length; i++) {
//     if (student[i] == "Fail") {
//         continue
//     }
//     console.log(student[i]);

// }


// let cart = ["Milk", "Expired", "Bread", "Eggs", "Expired", "Juice", "Expired", "Butter"];


// document.write("Lerning Js")
// console.log(Math.PI.toFixed(2));
// console.log(Math.round(Math.random()*100));
// console.log(Math.random()*10);


// console.log(Math.ceil(2.5));
// console.log(Math.ceil(10.99));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.1));
// console.log(Math.floor(10.99));
// console.log(Math.floor(15.8));
// console.log(Math.floor(12.1));


// let user = +prompt("Enter Number")

// console.log("round",Math.round(user));
// console.log("Ceil",Math.ceil(user));
// console.log("Floor",Math.floor(user));

// let user = +prompt("Enter Number")

// console.log("nearest lower integer",Math.floor(user));
// console.log("nearest upper integer",Math.ceil(user));
// console.log("Diffirence",(Math.ceil(user)-Math.floor(user)));


// console.log("Floor",Math.floor(user));
// console.log("Ceil",Math.ceil(user));


// let chkVal = Math.min(2,-8,10,55,90)
// console.log(chkVal);

// var one = Math.floor((Math.random() * 6) + 1)
// var two = Math.floor((Math.random() * 6) + 1)
// var three = Math.floor((Math.random() * 6) + 1)
// var four = Math.floor((Math.random() * 6) + 1)

// console.log(one,two,three,four);


// let otp = Math.floor(Math.random());
// console.log("Your OTP is:", otp);
// var rightNow = new Date();
// console.log(rightNow);
// console.log(typeof rightNow);

// let year = new Date().getFullYear()
// console.log(year);

// let year = new Date().getDay()
// let year = new Date().getMonth()
// let year = new Date()
// console.log(year.getMilliseconds());
// console.log(year.getTime());
// console.log(year.toDateString());
// console.log(year.toTimeString());
// console.log(year.toLocaleDateString());
// console.log(year.toLocaleTimeString());

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let day = new Date()
// // console.log(days[day.getDay()]);
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// console.log(months[day.getMonth()-1]);

// var year = new Date().getFullYear()
// console.log(year - 2004);

/*
📝 Exercises for Practice
Current Date Parts
Ek program banao jo current date se sirf year, month aur day extract kare aur print kare.
Example output:
Year: 2025
Month: 9
Day: 4 */


// // First Question
// let date = new Date();
// console.log("Year:", date.getFullYear());
// console.log("Month:", String(date.getMonth() + 1).padStart(2,"0"));
// console.log("Day:", String(date.getDay()).padStart(2, "0"));

// // Second Question
// console.log("Current Time :", date.toLocaleTimeString());


// Third Question
// let now = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[now.getDay()]);


/*🔥 Bonus Challenge:
Ek program likho jo input date lega (e.g., "2025-12-31") aur usse extract kare:
Year
Month (name ke saath, jaise "December")
Day*/
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let date = new Date("2025-12-31");
// console.log(date.getFullYear());
// console.log(months[date.getMonth()]);
// console.log(date.getDate());

/*🟢 Easy Level
Ek program banao jo user ka naam le aur usko ek alert me greet kare.
👉 Example: "Welcome Ali!"
Ek array banao 5 fruits ka. User se ek fruit puchho. Agar fruit array me hai to bolo:
"Yes, we have it!" warna "Sorry, not available."
User se number lo. Agar number even hai to print karo "Even Number", warna "Odd Number".
 */


// let user = prompt("Enter Your Name");
// alert("Welcome" + " " + user)


// var fruits = ["kiwi", "pineapple", "mango","banana","kharboza"];
// let user = prompt("Enter Your Fruite Name").toLocaleLowerCase();
// let vr = fruits.includes(user);

// if(vr){
//     console.log(`Yes,we have ${user}!`);
// }
// else{
//     console.log("Sorry, not available.");
// }

// let num = +prompt("Enter Number");
// if (num % 2 == 0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");    
// }

/* 🟡 Medium Level

Ek marksheet program banao:
User se 3 subjects ke marks lo.
Unka total aur average nikalo.
Grade decide karo:
80+ = A
70+ = B
60+ = C
50+ = D
<50 = Fail
Ek program banao jo 1 se 20 tak numbers print kare, lekin:
3 se divisible → "Fizz"
5 se divisible → "Buzz"
Dono se divisible → "FizzBuzz"
Ek ATM machine program likho:
Balance = 10000
User se amount lo.
Agar amount balance se chhota ho aur 0 se bada ho to transaction success aur naya balance dikhayo.
Warna "Invalid transaction" */


// let balance = 10000;
// let useramount = +prompt("Enter Your Amount")

// if (useramount < balance && useramount != 0){
//     console.log("%c Transaction success✅", "color: green; font-weight: bold;");
// }else{
//     console.log("%c Invalid transaction🚩 ", "color: red; font-weight: bold;");
// }


// for (let i = 1; i <= 20; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i, "Fizz Buzz");
//     } else if (i % 5 == 0) {
//         console.log(i, "Buzz");
//     }
//     else if (i % 3 == 0) {
//         console.log(i, "Fizz");

//     }
//     else {
//         console.log(i);

//     }
// }


// let generatedOTP = Math.floor(1000 + Math.random() * 9000)
// console.log(generatedOTP);

// for (let i = 1; i <= 3; i++) {
//     let user = +prompt("Enter Otp");
//     if (user == generatedOTP) {
//         console.log("%c Login Successfull✅", "color: green; font-weight: bold;");
//         break
//     } else {
//         console.log("%c Invalid OTP🚩 ", "color: red; font-weight: bold;");

//     }
// }








// let generatedOTP = Math.floor(1000 + Math.random() * 9000);
// console.log(generatedOTP);

// let success = false; // flag banaya

// for (let i = 1; i <= 3; i++) {
//     let user = +prompt("Enter OTP");
//     if (user == generatedOTP) {
//         console.log("%c Login Successful ✅", "color: green; font-weight: bold;");
//         success = true; // flag ko true kar diya
//         break;
//     } else {
//         console.log("%c Invalid OTP 🚩", "color: red; font-weight: bold;");
//     }
// }

// // loop ke baad check karo
// if (!success) {
//     console.log("%c Access Denied 🚫", "color: red; font-weight: bold;");
// }


// function kname(num1,num2) {
//     console.log("Kashif Ali",num1,num2,num1);
//     console.log(num1+num2);
// }
// kname(1,2)



/* Easy Level

Ek function banao jo "Hello World" print kare.
👉 Call karo aur dekho message print hota hai ya nahi.

Ek function banao jo user ka naam input le aur usko greet kare:
Example: Hello Ali, Welcome!

Ek function banao jo do numbers le aur unka sum print kare. */

// function greeting(){
//     console.log("Hello World");
// }
// greeting()

// function name(user_name){
//     // let user_name = prompt("Enter Your Name");
//     console.log("Hello",user_name,"Wellcome");
// }
// name("Kashif Ali")


// function numbers(num,num2){
//     console.log(num + num2);
// }
// numbers(10,15)





/* 🟡 Medium Level

Ek function banao jo number ka square return kare.
Example: square(5) → 25

Ek function banao jo user se ek number le aur check kare ke wo even hai ya odd.
Example: checkEvenOdd(7) → "Odd Number"

Ek function banao jo ek array le aur usme se maximum number return kare.
Example: [2, 8, 5, 12] → 12 */


// function squarRoot(n) {
//     return n * n
// }

// let a = squarRoot(8)
// let b = squarRoot(16)
// console.log(a, b);

// function checkNum(checkNumeber) {
//     if (checkNumeber % 2 === 0) {
//         console.log("Even Number");
//     }
//     else{
//         console.log("Odd Number");
//     }
// }

// checkNum(7)


// function greetUser(user){
//     console.log("As Salam U Alikum" + " " + user);
// }

// let print = document.querySelector('#head');

// function greetUser() {
//     if (kName.innerHTML == "What's Your Name")
//         kName.innerHTML = "Kashif Ali Awan"
//     else {
//         kName.innerHTML = "What's Your Name"

//     }
// }


// let printUser = document.querySelector('#head');
// let getPromt = prompt("What is Your Name")


// function comeUser() {
//     let test = printUser.innerHTML = "Hello" + " " + getPromt
// }
// let email = document.querySelector("#email")
// let password = document.querySelector("#password")


// function inputUser() {
//     console.log(email.value);
//     console.log(password.value);
//     email.value = ""
//     password.value = ""

// }

// let cal = document.querySelector("#h1");
// let num = 0


// function plus() {
//     cal.innerHTML = num++
// }
// function minus() {
//     if (num > 0) {
//         cal.innerHTML =  num--
//     }else{
//         alert("Doest Work in Minus Values")
//     }
// }
// function reset(){
//     num = 0
//     cal.innerHTML = num
// }

// let yourName = document.querySelector("#yourName");
// let nameinput = document.querySelector("#nameinput");

// function printName() {
//     yourName.innerHTML = "As Salam U alikum " + nameinput.value;
//     nameinput.value = ""
// }


// let bulb = document.querySelector("#bulb");
// let onOff = document.querySelector("#onof");

// let bool = true
// function bulbOnOFf() {
//     if (bool) {
//         bool = false
//         bulb.src = "https://t3.ftcdn.net/jpg/16/42/56/26/360_F_1642562610_35ycauDol9373OooGE5Rrjac9u8paxJn.jpg"
//         onOff.innerHTML = "OFF"
//     } else {
//         bool = true
//         bulb.src = "https://upload.wikimedia.org/wikipedia/commons/b/b4/Gluehlampe_01_KMJ.png"
//         onOff.innerHTML = "ON"
//     }
// }