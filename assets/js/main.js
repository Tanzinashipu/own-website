$(document).ready(function () {
    //    banner typed js

    $(".typed").typed({
        strings: ["Web Developers.", "Graphics Designers.", "App developer."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 50,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 100,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });

   

    //    venobox js video part
    $('.venobox').venobox({

    });
    //    number counter js
    $('.number').counterUp({
        delay: 10,
        time: 1500
    });

    // swiper js testimonial
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    //    stickytop menu
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky_top');
        if (scrolling > 100) {
            sticky.addClass('menu_bg');
        } else {
            sticky.removeClass('menu_bg');
        }
    });

    // Add scrollspy to <body>
    $('body').scrollspy({
        target: ".navbar",
        offset: 150
    });

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 2000);
                return false;
            }
        }
    });


    // back back-to-top 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();
        }
    });

    $('.back_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
// animation wow js
     new WOW().init();


     //    preloader js
    $(window).on('load',function(){
        $('#circle3').delay(1500).fadeOut(1500);
    });
      // navbar colspan js
 $(".nav-link").on("click", function(){
   $(".navbar-collapse").collapse("hide");
 });

});