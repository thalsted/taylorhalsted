$(document).ready(function(){
  console.log('JavaScript loaded.')

  if($('#tracker')) {
    // specifies Headspace demo page

    var randBetween = function(min,max) {
      var ans = Math.floor(Math.random()*(max-min+1))+min;
      return ans;
    }

    function shuffler(x) {
      var a = [];
      while(a.length<x){
        var ans = Math.round(Math.random()*(x-1));
        if (a.indexOf(ans) === -1) {
          a.push(ans);
        }
      }
      return a;
    }

    var users = {
      Alex: {
        id: 1,
        picture: "url('../img/hs-demo-alex.png')",
        age: 28,
        level: randBetween(2,5),
        comments: {
          1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          6: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          7: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          8: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          9: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          10: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se"
        }
      },
      George: {
        id: 2,
        picture: "url('../../img/hs-demo-george.png')",
        age: 29,
        level: 10,
        comments: {
          1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          6: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          7: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          8: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          9: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          10: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se"
        }
      },
      Emily: {
        id: 3,
        picture: "url('../../img/hs-demo-emily.png')",
        age: 27,
        level: 10,
        comments: {
          1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          6: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          7: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          8: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          9: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          10: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se"
        }
      },
      PJ: {
        id: 4,
        picture: "url('../../img/hs-demo-pj.png')",
        age: 26,
        level: 10,
        comments: {
          1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          6: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          7: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          8: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          9: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          10: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se"
        }
      },
      Julia: {
        id: 5,
        picture: "url('../../img/hs-demo-julia.png')",
        age: 23,
        level: 10,
        comments: {
          1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          6: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          7: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          8: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          9: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se",
          10: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, se"
        }
      }
    }

    var usernames = ["George","Emily","PJ","Julia"]

    var trackerMaker = function() {
      for(var i = 1; i <= 10; i++) {
        $circle = $("<div class='circler' data-id="+i+" style='margin: 221px 0 0 "+((i-1)*69+10)+"px'><h1>"+i+"</h1></div>")
        if(i <= users["Alex"]["level"]) {
          $circle.css('background-color', '#CBAB6C');
        }
        $('#tracker').append($circle)
      }
    }

    var snippetMaker = function() {
      trackerMaker();
      var order = shuffler(4);

      for(var i = 1; i <= 2; i++) {
        var name = usernames[order[i-1]];
        var age = users[name]["age"];
        var curLevel = users["Alex"]["level"];
        var imgUrl = users[name]["picture"];
        var aComm = users["Alex"]["comments"][curLevel];

        if(i === 1) {
          var snip = users[name]["comments"][curLevel]
        } else {
          var snip = users[name]["comments"][randBetween(curLevel+1,10)]
        }

        $('.snippet-header').eq(i-1).text(name+", "+age)
        $('.snippet p').eq(i-1).text(snip)
        $('#snippet-pic'+(i)).css('background-image', imgUrl);
      }

      $('.snippet p').eq(2).empty();

      (function myLoop (i,x) {
        setTimeout(function () {
          $('.snippet p').eq(2).append(aComm[i]);
          if ((i+1) < x) {
            myLoop((i+1),x)
          } else {
            users["Alex"]["level"]++;
            snippetMaker();
          }
        }, 25)
      })(0,aComm.length);
    }

    snippetMaker();
  }


  $('select').material_select();
  $('.linkedin').click(function() {
    window.open('https://www.linkedin.com/in/taylor-halsted', '_blank')
  })
  $('.github').click(function() {
    window.open('https://github.com/thalsted', '_blank')
  })
  $('.resume').click(function() {
    window.open('https://drive.google.com/file/d/0B07VzSWuKS26aHFvQkR0b2h0OEE/view?usp=sharing', '_blank')
  })
  $('#main-pic-1').click(function() {
    window.location.href = "./views/process.html"
  })
  $('#main-pic-2').click(function() {
    window.location.href = "./views/work.html"
  })
  $('#logo h1').click(function() {
    window.location.href = "../home.html"
  })



  var detectmob = function() {
   if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
   ){
      return true;
    }
   else {
      return false;
    }
  }

  if(detectmob()) {
    $('video').remove()
    $('.fullscreen-bg').css('background-image', 'url("./img/mobile-bg.png")')
    $('.quote-text').css('font-size', '28px')
    $('.case-block').css('font-size', '40px')
    $('.case h1').css('font-size', '50px')
    $('.intro-text p').css('font-size', '60px')
    $('.intro-text span').css('font-size', '40px')
  }

  $(window).on('scroll', function() {
    var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);

    var top0 = (0.3*Math.min((top/300),1)+0.7);
    var top1 = (1-Math.min((top/200),1));
    var top2 = (0.8-Math.min((top/500),1)*0.8);

    $("#header").css('background-color', 'rgba(141,153,174,'+top0+')')
    $(".itemer").css('background-color', 'rgba(250,250,250,'+Math.max(top0,0.7)+')')
    $(".bounce").css('opacity', top1)
    $(".fullscreen-bg__video").css('opacity',top2)
    $("ul.menu li:has(ul)").find("ul").slideUp("fast");
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

  $("ul.menu li a:has(ul)").addClass('with-child');

})
