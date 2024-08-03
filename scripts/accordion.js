$(function(){
    
    $('.program__acc-link').on('click', function(e){
        // $(this).toggleClass('program__acc-link--active')
        // $(this).children('.program__acc-text').slideToggle()
        e.preventDefault()
        if( $(this).hasClass('program__acc-link--active')){
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        }
        else{
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-link').children('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })
})