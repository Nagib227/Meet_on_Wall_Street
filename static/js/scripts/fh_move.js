var $header = $(".header")
var scroll = 0
var active = "active_header"
$(window).scroll(function() {
  if ($(window).scrollTop() > scroll) {
    $header.addClass(active)
  } else {
    $header.removeClass(active)
  }
})
