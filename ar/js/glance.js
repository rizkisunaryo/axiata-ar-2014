// SCROLL TRIGGERS
var scrollTol = 1000;
var TRIGGER_SCROLL_FROM_ZERO_1 = 955 + scrollTol;
var TRIGGER_SCROLL_FROM_ZERO_2 = 1135 + scrollTol;
var TRIGGER_SCROLL_BG = 1760 + scrollTol;
var TRIGGER_SCROLL_KEY_HIGHLIGHTS_1 = 2190 + scrollTol;
var TRIGGER_SCROLL_KEY_HIGHLIGHTS_2 = 2490 + scrollTol;
var TRIGGER_SCROLL_GRAPH_1_1 = 2820 + scrollTol;
var TRIGGER_SCROLL_GRAPH_1_2 = 3110 + scrollTol;
var TRIGGER_SCROLL_GRAPH_2_1 = 3180 + scrollTol;
var TRIGGER_SCROLL_GRAPH_2_2 = 3470 + scrollTol;
var TRIGGER_SCROLL_GRAPH_3_1 = 3530 + scrollTol;
var TRIGGER_SCROLL_GRAPH_3_2 = 3830 + scrollTol;
var TRIGGER_SCROLL_GRAPH_4_1 = 4000 + scrollTol;
var TRIGGER_SCROLL_GRAPH_4_2 = 4200 + scrollTol;
var TRIGGER_SCROLL_GRAPH_5_1 = 4240 + scrollTol;
var TRIGGER_SCROLL_GRAPH_5_2 = 4360 + scrollTol;
var TRIGGER_SCROLL_GRAPH_6_1 = 4440 + scrollTol;
var TRIGGER_SCROLL_GRAPH_6_2 = 4640 + scrollTol;
var TRIGGER_SCROLL_GRAPH_7_1 = 4680 + scrollTol;
var TRIGGER_SCROLL_GRAPH_7_2 = 4880 + scrollTol;
var TRIGGER_SCROLL_KEY_PERFORMANCE_1 = 4460 + scrollTol;
var TRIGGER_SCROLL_KEY_PERFORMANCE_2 = 5400 + scrollTol;
var TRIGGER_SCROLL_VISION_ARROW_1 = 5365 + scrollTol;
var TRIGGER_SCROLL_VISION_ARROW_2 = 5715 + scrollTol;
var TRIGGER_SCROLL_VISION_BLOCK_1 = 5770 + scrollTol;
var TRIGGER_SCROLL_VISION_BLOCK_2 = 6110 + scrollTol;

var isPercentageReached=[false,false,false,false,false];

var isGraphRow1Reached=[false,false,false,false,false,false,false,false,false,false,false];
var isGraphRow2Reached=[false,false,false,false,false,false,false,false,false,false,false];
var isGraphRow3Reached=[false,false,false,false,false,false,false,false,false,false,false];
var isGraphRow4Reached=[false,false,false];
var isGraphRow5Reached=[false,false,false];
var isGraphRow6Reached=[false,false,false];
var isGraphRow7Reached=[false,false,false];
var graphRow1InfoSelector = ".graphRow1Number, .graphRow1Year";
var graphRow2InfoSelector = ".graphRow2Number, .graphRow2Year";
var graphRow3InfoSelector = ".graphRow3Number, .graphRow3Year";
var graphRow4InfoSelector = ".graphRow4Number, .graphRow4Year";
var graphRow5InfoSelector = ".graphRow5Number, .graphRow5Year";
var graphRow6InfoSelector = ".graphRow6Number, .graphRow6Year";
var graphRow7InfoSelector = ".graphRow7Number, .graphRow7Year";
var graph1ToFunctionArray=[];
var graph2ToFunctionArray=[];
var graph3ToFunctionArray=[];
var graph4ToFunctionArray=[];
var graph5ToFunctionArray=[];
var graph6ToFunctionArray=[];
var graph7ToFunctionArray=[];

var graphAnimationTime = 1000;

$(function(){
    initialScroll();

    toggleLeftHeaderMenu();
    reposAllDivs();

    $(window).resize(function(){
        reposAllDivs();
    });

    $(window).on('scroll', function(){
        console.log($(window).scrollTop());
        // console.log(getScroll());
        // console.log($(window).height()+":"+$(window).scrollTop());
        // console.log($(window).scrollTop()+":"+getScroll()+":"+$("#operatingRevenue").scrollTop() +":"+ $("#operatingRevenue").innerHeight() +":"+ document.getElementById("operatingRevenue").scrollHeight);
        fromZero('#revenue',87,0);
        fromZero('#ebitda',69,1);
        fromZero('#pat',66,2);
        fromZero('#subscribers',565,3);
        fromZero('#marketcap',345,4);
        // scrollHeader();
        scrollGlanceBg();
        animateLeftRightKeyHL();
        scrollKeyPerf();
        animateVisionArrow();
        animateVisionBlock();

        animateGraphRow1Call("#graph11",true,"Grey",15,0);
        animateGraphRow1Call("#graph12",true,"Grey",16,1);
        animateGraphRow1Call("#graph13",true,"Grey",17,2);
        animateGraphRow1Call("#graph14",true,"Grey",18,3);
        animateGraphRow1Call("#graph15",true,"Red",19,4);
        animateGraphRow1Call("#graph16",true,"Grey",10,5);
        animateGraphRow1Call("#graph17",true,"Grey",11,6);
        animateGraphRow1Call("#graph18",true,"Grey",14,7);
        animateGraphRow1Call("#graph19",true,"Grey",15,8);
        animateGraphRow1Call("#graph110",true,"Red",16,9);
        showGraph1InfoCall(graphRow1InfoSelector,10);

        animateGraphRow2Call("#graph21",true,"Grey",10,0);
        animateGraphRow2Call("#graph22",true,"Grey",13,1);
        animateGraphRow2Call("#graph23",true,"Grey",14,2);
        animateGraphRow2Call("#graph24",true,"Grey",13,3);
        animateGraphRow2Call("#graph25",true,"Red",12,4);
        animateGraphRow2Call("#graph26",true,"Grey",9,5);
        animateGraphRow2Call("#graph27",true,"Grey",10,6);
        animateGraphRow2Call("#graph28",true,"Grey",13,7);
        animateGraphRow2Call("#graph29",true,"Grey",14,8);
        animateGraphRow2Call("#graph210",true,"Red",15,9);
        showGraph2InfoCall(graphRow2InfoSelector,10);

        animateGraphRow3Call("#graph31",true,"Grey",8,0);
        animateGraphRow3Call("#graph32",true,"Grey",10,1);
        animateGraphRow3Call("#graph33",true,"Grey",11,2);
        animateGraphRow3Call("#graph34",true,"Grey",12,3);
        animateGraphRow3Call("#graph35",true,"Red",14,4);
        animateGraphRow3Call("#graph36",true,"Grey",7,5);
        animateGraphRow3Call("#graph37",true,"Grey",12,6);
        animateGraphRow3Call("#graph38",true,"Grey",15,7);
        animateGraphRow3Call("#graph39",true,"Grey",14,8);
        animateGraphRow3Call("#graph310",true,"Red",14,9);
        showGraph3InfoCall(graphRow3InfoSelector,10);

        animateGraphRow4Call("#graph41",true,"Grey",13,0);
        animateGraphRow4Call("#graph42",true,"Red",5,1);
        showGraph4InfoCall(graphRow4InfoSelector,2);

        animateGraphRow5Call("#graph51",true,"Grey",6,0);
        animateGraphRow5Call("#graph52",false,"Red",4,1);
        showGraph5InfoCall(graphRow5InfoSelector,2);

        animateGraphRow6Call("#graph61",true,"Grey",10,0);
        animateGraphRow6Call("#graph62",true,"Red",9,1);
        showGraph6InfoCall(graphRow6InfoSelector,2);

        animateGraphRow7Call("#graph71",true,"Grey",13,0);
        animateGraphRow7Call("#graph72",true,"Red",12,1);
        showGraph7InfoCall(graphRow7InfoSelector,2);
    });
});

function initialScroll() {
    var section = getUrlParameter('section');
    var scroll = 0;
    switch(section) {
        case 'group_profile':
            scroll = 1400;
            break;
        case 'financial_highlights':
            scroll = 4220;
            break;
        default:
            scroll=0;
    } 

    if (scroll>0) {
        $root.animate({
            scrollTop: scroll
        }, scroll);
    }
}

function getScroll() {
    return $(window).scrollTop()-$(window).height();
}

function scrollHeader() {
    var headerTransformY = ($(window).height()-80)-$(window).scrollTop();
    headerTransformY = headerTransformY>0? 0 : headerTransformY;
    $('.kepalaGlance').css({transform: 'translate(0,'+headerTransformY+'px)'});
}

function scrollGlanceBg() {
    if ($(window).scrollTop()>TRIGGER_SCROLL_BG) {
        $('#glanceBg').css({transform: 'translate(0,'+(TRIGGER_SCROLL_BG-$(window).scrollTop())+'px)'});
    }
    else {
        $('#glanceBg').css({transform: 'translate(0,0)'});
    }
}

function scrollKeyPerf() {
    if ($(window).scrollTop()<TRIGGER_SCROLL_KEY_PERFORMANCE_1) {
        $('#keyPerfHeader').css({transform:'translateY(0)'});
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_KEY_PERFORMANCE_2) {
        $('#keyPerfHeader').css({transform:'translateY('+($(window).scrollTop()-TRIGGER_SCROLL_KEY_PERFORMANCE_1)+'px)'});
    }
    else {
        $('#keyPerfHeader').css({transform:'translateY(930px)'});
    }
}

function toggleLeftHeaderMenu() {
    $("#left-header-btn").click(function(event){
        event.stopPropagation();
        $( "#left-header-menu" ).toggle( "slow");
    });
}

function fromZero(selector,toNumber,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_FROM_ZERO_2 && !isPercentageReached[booleanNumber]) {
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
    else if ($(window).scrollTop()<TRIGGER_SCROLL_FROM_ZERO_1) {
        isPercentageReached[booleanNumber]=false;
        $(selector).text(0);
    }
}

function reposAllDivs() {
    var headerHeight = parseInt($(".kepalaGlance").css('height'));

    var dividerTop = headerHeight;
    var glanceBgTop = headerHeight;
    var glanceBgLeft = ($(window).width()-960)/2;
    var text1Top = dividerTop;

    $('#divider').css({top:dividerTop+'px'});
    $('#glanceBg').css({top:glanceBgTop+'px'});
    $('#glanceBg').css({left:glanceBgLeft+'px'});
    // $('#text1').css({top:text1Top+'px'});
    $('#text1').css('margin-top',(headerHeight+721)+'px');
}

function animateLeftRightKeyHL() {
    var vBasicOpacity = 0.0;
    if ($(window).scrollTop()<=TRIGGER_SCROLL_KEY_HIGHLIGHTS_1) {
        $('.leftKeyHL').css({transform: 'translate(0,0)'});
        $('.rightKeyHL').css({transform: 'translate(0,0)'});
        $('.leftKeyHL, .rightKeyHL').css({opacity:vBasicOpacity});
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_KEY_HIGHLIGHTS_2) {
        var factor = ($(window).scrollTop()-TRIGGER_SCROLL_KEY_HIGHLIGHTS_1);
        var x = factor*520/300;
        $('.leftKeyHL').css({transform: 'translate('+x+'px,0)'});
        $('.rightKeyHL').css({transform: 'translate('+(-x)+'px,0)'});
        $('.leftKeyHL, .rightKeyHL').css({opacity:vBasicOpacity+factor/350});
    }
    else {
        $('.leftKeyHL').css({transform: 'translate(520px,0)'});
        $('.rightKeyHL').css({transform: 'translate(-520px,0)'});
        $('.leftKeyHL, .rightKeyHL').css({opacity:'1.0'});
    }
}

function animateVisionArrow() {
    var vBasicOpacity = 0.0;
    if ($(window).scrollTop()<=TRIGGER_SCROLL_VISION_ARROW_1) {
        $('#visionArrow').css({transform: 'translateX(0)'});
        $('#visionArrow').css({opacity:vBasicOpacity});
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_VISION_ARROW_2) {
        var x = ($(window).scrollTop()-TRIGGER_SCROLL_VISION_ARROW_1);
        var opacityAdder = x*3.0/1000;
        $('#visionArrow').css({transform: 'translateX('+(x/2.0)+'px)'});
        $('#visionArrow').css({opacity:(vBasicOpacity+opacityAdder)});
    }
    else {
        $('#visionArrow').css({transform: 'translateX(175px)'});
        $('#visionArrow').css({opacity:'1.0'});
    }
}

function animateVisionBlock() {
    var vBasicOpacity = 0.0;
    if ($(window).scrollTop()<=TRIGGER_SCROLL_VISION_BLOCK_1) {
        $('.visionBlock').css({opacity:vBasicOpacity});
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_VISION_BLOCK_2) {
        var x = ($(window).scrollTop()-TRIGGER_SCROLL_VISION_BLOCK_1);
        var opacityAdder = x*3.0/1000;
        $('.visionBlock').css({opacity:(vBasicOpacity+opacityAdder)});
    }
    else {
        $('.visionBlock').css({opacity:'1.0'});
    }
}

function showGraph1InfoCall(infoSelector,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_1_2 && !isGraphRow1Reached[booleanNumber]) {
        isGraphRow1Reached[booleanNumber]=true;
        showGraphNumberAndYear(1,infoSelector,graphAnimationTime);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_1_1) {
        isGraphRow1Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph1ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function showGraph2InfoCall(infoSelector,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_2_2 && !isGraphRow2Reached[booleanNumber]) {
        isGraphRow2Reached[booleanNumber]=true;
        showGraphNumberAndYear(2,infoSelector,graphAnimationTime);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_2_1) {
        isGraphRow2Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph2ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function showGraph3InfoCall(infoSelector,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_3_2 && !isGraphRow3Reached[booleanNumber]) {
        isGraphRow3Reached[booleanNumber]=true;
        showGraphNumberAndYear(3,infoSelector,graphAnimationTime);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_3_1) {
        isGraphRow3Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph3ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function showGraph4InfoCall(infoSelector,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_4_2 && !isGraphRow4Reached[booleanNumber]) {
        isGraphRow4Reached[booleanNumber]=true;
        showGraphNumberAndYear(4,infoSelector,graphAnimationTime);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_4_1) {
        isGraphRow4Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph4ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function showGraph5InfoCall(infoSelector,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_5_2 && !isGraphRow5Reached[booleanNumber]) {
        isGraphRow5Reached[booleanNumber]=true;
        showGraphNumberAndYear(5,infoSelector,graphAnimationTime);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_5_1) {
        isGraphRow5Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph5ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function showGraph6InfoCall(infoSelector,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_6_2 && !isGraphRow6Reached[booleanNumber]) {
        isGraphRow6Reached[booleanNumber]=true;
        showGraphNumberAndYear(6,infoSelector,graphAnimationTime);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_6_1) {
        isGraphRow6Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph6ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function showGraph7InfoCall(infoSelector,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_7_2 && !isGraphRow7Reached[booleanNumber]) {
        isGraphRow7Reached[booleanNumber]=true;
        showGraphNumberAndYear(7,infoSelector,graphAnimationTime);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_7_1) {
        isGraphRow7Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph7ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function animateGraphRow1Call(selector,isGoingUp,color,height,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_1_2 && !isGraphRow1Reached[booleanNumber]) {
        isGraphRow1Reached[booleanNumber]=true;
        animateGraph(1,selector,isGoingUp,color,height);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_1_1) {
        isGraphRow1Reached[booleanNumber]=false;
        $(selector).html('');
    }
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

function animateGraphRow3Call(selector,isGoingUp,color,height,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_3_2 && !isGraphRow3Reached[booleanNumber]) {
        isGraphRow3Reached[booleanNumber]=true;
        animateGraph(3,selector,isGoingUp,color,height);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_3_1) {
        isGraphRow3Reached[booleanNumber]=false;
        $(selector).html('');
    }
}

function animateGraphRow4Call(selector,isGoingUp,color,height,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_4_2 && !isGraphRow4Reached[booleanNumber]) {
        isGraphRow4Reached[booleanNumber]=true;
        animateGraph(4,selector,isGoingUp,color,height);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_4_1) {
        isGraphRow4Reached[booleanNumber]=false;
        $(selector).html('');
    }
}

function animateGraphRow5Call(selector,isGoingUp,color,height,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_5_2 && !isGraphRow5Reached[booleanNumber]) {
        isGraphRow5Reached[booleanNumber]=true;
        animateGraph(5,selector,isGoingUp,color,height);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_5_1) {
        isGraphRow5Reached[booleanNumber]=false;
        $(selector).html('');
    }
}

function animateGraphRow6Call(selector,isGoingUp,color,height,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_6_2 && !isGraphRow6Reached[booleanNumber]) {
        isGraphRow6Reached[booleanNumber]=true;
        animateGraph(6,selector,isGoingUp,color,height);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_6_1) {
        isGraphRow6Reached[booleanNumber]=false;
        $(selector).html('');
    }
}

function animateGraphRow7Call(selector,isGoingUp,color,height,booleanNumber) {
    if ($(window).scrollTop()>TRIGGER_SCROLL_GRAPH_7_2 && !isGraphRow7Reached[booleanNumber]) {
        isGraphRow7Reached[booleanNumber]=true;
        animateGraph(7,selector,isGoingUp,color,height);
    }
    else if ($(window).scrollTop()<TRIGGER_SCROLL_GRAPH_7_1) {
        isGraphRow7Reached[booleanNumber]=false;
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