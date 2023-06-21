$(document).ready(function() {

    function toggleSidebar() {
      $(".button").toggleClass("active");
      $("#main").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
    }
  
    $(".button").on("click tap", function() {
      toggleSidebar();
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        toggleSidebar();
      }
    });
    /* slick slider */
    $("#main__content__carousel").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      fade: false,
      centerMode: true,
      variableWidth: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('#main__content__carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $(".slick-arrow").removeClass("slick-arrow-animated");
    });
    $('#main__content__carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $(".slick-arrow").addClass("slick-arrow-animated");
    });
    $("#main__header--mobile").slick({
            infinite: true,
            dots: false,
            arrows: false,
            variableWidth: false,
            autoplay: true,
            autoplaySpeed: 2000,
      
    });

    
    $('.slick-prev').click(function(){
      $('#main__content__carousel').slick('slickPrev');
    })
    $('.slick-next').click(function(){
      $('#main__content__carousel').slick('slickNext');
    })
    
    
    /* slick slider */
    const body = document.querySelector('body');
    const toggle = document.querySelector('#toggle');
    
    toggle.addEventListener('change', () => {
      body.classList.toggle('dark');
      document.querySelector('#rewards').src = body.classList.contains('dark') ? "./img/rewards-white.png" : "./img/rewards.png"
      document.querySelector('#rewards').srcset = body.classList.contains('dark') ? "./img/rewards-white-600.png 600w, ./img/rewards-white-900.png 900w, ./img/rewards-white-1200.png 1200w" : "./img/rewards-600.png 600w, ./img/rewards-900.png 900w, ./img/rewards-1200.png 1200w"
    });
  });