/**
 * TYPING ANIMATION SCIRPT 
 * This script simply animates all the typing effects
 * on this website.
 */

$(document).ready(function() {
    var typed = new Typed('.type-animation', {
        strings: ["design", "code", 'deploy your app.'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});