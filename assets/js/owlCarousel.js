$(function () {
    $('.mobile-owl').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: false,
        responsive: {
            200:{
                items:1
            },
            300:{
                items:2
            },
            400:{
                items:3
            },
            550:{
                items:3
            },
            700:{
                items:3
            },
            992:{
                items:5
            },
            1400:{
                items:7
            }
        }
    })
})