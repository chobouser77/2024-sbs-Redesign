// 헤더
<<<<<<< HEAD
$(document).ready(function () {
  $(".top-bar__menu01>ul>li").mouseenter(function () {
=======
$(document).ready(function() {
  // pc 상단바
  $(".pc-top-bar__menu01>ul>li").mouseenter(function(){
>>>>>>> 999a4f80875490235c4112f93500fcdabd469e0d
    $(".pc-top-bar").addClass("on");
    $(".pc-top-bar .logo-color").addClass("on");
    $(".pc-top-bar__user-menu a").addClass("on");
  });
<<<<<<< HEAD
  $(".top-bar__menu01>ul>li").mouseleave(function () {
=======
  $(".pc-top-bar__menu01>ul>li").mouseleave(function(){
>>>>>>> 999a4f80875490235c4112f93500fcdabd469e0d
    $(".pc-top-bar").removeClass("on");
    $(".pc-top-bar .logo-color").removeClass("on");
    $(".pc-top-bar__user-menu a").removeClass("on");
  });

  // tablet 상단바
  $(".sidemenu-btn-open").click(function(){
    $(".top-ad-bar").addClass("on");

    $(".tablet-top-bar .container").addClass("on");
    $(".tablet-top-bar .logo-color").addClass("on");
    $(".tablet-top-bar__user-menu a").addClass("on");
    $(".sidemenu-btn-open").addClass("on");
    $(".sidemenu-btn-close").addClass("on");

    $(".tablet-side-bar").addClass("on");
  });

  $(".sidemenu-btn-close").click(function(){
    $(".top-ad-bar").removeClass("on");

    $(".tablet-top-bar .container").removeClass("on");
    $(".tablet-top-bar .logo-color").removeClass("on");
    $(".tablet-top-bar__user-menu a").removeClass("on");
    $(".sidemenu-btn-open").removeClass("on");
    $(".sidemenu-btn-close").removeClass("on");

    $(".tablet-side-bar").removeClass("on");
  });

  // tablet 사이드바
  $(".tablet-side-bar__menu01>ul>li").click(function(){
    $(".sidemenu-bg-full").addClass("on");

    $(".tablet-side-bar__menu02").addClass("on");
  });

  $(".tablet-side-bar__menu01>ul").click(function(){
    setTimeout(function() {
      $(".tablet-side-bar__menu02").addClass("fast-animate");
    }, 1000);
  });
});

// 푸터
$(document).ready(function () {
  const open_close = $(".oc");

  open_close.click(function () {
    const submenu = $(this).next(".sub-box");
    const arrowUp = $(this).find(".arrow-up");
    const arrowDown = $(this).find(".arrow-down");

    if (submenu.hasClass("active")) {
      open_close.removeClass("active");
      submenu.removeClass("active");
      arrowDown.removeClass("active");
      arrowUp.removeClass("active");

      submenu.css("height", "0");
    } else {
      open_close.addClass("active");
      submenu.addClass("active");
      arrowDown.addClass("active");
      arrowUp.addClass("active");

      const subHeight = submenu.get(0).scrollHeight;
      submenu.css("height", subHeight + "px");
    }
  });
  $(".sub-box").css("height", "0");
});

// 메인
$(document).ready(function () {
  const cursor = document.querySelector(".custom-cursor");
  const mask = document.querySelector(".mask"); // .hover-area를 .mask로 변경

  document.addEventListener("mousemove", (e) => {
    // 커서의 중앙을 맞추기 위해 마우스 위치에서 커서 크기의 절반을 빼줍니다.
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`; // 커서의 중앙을 맞추기 위해
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`; // 커서의 중앙을 맞추기 위해
    cursor.style.display = "block"; // 커서를 보이게 함
  });

  mask.addEventListener("mouseenter", () => {
    // .hover-area를 .mask로 변경
    cursor.style.transform = "scale(10.0)"; // 커서를 1.5배로 확대
  });

  mask.addEventListener("mouseleave", () => {
    // .hover-area를 .mask로 변경
    cursor.style.transform = "scale(1)"; // 커서를 원래 크기로 복원
  });
});

// 스와이퍼
$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 12,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar",
    },
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});
