jQuery(document).ready(function($){

    // $(".my-progress-bar").circularProgress({
    //     line_width: 6,
    //     height : "90px",
    //     width : "90px",
    //     color: "#FF4600",
    //     starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
    //     percent: 0, // percent starts from
    //     percentage: true,
    // }).circularProgress('animate', 80, 2000);

    // Animate on scroll jQuery plugin
    AOS.init({
        disable: function() {
            var maxWidth = 767;
            return window.innerWidth < maxWidth;
        }
    });

    // responsive menu
    $('#menu').slicknav();

    $('select').niceSelect();

    // homepage-slides
	// $(".homepage-slides").owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	nav: true,
	// 	dots: false,
    //     autoplay: false,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	// });

    // $("#range_49").ionRangeSlider({
    //     type: "single",
    //     min: 150,
    //     max: 250,
    //     from: 200,
    //     to: 250,
    //     prefix: "£",
    //     step: 1,
    //     onFinish: function(data) {
    //         maxValue = data.from;
    //         alert("Your Value: " + maxValue);
    //     }
    // });


    // $(".logo-carousel-wrap").owlCarousel({
    //     items: 5,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         580: {
    //             items: 3,
    //             margin: 3,
    //             nav: false
    //         },
    //         720: {
    //             items: 4,
    //             margin: 3,
    //             nav: false
    //         },
    //         960: {
    //             items: 5
    //         },
    //         1140: {
    //             items: 6
    //         }

    //     }
    // });

    // $(".feature-carousel-wrap").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 0,
    //             nav: false
    //         },
    //         481: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         720: {
    //             items: 3,
    //             margin: 15,
    //             nav: false
    //         },
    //         960: {
    //             items: 3,
    //             margin: 25,
    //         },
    //         1140: {
    //             items: 4
    //         }

    //     }
    // });

    $(".single-accordion").on("click", function(){
        $(".single-accordion").removeClass("active");
        $(this).addClass("active");
    });


    $(".header-search span").on("click", function(){
        $(".search-box, .close-btn, .header-search span").addClass("active");
    });
    $(".close-btn").on("click", function(){
        $(".search-box, .close-btn, .header-search span").removeClass("active");
    });

    // PopUp JS
	$(".popup-link1").magnificPopup({
		type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    // Sticky Header with smooth animation
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 300) {
            $('.header-area').addClass('fixed');
        } else {
            $('.header-area').removeClass('fixed');
        }
    })


    // Scroll To Top starts
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollTop').addClass('scrollBtn');
        } else {
            $('.scrollTop').removeClass('scrollBtn');
        }
    });
    $(".scrollTop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    }); // click() scroll top ENDS

     //jQuery for portfolio section
    //  $(".portfolio-filter button").on('click', function(){

    //     $(".portfolio-filter button").removeClass("is-checked");
    //     $(this).addClass("is-checked");


    //     var selector =  $(this).attr("data-filter");

    //     $(".grid").isotope({
    //         filter: selector,
    //     });

    // });

    // //jQuery for isotope
    // $(".grid").isotope({
    //     type: 'image'
    // });

    // portfolio isotope js
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.single-portfolio-item'
    });
    var $filterButtons = $('.filters .button');
    updateFilterCounts();
    // store filter for each group
    var filters = {};
    $('.filters').on( 'click', '.button', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[ filterGroup ] = $this.attr('data-filter');
        // combine filters
        var filterValue = concatValues( filters );
        // set filter for Isotope
        $grid.isotope({ filter: filterValue });
        updateFilterCounts();
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });
    // flatten object by concatting values
    function concatValues( obj ) {
        var value = '';
        for ( var prop in obj ) {
            value += obj[ prop ];
        }
        return value;
    }
    function updateFilterCounts()  {
        // get filtered item elements
        var itemElems = $grid.isotope('getFilteredItemElements');
        var $itemElems = $( itemElems );
        $filterButtons.each( function( i, button ) {
            var $button = $( button );
            var filterValue = $button.attr('data-filter');
            if ( !filterValue ) {
                // do not update 'any' buttons
                return;
            }
            var count = $itemElems.filter( filterValue ).length;
            $button.find('.filter-count').text( '(' + count +')' );
        });
    }
  

    // Services page
    // single service page sidebar
    $(".sidebar-open").on("click", function(){
        $(".sidebar, .close-btn, .sidebar-open").addClass("show-sidebar");
    });
    $(".close-btn").on("click", function(){
        $(".sidebar, .close-btn, .sidebar-open").removeClass("show-sidebar");
    });
    
    

});