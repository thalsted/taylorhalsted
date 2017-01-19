$(document).ready(function(){
  console.log('JavaScript loaded.')
  var file = location.pathname.split('/').pop()

  if(file === "work.html") {
    // specifies work.html view

    $('#work-pane1').click(function() {
    window.open('https://hustlepuffin.herokuapp.com', '_blank')
    })

    $('#work-pane2').click(function() {
      window.location.href = "../views/headspace/hs-demo.html"
    })

    $('#work-pane3').click(function() {
    window.open('https://thalsted.github.io/projectOne-GA/', '_blank')
    })

    $('#work-pane4').click(function() {
      window.location.href = "../home.html"
    })
  }

  if(file === "hs-demo.html") {
    // specifies hs-demo.html view

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
        level: 6,
        comments: {
          6: "It was tough finding time today, but I'm trying to work meditation into my new routine. Here goes...",
          7: "Feeling a little groggy this morning, but I'm determined to keep this up!",
          8: "Meditation is getting easier each day; I can feel the difference in my stress level at work.",
          9: "Feeling good - bring on the calm!"
        }
      },
      George: {
        id: 2,
        picture: "url('../../img/hs-demo-george.png')",
        age: 29,
        level: 10,
        job: "Sales Executive",
        city: "Boston, MA",
        comments: {
          6: "Meditation is my New Year's resolution. Currently, it's giving me a run for my money!",
          7: "They say 30 days makes a habit, right? 23 days to go...",
          8: "Woke up feeling sharp this morning. Maybe this is starting to work? Will keep at it.",
          9: "Feeling luckier than I can ever remember. I'm loving this time to reflect on makes me grateful.",
          10: "My coworker mentioned I seem more present and happy lately. Starting to look forward to these sessions."
        }
      },
      Emily: {
        id: 3,
        picture: "url('../../img/hs-demo-emily.png')",
        age: 27,
        level: 10,
        job: "Writer",
        city: "New York, NY",
        comments: {
          6: "Slow start today, but I told myself I would stick with it.",
          7: "I think there might be more to this meditation thing than I realized. I feel different, in a good way...",
          8: "Got a compliment at work yesterday that I seem sunnier - sounds good to me!",
          9: "Looking forward to meditating every day now. Feeling like I'm in the groove.",
          10: "10 days down and no sign of stopping. I'm happy that my meditation time is fitting into my routine and making me a little happier every day."
        }
      },
      PJ: {
        id: 4,
        picture: "url('../../img/hs-demo-pj.png')",
        age: 26,
        level: 10,
        job: "Political Advisor",
        city: "Tampa, FL",
        comments: {
          6: "Still waiting for this to 'work'. Day 6 I'm coming for you!",
          7: "Major breakthrough yesterday - it feels good to let my thoughts go.",
          8: "I've been looking forward to my session this morning; after my day at work I could really use some peace and quiet.",
          9: "Ahh... Another day taking some me time. I could seriously get used to this.",
          10: "I can't believe I went 26 years without meditating. This is changing the way I see the world!"
        }
      },
      Julia: {
        id: 5,
        picture: "url('../../img/hs-demo-julia.png')",
        age: 21,
        level: 10,
        job: "College Student",
        city: "Hanover, NH",
        comments: {
          6: "Got some funny looks in the library yesterday, but that won't stop me!",
          7: "Who knew breathing could be so addictive? Looking forward to this time more and more every day.",
          8: "Things that seemed stressful feel a little more manageable now.",
          9: "Ready to do some breathing. This is becoming my favorite time of the day!",
          10: "Feeling great! This is like going to the gym for your mind."
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
      $('.shader').fadeOut('slow');
      $('.meditation').fadeOut('400');
      trackerMaker();
      var order = shuffler(4);

      for(var i = 1; i <= 2; i++) {
        var name = usernames[order[i-1]];
        var age = users[name]["age"];
        var curLevel = users["Alex"]["level"];
        var imgUrl = users[name]["picture"];
        var aComm = users["Alex"]["comments"][curLevel];
        var job = users[name]["job"];
        var city = users[name]["city"];

        if(i === 1) {
          var snip = users[name]["comments"][curLevel]
        } else {
          var snip = users[name]["comments"][randBetween(curLevel+1,10)]
        }

        $('.snippet-header').eq(i-1).text(name+", "+job+", "+age)
        $('.snippet span').eq(i-1).text(city)
        $('.snippet p').eq(i-1).text(snip)
        $('#snippet-pic'+(i)).css('background-image', imgUrl);
      }

      $('.snippet p').eq(2).empty();

      $('.snippet').fadeIn('slow');

      setTimeout(function(){
        (function myLoop (i,x) {
          setTimeout(function() {
            $('.snippet p').eq(2).append(aComm[i]);
            if ((i+1) < x) {
              myLoop((i+1),x)
            } else {
              if (users["Alex"]["level"] < 9) {
                users["Alex"]["level"]++
                meditator();
              } else {
                users["Alex"]["level"] = 6;
                setTimeout(function(){
                  $('.snippet').fadeOut('slow');
                  setTimeout(function(){snippetMaker()},2000);
                },2500);
              }
            }
          }, 25)
        })(0,aComm.length);
      },1500);
    }

    var meditator = function() {
      setTimeout(function(){
        $('.snippet').fadeOut('slow');
        $('.shader').fadeIn('400');
        $('.meditation').fadeIn('slow');
        setTimeout(function(){snippetMaker()},4000);
      },2500);
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
    $("ul.menu li:has(ul)").find("ul").slideUp("fast");

    if(file === "process.html") {
      $(".fullscreen-bg__video").css('opacity',top2);
    }
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
