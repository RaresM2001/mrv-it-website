/**
 * This file handles the coutning up animations 
 * from the statistics section on the main page.
 */

$(document).ready(function() {

    // keeping track if we already animated or not 
    var animated = false;
    // getting the valueToBeAnimated and converting to int in base 10
    var valueToBeAnimated = parseInt($('.num').text(), 10);
    // setting the displayed text to 0
    $('.num').text(0);

    // the function that actually animates the elements
    function animateStatistics(time) {
        // the current value of the stat
        var value = 0;
        // time between count animations 
        var timeBetweenAnimations = time / valueToBeAnimated;

        /**
         * Starting a setInterval using @var timeBetweenAnimations 
         * using the @function increaseCounter function
         */

        var intervalID = setInterval(function() {
            // increasing the value of the stat number
            $('.num').text(++value);

            // when we reach the actual value we stop animating
            if (value === valueToBeAnimated) {
                clearInterval(intervalID);
            }
        }, timeBetweenAnimations);
    }

    /**
     * Listening to scroll event to knwo when to
     * trigger the counterup animation.
     */

    $(document).scroll(function() {

        var topOffset = $(this).scrollTop();
        var statsOffset = $('#statistics-section').offset().top;

        // if we scrolled to the correct position animate +- 50 px because javascript
        if (topOffset == statsOffset || topOffset <= statsOffset + 50 &&
            topOffset >= statsOffset + -50) {
            if (!animated) {
                animated = true;
                animateStatistics(2000);
            }

        }
    });

});