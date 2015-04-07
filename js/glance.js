var isPercentageReached=[false,false,false,false,false];
var isGraphRow1Reached=[false,false,false,false,false,false,false,false,false,false];
var graphToFunctionArray=[];
var graphAnimationTime = 3000;
var graphRow1InfoSelector = ".graphRow1Number, .graphRow1Year";

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

        animateGraphRow1Call(graphRow1InfoSelector,"#graph11","Grey",15,0);
        animateGraphRow1Call(graphRow1InfoSelector,"#graph12","Grey",16,1);
        animateGraphRow1Call(graphRow1InfoSelector,"#graph13","Grey",17,2);
        animateGraphRow1Call(graphRow1InfoSelector,"#graph14","Grey",18,3);
        animateGraphRow1Call(graphRow1InfoSelector,"#graph15","Red",19,4);
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

function animateGraphRow1Call(infoSelector,selector,color,height,booleanNumber) {
    if (getScroll()>2900 && !isGraphRow1Reached[booleanNumber]) {
        isGraphRow1Reached[booleanNumber]=true;
        animateGraph(selector,color,height);
        showGraphNumberAndYear(infoSelector,graphAnimationTime);
    }
    else if (getScroll()<2675) {
        isGraphRow1Reached[booleanNumber]=false;
        $(selector).html('');
        $(infoSelector).css({opacity:'0.0'});
        graphToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        });
    }
}

function animateGraph(selector,color,height) {
    var facingLeft = false;
    var facing = '';
    var top=6;
    var left=0;
    var opacity=1.0;
    
    for (i1=1;i1<=height*4;i1++) {
        if (i1%2==0) {
            facingLeft=!facingLeft;
            left=12;
        } else {
            top-=6;
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
        animateGraphAction(selector,html,i1,height*4);
    }
}

function animateGraphAction(selector,html,i,blockCount) {
    var graphToFunction = setTimeout(function(){ 
        $(selector).append(html);
    }, graphAnimationTime/blockCount*i);
    graphToFunctionArray.push(graphToFunction);
}

function showGraphNumberAndYear(selector,delay) {
    var graphToFunction = setTimeout(function(){ 
        $(selector).fadeTo("slow", 1.0);
    }, delay);
    graphToFunctionArray.push(graphToFunction);
}