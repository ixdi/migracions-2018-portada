$(document).ready(function(){
  $('.toggle').css('display', 'none');
  $(".do-toggle").click(function(){
    $('.toggle').fadeToggle();
  });
  $(window).scroll(function() {
    if ($(this).scrollTop()>20)
    {
      $('.enllac-retorn').fadeOut(200);
    }
    else
    {
      $('.enllac-retorn').fadeIn();
    }
  });
  $(document).foundation();
});

