$(document).ready(function() {
  $("button#light-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("light-mode");
  });

  $("button#dark-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });
});