$(document).ready(function() {

    var mailRequestData = {};

    // selecting a project type
    $('.card').on('click', function() {
        // toggleing selected class
        $('.card').removeClass('selected');
        $(this).addClass('selected');
        
        //storging the user input 
        localStorage.projectType = $(this).attr('data-target');
        
        // redirecting
        setInterval(function() {
            //console.log(window.localtion.href);
            window.location.href = 'form.html';
        }, 500);
    });
});