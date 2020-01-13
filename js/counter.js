/**
 * This file handles the coutning up animations 
 * from the statistics section on the main page.
 */

$(document).ready(function() {

    // keeping track if we already animated or not 
    var animated = false;
   
    // the function that actually animates the elements
    function animateStatistics(time) {
        console.log('Animation function called');
        console.log($('.num').text());
        $('.num').each(function(index) {
            
            //storing the current number we animate so we can 
            // change the nuber's value in the setInterval scope
            var numberToBeAnimated = $(this);

            // the current value of the stat
            var value = 0;

            // getting the value to be animated from each div.num element
            var valueToBeAnimated = parseInt(numberToBeAnimated.text(), 10);
            numberToBeAnimated.text(0);

            // geting the time between count animations 
            var timeBetweenAnimations = time / valueToBeAnimated;
            console.log(timeBetweenAnimations);

            /**
             * Starting a setInterval using @var timeBetweenAnimations 
             * using the @function increaseCounter function
             */

            var intervalID = setInterval(function() {
                // increasing the value of the stat number
                numberToBeAnimated.text(++value);

                // when we reach the actual value we stop animating
                if (value === valueToBeAnimated) {
                    clearInterval(intervalID);
                }
            }, timeBetweenAnimations);
            }
        ); //end of each statement
    }

    /**
     * Listening to scroll event to knwo when to
     * trigger the counterup animation.
     */

    $(document).scroll(function() {
        var topOffset = $(this).scrollTop();
        var statsOffset = $('.title').offset().top;

        // if we scrolled to the correct position animate +- 50 px because javascript
        if (topOffset >= statsOffset) {
            if (!animated) {
                animated = true;
                animateStatistics(3000);
            }

        }
    });
});