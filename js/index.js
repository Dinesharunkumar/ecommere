/* toggle menu */

var menuItems= document.getElementById('menuElements');

menuItems.style.maxHeight="0px";

function menutoggle(){
    if(menuItems.style.maxHeight=="0px"){
        menuItems.style.maxHeight="200px";
    }else{
        menuItems.style.maxHeight="0px";
    }
}

/* image seletion in products page */
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick=function(){
    productImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    productImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    productImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    productImg.src=smallImg[3].src;
}

/* form toggle */

console.log(loginForm);
function login(){
    document.getElementById("LoginForm").style.transform= "translateX(300px)";
    document.getElementById("RegisterForm").style.transform= "translateX(300px)";
    document.getElementById("indicator").style.transform="translateX(0px)";
}
function register(){
    document.getElementById("LoginForm").style.transform= "translateX(0px)";
    document.getElementById("RegisterForm").style.transform= "translateX(0px)";
    document.getElementById("indicator").style.transform="translateX(100px)";
}