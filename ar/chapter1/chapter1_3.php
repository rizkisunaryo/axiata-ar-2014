<?php

    include("../inc/header.php");

?>
<link rel="stylesheet" href="../assets/css/ch1/chapter1_3.css">

		<div id="scrollTriggerTop" style="position:fixed; top:90px; z-index:1000;"></div>
		<div id="scrollTriggerMiddle" style="position:fixed; top:50%; z-index:1000;"></div>
		<div id="scrollTriggerBottom" style="position:fixed; top:100%; z-index:1000;"></div>

		<section id="sharePricePerformance" style="margin-top:90px;">
      <div style="position:relative; background-color:#ffffff; height:1450px; max-width:960px; width:100%; margin:0 auto; padding:35px; box-sizing:border-box;">
        <div style="position:relative;">
          <div style="position:relative; font-size:26px;" class="title grey8Color">Share Price</div>
          <div style="position:relative; font-size:33px;" class="title maroonColor">Performance</div>
          <div style="position:relative; font-size:16px; margin-top:15px;" class="title">Axiata Share Price vs FTSE Bursa Malaysia KLCI 2009 &ndash; 2014</div>
        </div>
        <div style="position:relative; margin-top:15px;">
          <div style="position:relative;">
            <img src="../assets/img/chapter1/3/chart-numbers-1.png" />
          </div>
          <div id="greyGraphLine1" style="position:relative; margin-top:-365px; width:0px; overflow:hidden;">
            <img src="../assets/img/chapter1/3/grey-line-1.png" />
          </div>
          <div id="redGraphLine1" style="position:relative; margin-top:-440px; width:0px; overflow:hidden;">
            <img src="../assets/img/chapter1/3/red-line-1.png" />
          </div>
          <div id="bottomGraphTrigger1" style="position:absolute; top:300px;"></div>
        </div>
        <div style="position:relative; margin-top:150px;">
          <div style="position:relative;">
            <img src="../assets/img/chapter1/3/chart-numbers-2.png" />
          </div>
          <div id="greyGraphLine2" style="position:relative; margin-top:-415px; width:0px; overflow:hidden;">
            <img src="../assets/img/chapter1/3/grey-line-2.png" />
          </div>
          <div id="redGraphLine2" style="position:relative; margin-top:-500px; width:0px; overflow:hidden;">
            <img src="../assets/img/chapter1/3/red-line-2.png" />
          </div>
          <div id="bottomGraphTrigger2" style="position:absolute; top:300px;"></div>
        </div>
      </div>
    </section>
		
<?php
    include("../inc/footer.php");
?>
		
		<script type="text/javascript">
		var isGraphRowReached = [false,false];
		var graphToFunctionArray = [];

	  $(function () {
			animateGraphLine(1);
      animateGraphLine(2);
			$(window).on('scroll', function(){
        animateGraphLine(1);
        animateGraphLine(2);
			});
		});

	  var animationTime=1500;
		function animateGraphLine(graphNumber) {
	    var greySelector = "#greyGraphLine"+graphNumber;
	    var redSelector = "#redGraphLine"+graphNumber;
	    var bottomGraphTrigger = "#bottomGraphTrigger"+graphNumber;

	    if ($('#scrollTriggerBottom').offset().top<$(greySelector).offset().top) {
	        isGraphRowReached[graphNumber-1]=false;
	        if (graphToFunctionArray[graphNumber]!=null) {
		        clearTimeout(graphToFunctionArray[graphNumber]);
		      }
		      $(greySelector).stop();
	        // $(greySelector).css('width','0px');
	        // $(redSelector).css('width','0px');
	    }
	    else if ($('#scrollTriggerBottom').offset().top>=$(bottomGraphTrigger).offset().top && !isGraphRowReached[graphNumber-1]) {
	        isGraphRowReached[graphNumber-1]=true;
	        $( greySelector ).animate({
	            width: 780
	        }, animationTime, function() {
	            // Animation complete.
	        });

	        var redGraphTo = setTimeout(function(){ 
	        	$( redSelector ).animate({
	            width: 780
		        }, animationTime, function() {
		            // Animation complete.
		        });
	    		}, 2000);
	    		graphToFunctionArray[graphNumber]=redGraphTo;
	    }
		}
		</script>