$(function () {

  /* ===== NAVBAR SCROLL ===== */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('#navbar').addClass('scrolled');
      $('#scrollTop').addClass('show');
    } else {
      $('#navbar').removeClass('scrolled');
      $('#scrollTop').removeClass('show');
    }
  });

  /* ===== SMOOTH SCROLL NAV ===== */
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 70 }, 600);
      $('.navbar-collapse').collapse('hide');
    }
  });

  /* ===== SCROLL TO TOP ===== */
  $('#scrollTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* ===== AOS INIT ===== */
  AOS.init({ duration: 700, once: true, offset: 60 });

  /* ===== COUNTER ANIMATION ===== */
  function animateCounter() {
    $('.counter').each(function () {
      const $el = $(this);
      const target = parseInt($el.data('target'));
      $({ count: 0 }).animate({ count: target }, {
        duration: 1800,
        easing: 'swing',
        step: function () { $el.text(Math.ceil(this.count).toLocaleString()); },
        complete: function () { $el.text(target.toLocaleString()); }
      });
    });
  }

  let counterDone = false;
  $(window).on('scroll', function () {
    if (!counterDone && $('#stats').length) {
      const statsTop = $('#stats').offset().top;
      if ($(this).scrollTop() + $(this).height() > statsTop) {
        counterDone = true;
        animateCounter();
      }
    }
  });

  /* ===== FAQ ACCORDION ===== */
  $('.faq-question').on('click', function () {
    const $answer = $(this).next('.faq-answer');
    const isOpen = $answer.hasClass('open');
    $('.faq-answer').removeClass('open');
    $('.faq-question').removeClass('active');
    if (!isOpen) {
      $answer.addClass('open');
      $(this).addClass('active');
    }
  });

  /* ===== BEFORE AFTER TABS ===== */
  $('.ba-tabs .nav-link').on('click', function () {
    $('.ba-tabs .nav-link').removeClass('active');
    $(this).addClass('active');
  });

  /* ===== BOOKING WA ===== */
  $('.btn-wa, .btn-cta-wa').on('click', function (e) {
    const href = $(this).attr('href');
    if (!href || href === '#') {
      e.preventDefault();
      Swal.fire({
        title: 'Booking Uncle Clean Shoes',
        html: `<p style="color:#555;font-size:0.9rem">Klik tombol di bawah untuk langsung chat via WhatsApp</p>`,
        icon: 'success',
        confirmButtonText: '💬 Chat WhatsApp',
        confirmButtonColor: '#25D366',
        showCancelButton: true,
        cancelButtonText: 'Nanti dulu',
      }).then(r => {
        if (r.isConfirmed) window.open('https://wa.me/62NOMORANDA?text=Halo+Uncle+Clean+Shoes,+saya+mau+booking+cuci+sepatu', '_blank');
      });
    }
  });

  /* ===== ACTIVE NAV HIGHLIGHT ===== */
  $(window).on('scroll', function () {
    const scrollPos = $(this).scrollTop() + 80;
    $('section[id]').each(function () {
      const top = $(this).offset().top;
      const bottom = top + $(this).outerHeight();
      const id = $(this).attr('id');
      if (scrollPos >= top && scrollPos < bottom) {
        $('.nav-link').removeClass('active-nav');
        $(`.nav-link[href="#${id}"]`).addClass('active-nav');
      }
    });
  });

});
