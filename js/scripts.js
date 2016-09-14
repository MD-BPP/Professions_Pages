//------------------------------------------------------
// Cookie Scripts
//------------------------------------------------------

$(document).ready(function() {
    $.cookie("visited");
     
        if ($.cookie("visited") != "true") {
            $.cookie('visited', 'true');
        // Menu opening script for devices over 400px
            if ( $(window).width() > 400 ) {
                    $("nav").css("margin-left", "0px").delay(1000).animate({"margin-left": "-300px"}, 250);
                    $(".wrapper").delay(500).animate({"left":"0"}, 250);
            }
            //Menu open script for small devices
            else {
                    $("nav").css("left", "0").delay(500).animate({"left": "-100%"}, 250);
            }
        };
        
        //console.log($.cookie("visited"));
});






//------------------------------------------------------
// MENU SCRIPTS
//------------------------------------------------------


$(document).ready(function() {
    // Menu opening script for devices over 400px
    if ( $(window).width() > 400 ) {        
            $("header #hamburger").click(function() {
                if ( $("body > nav").hasClass("open") ) {
                    $("body > nav").stop().animate({"margin-left":"-300px"}, 250);
                    $("body > header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                    $(".wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                } else {
                    $("body > nav").stop().animate({"margin-left":"0px"}, 250);
                    $("body > header").stop().css("min-width", "100vw").animate({"margin-left":"300px"}, 250);
                    $(".wrapper").stop().css("min-width", "100vw").animate({"left":"300px"}, 250);
                }
                $("nav, #hamburger").toggleClass("open");
                return false;
            });

            $(".wrapper").click(function() {  
                $("body > nav").stop().animate({"margin-left":"-300px"}, 250);
                $("body > header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                $(".wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                $("body > nav, #hamburger").removeClass("open");
            });
    }
    //Menu open script for small devices
    else {        
            $("header #hamburger").click(function() {
                if ( $("body > nav").hasClass("open") ) {
                    $("body > nav").css("margin-left", "0").stop().animate({"left": "-100%"}, 250);
                    $("body > header, .wrapper").stop().animate({"left": "0"}, 250);
                } else {
                    $("body > nav").css("margin-left", "0").stop().animate({"left": "0"}, 250);
                    $("body > header, .wrapper").stop().animate({"left": "0"}, 250);
                }
                $("body > nav, #hamburger").toggleClass("open");
                return false;
            });
    }
});






//------------------------------------------------------
// Mobile Orientation Reload
//------------------------------------------------------
window.onorientationchange = function() { 
    var orientation = window.orientation; 
        switch(orientation) { 
            case 0: window.location.reload(); 
            break; 
            case 90: window.location.reload(); 
            break; 
            case -90: window.location.reload(); 
            break; } 
};







//------------------------------------------------------
// Footer Menu scripts
//------------------------------------------------------

$(document).ready(function() {
   $("footer nav > ul > li > a").click(function(e){
       
        if( $(this).siblings().size() > 0 ) {
            e.preventDefault();    
        };
        
        $("footer nav").css("margin-left", "0");
       
      if ( $(this).parent("li").hasClass("footOpen") ) {
          $("li.footOpen").animate("height");
          $(this).siblings("ul").css("display", "none");
          $(this).parent("li").removeClass("footOpen");
      } 
       else {
          $(this).parent("li").addClass("footOpen");
          $("li.footOpen").animate("height");
          $(this).siblings("ul").css("display", "flex");
       }
   });
   $("footer .more").click(function(e){
      e.preventDefault();
       
      if ( $("footer nav").hasClass("footOpen") ) {
          $("footer nav > ul").css("display", "none");
          $("footer nav").removeClass("footOpen");
          $(this).removeClass("footOpen");
      } 
       else {
          $("footer nav > ul").css("display", "flex");
          $("footer nav").addClass("footOpen");
          $(this).addClass("footOpen");
       }
   });
});







//------------------------------------------------------
// Section Header Menu scripts
//------------------------------------------------------
   $("section header .more").click(function(e){
      e.preventDefault();
       
      if ( $(this).parents(".header-menu").siblings(".more-info").hasClass("open") ) {
          $(this).parents(".header-menu").siblings(".more-info").css("display", "none");
          $(this).parents(".header-menu").siblings(".more-info").removeClass("open");
          $(this).removeClass("open");
      } 
       else {
          $(this).parents(".header-menu").siblings(".more-info").css("display", "block");
          $(this).parents(".header-menu").siblings(".more-info").addClass("open");
          $(this).addClass("open");
       }
   });







//------------------------------------------------------
// Card footer Menu scripts
//------------------------------------------------------
   $(".card footer .card-more").click(function(e){
      e.preventDefault();
       
      if ( $(this).parents(".card-footer-menu").siblings(".card-more-info").hasClass("card-open") ) {
          $(this).parents(".card-footer-menu").siblings(".card-more-info").css("display", "none");
          $(this).parents(".card-footer-menu").siblings(".card-more-info").removeClass("card-open");
          $(this).removeClass("card-open");
      } 
       else {
          $(this).parents(".card-footer-menu").siblings(".card-more-info").css("display", "block");
          $(this).parents(".card-footer-menu").siblings(".card-more-info").addClass("card-open");
          $(this).addClass("card-open");
       }
   });







//------------------------------------------------------
// Unslider scripts
//------------------------------------------------------
jQuery(document).ready(function($) {
			$('.slider').unslider({
				autoplay:false,
				nav: false,
				arrows: true
			});
		});








//------------------------------------------------------
// On page scroll
//------------------------------------------------------

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});








//------------------------------------------------------
// Task Tab Indexing
//------------------------------------------------------

$(document).ready(function(){
   var start = 999;

    $('.task-nav li').each(function(i){
      $(this).css('z-index', start--);
        var boxes = $(".task-nav li");
        boxes.click(function(event) {
            var el = $(this), 
                max = 0;

            boxes.each(function() {

                //--- If a previous state is found, restore it
                if($(this).data("original-index")){
                    $(this).css("z-index", $(this).data("original-index"));
                }
                var z = parseInt( $( this ).css( "z-index" ), 10 );
                max = Math.max( max, z );
            });

            //--- save the clicked element previous z-index
            el.data("original-index", el.css("z-index"));
            el.css("z-index", max + 1 );
        });
    });
    
    $('.tab-group li a').click(function() {
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
    });
    
});








//------------------------------------------------------
// Tabbed navigation section change
//------------------------------------------------------

$(document).ready(function() { 
    
    $(".section-wrapper > div").css("display", "none");
    $(".section-wrapper > div:first-child").css("display", "block");
    
    $(".section-nav li a, .task-nav li a").click(function(event) {
        var  sectionIndex = $(this).parent().index();
        event.preventDefault();
        
        $(this).closest("div").children(".section-wrapper").children("div:nth-child(" + (sectionIndex+1) + ")").css("display", "block").siblings().css("display", "none");
    });
});







//------------------------------------------------------
// Validation
//------------------------------------------------------


//jQuery Validation Boot
$(document).ready(function() {
    $(".form-container").validate();
    $("#phone").intlTelInput({
        preferredCountries: ["gb"],
        utilsScript: "https://s3-eu-west-1.amazonaws.com/bppassets/public/assets/js/utils.js",
        customPlaceholder: "Telephone Number"
    }),
    $("form").submit(function() {
        $("#hidden-phone").val($("#phone").intlTelInput("getNumber"))
    })
    $(".telPhoneNum, .selected-flag").focus(function(){
        $(".intl-tel-input").siblings("label").css({"max-height":"18px", "color":"#4a4a4a"})
    })
    $(".telPhoneNum, .selected-flag").focusout(function(){
        $(".intl-tel-input").siblings("label").css({"max-height":"0", "color":"transparent"})
    })
});











//------------------------------------------------------
// International Phone Numbers
//------------------------------------------------------


$(document).ready(function(){
  $("#phone").intlTelInput({
    preferredCountries: ["gb"],
    utilsScript: "https://s3-eu-west-1.amazonaws.com/bppassets/public/assets/js/utils.js",
  });
  $("form").submit(function() {
    $("#hidden-phone").val($("#phone").intlTelInput("getNumber"));
  });
});