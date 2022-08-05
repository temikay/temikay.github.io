window.onscroll = function() {
    scrollFunction();
    
    };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('nav').style.top='0';
        document.getElementById('scrollToTop').style.opacity='10';
    }
    else{
        document.getElementById('nav').style.top='-50px';
        document.getElementById('scrollToTop').style.opacity='0';
    }
}


// var myID = document.getElementById('nav');
//             var Scroll =  function() {
//                 var y = window.scrollY();
//                 if (y >= 100) {
//                     myID.style.visibility='visible';
//                 } else{
//                     myID.style.visibility='hidden';
//                 }

//             };

//             window.addEventListener('scroll', Scroll);