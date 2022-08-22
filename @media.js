var hi = document.getElementById("hi");
var width = window.innerWidth;
console.log(width);


if (width < 232) {
    hi.innerHTML="HI !";
    $('#hi').html('HI !')
    
}
else{
    hi.innerHTML="LET's CONNECT!"
}

if (width > 600) {
    hi.innerText="CONTACT ME";
    $('#hi').html('CONTACT ME !')
}

function des(){
    var text = document.getElementById('des');
    var title = document.getElementById('des').title;

    title.width='20px';
    return false;
}