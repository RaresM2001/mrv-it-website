$(document).ready(function() {

    var mailRequestData = {};

    // selecting a project type
    $('.card').on('click', function() {
        // toggleing selected class
        $('.card').removeClass('selected');
        $(this).addClass('selected');
        
        //storging the user input 
        localStorage.projectType = $(this).attr('data-target');
        // console.log(localStorage.projectType);
        
        // redirecting
        setInterval(function() {
            window.location.replace('http://127.0.0.1:5500/form.html')
        }, 500);
    });
});