

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
	
	$('.left_arrow').mouseover(function(){
		
		this.iid = setInterval(function() {
             old_val=parseInt($('.row_cust').css('margin-left'));
			limit=0;
			increment=10;
			if(old_val<limit)
			{
				$('.row_cust').css('margin-left',old_val+increment);
				$('.merge_div').css('margin-left',parseInt($('.row_cust').css('margin-left'))+increment);
			}     
    	}, 10);
	}).on('mouseleave', function(){
    this.iid && clearInterval(this.iid);
	});
	$('.right_arrow').mouseover(function(){
		this.iid2 = setInterval(function() {
			old_val=parseInt($('.row_cust').css('margin-left'));
			limit=-700;
			increment=10;
			if(old_val>limit)
			{
				$('.row_cust').css('margin-left',old_val-increment);
				$('.merge_div').css('margin-left',parseInt($('.row_cust').css('margin-left'))-increment);
			}
		}, 10);
		
	}).on('mouseleave', function(){
    this.iid2 && clearInterval(this.iid2);
	});
	 

});