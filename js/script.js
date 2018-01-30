$(document).ready(function(){
    
    
    $(window).scroll(function() {
       if($(window).scrollTop()) {
           $('nav').addClass('sticky-bg');
       } 
        else {
            $('nav').removeClass('sticky-bg');
        }
    });
    
    // smooth scroll
    
    var scrollLink = $('.scroll');
    
    scrollLink.click(function(e) {
        e.preventDefault();
        
        $('body,html').animate({
            
            scrollTop: $(this.hash).offset().top
        }, 1000);
       
    });
    
    // active link switching
    
      
       $(window).scroll(function() {
       var scrollLocation = $(this).scrollTop();
        
        scrollLink.each(function() {
           
            var sectionOffset = $(this.hash).offset().top - 20
            
            if( sectionOffset <= scrollLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
            
        });
    });
    
    
    // More Information Button
    var open = false;
    $('#more-info').click(function() {
       if(open == false) {
           $('.profile-information').animate({height: 115});
           $('#more-info').text('Hide Information');
           open = true;
       }
        else {
             $('.profile-information').animate({height: 0}); 
            $('#more-info').text('More Information');
            open = false;
        }
    });
    
    
    
    // MOBILE NAV
     $('#main-nav .logo').click(function() {
        $('#main-nav ul').slideToggle(500);
    });
    
    
   // page slide
    $('#right-arrow').click(function() {
        var currentSlide = $('.slide.current-slide');
        var nextSlide = currentSlide.next();
        
        currentSlide.fadeOut(300).removeClass('current-slide');
        nextSlide.fadeIn(300).addClass('current-slide');
        
        if(nextSlide.length == 0) {
            $('#projects .slide').first().fadeIn(300).addClass('current-slide')
        }
    });
    
    $('#left-arrow').click(function() {

        var currentSlide = $('.slide.current-slide');
        var prevSlide = currentSlide.prev();
        
        currentSlide.fadeOut(300).removeClass('current-slide');
        prevSlide.fadeIn(300).addClass('current-slide');
        
        if(prevSlide.length == 0) {
            $('#projects .slide').last().fadeIn(300).addClass('current-slide');
        }
    });
   
});













