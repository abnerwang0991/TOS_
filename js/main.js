$(function() {

  $("nav a, footer a[href='#tos']").on("click", function(e) {
    if(this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }
  });


  $(".pointer").click(function() {
    $("html, body").animate({
      scrollTop : $("#story").offset().top
    }, 900);
  });

  if($(this).scrollTop() > 0) {
    $(".logo, li a").addClass("shrink");
  }

  var i = 0;
  $(window).scroll(function() {
    if($(this).scrollTop() > 0) {
      $(".logo, li a").addClass("shrink");
      $("body").css("paddingTop", "50px");
    } else {
      $(".logo, li a").removeClass("shrink");
    }
    $(".slideR").each(function() {
      if($(this).offset().top - 500 < $(window).scrollTop()) {
        $(this).addClass("slideRight");
      }
    });
    $(".slideL").each(function() {
      if($(this).offset().top - 500 < $(window).scrollTop()) {
        $(this).addClass("slideLeft");
      }
    });
    $(".slideU").each(function() {
      if($(this).offset().top - 500 < $(window).scrollTop()) {
        $(this).addClass("slideUp");
      }
    });
    $(".toEnlarge").each(function() {
      if($(this).offset().top - 500 < $(window).scrollTop()) {
        $(this).addClass("enlarge");
      }
    });
    $(".fade").each(function() {
      if($(this).offset().top - 450 < $(window).scrollTop()) {
        $(this).addClass("fadeIn");
      }
    });
    $(".bounce").each(function() {
      if($(this).offset().top - 500 < $(window).scrollTop()) {
        $(this).addClass("bounceInDown");
      }
    });
    $(".info-photo").each(function() {
      if($(this).offset().top - 500 < $(window).scrollTop()) {
        $(this).addClass("animated flipInY");
      }
    });
    if($("#intro").offset().top - 300 < $(window).scrollTop() 
      && i == 0) {
      barMove();
      valueAdd();
      i++;
    }
    if($("#illus").offset().top - 300 < $(window).scrollTop() 
      && i == 1) {
      illustration();
      i++;
    }
  });

  $(".button").click(function() {
    barMove();
  });

  function illustration() {
    $(".number").each(function(index, elm) {
      var from = 0,
          to = $(this).attr("data-to"),
          id = setInterval(frame, 10);
      function frame() {
        if(from > to) {
          clearInterval(id);
        } else {
          $(elm).html(from);
          from++;
        }
      }
    });
  }
  
  function valueAdd() {
    $(".bar-value").each(function(index, elm) {
      var from = 0,
          to = $(this).attr("data-to"),
          id = setInterval(frame, 1);
      function frame() {
        if(from > to) {
          clearInterval(id);
        } else {
          $(elm).html(from);
          from++;
        }
      }
    });
  }

  function barMove() {  
    $(".bar-width").each(function(index, elm) {
      var from = 0,
          to = $(this).attr("data-to"),
          id = setInterval(frame, 10);
      function frame() {
        if(from > to) {
          clearInterval(id);
        } else {
          $(elm).css("width", from + "%");
          from += 0.5;
        }
      }
    });
  }

});
