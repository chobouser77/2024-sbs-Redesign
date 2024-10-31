// 네비
$(document).ready(function() {
  
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