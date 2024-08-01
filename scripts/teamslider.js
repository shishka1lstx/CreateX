$(function(){ 
   $('.team__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $('.slider__arrows'),
        nextArrow: $('.nxt-btn'),
        prevArrow: $('.prev-btn'),
        draggable: false,
    })

    $('.testim__slider').slick({
        slidesToShow: 1,
        nextArrow: $('.nxt-btn-tesim'),
        prevArrow: $('.prev-btn-tesim'),
        dots: true,
        appendDots: $('.testim__slider-dots'),
    })
})