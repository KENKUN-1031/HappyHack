$(function($){
    // switcher
    $('.bg-switcher').bgSwitcher({
        images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true,
    });
    // fadein
    $(window).scroll(function (){
        $(".fadein").each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    });
});