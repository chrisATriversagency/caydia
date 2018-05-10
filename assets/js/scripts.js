(function($) {
    $('#hero-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        if ($(slick.$slides[currentSlide]).find('.hero-slide').attr('data-font-color') == 'white') {
            $('.main-header').addClass('main-header--light-font');
        } else {
            $('.main-header').removeClass('main-header--light-font');
        }
    });

    $('#hero-slider').on('init', function(event, slick) {
        if ($(slick.$slides[0]).find('.hero-slide').attr('data-font-color') == 'white') {
            $('.main-header').addClass('main-header--light-font');
        } else {
            $('.main-header').removeClass('main-header--light-font');
        }
    });

    $('#hero-slider').slick({
        dots: true,
        arrows: false,
    });

    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 100) {
            $('.main-header').addClass('main-header--shrink');
        } else {
            $('.main-header').removeClass('main-header--shrink');
        }
    });
})(jQuery)
