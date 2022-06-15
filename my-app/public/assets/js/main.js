!(function ($) {
   'use strict';

   // Back to top button
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.back-to-top').fadeIn('slow');
      } else {
         $('.back-to-top').fadeOut('slow');
      }
   });

   $('.back-to-top').click(function () {
      $('html, body').animate(
         {
            scrollTop: 0,
         },
         1500,
         'easeInOutExpo'
      );
      return false;
   });

   // Porfolio isotope and filter
   $(window).on('load', function () {
      var portfolioIsotope = $('.portfolio-container').isotope({
         itemSelector: '.portfolio-item',
      });

      $('#portfolio-flters li').on('click', function () {
         $('#portfolio-flters li').removeClass('filter-active');
         $(this).addClass('filter-active');

         portfolioIsotope.isotope({
            filter: $(this).data('filter'),
         });
         aos_init();
      });

      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function () {
         $('.venobox').venobox({
            share: false,
         });
      });
   });
})(jQuery);
