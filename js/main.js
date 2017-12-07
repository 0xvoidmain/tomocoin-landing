function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function keyPressEmail(e, id) {
  if (e.keyCode == 13) {
    submitEmail(id);
    e.preventDefault();
  }
}

function submitEmail(id) {
  var email = $(id + " input").val();
  if (!validateEmail(email)) {
    $(id + ' .alert-error').show();
    $(id + ' .alert-success').hide();
    $(id + ' .email-form').show();
  }
  else {
    $.ajax({
      url: 'https://api.tomoapp.vn/api/v1/subscribers/ico/create',
      type: "POST",
      data: {
        email: email
      },
      success: function () {
        $(id + ' .alert-error').hide();
        $(id + ' .alert-success').show();
        $(id + ' .email-form').hide();

        fbqtrack('track', 'CompleteRegistration');
        ga('send', 'event', 'home_email_submit', 'submit_email', 'email');
      },
      error: function (e) {
        $(id + ' .alert-error').show();
        $(id + ' .alert-success').hide();
        $(id + ' .email-form').show();
      },
    });
  }
}


$(document).ready(function () {
  //------------------------------------//
  //Navbar//
  //------------------------------------//
  var menu = $('.navbar');
  $(window).bind('scroll', function (e) {
    if ($(window).scrollTop() > 140) {
      if (!menu.hasClass('mini')) {
        menu.addClass('mini');
      }
    } else {
      if (menu.hasClass('mini')) {
        menu.removeClass('mini');
      }
    }
  });

  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 50}, 800);
  });

  $('.videos-slider').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    waitForAnimate: true,
    infinite: false,
    initialSlide: 1,
    mobileFirst: true
  });

  wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true        // trigger animations on mobile devices (true is default)
    }
  );
  wow.init();



  $("#video1, #video2, #video3").videoPopup({
    autoplay: 1,
    controlsColor: 'white',
    showVideoInformations: 0,
    width: 1000
  });

});
