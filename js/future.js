var HEADER_HEIGHT = 90;
var DIVIDER_WIDTH = 960.0;
var DIVIDER_HEIGHT = 747.0;
var DIVIDER_RATIO = DIVIDER_WIDTH/DIVIDER_HEIGHT;
var CHAIRMAN_STATEMENT_WIDTH = 960.0;
var CHAIRMAN_STATEMENT_HEIGHT = 747.0;
var CHAIRMAN_STATEMENT_RATIO = CHAIRMAN_STATEMENT_WIDTH/CHAIRMAN_STATEMENT_HEIGHT;

var SCROLL_TOLERANCE = 0;
var TRIGGER_SCROLL_CHAIRMAN = 2380 + SCROLL_TOLERANCE;

var dividerTop;
var dividerHeight;

$(function(){
	dividerHeight=resizeFixedImage("#dividerImg","#dividerDiv",DIVIDER_HEIGHT,DIVIDER_RATIO,-15);
	resizeFixedImage("#chairmanStatementImg","#chairmanStatementBgDiv",CHAIRMAN_STATEMENT_HEIGHT,CHAIRMAN_STATEMENT_RATIO,0);
	reposDivider();
	reposChairmanImage();
	translateDivider();
	translateChairmanImage();

	$(window).resize(function(){
		dividerHeight=resizeFixedImage("#dividerImg","#dividerDiv",DIVIDER_HEIGHT,DIVIDER_RATIO,-15);
		resizeFixedImage("#chairmanStatementImg","#chairmanStatementBgDiv",CHAIRMAN_STATEMENT_HEIGHT,CHAIRMAN_STATEMENT_RATIO,0);
		reposDivider();
		reposChairmanImage();
		translateDivider();
		translateChairmanImage();
	});

	$(window).on('scroll', function(){
		console.log($(window).height()+":"+dividerTop+":"+dividerHeight+":"+$(window).scrollTop());
		translateDivider();
		translateChairmanImage();
	});
});

function resizeFixedImage(imgSelector, divSelector, imgHeight, imgRatio, leftTolerant) {
	var height = parseInt($(window).height());
	if (height<=imgHeight) {
		height=imgHeight;
	}

	var dividerImgWidth = height * imgRatio;
	var dividerImgLeft = (parseInt($(window).width())-dividerImgWidth) / 2;

	$(imgSelector).css('height',height+'px');
	$(divSelector).css('left',(dividerImgLeft+leftTolerant)+'px');

	return height;
}

function reposDivider() {
	var height = parseInt($(window).height());
	dividerTop=0;
	if (height<=DIVIDER_HEIGHT) {
		dividerTop=height-DIVIDER_HEIGHT;
	}
	$('#dividerDiv').css('top',dividerTop+'px');
}

function translateDivider() {
	var stuckY=dividerTop+dividerHeight-HEADER_HEIGHT;
	if ($(window).scrollTop()<=stuckY) {
		$('#dividerDiv').css('transform','translateY('+$(window).scrollTop()+'px)');
	}
	else {
		$('#dividerDiv').css('transform','translateY(0)');
	}
}

function reposChairmanImage() {
	$('#chairmanStatementBgDiv').css('top',(dividerTop+dividerHeight)+'px');
}

function translateChairmanImage() {
	var stuckY=dividerTop+dividerHeight-HEADER_HEIGHT;
	if ($(window).scrollTop()<=stuckY) {
		$('#chairmanStatementBgDiv').css('transform','translateY('+(0-$(window).scrollTop())+'px)');
	}
	else if ($(window).scrollTop()<=TRIGGER_SCROLL_CHAIRMAN) {
		$('#chairmanStatementBgDiv').css('transform','translateY('+(0-stuckY)+'px)');
	}
	else {
		$('#chairmanStatementBgDiv').css('transform','translateY('+(TRIGGER_SCROLL_CHAIRMAN-$(window).scrollTop()-stuckY)+'px)');
	}
}