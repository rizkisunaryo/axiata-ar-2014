(function(a){a.fn.dzsparallaxer=function(b){if("undefined"==typeof b&&"undefined"!=typeof a(this).attr("data-options")&&""!=a(this).attr("data-options")){var g=a(this).attr("data-options");eval("var aux_opts = "+g);b=aux_opts}b=a.extend({settings_mode:"scroll",mode_scroll:"normal",easing:"easeIn",animation_duration:"20",direction:"normal",settings_makeFunctional:!1},b);Math.easeIn=function(a,b,g,q){return-g*(a/=q)*(a-2)+b};Math.easeOutQuad=function(a,b,g,q){a/=q;return-g*a*(a-2)+b};Math.easeInOutSine=
    function(a,b,g,q){return-g/2*(Math.cos(Math.PI*a/q)-1)+b};this.each(function(){function g(){if(!v){v=!0;a(window).bind("resize",D);D();setTimeout(D,1E3);c.hasClass("simple-parallax")?l.wrap('<div class="simple-parallax-inner"></div>'):K();setTimeout(function(){},1500);if(c.hasClass("use-loading")){if(0<c.find(".divimage").length||0<c.children("img").length){if(0<c.find(".divimage").length){E&&c.find(".divimage").eq(0).css("background-image","url("+E+")");var f=String(c.find(".divimage").eq(0).css("background-image")).split('"')[1];
    void 0==f&&(f=String(c.find(".divimage").eq(0).css("background-image")).split("url(")[1],f=String(f).split(")")[0]);var d=new Image;d.onload=function(a){c.addClass("loaded")};d.src=f}}else c.addClass("loaded");setTimeout(function(){c.addClass("loaded");J()},1E4)}"scroll"==b.settings_mode&&(a(window).unbind("scroll",w),a(window).bind("scroll",w),w(),document.addEventListener("touchmove",q,!1));"mouse_body"==b.settings_mode&&a(document).bind("mousemove",q)}}function D(){c.width();r=a(window).height();
    !1!==v&&(F&&clearTimeout(F),F=setTimeout(J,700))}function J(){h=c.height();k=l.height();r=a(window).height();0==c.hasClass("allbody")&&0==c.hasClass("dzsparallaxer---window-height")&&(k<=G&&0<k?(c.height(k),h=c.height(),is_ie()&&10>=version_ie()?l.css("top","0"):l.css("transform","translate3d(0,0px,0)"),x&&x.css("opacity","0")):c.height(G));l.attr("data-forcewidth_ratio")&&(l.width(Number(l.attr("data-forcewidth_ratio"))*l.height()),l.width()<c.width()&&l.width(c.width()))}function q(a){n=a.pageY;
    a=0;0!=k&&(a=n/r*(h-k),m=n/h,0<a&&(a=0),a<h-k&&(a=h-k),1<m&&(m=1),0>m&&(m=0),H=a)}function w(f){n=a(window).scrollTop();p=0;!1===v&&(r=a(window).height(),n+r>=c.offset().top&&g());0!=k&&!1!==v&&"scroll"==b.settings_mode&&("fromtop"==b.mode_scroll&&(p=n/k*(h-k),"reverse"==b.direction&&(p=(1-n/k)*(h-k))),"normal"==b.mode_scroll&&(t=c.offset().top,f=(n-(t-r))/(t+h-(t-r)),1<f&&(f=1),0>f&&(f=0),p=f*(h-k),"reverse"==b.direction&&(p=(1-f)*(h-k)),c.hasClass("debug-target")&&console.info(b.mode_scroll,n,t,
    r,h,t+h,f)),m=n/h,0<p&&(p=0),p<h-k&&(p=h-k),1<m&&(m=1),0>m&&(m=0),H=p,L=m,time=0)}function K(){y=u;B=H-y;z=A;C=L-z;"easeIn"==b.easing&&(u=Math.easeIn(1,y,B,s),A=Math.easeIn(1,z,C,s));"easeOutQuad"==b.easing&&(u=Math.easeOutQuad(1,y,B,s),A=Math.easeOutQuad(1,z,C,s));"easeInOutSine"==b.easing&&(u=Math.easeInOutSine(1,y,B,s),A=Math.easeInOutSine(1,z,C,s));is_ie()&&10>=version_ie()?l.css("top",""+u+"px"):l.css("transform","translate3d(0,"+u+"px,0)");x&&x.css("opacity",A);requestAnimFrame(K)}var c=a(this),
    l=null,x=null,k=0,h=0,r=0,G=0,F=0,s=20,u=0,A=0,y=0,z=0,H=0,L=0,B=0,C=0,n=0,p=0,m=0,t=0,E="",v=!1;(function(){if(1==b.settings_makeFunctional){var f=!1,d=document.URL,m=d.indexOf("://")+3,n=d.indexOf("/",m),d=d.substring(m,n);-1<d.indexOf("l")&&-1<d.indexOf("c")&&-1<d.indexOf("o")&&-1<d.indexOf("l")&&-1<d.indexOf("a")&&-1<d.indexOf("h")&&(f=!0);-1<d.indexOf("d")&&-1<d.indexOf("i")&&-1<d.indexOf("g")&&-1<d.indexOf("d")&&-1<d.indexOf("z")&&-1<d.indexOf("s")&&(f=!0);-1<d.indexOf("o")&&-1<d.indexOf("z")&&
-1<d.indexOf("e")&&-1<d.indexOf("h")&&-1<d.indexOf("t")&&(f=!0);-1<d.indexOf("e")&&-1<d.indexOf("v")&&-1<d.indexOf("n")&&-1<d.indexOf("a")&&-1<d.indexOf("t")&&(f=!0);if(0==f)return}l=c.find(".dzsparallaxer--target").eq(0);0<c.find(".dzsparallaxer--blackoverlay").length&&(x=c.find(".dzsparallaxer--blackoverlay").eq(0));setTimeout(function(){s=Number(b.animation_duration)},100);h=c.height();l&&(k=l.height());G=h;0<c.find(".divimage").length||0<c.find("img").length?(f=c.children(".divimage, img").eq(0),
    f.attr("data-src")?(E=f.attr("data-src"),a(window).bind("scroll",w),w()):g()):g()})()})};window.dzsprx_init=function(b,g){if("undefined"!=typeof g&&"undefined"!=typeof g.init_each&&1==g.init_each){var I=0;for(e in g)I++;1==I&&(g=void 0);a(b).each(function(){a(this).dzsparallaxer(g)})}else a(b).dzsparallaxer(g)}})(jQuery);function is_touch_device(){return!!("ontouchstart"in window)}
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();function is_ie(){return-1!=navigator.appVersion.indexOf("MSIE")?!0:!1}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}
jQuery(document).ready(function(a){a(".dzsparallaxer---window-height").each(function(){function b(){var b=a(window).height();g.height(b)}var g=a(this);a(window).bind("resize",b);b()});dzsprx_init(".dzsparallaxer.auto-init",{init_each:!0})});