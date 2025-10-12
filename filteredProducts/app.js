// const colors = ["red", "green", "blue"];

// colors.forEach(item => console.log(item))



// const fruits = ["apple", "banana", "mango"];

// fruits.forEach((item, i) => {
//     i++
//     console.log(`${i}. ${item}`)
// });



// const numbers = [2, 4, 6];
// numbers.forEach((num) => {
//     console.log(num ** 2);

// })




// const marks = [50, 80, 95, 40, 70];
// marks.forEach((marks) => {
//     if (marks >= 50){
//         console.log("Pass");
//     }else{
//         console.log("Fail");

//     }
// })


// const add = (a,b) => {
//     return a + b
// }

// console.log(add(4,5));


// const square = a => a ** 2
// console.log(square(5));



// const obj = () => {
//     return { name: "Ali", age: 22 }
// }
// console.log(obj());
// const obj2 = () => ({ name: "Ali", age: 22 })
// console.log(obj2());


// const double = a => a * 2
// console.log(double(10));


// const getStatus = (score) => (score >= 50)?"Pass":"Fail";
// console.log(getStatus(51));


// const marks = [45, 80, 60, 30, 90];
// const passed = marks.filter(mark => mark >= 50);
// console.log(passed);



const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"

    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },


    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },

    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery

    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture

    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness

    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances

    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];

let renderpro = document.querySelector('#Products');

function showAll() {
    renderpro.innerHTML = ''
    let html = ''
    products.map((items) => {
        return html += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h4 class="card-title ">${items.category} </h4>
            <h5 class="card-subtitle mb-2 text-muted">Brand : ${items.brand} </h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <h5 class="card-subtitle mb-2 ">Price : $${items.price} </h5>
              <button class='btn btn-light border '>Add to Cart</button>
            </div>
          </div>    `
    })
    renderpro.innerHTML = html
}


function filteredItems(btn) {
    renderpro.innerHTML = ''
    let html = ''
    products.filter((item) => btn.innerHTML === item.category).map((item) => {
        html += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h4 class="card-title ">${item.category} </h4>
            <h5 class="card-subtitle mb-2 text-muted">Brand : ${item.brand} </h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <h5 class="card-subtitle mb-2 ">Price : $${item.price} </h5>
              <button class='btn btn-light border '>Add to Cart</button>
            </div>
          </div>    `
    })
    renderpro.innerHTML = html
}