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

var dividerTop=90;
var dividerHeight=700;

var SCROLL_TOLERANCE = 0;
var TRIGGER_SCROLL_CHAIRMAN = 630 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CHAIRMAN_2 = 2280 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO1_1 = 2370 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_CEO1_2 = 3170 + SCROLL_TOLERANCE;
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

var TRIGGER_SCROLL_GRAPH_2_1 = -100 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_GRAPH_2_2 = -100 + SCROLL_TOLERANCE;

var isGraphRow2Reached=[false,false,false,false,false,false];
var graphRow2InfoSelector = ".graphRow2Number, .graphRow2Year";
var graph2ToFunctionArray=[];
var graphAnimationTime = 5000;

$(function(){
	reposDivider();
	reposDividerText();
	animateGraphRow2Call("#graph21",true,"Red",6,0);

	$(window).resize(function(){
		console.log($(window).height()+":"+dividerTop+":"+dividerHeight+":"+$(window).scrollTop());
		reposDivider();
		reposDividerText();
	});

	$(window).on('scroll', function(){
		console.log($(window).height()+":"+dividerTop+":"+dividerHeight+":"+$(window).scrollTop());
	});
});

function reposDivider() {
	var dividerImgLeft = (parseInt($(window).width())-GLOBAL_WIDTH_1) / 2;
	$('#dividerDiv').css('left',(dividerImgLeft)+'px');
}

function reposDividerText() {
	y = 480;
	if ($(window).height()-dividerTop<700) {
		y = y+($(window).height()-dividerTop-700);
	}
	$('#dividerText').css('top',y+'px');
}

function animateGraphRow2Call(selector,isGoingUp,color,height,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_2_2 && !isGraphRow2Reached[booleanNumber]) {
        isGraphRow2Reached[booleanNumber]=true;
        animateGraph(2,selector,isGoingUp,color,height);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_2_1) {
        isGraphRow2Reached[booleanNumber]=false;
        $(selector).html('');
    }
}

function animateGraph(rowNumber,selector,isGoingUp,color,height) {
    var facingLeft = false;
    var facing = '';
    var top=6;
    if (!isGoingUp) top=0;
    var left=0;
    var opacity=1.0;
    
    for (i1=1;i1<=height*4;i1++) {
        if (i1%2==0) {
            facingLeft=!facingLeft;
            left=12;
        } else {
            if (isGoingUp) top-=6;
            else top+=6;
            left=0;
        }

        if (i1%3==0) {
            opacity=1.2;
        }
        opacity-=0.2;

        if (facingLeft) {
            facing="Left";
        } else {
            facing="Right";
        }

        var html='<canvas class="triangle'+facing+color+'" style="top:'+top+'px; left:'+left+'px; opacity:'+opacity+';"></canvas>';
        animateGraphAction(rowNumber,selector,html,i1,height*4);
    }
}

function animateGraphAction(rowNumber,selector,html,i,blockCount) {
    var graphToFunction = setTimeout(function(){ 
        $(selector).append(html);
    }, graphAnimationTime/blockCount*i);

    addGraphToArray(rowNumber,graphToFunction);
}

function showGraphNumberAndYear(rowNumber,selector,delay) {
    var graphInfo = setTimeout(function(){ 
        $(selector).fadeTo("slow", 1.0);
    }, delay);

    addGraphToArray(rowNumber,graphInfo);
}

function addGraphToArray(rowNumber,functionName) {
    if (rowNumber==1) {
        graph1ToFunctionArray.push(functionName);
    }
    else if (rowNumber==2) {
        graph2ToFunctionArray.push(functionName);
    }
    else if (rowNumber==3) {
        graph3ToFunctionArray.push(functionName);
    }
    else if (rowNumber==4) {
        graph4ToFunctionArray.push(functionName);
    }
    else if (rowNumber==5) {
        graph5ToFunctionArray.push(functionName);
    }
    else if (rowNumber==6) {
        graph6ToFunctionArray.push(functionName);
    }
    else if (rowNumber==7) {
        graph7ToFunctionArray.push(functionName);
    }
}

