const menu = document.querySelector(".menu");
const menu_overlay =document.querySelector(".menu_overlay");
const cross = document.querySelector("#cross");

menu.addEventListener("click", function(){
    menu_overlay.style.transform= "translate(0%)"; 
});

cross.addEventListener("click", function(){
    menu_overlay.style.transform= "translatey(-100%)"; 
});