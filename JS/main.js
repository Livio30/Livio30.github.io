$(document).ready(function(){
    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .project-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });

      let nav_offset_top = $('.header-area').height() + 50;

      function navbarFixed() {
          if ($('.header-area').length) {
              $(window).scroll(function () {
                  let scroll = $(window).scrollTop();
                  if (scroll >= nav_offset_top) {
                      $('.header-area .main-menu').addClass('navbar_fixed');
                  } else {
                      $('.header-area .main-menu').removeClass('navbar_fixed');
                  }
              })
          }
      }
  
      navbarFixed();
});