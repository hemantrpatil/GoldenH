(function($) {
    "use strict";
    
    $('.form--control').on('click',function(){
        $(this).children('.sSelect').toggleClass('down  up');
    });
    
    $('.post_carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        dots: true,
        items:1,
        autoplayHoverPause: true,
        autoplaySpeed:1000,
        nav:false,
        dotsSpeed:1000,
        smartSpeed:700,
    });
    $('.post_carousel2').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        dots: true,
        items:1,
        autoplayHoverPause: true,
        autoplaySpeed:1000,
        smartSpeed:700,
        nav:true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dotsSpeed:1000
    });
    
     function SelectFirst(SelVal) {
       var arrSelVal = SelVal.split(",")
       if (arrSelVal.length > 1) {
         Valuetoselect = arrSelVal[0];
         document.getElementById("select1").value = Valuetoselect;
       }
     }
    
/* ---------------------------------------------
navigation
--------------------------------------------- */
	$("#navigation1").navigation({
		offCanvasSide: "left",
        mobileBreakpoint: 991,
	});
    
    $('.offcanvas_btn').on('click',function(){
        $('.single_canvas').toggleClass('open close');
    });
    $('.canvas_cancel').on('click',function(){
        $('.single_canvas').addClass('close');
        $('.single_canvas').removeClass('open');
    });
   

    $('.social_share').on('click',function(){
        $(this).children('.social_poup').slideToggle();
    });
    

})(jQuery);
