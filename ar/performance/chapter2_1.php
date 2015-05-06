<?php

    include("../inc/header.php");

?>
<link rel="stylesheet" href="../assets/css/ch2/chapter2_1.css">

		<div id="scrollTrigger90px" style="position:fixed; top:90px; z-index:1000;"></div>
		<div id="scrollTrigger10" style="position:fixed; top:10%; z-index:1000;"></div>
		<div id="scrollTrigger20" style="position:fixed; top:20%; z-index:1000;"></div>
		<div id="scrollTrigger25" style="position:fixed; top:25%; z-index:1000;"></div>
		<div id="scrollTrigger30" style="position:fixed; top:30%; z-index:1000;"></div>
		<div id="scrollTrigger40" style="position:fixed; top:40%; z-index:1000;"></div>
		<div id="scrollTrigger50" style="position:fixed; top:50%; z-index:1000;"></div>
		<div id="scrollTrigger60" style="position:fixed; top:60%; z-index:1000;"></div>
		<div id="scrollTrigger70" style="position:fixed; top:70%; z-index:1000;"></div>
		<div id="scrollTrigger75" style="position:fixed; top:75%; z-index:1000;"></div>
		<div id="scrollTrigger80" style="position:fixed; top:80%; z-index:1000;"></div>
		<div id="scrollTrigger90" style="position:fixed; top:90%; z-index:1000;"></div>
		<div id="scrollTrigger100" style="position:fixed; top:100%; z-index:1000;"></div>

		<section id="keyHighlightsSection ">
			<div style="width:960px; margin:0 auto; padding:55px; margin-top:90px; height:910px; box-sizing:border-box; " class="animatedParent">
				<div style="margin-top:0px; animated fadeIn"><img src="../assets/img/chapter2/1/key-highlights.png"></div>
				<!-- <div style="margin-top:40px;">
					<div id="leftCol" style="position:relative; left:-300px; opacity:0; margin-top:0px;">
						<div style="margin-top:0px;"><img src="../assets/img/chapter2/1/260-million.png"></div>
						<div style="margin-top:30px;"><img src="../assets/img/chapter2/1/6th.png"></div>
					</div>
					<div id="rightCol" style="position:relative; left:300px; opacity:0; margin-top:-437px; margin-left:460px;">
						<div style="margin-top:0px;"><img src="../assets/img/chapter2/1/18.png"></div>
						<div style="margin-top:68px;"><img src="../assets/img/chapter2/1/rm4-billion.png"></div>
					</div>
				</div> -->
				<!-- my part -->
				<div style="margin-top:40px; ">
					<div id="leftCol" style="position:relative; left:-300px; opacity:0; margin-top:0px; width:394px;">
						<div style="margin-top:0px;">
							<div class="block">
							<div class="header grey_txt small-med_txt"> 
							<div id="counter1" data-decimal="0" data-max="260" class="counterup red_txt bold counter" style="font-size:80px;  margin-bottom: -16px;">0</div>million<br>
							<div style="padding-top:0px;" class="small-med_txt">subscribers, 9% YoY growth</div>
							</div> 
							<div class="grey_txt small_txt">
							The Group closed 2014 with a total subscriber base of 266 million across Asia. This makes Axiata the second largest telecommunications company in Asia based on subscriber numbers.
							</div>
							</div>
						</div>
						<div style="margin-top:30px;">
							<div class="block">
							<div class="header grey_txt small-med_txt"> 
							<div style="padding-top:0px; text-align:left" class="big_txt bold red_txt">Asia Pacific’s Best Telecoms Group for the 6th consecutive year</div>
							</div> 
							<div class="grey_txt small_txt">
							Axiata continued to gain momentum in the industry by taking top honours as Best Telecoms Group for the sixth consecutive year at the Frost & Sullivan 2014 Asia Pacific ICT Awards. The award is granted to the operator that has shown exemplary growth and performance through its investments in the region.
							</div>
							</div>
						</div>
					</div>
					<div id="rightCol" style="position:relative; left:300px; opacity:0; margin-top:-501px; margin-left:460px; width:394px;">
						<div style="margin-top:0px;">
							<div class="block">
							<div class="header grey_txt small-med_txt"> 
							<div id="counter2" data-decimal="0" data-max="18" class="counterup red_txt bold counter" style="font-size:73px;  margin-bottom: -16px;">0</div><br>
							<div style="padding-top:0px;" class="small-med_txt">Digital Business Units</div>
							</div> 
							<div class="grey_txt small_txt">
							Continued focus on digital services with five new strategic partnerships as well as services and venture launched in 2014.
							</div>
							</div>
						</div>
						<div style="margin-top:30px;">
							<div class="block">
							<div class="header grey_txt small-med_txt bold red_txt" style="font-size:68px;"> 
							RM <div id="counter3" data-decimal="0" data-max="4" class="counterup red_txt bold counter" style="font-size:68px; margin-left: -23px; margin-bottom: -16px;">0</div>&nbsp;billion<br>
							<div style="padding-top:0px;" class="small-med_txt">Capex Invested across the Axiata footprint</div>
							</div> 
							<div class="grey_txt small_txt">
							Advancing Asia by increasing connectivity, enhancing reliability and access for over 260 million people.
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
<?php
    include("../inc/footer.php");
?>
		<style type="text/css">
		.block{

		}
		.block .header div{
			display: inline-block;
		}
		.block .header{
		  padding-bottom: 10px;
		  border-bottom: 2px dashed #C40D42;
		  margin-bottom: 10px;

		}
		</style>
		<script type="text/javascript">
			$(function() {
				setTimeout(function(){
					$( "#leftCol,#rightCol" ).animate({
					    left:0,
					    opacity:1
					  }, 1000, function() {
					  });
				},400)
				
			});
			function countWithDecimal()
  {
    $('.counterup').each(function(){
      
      var options = {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.', 
        prefix : '', 
        suffix : '' 
      };
      
      
      var max=Number($(this).data('max'));
      var noOfDecimal = Number($(this).data('decimal'));
      var x =new countUp($(this).attr('id'), 0, max, noOfDecimal, 2.5, options);
      x.start();
    });

  }
  $(document).ready(function(){
  setTimeout(function(){countWithDecimal();},300);
  });
		</script>