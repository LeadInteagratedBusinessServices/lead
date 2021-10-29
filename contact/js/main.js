
(function($) {

   'use strict'


/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/
// makes sure the whole site is loaded
 $(window).on("load",function() {
        // will first fade out the loading animation
     $("#preloader").fadeOut();
        // will fade out the whole DIV that covers the website.
     $("#status").fadeOut(9000);
})
/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/
$(window).scroll(function(){
    if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
    {
        if ($(window).scrollTop() >= 50 ) {
            $('.ttm-stickable-header').addClass('fixed-header');
            $('.ttm-stickable-header').addClass('visible-title');
        }
        else {

            $('.ttm-stickable-header').removeClass('fixed-header');
            $('ttm-stickable-header').removeClass('visible-title');
            }
    }
});
/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/
$('ul li:has(ul)').addClass('has-submenu');
    $('ul li ul').addClass('sub-menu');


    $("ul.dropdown li").on({

        mouseover: function(){
           $(this).addClass("hover");
        },  
        mouseout: function(){
           $(this).removeClass("hover");
        }, 
    });
    var $menu = $('#menu'), $menulink = $('#menu-toggle-form'), $menuTrigger = $('.has-submenu > a');
    $menulink.on('click',function (e) {

        $menulink.toggleClass('active');
        $menu.toggleClass('active');
    });

    $menuTrigger.on('click',function (e) {
        e.preventDefault();
        var t = $(this);
        t.toggleClass('active').next('ul').toggleClass('active');
    });
    $('ul li:has(ul)');
})(jQuery);
