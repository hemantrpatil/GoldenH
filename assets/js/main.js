(function($) {
    "use strict";
 $(document).ready(function() {
     
/* ---------------------------------------------
Slick Slider
--------------------------------------------- */
        $(".hero_slider").slick({
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            pauseOnDotsHover: true,
            fade: true,
            prevArrow: '<button class="PrevArrow"></button>',
            nextArrow: '<button class="NextArrow"></button>',
            draggable: 'true',
            arrows: true,
        });
        
$('.nav-search').on('click', function(){
    $('.nav-search').addClass('current');
    $(this).addClass('current');
});

/* ---------------------------------------------
navigation
--------------------------------------------- */
    $('.offcanvas_btn').on('click',function(){
        $('.single_canvas').toggleClass('open close');
    });
    $('.canvas_cancel').on('click',function(){
        $('.single_canvas').addClass('close');
        $('.single_canvas').removeClass('open');
    });

     
/* ---------------------------------------------
image settings
--------------------------------------------- */
    $(".slider_img, .svc_img, .media-content-img").each(function() {
    var thesrc = $(this).attr('src'); 
    $(this).parent().css("background", "url("+thesrc+")");  
    $(this).parent().css("background-position", "center");  
    $(this).parent().css("background-size", "cover");  
    $(this).parent().css("background-repeat", "no-repeat");  

    $(this).hide();
    });
     
          
/* ---------------------------------------------
masonry
--------------------------------------------- */
    // init Isotope
    var $grid = $('.service_masonry ');
    if($grid.length){
    $grid.isotope({});
    $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');

    });        
          }
/* ---------------------------------------------
Image Lightbox
--------------------------------------------- */
    var venobox = $('.venobox')
    if (venobox.length) {
        $('.venobox').venobox();
    }
/* ---------------------------------------------
Imanice selecthtbox
--------------------------------------------- */
    $('select').niceSelect();

/* ---------------------------------------------
 Carousel sliders
--------------------------------------------- */
    $('.testimonial__wrapper').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: false,
        smartSpeed: 1200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.testimonial__wrapper__1').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: false,
        smartSpeed: 1200,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }); 
    
    $('.client_wrapper').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1800,
        autoplayTimeout: 1500,
        margin:150,
        responsive:{
           0:{
            items:2,
            margin: 0,
            },
           480:{
            items:3,
               margin: 30,
            },
            767:{
                items:4,
                margin: 100,
            },
            992:{
                items:5,
                margin:100,
            },
             1201:{
                items:5,
            } 
        }
    });  
    
    
/* ---------------------------------------------
        Start Map
--------------------------------------------- */
     
var form = {

    init: function(){
        $('input[type="checkbox"], input[type="radio"]').each(form.customReplace);
        $('.radio.replace').on('click', form.customRadio);
        $('.checkbox.replace').on('click', form.customCheckbox);
        $('.wrap label').on('click', function(e){
            e.preventDefault();
            $(this).siblings('span').trigger('click');
        });
    },
 
    customReplace: function(){      
        var $elm = $(this),
            type = $(this).attr('type'),
            status = '';
        if ($elm.is(':checked')) {
            status = 'checked';
        }
        $elm.hide().before('<span class="' + status + ' ' + type + ' replace"></span>');
    },
    
    
    customCheckbox: function(){
        if (!$(this).hasClass('checked')) {
            $(this).siblings('input').trigger('click').attr('checked', true);
        } else {
            $(this).siblings('input').attr('checked', false);
        }
        $(this).toggleClass('checked');
    }

};

form.init();
     
    
/* ---------------------------------------------
        Start Map
--------------------------------------------- */
        var map = $('#google_map');
        var myCenter = new google.maps.LatLng(40.712784, -74.005941);

        function initialize() {
                var mapProp = {
                    center: myCenter,
                    zoom: 13,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [{
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#444444"
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "lightness": 45
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "visibility": "on"
                        }]

                    }]
                };
                var map = new google.maps.Map(document.getElementById("google_map"), mapProp);
                var marker = new google.maps.Marker({
                    position: myCenter,
                    animation: google.maps.Animation.BOUNCE,
                    icon: 'assets/images/map_marker_blue.png'
                });
                var infowindow = new google.maps.InfoWindow({
                    content: "united-states"
                });
                marker.setMap(map);
            }
            //    google.maps.event.addDomListener(window, 'load', initialize);  
        if (map.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    
    });
})(jQuery);