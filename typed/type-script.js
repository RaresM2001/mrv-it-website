$(document).ready(function() {
    var typed = new Typed('.type-animation', {
        strings: ["design", "code", 'test your app.'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    var secondTyped = new Typed('.second-type', {
        strings: ["CMSs", "SPAs", 'shopify stores', 'online brands'],
        typeSpeed: 55,
        backSpeed: 55,
        loop: true
    });
});