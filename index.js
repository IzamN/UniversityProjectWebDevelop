

$(document).ready(function(){

    const links= document.querySelectorAll('.navigation-list a');
    links.forEach(function(item){
        item.addEventListener('click', function(e){
            links.forEach(function(item){item.classList.remove('active')})
            e.target.classList.add("active")
    })
    })

    $('.navigate__burger').click(function(event){
        $('.navigate__burger,.navigate__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    const teamNovisible=document.querySelector('.team').querySelectorAll('.novisible');
    const btnTeam=document.querySelector('.btn-team')
    btnTeam.addEventListener('click', function(e){
        e.preventDefault(); 
        if (btnTeam.innerText==='Вся команда') {
            btnTeam.innerText="Часть команды"
            teamNovisible.forEach((item)=>{
                item.classList.remove('none');
            })
        }
        else {
            btnTeam.innerText="Вся команда"
                teamNovisible.forEach((item)=>{
                    item.classList.add('none');
                })
            }
    })


    const casesNovisible=document.querySelector('.cases').querySelectorAll('.novisible');
    const btnCases=document.querySelector('.btn-cases')
    console.log(btnCases)
    btnCases.addEventListener('click', function(e){

        e.preventDefault(); 
        if (btnCases.innerText==='Все кейсы') {
            btnCases.innerText="Часть кейсов"
            casesNovisible.forEach((item)=>{
                item.classList.remove('none');
            })
        }
        else {
            btnCases.innerText="Все кейсы"
            casesNovisible.forEach((item)=>{
                    item.classList.add('none');
                })
            }
    })


})
$(document).ready(function(){

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

    $("#Cslider1").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
           {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $("#Cslider2").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
           {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $(".accordion div:first").addClass("active");
    $(".accordion p:not(:first)").hide();
    $(".accordion h3").click(function () {
        if (!$(this).parent().hasClass("active")) {
            $(".accordion p:visible").slideUp("fast");
            $(this).next("p").slideToggle("fast");
            $(".accordion div").removeClass("active");
            $(this).parent().toggleClass("active");
        } else {
            $(this).next("p").slideUp("fast");
            $(this).parent().removeClass("active");
        }
    });
});

