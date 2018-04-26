$(document).ready(function(){
  $('.toggle').css('display', 'none');
  $(".do-toggle").click(function(){
    $('.toggle').toggle();
  });
  const colors = ['#df0101','#fe2e2e','#f78181','#8a0808', '#fa5858'];
  let color, i=0, str;
  $('.bg-red').each(function (el) {
    color = colors[i];
    i += 1;
    if (i >= colors.length) { i=0; }
    $(this).css('background-color', color);
    str = $(this).find('.hide');
    if (str.length > 0) {
      $(this).css('background-image', `url("images/${str[0].innerText}")`);
    }
  });
  $('document').foundation();
});

