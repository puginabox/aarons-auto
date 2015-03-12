jQuery(document).ready(function ($) {
    $('body').plusAnchor({
        easing: 'easeInOutExpo',
        offsetTop: -20,
        speed: 1000,
        onInit: function (base) {

            if (base.initHash != '' && $(base.initHash).length > 0) {
                window.location.hash = 'hash_' + base.initHash.substring(1);
                window.scrollTo(0, 0);

                $(window).load(function () {

                    timer = setTimeout(function () {
                        $(base.scrollEl).animate({
                            scrollTop: $(base.initHash).offset().top
                        }, base.options.speed, base.options.easing);
                    }, 2000); // setTimeout

                }); // window.load
            }; // if window.location.hash

        }
    });
});