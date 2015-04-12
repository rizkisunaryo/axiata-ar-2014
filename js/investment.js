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
var TRIGGER_SCROLL_GRAPH_1_1 = 220 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_GRAPH_1_2 = 450 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_GRAPH_2_1 = 890 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_GRAPH_2_2 = 1170 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_GRAPH_3_1 = 2090 + SCROLL_TOLERANCE;
var TRIGGER_SCROLL_GRAPH_3_2 = 2470 + SCROLL_TOLERANCE;

var isGraphRowReached = [false,false];
var isGraphRow3Reached=[false,false,false,false,false,false];
var graphRow3InfoSelector = ".graphRow3Number, .graphRow3Year";
var graph3ToFunctionArray=[];
var graphAnimationTime = 1000;

$(function(){
	reposDivider();
	reposDividerText();
    animateGraphLine(1);
    animateGraphLine(2);
	animateGraphRow3Call("#graph31",true,"Grey",9,0);
    animateGraphRow3Call("#graph32",true,"Grey",19,1);
    animateGraphRow3Call("#graph33",true,"Grey",21,2);
    animateGraphRow3Call("#graph34",true,"Grey",22,3);
    animateGraphRow3Call("#graph35",true,"Red",26,4);

	$(window).resize(function(){
		console.log($(window).height()+":"+dividerTop+":"+dividerHeight+":"+$(window).scrollTop());
		reposDivider();
		reposDividerText();
        animateGraphLine(1);
        animateGraphLine(2);
	});

	$(window).on('scroll', function(){
		console.log($(window).height()+":"+dividerTop+":"+dividerHeight+":"+$(window).scrollTop());
        reposDivider();
        reposDividerText();
        animateGraphLine(1);
        animateGraphLine(2);
        animateGraphRow3Call("#graph31",true,"Grey",9,0);
        animateGraphRow3Call("#graph32",true,"Grey",19,1);
        animateGraphRow3Call("#graph33",true,"Grey",21,2);
        animateGraphRow3Call("#graph34",true,"Grey",22,3);
        animateGraphRow3Call("#graph35",true,"Red",26,4);
	});
});

function reposDivider() {
	var dividerImgLeft = (parseInt($(window).width())-GLOBAL_WIDTH_1) / 2;
	$('#dividerDiv').css('left',(dividerImgLeft)+'px');

    var top=dividerTop;
    if ($(window).scrollTop()>dividerHeight) {
        top=-dividerHeight;
    }
    $('#dividerDiv').css('top',(top)+'px');
}

function reposDividerText() {
	y = 480;
	if ($(window).height()-dividerTop<700) {
		y = y+($(window).height()-dividerTop-700);
	}
	$('#dividerText').css('top',y+'px');
}

function animateGraphLine(graphNumber) {
    var selector = "#graphLine"+graphNumber;
    
    var topTrigger = TRIGGER_SCROLL_GRAPH_1_1;
    var bottomTrigger = TRIGGER_SCROLL_GRAPH_1_2;
    if (graphNumber==2) {
        topTrigger = TRIGGER_SCROLL_GRAPH_2_1;
        bottomTrigger = TRIGGER_SCROLL_GRAPH_2_2;
    };

    if ($(window).scrollTop()<=topTrigger) {
        isGraphRowReached[graphNumber-1]=false;
        $(selector).css('width','0px');
    }
    else if ($(window).scrollTop()>=bottomTrigger && !isGraphRowReached[graphNumber-1]) {
        isGraphRowReached[graphNumber-1]=true;
        $( selector ).animate({
            width: 900
        }, 3000, function() {
            // Animation complete.
        });
    }
}

function animateGraphRow3Call(selector,isGoingUp,color,height,booleanNumber) {
    console.log(1);
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_3_2 && !isGraphRow3Reached[booleanNumber]) {
        console.log(2);
        isGraphRow3Reached[booleanNumber]=true;
        animateGraph(3,selector,isGoingUp,color,height);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_3_1) {
        console.log(3);
        isGraphRow3Reached[booleanNumber]=false;
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

