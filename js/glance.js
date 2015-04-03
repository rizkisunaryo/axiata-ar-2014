var isPercentageReached=[false,false,false,false,false];

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
    });
});

function scrollHeader() {
    var headerTransformY = ($(window).height()-80)-$(window).scrollTop();
    headerTransformY = headerTransformY>0? 0 : headerTransformY;
    $('.kepalaGlance').css({transform: 'translate(0,'+headerTransformY+'px)'});
}

function scrollGlanceBg() {
    // if ($(window).scrollTop()<=$(window).height()+15) {
    // if ($(window).scrollTop()<=1500) {
    if ($(window).scrollTop()-$(window).height()<1550) {
        $('#glanceBg').css({transform: 'translate(0,'+$(window).scrollTop()+'px)'});
    }
}

function toggleLeftHeaderMenu() {
    $("#left-header-btn").click(function(event){
        event.stopPropagation();
        $( "#left-header-menu" ).toggle( "slow");
    });
}

function fromZero(selector,toNumber,booleanNumber) {
    if ($(window).scrollTop()-$(window).height()>920 && !isPercentageReached[booleanNumber]) {
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
    else if ($(window).scrollTop()-$(window).height()<740) {
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