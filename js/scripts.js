  $(document).ready(function() { 

//Owl Carousel Slider Script
$('.owl-carousel').each( function() {
  var $carousel = $(this);
  var $items = ($carousel.data('items') !== undefined) ? $carousel.data('items') : 1;
  var $items_tablet = ($carousel.data('items-tablet') !== undefined) ? $carousel.data('items-tablet') : 1;
  var $items_mobile_landscape = ($carousel.data('items-mobile-landscape') !== undefined) ? $carousel.data('items-mobile-landscape') : 1;
  var $items_mobile_portrait = ($carousel.data('items-mobile-portrait') !== undefined) ? $carousel.data('items-mobile-portrait') : 1;
  $carousel.owlCarousel ({
    loop : ($carousel.data('loop') !== undefined) ? $carousel.data('loop') : true,
    items : $carousel.data('items'),
    margin : ($carousel.data('margin') !== undefined) ? $carousel.data('margin') : 0,
    dots : ($carousel.data('dots') !== undefined) ? $carousel.data('dots') : true,
    nav : ($carousel.data('nav') !== undefined) ? $carousel.data('nav') : false,
    navText : ["", ""],
    autoplay : ($carousel.data('autoplay') !== undefined) ? $carousel.data('autoplay') : false,
    autoplayTimeout : ($carousel.data('autoplay-timeout') !== undefined) ? $carousel.data('autoplay-timeout') : 5000,
    animateIn : ($carousel.data('animatein') !== undefined) ? $carousel.data('animatein') : false,
    animateOut : ($carousel.data('animateout') !== undefined) ? $carousel.data('animateout') : false,
    mouseDrag : ($carousel.data('mouse-drag') !== undefined) ? $carousel.data('mouse-drag') : true,
    autoWidth : ($carousel.data('auto-width') !== undefined) ? $carousel.data('auto-width') : false,
    autoHeight : ($carousel.data('auto-height') !== undefined) ? $carousel.data('auto-height') : false,
    center : ($carousel.data('center') !== undefined) ? $carousel.data('center') : true,
    responsiveClass: true,
    dotsEachNumber: true,
    smartSpeed: 600,
    autoplayHoverPause: true,
    responsive : {
      0 : {
        items : $items_mobile_portrait,
      },
      480 : {
        items : $items_mobile_landscape,
      },
      768 : {
        items : $items,
      },
      992 : {
        items : $items,
      }
    }
  });
  var totLength = $('.owl-dot', $carousel).length;
  $('.total-no', $carousel).html(totLength);
  $('.current-no', $carousel).html(totLength);
  $carousel.owlCarousel();
  $('.current-no', $carousel).html(1);
  $carousel.on('changed.owl.carousel', function(event) {
    var total_items = event.page.count;
    var currentNum = event.page.index + 1;
    $('.total-no', $carousel ).html(total_items);
    $('.current-no', $carousel).html(currentNum);
  });
});

//Masonry Script
  $(window).load(function() {
    var $grid = $('.masonry').isotope ({
      itemSelector: '.masonry-item',
      layoutMode: 'packery',
      percentPosition: true,
      isFitWidth: true,
    });
    var filterFns = {
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    $('.masonry-filters').on('click', 'li a', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
    $('.masonry-filters').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li a', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  });

  //Masonry Script
  $(window).load(function() {
    var $grid = $('.havoc-contact-us .masonry').isotope ({
      itemSelector: '.masonry-item',
      layoutMode: 'packery',
      percentPosition: true,
      isFitWidth: true,
      filter: $('.default-masonry-item').first(),
    });
    var filterFns = {
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
      }
    };
    $('.masonry-filters').on('click', 'li a', function() {
      var filterValue = $(this).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({
        filter: filterValue
      });
    });
    $('.masonry-filters').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'li a', function() {
        $buttonGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  });

//Menu Toggle Script
$(".navbar-toggler").click(function(){
  $(".navbar-toggler").toggleClass("close-menu");
});

 
//Aimation Script
 $('body').waypoint(function() {
    new WOW().init();
  },
  {
    offset: '100%',
    triggerOnce: true,
  });

//Counter Script
$('.count-num').rCounter({
  triggerOnce: false,
 });

 //Hover Animation Script
  $('.team-mate').hover (
    function() {
      $(this).addClass('havoc-hover');
    },
    function() {
      $(this).removeClass('havoc-hover');
    }
  );

   //Hover Animtion Script
  $('.team-mate').hoverdir ({
    hoverElem: '.mate-info'
  });

  //Back Top Script
  var backtop = $('.havoc-back-top');
  var position = backtop.offset().top;
  $(window).scroll(function() {
    var windowposition = $(window).scrollTop();
    if(windowposition + $(window).height() == $(document).height()) {
      backtop.removeClass('active');
    }
    else if (windowposition > 150) {
      backtop.addClass('active');
    }
    else {
      backtop.removeClass('active');
    }
  });
  jQuery('.havoc-back-top a').click(function () {
    jQuery('body,html').animate ({
      scrollTop: 0
    }, 2000);
    return false;
  });

   //mobile footer menu Script
  $('footer .footer-menu').click( function() {
    $(this).toggleClass('block-menu').siblings().removeClass('block-menu').children('ul').slideUp();
    $(this).children('ul').slideToggle();
    });

  //Toggle Class Script
  $(".masonry-filters span").click(function(){
  $(".masonry-filters ul").toggleClass("display");
  });
  //Toggle Class Script
  $(".masonry-filters ul li").click(function(){
  $(".masonry-filters ul").toggleClass("display");
  });

  //Onclick Get Text Script
  $('.masonry-filters ul li').click(function() {
    $('.masonry-filters span').text($(this).text());
  });


  //Toggle Class Script
  $(".navbar-toggler").click(function(){
  $(".menu-listing").toggleClass("active");
  });

  //Preloader Script
  $(window).load(function() {
    $('.havoc-preloader').fadeOut(500);
  });

});
