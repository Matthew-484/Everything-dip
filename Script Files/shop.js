class product {
    constructor(image, name, price, description){
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

const aerosols = [
    new product("/Assets/aerosols.png", "Matte White Aerosol", 12.99, "Matte white aerosol plasti dip can"),
    new product("/Assets/gloss-black.png", "Gloss Black Aerosol", 14.99, "Gloss black aerosol plasti dip can"),
    new product("/Assets/matte-black.png", "Matte Black Aerosol", 11.99, "Matte black aerosol plasti dip can"),
    new product("/Assets/clearance.jpg", "Plasti Dip Aerosol Package", 20.99, "Aerosol package includes glossifier, gloss black, matte black aerosols"),
    new product("/Assets/accessories.jpg", "Plasti Dip Spray Gun", 25.99, "Spray gun to assist with spraying plasti dip on large areas")
];
const accessories = [];
const kits = [];
const clearance = [];

const all = [aerosols, accessories, kits, clearance];
localStorage.setItem('all', JSON.stringify(all));
var current = [];

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    const page = document.querySelector('.page-title');
    if(page.innerHTML == "Aerosols"){
        current = aerosols;
    }
    else if(page.innerHTML == "Accessories"){
        current = accessories;
    }
    else if(page.innerHTML == "Kits"){
        current = kits;
    }
    else if(page.innerHTML == "Clearance"){
        current = clearance;
    }
    else{
        current = JSON.parse(localStorage.getItem("searchResults"));
        page.innerHTML = "Search Results for '" + localStorage.getItem('search') + "'";
    }

    const length = current.length;
    var numProducts = document.querySelector('.shown-items');
    numProducts.innerHTML = "Showing " + length + " Products";

    var productsContainer = document.querySelector('.products-container');

    for(let x = 0; x < length; x++){
        var container = document.createElement('div');
        container.classList.add('product-container');
        var productName = document.createElement('a');
        productName.classList.add("product-link");
        productName.href = "/Webpages/product.html";
        productName.innerHTML = current[x].name;
        productName.setAttribute('contents', JSON.stringify(current[x]));
        var containerContents = `
        <figure class="product-img-container">
            <img src="${current[x].image}" alt="product image" class="product-img">
        </figure>
        <div class="product-info-container">
            ${productName.outerHTML}
            <span class="product-price">$${current[x].price}</span>
            <a href="" class="cart-option">+ Add to Cart</a>
        </div>
        `
        container.innerHTML = containerContents;
        productsContainer.append(container);
        document.addEventListener('click', function(e){
            if(e.target && e.target.classList.contains("product-link")){
                var product = JSON.parse(e.target.getAttribute('contents'));
                localStorage.setItem("image", product.image);
                localStorage.setItem("name", product.name);
                localStorage.setItem("price", product.price);
                localStorage.setItem("description", product.description);
            }
        })
    }
}