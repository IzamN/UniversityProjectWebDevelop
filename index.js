$(window).on('load', function(){
    $('#header').vide('./video/video', {
        bgColor: '#fff'
    })

    const links= document.querySelectorAll('.navigation-list a');
    links.forEach(function(item){
        item.addEventListener('click', function(e){
            links.forEach(function(item){item.classList.remove('active')})
            e.target.classList.add("active")
    })
})
})


$(document).ready(function(){
    $('.navigate__burger').click(function(event){
        $('.navigate__burger,.navigate__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
/*-------------------Slider Reviews ------------------------ */
$(document).ready(function () {
    $(".SliderR").slick({
        infinite: true,
        speed: 300,
        prevArrow: $("#review-prev"),
        nextArrow: $("#review-next"),
        fade: true,
        swipe: false,
        draggable: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });


$(".SliderR").on(
    "afterChange",
    function (ignore, slick, currentSlide) {
        console.log(slick);
        $("#review-number").text("0" + (currentSlide + 1));
    }
);
});