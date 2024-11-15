$(document).ready(function () {
  $(" body").css("overflow-x", "hidden");
});
// 헤더
// 상단바
$(window).on("scroll", function () {
  const pcHeader = $("#pc-header");
  const tabletHeader = $("#tablet-header");

  if ($(window).scrollTop() > 200) {
    pcHeader.addClass("scrolled");
    tabletHeader.addClass("scrolled");
  } else {
    pcHeader.removeClass("scrolled");
    tabletHeader.removeClass("scrolled");
  }
});

// pc 상단바
$(document).ready(function () {
  $(".pc-top-bar__menu01>ul>li").mouseenter(function () {
    $(".pc-top-bar").addClass("on");
    $(".pc-top-bar .logo-color").addClass("on");
    $(".pc-top-bar__user-menu a").addClass("on");
  });
  $(".pc-top-bar__menu01>ul>li").mouseleave(function () {
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
  $(".tablet-side-bar__menu > ul > li").click(function () {
    const $this = $(this);

    if ($this.hasClass("on")) {
      $this.removeClass("on");
    } else {
      $this.siblings(".on").removeClass("on");
      $this.addClass("on");
    }
  });

  $(".tablet-side-bar__menu > ul > li > ul").click(function () {
    return false;
  });

  $(".tablet-side-bar__menu > ul > li > ul > li > ul").click(function () {
    return false;
  });

  function TabletSideMenu__inactiveAll() {
    $(".tablet-side-bar__menu .on").removeClass("on");
  }

  // tablet 사이드바 3차메뉴
  $(".tablet-side-bar__menu > ul > li > ul > li").click(function () {
    const $this = $(this);
    const $ul = $this.children("ul");

    if ($this.hasClass("on")) {
      $ul.stop().slideUp(600);
      $this.removeClass("on");
    } else {
      $ul.stop().slideDown(600);
      $this.siblings(".on").removeClass("on").children("ul").stop().slideUp();
      $this.addClass("on");
    }
  });

  // 모바일 사이드바
  $(".sidemenu-btn-open").click(function () {
    $(".mobile-side-bar").addClass("on");

    $("html").addClass("mobile-side-bar-actived");
  });

  $(".sidemenu-btn-close").click(function () {
    $(".mobile-side-bar").removeClass("on");

    $("html").removeClass("mobile-side-bar-actived");

    TabletSideMenu__inactiveAll();
  });

  // 모바일 사이드메뉴
  $(".mobile-side-bar__menu > ul > li").click(function () {
    const $this = $(this);

    if ($this.hasClass("on")) {
      $this.removeClass("on");
    } else {
      $this.siblings(".on").removeClass("on");
      $this.addClass("on");
    }
  });

  // 모바일 사이드메뉴 - 2차메뉴
  $(".mobile-side-bar__menu > ul > li > ul > li").click(function () {
    const $this = $(this);
    const $ul = $this.children("ul");

    if ($this.hasClass("on")) {
      $ul.stop().slideUp(600);
      $this.removeClass("on");
    } else {
      $ul.stop().slideDown(600);
      $this.siblings(".on").removeClass("on").children("ul").stop().slideUp();
      $this.addClass("on");
    }

    if ($this.is(":first-child")) {
      $(".mobile-side-bar__menu > ul > li").removeClass("on");
    }
  });

  $(".mobile-side-bar__menu > ul > li > ul").click(function () {
    return false;
  });

  $(".mobile-side-bar__menu > ul > li > ul > li > ul").click(function () {
    return false;
  });
});

// 플로팅 버튼
$(document).ready(function () {
  $(".quick-btn").click(function () {
    window.location.href = "custom.html";
  });

  $(".quick-btn__top").click(function (event) {
    event.stopPropagation();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

// 푸터
$(document).ready(function () {
  const open_close = $(".oct");

  open_close.click(function () {
    const submenu = $(this).next(".sub-box");
    const arrowUp = $(this).find(".arrow-up");
    const arrowDown = $(this).find(".arrow-down");

    if (submenu.hasClass("active")) {
      $(this).removeClass("active");
      submenu.removeClass("active");
      arrowDown.removeClass("active");
      arrowUp.removeClass("active");

      submenu.css("height", "0");
    } else {
      $(this).addClass("active");
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
    cursor.style.mixBlendMode = "difference"; // mix-blend-mode 설정
  });

  mask.addEventListener("mouseleave", () => {
    // .hover-area를 .mask로 변경
    cursor.style.transform = "scale(1)"; // 커서를 원래 크기로 복원
    cursor.style.mixBlendMode = "normal"; // mix-blend-mode 초기화
  });

  function adjustBoxHeight() {
    var boxWidth = $(".img-area").width();
    console.log("Box Width: " + boxWidth); // width 값 확인

    var boxHeight;
    if ($(window).width() > 768) {
      boxHeight = (boxWidth - 12) / 2;
    } else {
      boxHeight = boxWidth * 2 + 12;
    }

    console.log("Box Height: " + boxHeight); // height 값 확인
    $(".img-area").height(boxHeight);
  }

  adjustBoxHeight(); // 페이지 로드 시 높이 조정

  $(window).resize(function () {
    console.log("Window resized"); // 창 크기 조정 시 호출 확인
    adjustBoxHeight();
  });
});

// 섹션 5 스와이퍼
$(document).ready(function () {
  var swiper;
  var resizeTimeout;

  function initSwiper() {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: false,
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
    const swiper1 = new Swiper(".swiper-box-1 .swiper", {
      slidesPerView: "auto",
      spaceBetween: 12,
      // freeMode: true,
      scrollbar: {
        el: ".swiper-box-1 .swiper-scrollbar",
      },
      mousewheel: true,
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

// masonry
$(document).ready(function () {
  // /반스 pc 시작/;
  const $masonryBox1 = $(".masonry-box-1__main");

  $masonryBox1.masonry({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: ".masonry-box-1__item",
    // use element for option
    percentPosition: true,
  });

  $masonryBox1.imagesLoaded().progress(function () {
    $masonryBox1.masonry("layout");
  });
  // /반스 pc 끝/;

  // /반스 모바일 시작/;

  // /반스 모바일 끝/;
});

// 커스텀
$(document).ready(function () {
  const pink_h = $(".pink-hover");
  const bear_h = $(".bear-hover");
  const bears = $(".bears");
  const s2bg = $(".cu-s2");
  const svg_font = $(".svg-font");
  const svg_black = $(".svg-black");
  const font = $(".s2font > a");

  bear_h.mouseover(function () {
    s2bg.css("background-color", "white");
    bears.css("display", "flex");
    svg_black.css("display", "none");
    svg_font.css("display", "flex");
    font.css({ "background-color": "#1d1d1d", color: "#fff" });
  });
  pink_h.mouseover(function () {
    s2bg.css("background-color", "#FFA3CD");
    bears.css("display", "none");
    svg_black.css("display", "flex");
    svg_font.css("display", "none");
    font.css({ "background-color": "#fff", color: "#EC2F86" });
  });

  // 섹션 3 애니메이션
  function nextBox(boxClass) {
    const $abc = $(boxClass + " > .active");

    // 다음 요소 찾기
    const $next =
      $abc.next().length > 0 ? $abc.next() : $(boxClass + " > img:first-child");

    $abc.removeClass("active");
    $next.addClass("active");
  }

  // 호출 예시
  function changebox() {
    let boxIndex = 0;

    function changeBoxSequence() {
      if (boxIndex === 0) {
        nextBox(".s3ani-1");
      } else if (boxIndex === 1) {
        nextBox(".s3ani-7");
      } else if (boxIndex === 2) {
        nextBox(".s3ani-9");
      }

      // 박스 순차 변경
      boxIndex = (boxIndex + 1) % 3;
      setTimeout(changeBoxSequence, 1000);
    }

    changeBoxSequence(); // 최초 실행
  }

  changebox();
});
