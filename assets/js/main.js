$(document).ready(function($){
    "use strict";
    $("[data-background").each(function(){
        $(this).css("background-image", "url(" + $(this).attr("data-background")+")")
     });
    
    $(".pharmacy").owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        dots:true,
        center:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items:3
          }
    
        }
      });
        $(".complain").owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        dots:true,
        autoplay:false,
        // autoPlay: 3000;
        // autoplayTimeout:1500,
        // autoplayHoverPause:false,

        responsive:{
          0:{
            items:3
          },
          600:{
            items:3
          },
          1000:{
            items:5
          }
    
        }
      });
      /* 
* Single
*/

     new SlimSelect({
      select: "#request"
      });
      new SlimSelect({
      select: '#disease'
      });
 

}(jQuery));
