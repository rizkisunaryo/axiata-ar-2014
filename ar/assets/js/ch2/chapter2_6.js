function animateGraph(rowNumber,selector,isGoingUp,color,height) {
	    var facingLeft = false;
	    var facing = '';
	    var top=3;
	    if (!isGoingUp) top=0;
	    var left=0;
	    var opacity=1.0;
	    
	    for (i1=1;i1<=height*4;i1++) {
	        if (i1%2==0) {
	            facingLeft=!facingLeft;
	            left=6;
	        } else {
	            if (isGoingUp) top-=3;
	            else top+=3;
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
	    }, 1000/blockCount*i);
	}

    sizes=[[[14,10,6],[14,10,6],[14,10,6],[14,10,6],[14,10,6]],
               [[15,7,4],[16,7,4],[17,8,4],[18,8,5],[17,7,6]],
               [[11,6,2],[12,6,2],[14,6,2],[15,6,2],[16,7,2]],
               [[13,8,3],[13,8,3],[14,8,3],[13,6,2],[16,6,2]],
               [[11,5,2],[12,5,2],[14,6,1],[15,7,2],[16,8,1]],
               [[4,1,1],[4,1,2],[4,1,2],[8,4,2],[14,6,3]]];
    graph_colors=['-','Blue','Orange','Purple','Red','Green'];  
    function animateGraph_onegraph(k){
        var up=true;
        for(i=0; i<5;i++){
                    if(i==4 && k==3){up=false;}
                    else if(i==1 && k==4){up=false;}
                    else if((i==0 || i==1 || i==2)&& k==5){up=false;}
                    else{ up=true;}
            
                    animateGraph(1,".report_chart_"+k+" #bar"+i+"_0",true," "+graph_colors[k]+"1 smallTriangle",sizes[k][i][0]);
                    animateGraph(1,".report_chart_"+k+" #bar"+i+"_1",true," "+graph_colors[k]+"2 smallTriangle",sizes[k][i][1]);
                    animateGraph(1,".report_chart_"+k+" #bar"+i+"_2",up," "+graph_colors[k]+"3 smallTriangle",sizes[k][i][2]);
                } 
        
    }
function zoomElement(elementClass){
    selector="."+elementClass;
    $(selector).find('.fa-search-plus').toggle();
    $(selector).find('.fa-search-minus').toggle();
    if($(selector).hasClass('zoomedTo'))
    {
        $('body').zoomTo({targetsize:1, duration:300});
        $(selector).removeClass('zoomedTo');
    }
    else
    {
        $(selector).zoomTo({targetsize:0.75, duration:300});
        $(selector).addClass('zoomedTo');
    }
    
}
$(document).ready(function(){
//animateGraph(1,"#bar1_0",true," Red smallTriangle",12);
    $('.section1').fadeIn();
    setTimeout(function(){animateGraph_onegraph(1);},400);
    setTimeout(function(){animateGraph_onegraph(5);},800);
    setTimeout(function(){animateGraph_onegraph(2);},1200);
    setTimeout(function(){animateGraph_onegraph(3);},1600);
    setTimeout(function(){animateGraph_onegraph(4);},2000);
    $('.zoom-in').click(function(ev){
            ev.preventDefault();
            var url = $(this).data('url');

            $.fancybox.open({
                href : url,
                type : 'iframe',
                openEffect : 'elastic',
                openSpeed  : 150,
                closeEffect : 'elastic',
                closeSpeed  : 150,
                width : '965px',
                height:'100%',
                padding: 0,
                margin: [90,0,0,0],
                scrolling   : 'no',
                 helpers : {
                    overlay : {
                        locked : false
                    }
                },
                beforeShow: function(){ 
                    $("body").css({'overflow-y':'hidden'});
                    //$('.fancybox-wrap').css('margin-left','-10px');
                },
                afterClose: function(){  $("body").css({'overflow-y':'visible'});   }
            });
        });
        
    
    
    $('depricated was .zoom-in').click(function(){
        zoomElement($(this).data('target'));
    });
    
});