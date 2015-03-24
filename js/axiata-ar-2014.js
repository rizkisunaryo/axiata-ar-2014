var $root = $('html, body');

$(function(){
    parallaxEffect();
    toggleLeftHeaderMenu();
    toggleCategoryMenu();
    toggleCategoryMenuByThisCat();
    scrollToSection();

    reposLeftWhiteBorder();
    reposRightWhiteBorder();
    reposMediaAndContentByResize();
    reposOpeningVideo();
    $(window).resize(function(){
        reposLeftWhiteBorder();
        reposRightWhiteBorder();
        reposMediaAndContentByResize();
        reposOpeningVideo();
    });

    $(window).on('scroll', function(){
        scrollHeader();
    });
});

function parallaxEffect() {
    var parallaxes = $('[data-scroll-resistance]');
    $(window).on('scroll', function(){
        // console.log('window height:'+$(window).height()+', scroll:'+$(window).scrollTop());

        parallaxes.each(function() {
            var scrollResistance = parseFloat($(this).data("scroll-resistance"));
            var windowScroll = parseInt($(window).scrollTop());
            var moveY = -windowScroll/scrollResistance;
            $(this).css({transform: 'translate(0,'+moveY+'px)'});
            $(this).css({msTransform: 'translate(0,'+moveY+'px)'});
            $(this).css({webkitTransform: 'translate(0,'+moveY+'px)'});
        });
    });
}

function toggleLeftHeaderMenu() {
    $("#left-header-btn").click(function(event){
        event.stopPropagation();
        $( "#left-header-menu" ).toggle( "slow");
    });
}

function toggleCategoryMenu() {
    $(".category-menu").click(function(event){
        event.stopPropagation();
        var thisCatSize = parseInt($('.this-category').css('font-size'));
        if (thisCatSize==22) {
            $('.this-category').css({fontSize:'34px'});
            $('.this-category').css({marginTop:'22px'});
            $( ".category-explanation" ).show( "slow");
            $( ".not-top-category-menu" ).show( "slow");
        } 
        // else {
        //     $('.this-category').css({fontSize:'22px'});
        //     $('.this-category').css({marginTop:'30px'});
        // }
    });
}

function toggleCategoryMenuByThisCat() {
    $(".this-category").click(function(event){
        event.stopPropagation();
        var thisCatSize = parseInt($(this).css('font-size'));
        if (thisCatSize==22) {
            $('.this-category').css({fontSize:'34px'});
            $('.this-category').css({marginTop:'22px'});
            $( ".category-explanation" ).show( "slow");
            $( ".not-top-category-menu" ).show( "slow");
        } else if (thisCatSize==34) {
            $('.this-category').css({fontSize:'22px'});
            $('.this-category').css({marginTop:'30px'});
            $( ".category-explanation" ).hide( "slow");
            $( ".not-top-category-menu" ).hide( "slow");
        }
    });
}

function scrollToSection() {
    $('.to-top').click(function(){
        var toY = $(window).height() - 180;
        $root.animate({
            scrollTop: toY
        }, 1500);
        return false;
    });

    $('.to-governance').click(function(){
        var toY = $(window).height() + 6397;
        $root.animate({
            scrollTop: toY
        }, 1500);
        return false;
    });

    $('.to-sustainability').click(function(){
        var toY = $(window).height() + 7156;
        $root.animate({
            scrollTop: toY
        }, 1500);
        return false;
    });
}

function reposContent() {
    var windowHeight = $(window).height();
    // var contentY = windowHeight-635-90;
    $('.content').css({top: contentY+'px'});
}

function reposLeftWhiteBorder() {
    var windowWidth = $(window).width();
    var centerContentWidth = 960;
    var leftBorderWidth = $('.left-border').width();
    var leftBorderX = ((windowWidth-centerContentWidth)/2) - leftBorderWidth + 700;
    $('.left-border').css({transform: 'translate('+leftBorderX+'px,0)'});
    $('.left-border').css({msTransform: 'translate('+leftBorderX+'px,0)'});
    $('.left-border').css({webkitTransform: 'translate('+leftBorderX+'px,0)'});
}

function reposRightWhiteBorder() {
    var windowWidth = $(window).width();
    var centerContentWidth = 960;
    var rightBorderWidth = $('.right-border').width();
    var rightBorderX = ((windowWidth-centerContentWidth)/2) + rightBorderWidth - 1020;
    $('.right-border').css({transform: 'translate('+rightBorderX+'px,0)'});
    $('.right-border').css({msTransform: 'translate('+rightBorderX+'px,0)'});
    $('.right-border').css({webkitTransform: 'translate('+rightBorderX+'px,0)'});
}

function reposMediaAndContentByResize() {
    var windowHeight = $(window).height();
    var contentMenuHeight = 90;
    var contentY = windowHeight-635-contentMenuHeight;
    $('.content').css({top: contentY+'px'});
    
    var mediaY = windowHeight-635;
    $('.media').css({top: mediaY/2+'px'});
}

function scrollHeader() {
    var headerTransformY = ($(window).height()-180)-$(window).scrollTop();
    headerTransformY = headerTransformY>0? 0 : headerTransformY;
    $('.kepala').css({transform: 'translate(0,'+headerTransformY+'px)'});
}

function reposOpeningVideo() {
    var vidRatio = 2048/1536;
    var winRatio = $(window).width() / $(window).height();
    if (vidRatio<winRatio) {
        // VIDEO POSITION
        var wH = $(window).height();
        var wW = wH*vidRatio;
        var vidLeft = ($(window).width()-wW)/2;
        $('#bgvid').css({'top':'0'});
        $('#bgvid').css({'left':vidLeft+'px'});
        // SKIP BUTTON POSITION
        var buttonTop = wH-$('#vidskip').height();
        var buttonLeft = vidLeft+wW-$('#vidskip').width();
        $('#vidskip').css({'top':buttonTop-20+'px'});
        $('#vidskip').css({'left':buttonLeft-20+'px'});
    } else {
        // VIDEO POSITION
        var wW = $(window).width();
        var wH = wW/vidRatio;
        var vidTop = ($(window).height()-wH)/2;
        $('#bgvid').css({'left':'0'});
        $('#bgvid').css({'top':vidTop+'px'});
        // SKIP BUTTON POSITION
        var buttonLeft = wW-$('#vidskip').width();
        var buttonTop = vidTop+wH-$('#vidskip').height();
        $('#vidskip').css({'left':buttonLeft-20+'px'});
        $('#vidskip').css({'top':buttonTop-20+'px'});
    }
}