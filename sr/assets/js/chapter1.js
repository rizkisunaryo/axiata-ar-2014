var isPercentageReached=[false,false,false,false,false];

$(function(){
	$(window).on('scroll', function(){
        // console.log($(window).height()+":"+$(window).scrollTop()+":"+($(window).height()-$(window).scrollTop()));
        // console.log($('#scrollTrigger').offset().top+":"+$('#marketcap').offset().top);
        fromZero('#revenue',87,0);
        fromZero('#ebitda',69,1);
        fromZero('#pat',66,2);
        fromZero('#subscribers',565,3);
        fromZero('#marketcap',345,4);
    });
});

function fromZero(selector,toNumber,booleanNumber) {
	// console.log($('#scrollTrigger').offset().top>$('#percentageTopTrigger').offset().top);

    if ($('#scrollTrigger').offset().top>$('#percentageTopTrigger').offset().top && !isPercentageReached[booleanNumber]) {
    	console.log(2);

        isPercentageReached[booleanNumber]=true;
        $(selector).text(0);
        $({someValue: 0}).animate({someValue: toNumber}, {
            duration: 1000,
            easing:'swing', // can be anything
            step: function() { // called on every step
                // Update the element's text with rounded-up value:
                $(selector).text(Math.round(this.someValue));
            }
        });
    }
    else if ($('#scrollTrigger').offset().top<$('#percentageTopTrigger').offset.top) {
    	console.log(3);

        isPercentageReached[booleanNumber]=false;
        $(selector).text(0);
    }
}