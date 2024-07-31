$(function(){

    var mixer = mixitup('.directions__list');

    $('.directions__btn').on('click', function(){
        $('.directions__btn').removeClass('active')
        $(this).addClass('active')
    })
})


