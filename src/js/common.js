// 헤더
$(document).ready(function() {
  $(".top-bar__menu01>ul>li").mouseenter(function(){
    $(".pc-top-bar").addClass("on");
    $(".pc-top-bar .logo-color").addClass("on");
    $(".top-bar__user-menu a").addClass("on");
    $(".top-bar__menu02-bg").addClass("on");
  });
  $(".top-bar__menu01>ul>li").mouseleave(function(){
    $(".pc-top-bar").removeClass("on");
    $(".pc-top-bar .logo-color").removeClass("on");
    $(".top-bar__user-menu a").removeClass("on");
  });
  $(".top-bar__menu02-bg").mouseenter(function(){
    $(this).removeClass("on");
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