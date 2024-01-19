if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    document.querySelector('.title').innerHTML = localStorage.getItem("name");
    document.querySelector('.price').innerHTML = "$" + localStorage.getItem("price");
    document.querySelector('.description').innerHTML = localStorage.getItem("description");
    document.querySelector('.image').src = localStorage.getItem("image");
}