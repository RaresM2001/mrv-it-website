
$(document).ready(function () {
    var logo = document.getElementById('logo-img');
    // INITILIZE WIHT WHITE COLOR
    $("#logo").addClass('white');
    $(".fa-bars").addClass('white');

    $("#nav").animate({
        backgroundColor: "red"
    }, 1500);

    // animating the navigation list
    $('.fa-bars').on('click', function() {
        // alert("cLICK")
        $('#nav-list').animate({
            'left': '0'
        }, 500);
    });

    $('.fa-times-circle').on('click', function() {
        // alert("cLICK")
        $('#nav-list').animate({
            'left': '-500px'
        }, 500);
    });

    $('.under-title').fadeIn(4000);
   
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#nav").addClass('solid');
            // LOGO
            logo.src = 'images/logos/mrv_albastru_negru.png';
            // BARS
            $(".fa-bars").removeClass('white');
            $(".fa-bars").addClass('black');
        } else {
            $("nav").removeClass("solid");
            logo.src = 'images/logos/mrv_alb_negru.png';
            // BARS
            $(".fa-bars").removeClass('black');
            $(".fa-bars").addClass('white');
            //
        }
    });
});

