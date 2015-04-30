

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}
locked=false;
$(document).ready(function(){
	
	
	// $('body').on( "scroll",function(){
	// 	if(locked){ alert('s');}
	// 	else
	// 	{
	// 		locked=true;
	// 		if(elementInViewport($('.desc_card')[0]))
	// 		{
	// 			$('col2').addClass('background_active');
	// 		}
	// 		else
	// 		{
	// 			$('col2').removeClass('background_active');	
	// 		}
	// 		locked=false;
	// 	}
	// });
});