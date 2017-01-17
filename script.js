$(document).ready(function(){
	verifyNavBg();
	verifyNavBottom();
  $(window).scroll(function(){verifyNavBg();});
  $(window).scroll(function(){verifyNavBottom();});
});
$('#menu-button').click(function(){toggleMenu()});
/** navbar **/
function verifyNavBg() {
	if ($(document).scrollTop() > 0) {
      $(".top-nav").addClass("nav-bg");
    } else {
      $(".top-nav").removeClass("nav-bg");
      hideMenu();
    }
}
function verifyNavBottom() {
	var headerHeight = $(".header-container").height();
  	if ($(document).scrollTop() > ((headerHeight - $(".top-nav").height()))) {
  		$("#top-nav-bottom").css("display", "block");
  	} else {
  		$("#top-nav-bottom").css("display", "none");
  	}
}
/** menu **/
function showMenu() {
    $('#menu').addClass("responsive-menu-container");
    $('.menu-top-nav li').addClass("responsive-menu-top-nav-li");
}
function hideMenu() {
    $('#menu').removeClass("responsive-menu-container");
    $('.menu-top-nav li').removeClass("responsive-menu-top-nav-li");
}
function toggleMenu() {
  if($('#menu').hasClass("responsive-menu-container")) {
    hideMenu();
    verifyNavBg();
  }
  else {
    showMenu();
    $(".top-nav").addClass("nav-bg");
  } 
}

/** scrolling **/
$(document).on('click', '.scroll', function(event){
    event.preventDefault();
    var $root = $('html, body');
    var nav = $(".top-nav").height() + 35;

    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - nav
    }, 500);
});