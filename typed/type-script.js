$(document).ready(function() {
    var typed = new Typed('.type-animation', {
        strings: ["design", "code", 'test it.'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    var secondTyped = new Typed('.second-type', {
        strings: ["CMSs", "SPAs", 'shopify stores', 'online brands'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });
});