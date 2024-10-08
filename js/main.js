(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
                $('nav').css('border-radius', '00px 00px 00px 00px');
            } else {
                $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
                $('nav').css('border-radius', '20px 20px 00px 00px');
            }
        } else {
            $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
            $('nav').css('border-radius', '00px 00px 00px 00px');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });



    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });



    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400, 'easeInOutExpo');
        return false;
    });

    //--clients
    if (document.querySelector(".logos-slide")) {
        var copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector(".logo-slider").appendChild(copy);
        //--clients revs 
        var copy = document.querySelector(".logos-slide-rev").cloneNode(true);
        document.querySelector(".logo-slider-rev").appendChild(copy);
    }

    //-----side bar
    document.addEventListener('DOMContentLoaded', function() {
        var sidebar = document.getElementById('sidebar');
        var header = document.getElementById('header-section');
        var footer = document.getElementById('footer-section');
    
        // Observer options to detect intersection
        var observerOptions = {
            root: null, // Use the viewport as the root
            threshold: 0.6 // Trigger when at least 1% of the header or footer overlaps
        };
    
        // Observer callback to hide the sidebar on overlap
        function hideSidebarOnOverlap(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Hide the sidebar when the header or footer is intersecting
                    sidebar.style.opacity = '0';
                    sidebar.style.pointerEvents = 'none';
                } else {
                    // Show the sidebar when there is no overlap
                    sidebar.style.opacity = '1';
                    sidebar.style.pointerEvents = 'all';
                }
            });
        }
    
        // Create observers for both the header and footer
        var headerObserver = new IntersectionObserver(hideSidebarOnOverlap, observerOptions);
        var footerObserver = new IntersectionObserver(hideSidebarOnOverlap, observerOptions);
    
        // Observe the header and footer for overlap with the sidebar
        headerObserver.observe(header);
        footerObserver.observe(footer);
    });
})(jQuery);