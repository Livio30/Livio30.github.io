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
            console.log(nav_offset_top);
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
    let screen_width = $(window).width();
    $(window).resize(function() {
        screen_width = $(window).width();
        // console.log('window was resized');
        console.log(screen_width);
        if(screen_width < 670)
        {
            $('.site-main .project-area .button-group').addClass('custom-flex');
            // $('.site-main .service-area .container').addClass('justify-content-center');
            $('.site-main .project-area .button-group button').addClass('p-0');
        }else{
            $('.site-main .project-area .button-group').removeClass('custom-flex');
            $('.site-main .project-area .button-group button').removeClass('p-0');
        }
    });
});