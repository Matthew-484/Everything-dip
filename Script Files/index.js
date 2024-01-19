class product {
    constructor(image, name, price, description){
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

const glossBlack = new product("/Assets/gloss-black.png", "Gloss Black Aerosol", 14.99, "Description about the gloss black aerosol");
const matteBlack = new product("/Assets/matte-black.png", "Matte Black Aerosol", 12.99, "Description about matte black aerosol");
const matteWhite = new product("/Assets/aerosols.png", "Matte White Aerosol", 12.99, "Description about matte white aerosol");

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    const productList = document.querySelectorAll('.featured-products-containers');

    for(let x = 0; x < productList.length; x++){
        if(x == 0){
            productList.item(x).addEventListener('click', function(){addToStorage(glossBlack)});
        }
        else if(x == 1){
            productList.item(x).addEventListener('click', function(){addToStorage(matteBlack)});
        }
        else{
            productList.item(x).addEventListener('click', function(){addToStorage(matteWhite)});
        }
    }
}

function addToStorage(product){
    localStorage.setItem("image", product.image);
    localStorage.setItem("name", product.name);
    localStorage.setItem("price", product.price);
    localStorage.setItem("description", product.description);
    location.replace('/Webpages/product.html');
}