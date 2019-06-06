$(document).ready(function() {
    var logo = document.getElementById('logo-img');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 600) {
        $(".mrv-navbar").addClass("solid");
        
        logo.src = 'images/logos/mrv_albastru_negru.png';
        alert('bum')
      } else {
        $(".mrv-navbar").removeClass("solid");
        logo.src = 'images/logos/mrv_alb_negru.png';
      }
    });

    $('.fa-times-circle').on('click', function() {
      $('#navigation').fadeOut();
    });

    $('.fa-bars').on('click', function() {
      $('#navigation').fadeIn();
    });
  });