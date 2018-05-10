(function($) {
    $('#hero-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        if ($(slick.$slides[currentSlide]).find('.hero-slide').attr('data-font-color') == 'white') {
            $('.main-header').addClass('main-header--light-font');
            $('.main-header').removeClass('main-header--dark-font');
        } else {
            $('.main-header').removeClass('main-header--light-font');
            $('.main-header').addClass('main-header--dark-font');
        }
    });

    $('#hero-slider').on('init', function(event, slick) {
        if ($(slick.$slides[0]).find('.hero-slide').attr('data-font-color') == 'white') {
            $('.main-header').addClass('main-header--light-font');
            $('.main-header').removeClass('main-header--dark-font');
        } else {
            $('.main-header').removeClass('main-header--light-font');
            $('.main-header').addClass('main-header--dark-font');
        }
    });

    $('#hero-slider').slick({
        dots: true,
        arrows: false,
    });

    var timeout;

    $(window).on('scroll', function() {

        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }

        timeout = window.requestAnimationFrame(function() {
            if ($(document).scrollTop() > 100) {
                $('.main-header').addClass('main-header--shrink');
            } else {
                $('.main-header').removeClass('main-header--shrink');
            }
        });
    });

    $('.mobile-nav-trigger').on('click', function(event) {
        $('.main-nav-wrapper').toggleClass('main-nav-wrapper--open');
    });

    $('.main-nav__link--has-subnav').each(function(index) {
        $(this).on('click', function() {
            console.log('click');
            $(this).next().stop().slideToggle();
        });
    });
})(jQuery)
