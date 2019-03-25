$(document).ready(function () {
    //init new controller
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: '#card1',
        triggerHook: 0.7,
        reverse: false
    }).setClassToggle('#card1', 'fade-in')
        .addTo(controller);

    setTimeout(function () {
        var scene = new ScrollMagic.Scene({
            triggerElement: '#card2',
            triggerHook: 0.7,
            reverse: false
        }).setClassToggle('#card2', 'fade-in')

            .addTo(controller);
    }, 300);

    setTimeout(function () {
        var scene = new ScrollMagic.Scene({
            triggerElement: '#card3',
            triggerHook: 0.7,
            reverse: false
        }).setClassToggle('#card3', 'fade-in')

            .addTo(controller);
    }, 500);

    setTimeout(function () {
        var scene = new ScrollMagic.Scene({
            triggerElement: '#card4',
            triggerHook: 0.7,
            reverse: false
        }).setClassToggle('#card4', 'fade-in')

            .addTo(controller);
    }, 800);

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#laptop',
        triggerHook: 0.4,
        reverse: false
    }).setClassToggle('#laptop', 'fade-in')
        .addTo(controller);

    var titleScene = new ScrollMagic.Scene({
        triggerElement: '#contactTitle',
        triggerHook: 0.6,
        reverse: false

    }).setClassToggle('#contactTitle', 'fade-in-text')
        .addTo(controller);

    var pScene = new ScrollMagic.Scene({
        triggerElement: '#contactP',
        triggerHook: 0.7,
        reverse: false

    }).setClassToggle('#contactP', 'fade-in-text')
      .addTo(controller);

});