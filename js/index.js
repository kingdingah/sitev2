$(document).ready(function() {
  var doch = $(window).height();
  var docw = $(window).width();

  var menuh = $(".menu").height();
  var menuah = $(".menualt").height();

  $(".menu").css({
    'top':'calc(50% - ' + (menuh/2) + 'px)'
  });

  $(".menualt").css({
    'top':'calc(50% - ' + (menuah/2) + 'px)'
  });

  $("#about").click(function(event) {
    $(".hobbies, .contact, .work, .main").hide();
    $(".about").show();
  });

  $("#hobbies").click(function(event) {
    $(".about, .contact, .work, .main").hide();
    $(".hobbies").show();
  });

  $("#contact").click(function(event) {
    menuah = $(".menualt").height();
    $(".menualt").css({
      'top':'calc(50% - ' + (menuah/2) + 'px)'
    });
    $(".hobbies, .about, .work, .main").hide();
    $(".contact").show();
  });

  $("#work").click(function(event) {
    $(".hobbies, .contact, .about, .main").hide();
    $(".work").show();
  });

  $(".goback").click(function(event) {
    $(".hobbies, .contact, .about, .work").hide();
    $(".main").show();
  });

  var inputtext = "";

  $("#discord").click(function(event) {
    inputtext = "kingo#1215";
    $(".popup input").val(inputtext);
    $(".popup").show();
  })

  $("#email").click(function(event) {
    inputtext = "kingdingah@outlook.com";
    $(".popup input").val(inputtext);
    $(".popup").show();
  })

  $(".popup img").click(function(event) {
    $(".popup").hide();
  });
});

function copythis()
{
    $("input").prop('disabled', false);
    var copyText = document.getElementById("tocopy");
    copyText.select();
    document.execCommand("copy");
    $("input").prop('disabled', true);

}
