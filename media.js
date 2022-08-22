var $windowsize = $(window).width();
var $hi = $('#id');
$(window).resize(function() {
    var windowsize = $(window).width();
    
    if (windowsize < 232) {
        $('#hi').html('HI !');
    }
    
    else{
        $('#hi').html("LET'S CONENCT");
    }
});

