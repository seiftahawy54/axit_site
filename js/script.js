/*global $*/

$(function () {
    'use strict';

    // Scrolling Bar Opacity

    var myWindow = $(window),
        myNavBar = $(".navbar");

    $(window).scroll(function () {

        if (myWindow.scrollTop() >= myNavBar.height() && !myWindow.hasClass('scrolled')) {
            myNavBar.addClass("scrolled");
        } else {
            myNavBar.removeClass("scrolled");
        }

    });

    // Switching Tabs In Tabs Section

    $(".tab-switch li").on("click", function () {

        // Add Class Active To Links
        $(this).addClass("active").siblings().removeClass("active");

        // Hide All Divs
        $(".tabs .tabs-content > div").slideUp();

        // Show Selected Div
        $($(this).data('class')).slideDown();

    });

});


/* On Page ReLoad */
$(window).on('load', function () {

    'use strict';

    // $("html,body").animate({ scrollTop: 0}, 1000);
});
