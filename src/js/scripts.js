const slider = tns({
  container: '.carousel__inner',
  items: 1,
  autoplay: true,
  mouseDrag: true,
  nav: true,
  navPosition: 'bottom',
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    1200: {
      nav: false,
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

(function($) {
  $(function() {
  
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    const toggleClass = function (item) {
      $(item).each(function(i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
          })
      })
    };

    toggleClass('.catalog-item__link');
    toggleClass('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_catalog').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });

    //Validation
    const validate = function (form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
        },
        messages: {
          name: {
            required: "Поле имени необходимо для ввода!",
            minlength: jQuery.validator.format('Имя должно содержать как минимум {0} символа')
          },
          phone: {
            required: "Поле телефона необходимо для ввода!"
          },
          email: {
            required: "Поле электронной почты неоходимо для ввода!",
            email: "Некоректный формат электронной почты"
          }
        }
      });
    }

    validate('#consultation form');
    validate('#consultation-form')
    validate('#order form')

    //Masked input

    $('input[name=phone]').mask('9 (999) 999-99-99')



  });
})(jQuery);
