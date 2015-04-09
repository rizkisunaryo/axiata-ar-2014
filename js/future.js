var GLOBAL_WIDTH_1= 960;
var HEADER_HEIGHT = 90;
var DIVIDER_WIDTH = 960.0;
var DIVIDER_HEIGHT = 747.0;
var DIVIDER_RATIO = DIVIDER_WIDTH/DIVIDER_HEIGHT;
var CHAIRMAN_STATEMENT_WIDTH = 960.0;
var CHAIRMAN_STATEMENT_HEIGHT = 747.0;
var CHAIRMAN_STATEMENT_RATIO = CHAIRMAN_STATEMENT_WIDTH/CHAIRMAN_STATEMENT_HEIGHT;
var CHAIRMAN_STATEMENT_MARGIN_TOP_TEXT = 40;

var SCROLL_TOLERANCE = 0;
var TRIGGER_SCROLL_CHAIRMAN = 2330 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO1_1 = 2420 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO1_2 = 2330 + SCROLL_TOLERANCE;

var dividerTop;
var dividerHeight;

$(function(){
	dividerHeight=resizeFixedImage("#dividerDiv",DIVIDER_HEIGHT,0);
	resizeFixedImage("#chairmanStatementBgDiv",CHAIRMAN_STATEMENT_HEIGHT,0);
	resizeFixedImage("#ceo1BgDiv",CHAIRMAN_STATEMENT_HEIGHT,0);
	reposDivider();
	reposChairmanImage();
	reposChairmanStatement();
	reposCeo1Image();
	translateDivider();
	translateChairmanImage();
	translateCeo1Image();

	$(window).resize(function(){
		dividerHeight=resizeFixedImage("#dividerDiv",DIVIDER_HEIGHT,0);
		resizeFixedImage("#chairmanStatementBgDiv",CHAIRMAN_STATEMENT_HEIGHT,0);
		resizeFixedImage("#ceo1BgDiv",CHAIRMAN_STATEMENT_HEIGHT,0);
		reposDivider();
		reposChairmanImage();
		reposChairmanStatement();
		reposCeo1Image();
		translateDivider();
		translateChairmanImage();
		translateCeo1Image();
	});

	$(window).on('scroll', function(){
		console.log($(window).height()+":"+dividerTop+":"+dividerHeight+":"+$(window).scrollTop());
		translateDivider();
		translateChairmanImage();
		translateCeo1Image();
	});
});

function resizeFixedImage(divSelector,imgHeight,leftTolerant) {
	var height = parseInt($(window).height());
	if (height<=imgHeight) {
		height=imgHeight;
	}

	var dividerImgLeft = (parseInt($(window).width())-GLOBAL_WIDTH_1) / 2;

	$(divSelector).css('height',height+'px');
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
		// $('#dividerDiv').css('transform','translateY('+$(window).scrollTop()+'px)');
		$('#dividerDiv').css('-webkit-transform','translateY(0)');
	}
	else {
		// $('#dividerDiv').css('transform','translateY(0)');
		$('#dividerDiv').css('-webkit-transform','translateY('+(-dividerHeight)+'px)');
	}
}

function reposChairmanImage() {
	$('#chairmanStatementBgDiv').css('top',(dividerTop+dividerHeight)+'px');
}

function reposChairmanStatement() {
	$('#chairmanStatementText').css('top',(dividerTop+dividerHeight+CHAIRMAN_STATEMENT_MARGIN_TOP_TEXT)+'px');
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

function reposCeo1Image() {
	$('#ceo1BgDiv').css('top',(dividerHeight)+'px');
}

function translateCeo1Image() {
	if ($(window).scrollTop()<=TRIGGER_SCROLL_CEO1_1-dividerTop) {
		$('#ceo1BgDiv').css('transform','translateY(0)');
	}
	else if ($(window).scrollTop()<=TRIGGER_SCROLL_CEO1_2+dividerHeight) {
		$('#ceo1BgDiv').css('transform','translateY('+(TRIGGER_SCROLL_CEO1_1-$(window).scrollTop())+'px)');
	}
	else if ($(window).scrollTop()<=100000) {
		$('#ceo1BgDiv').css('transform','translateY('+(HEADER_HEIGHT-dividerHeight)+'px)');
	}
}