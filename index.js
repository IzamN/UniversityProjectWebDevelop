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



