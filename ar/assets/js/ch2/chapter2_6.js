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
	    }, 1000/blockCount*i);
	}


$(document).ready(function(){
animateGraph(3,'#bar1_0',true,'Grey',100);
});