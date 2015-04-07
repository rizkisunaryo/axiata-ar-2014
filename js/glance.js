var isPercentageReached=[false,false,false,false,false];

var isGraphRow1Reached=[false,false,false,false,false,false,false,false,false,false,false];
var isGraphRow2Reached=[false,false,false,false,false,false,false,false,false,false,false];
var isGraphRow3Reached=[false,false,false,false,false,false,false,false,false,false,false];
var graphRow1InfoSelector = ".graphRow1Number, .graphRow1Year";
var graphRow2InfoSelector = ".graphRow2Number, .graphRow2Year";
var graphRow3InfoSelector = ".graphRow3Number, .graphRow3Year";

var graph1ToFunctionArray=[];
var graph2ToFunctionArray=[];
var graph3ToFunctionArray=[];

var graphAnimationTime = 3000;

$(function(){
    toggleLeftHeaderMenu();
    reposAllDivs();

    $(window).resize(function(){
        reposAllDivs();
    });

    $(window).on('scroll', function(){
        console.log($(window).height()+":"+$(window).scrollTop());
        fromZero('#revenue',87,0);
        fromZero('#ebitda',69,1);
        fromZero('#pat',66,2);
        fromZero('#subscribers',565,3);
        fromZero('#marketcap',345,4);
        scrollHeader();
        scrollGlanceBg();
        animateLeftRightKeyHL();

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
    });
});

function getScroll() {
    return $(window).scrollTop()-$(window).height();
}

function scrollHeader() {
    var headerTransformY = ($(window).height()-80)-$(window).scrollTop();
    headerTransformY = headerTransformY>0? 0 : headerTransformY;
    $('.kepalaGlance').css({transform: 'translate(0,'+headerTransformY+'px)'});
}

function scrollGlanceBg() {
    // if ($(window).scrollTop()<=$(window).height()+15) {
    // if ($(window).scrollTop()<=1500) {
    if (getScroll()<1770) {
        $('#glanceBg').css({transform: 'translate(0,'+$(window).scrollTop()+'px)'});
    }
    else {
        $('#glanceBg').css({transform: 'translate(0,'+($(window).height()+1770)+'px)'});
    }
}

function toggleLeftHeaderMenu() {
    $("#left-header-btn").click(function(event){
        event.stopPropagation();
        $( "#left-header-menu" ).toggle( "slow");
    });
}

function fromZero(selector,toNumber,booleanNumber) {
    if (getScroll()>920 && !isPercentageReached[booleanNumber]) {
        isPercentageReached[booleanNumber]=true;
        $(selector).text(0);
        $({someValue: 0}).animate({someValue: toNumber}, {
            duration: 3000,
            easing:'swing', // can be anything
            step: function() { // called on every step
                // Update the element's text with rounded-up value:
                $(selector).text(Math.round(this.someValue));
            }
        });
    }
    else if (getScroll()<740) {
        isPercentageReached[booleanNumber]=false;
    }
}

function reposAllDivs() {
    var dividerTop = $(window).height()-750;
    var glanceBgTop = dividerTop-747;
    var text1Top = glanceBgTop+$(window).height()-80;

    $('#divider').css({top:dividerTop+'px'});
    $('#glanceBg').css({top:glanceBgTop+'px'});
    $('#text1').css({top:text1Top+'px'});
}

function animateLeftRightKeyHL() {
    var vBasicOpacity = 0.0;
    if (getScroll()<=1970) {
        $('.leftKeyHL').css({transform: 'translate(0,0)'});
        $('.rightKeyHL').css({transform: 'translate(0,0)'});
        $('.leftKeyHL, .rightKeyHL').css({opacity:vBasicOpacity});
    }
    else if (getScroll()<2490) {
        var x = (getScroll()-1970);
        $('.leftKeyHL').css({transform: 'translate('+x+'px,0)'});
        $('.rightKeyHL').css({transform: 'translate('+(-x)+'px,0)'});
        $('.leftKeyHL, .rightKeyHL').css({opacity:vBasicOpacity+x/500});
    }
    else {
        $('.leftKeyHL').css({transform: 'translate(520px,0)'});
        $('.rightKeyHL').css({transform: 'translate(-520px,0)'});
        $('.leftKeyHL, .rightKeyHL').css({opacity:'1.0'});
    }
}

function showGraph1InfoCall(infoSelector,booleanNumber) {
    if (getScroll()>2900 && !isGraphRow1Reached[booleanNumber]) {
        isGraphRow1Reached[booleanNumber]=true;
        showGraphNumberAndYear(1,infoSelector,graphAnimationTime);
    }
    else if (getScroll()<2675) {
        isGraphRow1Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph1ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function showGraph2InfoCall(infoSelector,booleanNumber) {
    if (getScroll()>3230 && !isGraphRow2Reached[booleanNumber]) {
        isGraphRow2Reached[booleanNumber]=true;
        showGraphNumberAndYear(2,infoSelector,graphAnimationTime);
    }
    else if (getScroll()<2960) {
        isGraphRow2Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph2ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function showGraph3InfoCall(infoSelector,booleanNumber) {
    if (getScroll()>3610 && !isGraphRow3Reached[booleanNumber]) {
        isGraphRow3Reached[booleanNumber]=true;
        showGraphNumberAndYear(3,infoSelector,graphAnimationTime);
    }
    else if (getScroll()<3320) {
        isGraphRow3Reached[booleanNumber]=false;
        $(infoSelector).css({opacity:'0.0'});
        graph3ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function animateGraphRow1Call(selector,isGoingUp,color,height,booleanNumber) {
    if (getScroll()>2900 && !isGraphRow1Reached[booleanNumber]) {
        isGraphRow1Reached[booleanNumber]=true;
        animateGraph(1,selector,isGoingUp,color,height);
    }
    else if (getScroll()<2675) {
        isGraphRow1Reached[booleanNumber]=false;
        $(selector).html('');
    }
}

function animateGraphRow2Call(selector,isGoingUp,color,height,booleanNumber) {
    if (getScroll()>3230 && !isGraphRow2Reached[booleanNumber]) {
        isGraphRow2Reached[booleanNumber]=true;
        animateGraph(2,selector,isGoingUp,color,height);
    }
    else if (getScroll()<2960) {
        isGraphRow2Reached[booleanNumber]=false;
        $(selector).html('');
    }
}

function animateGraphRow3Call(selector,isGoingUp,color,height,booleanNumber) {
    if (getScroll()>3610 && !isGraphRow3Reached[booleanNumber]) {
        isGraphRow3Reached[booleanNumber]=true;
        animateGraph(3,selector,isGoingUp,color,height);
    }
    else if (getScroll()<3320) {
        isGraphRow3Reached[booleanNumber]=false;
        $(selector).html('');
    }
}

function animateGraph(rowNumber,selector,isGoingUp,color,height) {
    var facingLeft = false;
    var facing = '';
    var top=6;
    if (!isGoingUp) top=-6;
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
    else {
        graph3ToFunctionArray.push(functionName);
    }
}