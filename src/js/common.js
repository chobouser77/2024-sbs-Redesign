// 헤더
$(document).ready(function () {
  $(".top-bar__menu01>ul>li").mouseenter(function () {
    $(".pc-top-bar").addClass("on");
    $(".pc-top-bar .logo-color").addClass("on");
    $(".pc-top-bar__user-menu a").addClass("on");
  });
  $(".top-bar__menu01>ul>li").mouseleave(function () {
    $(".pc-top-bar").removeClass("on");
    $(".pc-top-bar .logo-color").removeClass("on");
    $(".pc-top-bar__user-menu a").removeClass("on");
  });

  // tablet 상단바
  $(".sidemenu-btn-open").click(function () {
    $(".top-ad-bar").addClass("on");

    $(".tablet-top-bar .container").addClass("on");
    $(".tablet-top-bar .logo-color").addClass("on");
    $(".tablet-top-bar__user-menu a").addClass("on");
    $(".sidemenu-btn-open").addClass("on");
    $(".sidemenu-btn-close").addClass("on");

    $(".tablet-side-bar").addClass("on");

    $("html").addClass("tablet-side-bar-actived");
  });

  $(".sidemenu-btn-close").click(function () {
    $(".top-ad-bar").removeClass("on");

    $(".tablet-top-bar .container").removeClass("on");
    $(".tablet-top-bar .logo-color").removeClass("on");
    $(".tablet-top-bar__user-menu a").removeClass("on");
    $(".sidemenu-btn-open").removeClass("on");
    $(".sidemenu-btn-close").removeClass("on");

    $(".tablet-side-bar").removeClass("on");

    $("html").removeClass("tablet-side-bar-actived");

    TabletSideMenu__inactiveAll();
  });

  // tablet 사이드바 1차메뉴 효과
  $(".tablet-side-bar__menu > ul  li").click(function () {
    const $this = $(this);

    $this.addClass("on");
    $this.siblings(".on").removeClass("on");
  });

  // tablet 사이드바
  $(".tablet-side-bar__menu01>ul>li").click(function () {
    $(".sidemenu-bg-full").addClass("on");

    //   // $(".tablet-side-bar__menu02").addClass("on");
    // });

    $(".tablet-side-bar__menu01>ul").click(function () {
      setTimeout(function () {
        $(".tablet-side-bar__menu02").addClass("fast-animate");
      }, 1000);
    });

    $(".tablet-side-bar__menu > ul > li > ul > li").click(function () {
      const $this = $(this);

      if ($this.hasClass("on")) {
        $this.removeClass("on");
      } else {
        $this.siblings(".on").removeClass("on");
        $this.addClass("on");
      }
    });

    $(".tablet-side-bar__menu > ul > li > ul > li > ul").click(function () {
      return false;
    });

    function TabletSideMenu__inactiveAll() {
      $(".tablet-side-bar__menu .on").removeClass("on");
    }
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

    function adjustBoxHeight() {
      // box의 너비를 가져옴
      var boxWidth = $(".img-area").width();

      if ($(window).width() >= 778) {
        // 스크롤바 제외 768px 이상일 때
        var boxHeight = (boxWidth - 12) / 2; // 높이를 너비의 절반에서 12px 뺀 값으로 설정
      } else {
        // 스크롤바 제외 768px 미만일 때
        var boxHeight = boxWidth * 2 + 12; // 높이를 너비의 2배에 12px 더한 값으로 설정
      }
      // box의 높이를 설정
      $(".img-area").height(boxHeight);
    }
    adjustBoxHeight(); // 페이지 로드 시 높이 조정

    $(window).resize(function () {
      adjustBoxHeight(); // 창 크기 조정 시 높이 재조정
    });
  });
});

// 스와이퍼
$(document).ready(function () {
  var swiper;
  var resizeTimeout;

  function initSwiper() {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 12,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "progressbar",
      },
      loop: $(window).width() >= 1200, // 1200px 이상일 때만 loop 활성화
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }

  // 초기 Swiper 생성
  initSwiper();

  // 화면 크기 변경 감지하여 Swiper 재설정
  $(window).resize(function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      if (swiper) swiper.destroy(true, true); // 기존 Swiper 인스턴스 제거
      initSwiper(); // 새로운 Swiper 인스턴스 생성
    }, 300); // 300ms 지연으로 resize 이벤트가 여러 번 호출되는 문제 방지
  });
});
