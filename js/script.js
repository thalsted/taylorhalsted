$(document).ready(function(){
  console.log('JavaScript loaded.')
  $('select').material_select();

  var resizer = function() {
    $(".cb-text").each(function(i) {
      var ch = $(".cb-text").eq(i).height();
      $(".case-block-image").eq(i).css({'height':ch+'px'});
    });
  }

  resizer();

  $(window).on('resize', function() {
    resizer();
  })

  $(window).on('scroll', function() {
    var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);

    var top = (0.7*Math.min((top/300),1)+0.2)

    $("#header").css('background-color', 'rgba(57,43,88,'+top+')')
    $(".itemer").css('background-color', 'rgba(255,255,255,'+Math.max(top,0.7)+')')
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
