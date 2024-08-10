$(function(){ 
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let slidShow = 4;
    if(vw <= 431){slidShow = 1;}
          
   $('.team__slider').slick({
        
        slidesToShow: slidShow,
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