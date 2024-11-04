// 헤더
$(document).ready(function() {
  $(".top-bar__menu01>ul>li").mouseenter(function(){
    $(".pc-top-bar").addClass("on");
    $(".pc-top-bar .logo-color").addClass("on");
    $(".top-bar__user-menu a").addClass("on");
  });
  $(".top-bar__menu01>ul>li").mouseleave(function(){
    $(".pc-top-bar").removeClass("on");
    $(".pc-top-bar .logo-color").removeClass("on");
    $(".top-bar__user-menu a").removeClass("on");
  });

});
  


// 푸터
$(document).ready(function() {
  const open_close = $('.oc');

  open_close.click(function(){
    const submenu = $(this).next('.sub-box');
    const arrowUp = $(this).find('.arrow-up'); 
    const arrowDown = $(this).find('.arrow-down');

    if(submenu.hasClass('active')){
      open_close.removeClass('active');
      submenu.removeClass('active');
      arrowDown.removeClass('active');
      arrowUp.removeClass('active');

      submenu.css('height','0');
    }
    else {
      open_close.addClass('active');
      submenu.addClass('active');
      arrowDown.addClass('active');
      arrowUp.addClass('active');
      
      const subHeight = submenu.get(0).scrollHeight;
      submenu.css('height', subHeight + 'px');
    }
  });
  $('.sub-box').css('height', '0');
});


// 메인 
$(document).ready(function() {
  const cursor = document.querySelector('.custom-cursor');
  const mask = document.querySelector('.mask'); // .hover-area를 .mask로 변경

  document.addEventListener('mousemove', (e) => {
      // 커서의 중앙을 맞추기 위해 마우스 위치에서 커서 크기의 절반을 빼줍니다.
      cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`; // 커서의 중앙을 맞추기 위해
      cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`; // 커서의 중앙을 맞추기 위해
      cursor.style.display = 'block'; // 커서를 보이게 함
  });

  mask.addEventListener('mouseenter', () => { // .hover-area를 .mask로 변경
      cursor.style.transform = 'scale(10.0)'; // 커서를 1.5배로 확대
  });

  mask.addEventListener('mouseleave', () => { // .hover-area를 .mask로 변경
      cursor.style.transform = 'scale(1)'; // 커서를 원래 크기로 복원
  });
});



