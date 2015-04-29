<?php

    include("../inc/header.php");

?>
<link rel="stylesheet" href="../assets/css/ch1/chapter1_4.css">

		<div id="scrollTriggerTop" style="position:fixed; top:90px; z-index:1000;"></div>
		<div id="scrollTriggerMiddle" style="position:fixed; top:50%; z-index:1000;"></div>
		<div id="scrollTriggerBottom" style="position:fixed; top:100%; z-index:1000;"></div>

		<section id="disciplinedDividendPayout" style="margin-top:90px;">
      <div style="position:relative; background-color:#ffffff; height:1100px; width:960px; padding:35px; margin:0 auto; box-sizing:border-box;">
        <div style="position:relative;">
          <div style="position:relative; font-size:26px;" class="title grey8Color">Prudent and</div>
          <div style="position:relative; font-size:33px;" class="title maroonColor">Disciplined Dividend Payout</div>
          <div style="position:relative; font-size:16px; margin-top:15px;" class="title maroonColor">
            Axiata declared a 22 sen per share single tier dividend (including interim dividend of 8 sen per share paid last year), a dividend payout ratio of 84%, which marks a 9% increase from 2013’s ordinary dividend payout ratio of 75%. The increased Dividend Payout Ratio (DPR) of 84% takes into consideration Axiata’s financial performance, growth expansion strategies as well as dividends received from subsidiaries in FY2014. Management is committed to sustain positive performance with financial discipline, efficient cash management and prudent investments, and growth strategies moving forward.
          </div>
        </div>
        <div style="position:relative; margin-top:-80px;">
          <div style="position:relative; top:-800px;">
            <div style="position:absolute; left:91px; top:130px;">
              <img src="../assets/img/chapter1/4/bar-1-elements.png">
            </div>
            <div style="position:absolute; left:209px; top:179px;">
              <img src="../assets/img/chapter1/4/bar-2-elements.png">
            </div>
            <div style="position:absolute; left:354px; top:127px;">
              <img src="../assets/img/chapter1/4/bar-3-elements.png">
            </div>
            <div style="position:absolute; left:513px; top:174px;">
              <img src="../assets/img/chapter1/4/bar-4-elements.png">
            </div>
            <div style="position:absolute; left:608px; top:450px;">
              <img src="../assets/img/chapter1/4/bar-5-elements.png">
            </div>
          </div>
          <div id="graph3TriggerTop" style="position:absolute; top:-370px;"></div>
          <div id="graph3TriggerBottom" style="position:absolute;"></div>
          <div style="position:relative; width:590px; margin:0 auto; margin-top:800px;">
          	<div style="position:relative; left:-35px;">
	            <div style="position:relative; width:590px; height:6px; border-style:solid; border-top-style:none; border-width:1px; background-color:white; z-index:10;"></div>
	            <div id="graph31" style="position:absolute; top:-6px; left:34px;"></div>
	            <div id="graph32" style="position:absolute; top:-6px; left:156px;"></div>
	            <div id="graph33" style="position:absolute; top:-6px; left:278px;"></div>
	            <div id="graph34" style="position:absolute; top:-6px; left:400px;"></div>
	            <div id="graph35" style="position:absolute; top:-6px; left:522px;"></div>
	            <div style="position:relative; left:47px;" class="graphRow3Year">
	              <div class="graphYear" style="position:relative; top:-129px; left:-55px;">2010</div>
	              <div class="graphYear" style="position:relative; top:-145px; left:67px;">2011</div>
	              <div class="graphYear" style="position:relative; top:-162px; left:188px;">2012</div>
	              <div class="graphYear" style="position:relative; top:-178px; left:312px;">2013</div>
	              <div class="graphYear" style="position:relative; top:-194px; left:431px;">2014</div>
	            </div>
	          </div>
          </div>
        </div>
        <div style="position:absolute; top:1030px; left:130px; font-size:10px;">
        	* Inclusive of the special dividend paid<br />
  				DPS – Dividend Per Share
        </div>
      </div>
    </section>
		
<?php
    include("../inc/footer.php");
?>
		
		<script type="text/javascript">
		var isGraphRow3Reached=[false,false,false,false,false,false];
		var graphRow3InfoSelector = ".graphRow3Number, .graphRow3Year";
		var graph3ToFunctionArray=[];
		var graphAnimationTime = 1000;

	  $(function () {
			animateGraphRow3Call("#graph31",true,"Grey",9,0);
	    animateGraphRow3Call("#graph32",true,"Grey",19,1);
	    animateGraphRow3Call("#graph33",true,"Grey",21,2);
	    animateGraphRow3Call("#graph34",true,"Grey",22,3);
	    animateGraphRow3Call("#graph35",true,"Red",26,4);
	    $(window).on('scroll', function(){
	    	animateGraphRow3Call("#graph31",true,"Grey",9,0);
		    animateGraphRow3Call("#graph32",true,"Grey",19,1);
		    animateGraphRow3Call("#graph33",true,"Grey",21,2);
		    animateGraphRow3Call("#graph34",true,"Grey",22,3);
		    animateGraphRow3Call("#graph35",true,"Red",26,4);
	    });
		});

		function animateGraphRow3Call(selector,isGoingUp,color,height,booleanNumber) {
	    if ($('#scrollTriggerBottom').offset().top>$('#graph3TriggerBottom').offset().top && !isGraphRow3Reached[booleanNumber]) {
	        isGraphRow3Reached[booleanNumber]=true;
	        animateGraph(3,selector,isGoingUp,color,height);
	    }
	    else if ($('#scrollTriggerBottom').offset().top<$('#graph3TriggerTop').offset().top) {
	        isGraphRow3Reached[booleanNumber]=false;
	        graph3ToFunctionArray.forEach(function(entry) {
            clearTimeout(entry);
        	});
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
		</script>