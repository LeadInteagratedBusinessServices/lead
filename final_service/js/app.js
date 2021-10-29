(function($) {
  "use strict";

  
  $(window).on('load', addNewClass);

  function addNewClass() {
    $('body').imagesLoaded().done(function(instance) {
      $('body').addClass('loaded');
    }); 
  }

  /*-------------------------------------
  Intersection Observer
  -------------------------------------*/
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-animation");
          //entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -100px 0px"
    });
    document.querySelectorAll('.has-animation').forEach(block => {
      observer.observe(block)
    });
  } else {
    document.querySelectorAll('.has-animation').forEach(block => {
      block.classList.remove('has-animation')
    });
  }

  /*-------------------------------------
  Anchor Tag - Prevent Default
  -------------------------------------*/
  $('a[href=\\#]').on('click', function(e) {
    e.preventDefault();
  });

})(jQuery);