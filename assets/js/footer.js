/*
Safari on iOS will expand/collapse the URL/etc bar at the top/bottom of the
screen as you scroll through a page. This is interpreted as a window resize
during scrolling, which has ugly side effects. We'll add on a buffer to
assume the bar is always visible.
*/
var safariHeaderHeight = 80;
var side = document.getElementById('side');

var updateSidePosition = () => {
  if (window.innerWidth < 1125)
    side.style.position = 'static';
  else {
    var margin = getComputedStyle(document.documentElement).getPropertyValue('--margin-top');
    margin = parseInt(margin.substring(0, margin.length - 2));

    if (window.innerHeight > (side.clientHeight + margin + safariHeaderHeight))
      side.style.position = 'fixed';
    else
      side.style.position = 'absolute';
  }
}

addEventListener('resize', updateSidePosition);
updateSidePosition();
