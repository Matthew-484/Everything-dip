window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    const nav = document.querySelector('.navigation-container');
    if(scroll >= 200 && scroll <= 250){
        nav.style.opacity = 0;
    }
    else if(scroll > 250){
        nav.style.position = "fixed";
        nav.style.top = 0;
        nav.style.opacity = 1;
    }
    else{
        nav.style.position = "relative";
        nav.style.opacity = 1;
    }
})

var textValue;

const allItems = JSON.parse(localStorage.getItem('all'));

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    var searchBar = document.querySelector('.search-bar');

    searchBar.addEventListener('click', function(){
        searchBar.style.opacity = 1;
    })

    var searchButton = document.querySelector('.search');

    searchButton.addEventListener('click', function(){
        textValue = searchBar.value;

        if(textValue){
            var relatedProducts = [];
            for(let arr = 0; arr < allItems.length; arr++){
                var currentArr = allItems[arr];
                for(let item = 0; item < currentArr.length; item++){
                    if(currentArr[item].name.includes(textValue) || currentArr[item].description.includes(textValue)){
                        relatedProducts.push(currentArr[item]);
                    }
                }
            }
            
            localStorage.setItem('search', textValue);
            localStorage.setItem('searchResults', JSON.stringify(relatedProducts));
        }
    })

    searchBar.addEventListener('keyup', (e) => {
        if(e.keyCode === 13){
            textValue = searchBar.value;

            if(textValue){
                var relatedProducts = [];
                for(let arr = 0; arr < allItems.length; arr++){
                    var currentArr = allItems[arr];
                    for(let item = 0; item < currentArr.length; item++){
                        if(currentArr[item].name.includes(textValue) || currentArr[item].description.includes(textValue)){
                            relatedProducts.push(currentArr[item]);
                        }
                    }
                }
                
                localStorage.setItem('search', textValue);
                localStorage.setItem('searchResults', JSON.stringify(relatedProducts));
                location.replace('/Webpages/searchResults.html');
            }
        }
    })
    
}