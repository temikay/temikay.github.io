var hi = document.getElementById("hi");
var width = window.innerWidth;
console.log(width);


if (width < 232) {
    hi.innerHTML="HI !";
    
}
else{
    hi.innerHTML="LET's CONNECT!"
}

if (width > 600) {
    hi.innerText="CONTACT ME"
}