$(document).ready(function(){
  console.log('JavaScript loaded.')
  $('select').material_select();

  $(window).on('scroll', function() {
    var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);

    var top0 = (0.7*Math.min((top/300),1)+0.2);
    var top1 = (1-Math.min((top/200),1));
    var top2 = (0.8-Math.min((top/300),1)*0.5);

    $("#header").css('background-color', 'rgba(47,33,78,'+top0+')')
    $(".itemer").css('background-color', 'rgba(255,255,255,'+Math.max(top0,0.7)+')')
    $(".bounce").css('opacity', top1)
    $(".fullscreen-bg__video").css('opacity',top2)
  })

  $("#main-list").click(function() {
    $('html,body').animate({
      scrollTop: 0},
      'slow');
  })

  $(".lister").each(function(i) {
    $(".lister").eq(i).click(function() {
      $('html,body').animate({
        scrollTop: $(".case h1").eq(i).offset().top - 200},
        'slow');
    })
  });

  $("ul.menu li:has(ul)").hover(function(){
    $(this).find("ul").slideDown("fast");
    },function(){
      $(this).find("ul").slideUp("fast");
    }
  )

  $("ul.menu > li").hover(function(){
      $(this).addClass('current');
    },function(){
      $(this).removeClass('current');
  });

  $("ul.menu li a:has(ul)").addClass('with-child');

})
