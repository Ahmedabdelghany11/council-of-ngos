$(document).ready(function () {
  const menuIconBox = document.querySelector(`header .container .menu-icon`);
  const menuIcon = document.querySelector(`header .container .menu-icon img`);
  const navMenu = document.querySelector(`header .container .navList`);
  const userBox = document.querySelector(`header .container .user-info`);
  const userMenu = document.querySelector(
    `header .container .user-info .user-menu`
  );
  const dateInput = document.querySelector(
    `.org-register-page .org-register-container .org-register-form .form-section .section-form-body .form-inputs-container .input-group input[type=date]`
  );
  const dateIcon = document.querySelector(
    `.org-register-page .org-register-container .org-register-form .form-section .section-form-body .form-inputs-container .input-group .dateIcon`
  );
  const loginPasswordInput = document.querySelector(
    `.login-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group [type="password"]`
  );
  const loginPasswordIcon = document.querySelector(
    `.login-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group .passwordIcon`
  );
  const registerPasswordInput = document.querySelector(
    `.register-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group [type="password"]`
  );
  const registerPasswordIcon = document.querySelector(
    `.register-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group .passwordIcon`
  );
  const resetPasswordInput = document.querySelector(
    `.reset-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.reset-password [type="password"]`
  );
  const resetPasswordIcon = document.querySelector(
    `.reset-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.reset-password .passwordIcon`
  );
  const confirmResetPasswordInput = document.querySelector(
    `.auth-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.confirm-password [type="password"]`
  );
  const confirmResetPasswordIcon = document.querySelector(
    `.reset-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.confirm-password .passwordIcon`
  );
  const registerForm = document.querySelectorAll(
    `.auth-page .auth-container .auth-form-container .auth-form`
  );

  // toggle opening the nav menu
  menuIconBox?.addEventListener("click", function () {
    if (navMenu?.classList.contains("open")) {
      navMenu.classList.remove("open");
      menuIcon.src = "assets/menu-close.png";
    } else {
      navMenu.classList.add("open");
      menuIcon.src = "assets/menu-open.png";
    }
  });

  // toggle opening the user menu
  userBox?.addEventListener("click", function () {
    if (userMenu?.classList.contains("open")) {
      userMenu.classList.remove("open");
    } else {
      userMenu.classList.add("open");
    }
  });

  // open the date input by clicking the icon
  dateIcon?.addEventListener("click", function () {
    dateInput.focus();
  });

  // toggle showing password at register
  registerPasswordIcon?.addEventListener("click", function () {
    if (registerPasswordInput?.getAttribute("type") === "text") {
      registerPasswordInput.setAttribute("type", "password");
    } else if (registerPasswordInput?.getAttribute("type") === "password") {
      registerPasswordInput.setAttribute("type", "text");
    }
  });

  // toggle showing password at login
  loginPasswordIcon?.addEventListener("click", function () {
    if (loginPasswordInput?.getAttribute("type") === "text") {
      loginPasswordInput.setAttribute("type", "password");
    } else if (loginPasswordInput?.getAttribute("type") === "password") {
      loginPasswordInput.setAttribute("type", "text");
    }
  });

  // toggle showing password at reset
  resetPasswordIcon?.addEventListener("click", function () {
    console.log(resetPasswordInput);
    if (resetPasswordInput?.getAttribute("type") === "text") {
      resetPasswordInput.setAttribute("type", "password");
    } else if (resetPasswordInput?.getAttribute("type") === "password") {
      resetPasswordInput.setAttribute("type", "text");
    }
  });

  // toggle showing confirm password at reset
  confirmResetPasswordIcon?.addEventListener("click", function () {
    if (confirmResetPasswordInput?.getAttribute("type") === "text") {
      confirmResetPasswordInput.setAttribute("type", "password");
    } else if (confirmResetPasswordInput?.getAttribute("type") === "password") {
      confirmResetPasswordInput.setAttribute("type", "text");
    }
  });

  // register forms wizards
  let currentRegisterFormWizard = 1;
  $(
    ".register-page .auth-container .auth-form-container .register-form"
  )?.hide();
  $(".register-page #form-" + currentRegisterFormWizard).css("display", "flex");

  $(`.register-page #form-1 span.btn`).click(function () {
    $(".register-page #form-" + currentRegisterFormWizard).hide();
    if (
      currentRegisterFormWizard + 1 <=
      $(`.register-page .auth-container .auth-form-container .register-form`)
        .length
    ) {
      currentRegisterFormWizard++;
      $(".register-page #form-" + currentRegisterFormWizard).css(
        "display",
        "flex"
      );
    }
  });

  $(`.register-page #form-2 .back-link`).click(function () {
    $(".register-page #form-" + currentRegisterFormWizard).hide();
    if (currentRegisterFormWizard - 1 >= 1) {
      currentRegisterFormWizard--;
      $(".register-page #form-" + currentRegisterFormWizard).css(
        "display",
        "flex"
      );
    }
  });

  // org register form wizards
  let currentORGRegisterFormWizard = 1;
  $(".org-register-page .org-register-container .org-register-form").hide();
  $(".org-register-page #form-" + currentORGRegisterFormWizard).css(
    "display",
    "flex"
  );

  $(
    `.org-register-page .org-register-container .org-register-form span.btn`
  )?.click(function () {
    $(".org-register-page #form-" + currentORGRegisterFormWizard).hide();
    if (
      currentORGRegisterFormWizard + 1 <=
      $(`.org-register-page .org-register-container .org-register-form`).length
    ) {
      currentORGRegisterFormWizard++;
      $(".org-register-page #form-" + currentORGRegisterFormWizard).css(
        "display",
        "flex"
      );
    } else {
      $(".org-register-page #form-" + currentORGRegisterFormWizard).css(
        "display",
        "flex"
      );
    }
  });

  $(
    `.org-register-page .org-register-container .org-register-form .back-link`
  )?.click(function () {
    $(".org-register-page #form-" + currentORGRegisterFormWizard).hide();
    if (currentORGRegisterFormWizard - 1 >= 1) {
      currentORGRegisterFormWizard--;
      $(".org-register-page #form-" + currentORGRegisterFormWizard).show();
    }
  });

  const mainSlider = new Swiper(".mainSlider", {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    speed: 500,
    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainSliderPrev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const partenerSwiper = new Swiper(".partnersSlider", {
    slidesPerView: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
    },
  });

  var newsSwiper = new Swiper(".swiper.news-content", {
    navigation: {
      nextEl: ".NewsNext",
      prevEl: ".NewsPrev",
    },
    loop: true,
    spaceBetween: 12,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
});
