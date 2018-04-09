$(document).ready(function(){

  $('#slides').superslides({
    animation: 'fade',
    play: 4000,
    pagination: false
  });

  const typed = new Typed(".typed",{
    strings: ["Web Developer.", "Software Engineer."],
    typeSpeed: 70, loop: true, startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      items: 4,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
            items:4
          }
      }
  });


  // Used to ensure chart percentage shows as users scroll down website to see skills section
  const skillsTopOffset = $(".skillsSection").offset().top;
  const statsTopOffset = $(".statsSection").offset().top;
  const countUpFinished = false;

  $(window).scroll(function(){
    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
        $('.chart').easyPieChart({
      easing: 'easeInOut',
      barColor: '#fff',
      trackColor: false,
      scaleColor: false,
      lineWidth: 4,
      size: 152,
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
    }

    // Code is ran when count up is not true
    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      // jQuery for Counter to count up
      $(".counter").each(function(){
        let element = $(this);
        let endVal = parseInt(element.text());
        element.countup(endVal);
      })

      countUpFinished = true;
    }

  });


});
