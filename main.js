

//_______________NavBar___________Start_______________//
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

  menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

  window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
//_______________NavBar___________End_______________//



//_______________Search___________Start_______________//
const searchForm = document.querySelector(".search-form");
const searchBtn = document .querySelector("#search-btn");
searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    favForm.classList.remove("active");
}
//_______________Search___________End_______________//





//_______________Shopping-Cart___________Start_______________//
const cartBtn = document.querySelector("#cart-btn");
const shoppingCart = document.querySelector(".shopping-cart")
cartBtn.onclick = () => {
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    favForm.classList.remove("active");
}
//_______________Shopping-Cart___________End_______________//




//_______________Favoriet-From___________Start_______________//
const favForm = document.querySelector(".fav-form");
const favBTN  = document.querySelector("#fav-btn");
favBTN.onclick = () => {
    favForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    searchForm.classList.remove("active");
}
//_______________Favoriet-From___________End_______________//






//_______________Login___________Start_______________//
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#from-close');
//_______________Login___________End_______________//
//_______________Login___________Start_______________//
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
    favForm.classList.remove("active");
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
//_______________Login___________End_______________//




//____________Icons____________Container_________Start___________//
let valueDidplays = document.querySelectorAll(".num");
let interval = 5000;

valueDidplays.forEach((valueDidplay) => {
    let startValue = 0;
    let endValue =  parseInt(valueDidplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1; 
        valueDidplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    },duration);
});
//____________Icons____________Container_________Start___________//
