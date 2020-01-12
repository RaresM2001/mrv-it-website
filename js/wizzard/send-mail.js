$(document).ready(function(){
    // form submission
    $('#submitBtn').on('click', function(event) {
        //preventing form submission event
        event.preventDefault();

        const firstName = $('#firstName').val();
        const lastNme = $('#lastNme').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const stateRegion = $('#stateRegion').val();
        const city = $('#city').val();
        const projectInfo = $('#projectInfo').val();


        //mail related variables
        const from = firstName + " " + lastNme;
        const basicInfo = email + ", " + phone;
        const location = stateRegion + ", " + city;
        
        //making the request to mailer API
        $.ajax({
            url: 'http://localhost:3000/send_mail',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify({
                "from": from,
                "basicInfo": basicInfo,
                "location": location,
                "description": projectInfo,
                "type": localStorage.projectType
            }),
            success: function(data){
                window.location.replace('https://mrv-it.com/thank-you.html')
            },
            error: function(error){
                window.location.replace('https://mrv-it.com/thank-you.html')
            },
          
        });
    });
});