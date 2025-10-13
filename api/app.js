
let products
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        products = data
    })


let renderProducts = document.querySelector('#renderProducts');
let html = '';
function showAll() {
    html = ''
    products.map((items) => {
        html += `<div class="card" style="width: 18rem;">
                 <div class="d-flex justify-content-center align-items-center" style="height: 200px; background: #f8f9fa;">
                 <img src="${items.image}" class="img-fluid" style="max-height: 180px; object-fit: contain;" alt="${items.title}">
                </div>
                <div class="card-body">
                  <h4 class="card-title"></h4>
                  <h5 class="card-subtitle mb-2 text-mixed">${items.category || 'Not specified'}</h5>
                  <p class="card-text">${items.title}</p>
                  <h5 class="card-subtitle mb-2">Price : $${items.price}</h5>
                  <button class='btn btn-light border'>Add to Cart</button>
                </div>
              </div>`;
    })
    renderProducts.innerHTML = html
}


setTimeout(() => {
    showAll()
}, 1000);


function filteredItems(btn) {
    html = ''
    setTimeout(() => {
        products.filter((items) => items.category === btn.innerHTML).forEach((items) => {
            html += `<div class="card" style="width: 18rem;">
            <div class="d-flex justify-content-center align-items-center" style="height: 200px; background: #f8f9fa;">
            <img src="${items.image}" class="img-fluid" style="max-height: 180px; object-fit: contain;" alt="${items.title}">
            </div>
            <div class="card-body">
            <h4 class="card-title"></h4>
            <h5 class="card-subtitle mb-2 text-mixed">${items.category || 'Not specified'}</h5>
            <p class="card-text">${items.title}</p>
            <h5 class="card-subtitle mb-2">Price : $${items.price}</h5>
            <button class='btn btn-light border'>Add to Cart</button>
            </div>
            </div>`;
            renderProducts.innerHTML = html
        })
    }, 1000)

}

