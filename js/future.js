var WINDOW_HEIGHT_DEFAULT = 884;
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
var TRIGGER_SCROLL_CEO1_3 = 4430 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO1_TEXT1_1 = 2330 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO1_TEXT1_2 = 2580 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO1_TEXT1_3 = 4430 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO2_TEXT1_1 = 4650 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO2_TEXT1_2 = 4900 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO2_TEXT2_1 = 5400 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO2_TEXT2_2 = 5650 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO2_TEXT3_1 = 6200 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO2_TEXT3_2 = 6450 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO2_TEXT4_1 = 7300 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO2_TEXT4_2 = 7550 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_STRATEGIC_BAR_1 = 7920 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_STRATEGIC_BAR_2 = 8520 + SCROLL_TOLERANCE;

var dividerTop;
var dividerHeight;

$(function(){
	resizeWebHeight();
	dividerHeight=resizeFixedImage("#dividerDiv",DIVIDER_HEIGHT,15);
	resizeFixedImage("#chairmanStatementBgDiv",CHAIRMAN_STATEMENT_HEIGHT,15);
	resizeFixedImage("#ceo1BgDiv",CHAIRMAN_STATEMENT_HEIGHT,15);
	reposDivider();
	reposChairmanImage();
	reposChairmanStatement();
	reposCeo1Image();
	reposCeo1Text1();
	translateDivider();
	translateChairmanImage();
	translateCeo1Image();
	translateCeo1Text1();
	translateCeo2Text1();
	translateCeo2Text2();
	translateCeo2Text3();
	translateCeo2Text4();
	translateStrategicBar();
	reposMarginTopByResolution('#ceo1Text2',1000);
	// reposMarginTopByResolution2('#ceo2Div1',100);

	$(window).resize(function(){
		console.log($(window).height()+":"+dividerTop+":"+dividerHeight+":"+$(window).scrollTop());
		resizeWebHeight();
		dividerHeight=resizeFixedImage("#dividerDiv",DIVIDER_HEIGHT,15);
		resizeFixedImage("#chairmanStatementBgDiv",CHAIRMAN_STATEMENT_HEIGHT,15);
		resizeFixedImage("#ceo1BgDiv",CHAIRMAN_STATEMENT_HEIGHT,15);
		reposDivider();
		reposChairmanImage();
		reposChairmanStatement();
		reposCeo1Image();
		reposCeo1Text1();
		translateDivider();
		translateChairmanImage();
		translateCeo1Image();
		translateCeo1Text1();
		translateCeo2Text1();
		translateCeo2Text2();
		translateCeo2Text3();
		translateCeo2Text4();
		translateStrategicBar();
		reposMarginTopByResolution('#ceo1Text2',1000);
		// reposMarginTopByResolution2('#ceo2Div1',100);
	});

	$(window).on('scroll', function(){
		console.log($(window).height()+":"+dividerTop+":"+dividerHeight+":"+$(window).scrollTop());
		translateDivider();
		translateChairmanImage();
		translateCeo1Image();
		translateCeo1Text1();
		translateCeo2Text1();
		translateCeo2Text2();
		translateCeo2Text3();
		translateCeo2Text4();
		translateStrategicBar();
		translateStrategicBar();
	});
});

function reposMarginTopByResolution(selector,marginTop) {
	newMarginTop = $(window).height()-WINDOW_HEIGHT_DEFAULT-dividerTop+marginTop;
	$(selector).css('margin-top',newMarginTop+'px');
}

function reposMarginTopByResolution2(selector,marginTop) {
	newMarginTop = marginTop-dividerTop;
	$(selector).css('margin-top',newMarginTop+'px');
}

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

function resizeWebHeight() {
	$('.container-fluid').css('height',(9450+$(window).height()-WINDOW_HEIGHT_DEFAULT)+'px');
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
		$('#dividerDiv').css('transform','translateY(0)');
	}
	else {
		$('#dividerDiv').css('transform','translateY('+(-dividerHeight)+'px)');
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
		$('#dividerDiv').css('transform','translateY(-1000px)');
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
	else if ($(window).scrollTop()<=TRIGGER_SCROLL_CEO1_3) {
		$('#ceo1BgDiv').css('transform','translateY('+(HEADER_HEIGHT-dividerHeight)+'px)');
	}
	else {
		$('#ceo1BgDiv').css('transform','translateY('+((HEADER_HEIGHT-dividerHeight)-($(window).scrollTop()-TRIGGER_SCROLL_CEO1_3))+'px)');
	}
}

function reposCeo1Text1() {
	var left = ($(window).width()-GLOBAL_WIDTH_1)/2 + 550;
	// var top = $(window).height()-315;
	var top = $(window).height()+185;
	$('#ceo1Text1').css('left',left+'px');
	$('#ceo1Text1').css('top',top+'px');
}

function translateCeo1Text1() {
	if ($(window).scrollTop()-dividerHeight<=TRIGGER_SCROLL_CEO1_TEXT1_1) {
		$('#ceo1Text1').css('transform','translateY(0)');
	}
	else if ($(window).scrollTop()-dividerHeight<=TRIGGER_SCROLL_CEO1_TEXT1_2) {
		$('#ceo1Text1').css('transform','translateY('+((TRIGGER_SCROLL_CEO1_TEXT1_1-$(window).scrollTop()+dividerHeight)*2)+'px)');
	}
	else if ($(window).scrollTop()<=TRIGGER_SCROLL_CEO1_TEXT1_3-dividerTop) {
		$('#ceo1Text1').css('transform','translateY('+((TRIGGER_SCROLL_CEO1_TEXT1_1-TRIGGER_SCROLL_CEO1_TEXT1_2)*2)+'px)');
	}
	else {
		var moveY = ((TRIGGER_SCROLL_CEO1_TEXT1_1-TRIGGER_SCROLL_CEO1_TEXT1_2)*2)-($(window).scrollTop()-TRIGGER_SCROLL_CEO1_TEXT1_3)-dividerTop;
		$('#ceo1Text1').css('transform','translateY('+moveY+'px)');
	}
}

function translateCeo2Text1() {
	if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_CEO2_TEXT1_1) {
		$('#ceo2Text1').css('transform','translateY(0)');	
	}
	else if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_CEO2_TEXT1_2) {
		var moveY = (TRIGGER_SCROLL_CEO2_TEXT1_1-($(window).scrollTop()-dividerTop))*2;
		$('#ceo2Text1').css('transform','translateY('+moveY+'px)');
	}
	else {
		var y = (TRIGGER_SCROLL_CEO2_TEXT1_1-TRIGGER_SCROLL_CEO2_TEXT1_2)*2;
		$('#ceo2Text1').css('transform','translateY('+y+'px)');
	}
}

function translateCeo2Text2() {
	if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_CEO2_TEXT2_1) {
		$('#ceo2Text2').css('transform','translateY(0)');	
	}
	else if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_CEO2_TEXT2_2) {
		var moveY = (TRIGGER_SCROLL_CEO2_TEXT2_1-($(window).scrollTop()-dividerTop))*2;
		$('#ceo2Text2').css('transform','translateY('+moveY+'px)');
	}
	else {
		var y = (TRIGGER_SCROLL_CEO2_TEXT2_1-TRIGGER_SCROLL_CEO2_TEXT2_2)*2;
		$('#ceo2Text2').css('transform','translateY('+y+'px)');
	}
}

function translateCeo2Text3() {
	if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_CEO2_TEXT3_1) {
		$('#ceo2Text3').css('transform','translateY(0)');	
	}
	else if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_CEO2_TEXT3_2) {
		var moveY = (TRIGGER_SCROLL_CEO2_TEXT3_1-($(window).scrollTop()-dividerTop))*2;
		$('#ceo2Text3').css('transform','translateY('+moveY+'px)');
	}
	else {
		var y = (TRIGGER_SCROLL_CEO2_TEXT3_1-TRIGGER_SCROLL_CEO2_TEXT3_2)*2;
		$('#ceo2Text3').css('transform','translateY('+y+'px)');
	}
}

function translateCeo2Text4() {
	if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_CEO2_TEXT4_1) {
		$('#ceo2Text4').css('transform','translateY(0)');	
	}
	else if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_CEO2_TEXT4_2) {
		var moveY = (TRIGGER_SCROLL_CEO2_TEXT4_1-($(window).scrollTop()-dividerTop))*2;
		$('#ceo2Text4').css('transform','translateY('+moveY+'px)');
	}
	else {
		var y = (TRIGGER_SCROLL_CEO2_TEXT4_1-TRIGGER_SCROLL_CEO2_TEXT4_2)*2;
		$('#ceo2Text4').css('transform','translateY('+y+'px)');
	}
}

function translateStrategicBar() {
	if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_STRATEGIC_BAR_1) {
		$('#strategicBarHolder').css('opacity','0.0');
		$('#strategicBarHolder').css('transform','translateX(0)');
		$('#strategicBar2').css('transform','translateX(0)');
		$('#strategicBar3').css('transform','translateX(0)');
		$('#strategicBar4').css('transform','translateX(0)');
		$('#strategicBar5').css('transform','translateX(0)');
		$('#strategicBar6').css('transform','translateX(0)');
	}
	else if ($(window).scrollTop()-dividerTop<=TRIGGER_SCROLL_STRATEGIC_BAR_2) {
		var xFactor = $(window).scrollTop()-dividerTop-TRIGGER_SCROLL_STRATEGIC_BAR_1;
		var maxXFactor = xFactor*1.25;
		var vOpacity = xFactor/600;

		$('#strategicBarHolder').css('opacity',vOpacity);
		$('#strategicBarHolder').css('transform','translateX('+(xFactor/2)+'px)');
		$('#strategicBar2').css('transform','translateX('+(0.2*maxXFactor)+'px)');
		$('#strategicBar3').css('transform','translateX('+(0.4*maxXFactor)+'px)');
		$('#strategicBar4').css('transform','translateX('+(0.6*maxXFactor)+'px)');
		$('#strategicBar5').css('transform','translateX('+(0.8*maxXFactor)+'px)');
		$('#strategicBar6').css('transform','translateX('+maxXFactor+'px)');
	}
	else {
		$('#strategicBarHolder').css('opacity','1.0');
		$('#strategicBarHolder').css('transform','translateX(300px)');
		$('#strategicBar2').css('transform','translateX(150px)');
		$('#strategicBar3').css('transform','translateX(300px)');
		$('#strategicBar4').css('transform','translateX(450px)');
		$('#strategicBar5').css('transform','translateX(600px)');
		$('#strategicBar6').css('transform','translateX(750px)');
	}
}


