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

  $(window).on('resize', function(){
    resizer();
  })

})
