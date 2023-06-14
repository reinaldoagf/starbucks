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

    $("#main__content__carousel").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      fade: false,
      centerMode: true,
      variableWidth: true
    });

    const body = document.querySelector('body');
    const toggle = document.querySelector('#toggle');
    
    toggle.addEventListener('change', () => {
      body.classList.toggle('dark');
    });
  });