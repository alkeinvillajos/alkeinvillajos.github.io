$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    $('.id-container').css({'transform' : 'translate(0px, '+ wScroll / 10 +'%)'});



    if(wScroll > $('.skill-pics').offset().top - ($(window).height() / 1.5)) {
        
        $('.skill-pics figure').each(function(figure){
            setTimeout(function(){
            $('.skill-pics figure').eq(figure).addClass('is-showing');
            }, 150 * (figure+1));
        });
    }

    if(wScroll > $('.skill-pics').offset().top - ($(window).height() / 2)) {
        
        $('.design-slider img.SIimage1').addClass('slide-now1');
        $('.design-slider img.SIimage2').addClass('slide-now2');
          
    }


    if(wScroll > $('.skill-pics-photography').offset().top - ($(window).height() / 1.5)) {
        
        $('.skill-pics-photography figure').each(function(ii){
            setTimeout(function(){
            $('.skill-pics-photography figure').eq(ii).addClass('show');
            }, 150 * (ii+1));
        });
    }


    if(wScroll > $('.skill-pics-photography').offset().top - ($(window).height() / 1.5)) {
        
        $('.polaroid-container img').each(function(iii){
            setTimeout(function(){
            $('.polaroid-container img').eq(iii).addClass('slide-in');
            }, 250 * (iii+1));
        });
    }

    if(wScroll > $('.content-container').offset().top - ($(window).height() / 1.7)) {
        
        $('.content-container div').each(function(div){
            setTimeout(function(){
            $('.content-container div').eq(div).addClass('place-down');
            }, 150 * (div+1));
        });
    }
});

$(document).ready(function() {
    $("img.gallery").click(function() {
      var src = $(this).attr("src");


      if (!$("#light-box").length > 0) {
        $("body").append("<div id='light-box'><span class='close'><strong>X</strong></span><img src='' class='gallery'></div>");
        $("#light-box").show();
       $("#light-box img").attr("src", src);
      } else {
        $("#light-box").show();
        $("#light-box img").attr("src", src);
      }


    });
    $("body").on("click", "#light-box span", function() {
      $("#light-box").hide();
    });
  });
