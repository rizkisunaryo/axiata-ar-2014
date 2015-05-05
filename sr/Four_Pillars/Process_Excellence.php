<?php

    include("../inc/header.php");

?>
<link rel="stylesheet" href="../assets/js/fancybox/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
<link rel="stylesheet" href="../assets/js/fancybox/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
<link rel="stylesheet" href="../assets/js/fancybox/helpers/jquery.fancybox-buttons.css?v=1.0.5" type="text/css" media="screen" />
<link rel="stylesheet" href="../assets/css/Four_Pillars/Process_Excellence.css">

<div id="trigger100" style="position:fixed; top:100%;"></div>

<section id="dividerSection" style="margin-top:60px;">
	<div style="position:relative; width:960px; padding:0 55px; padding-top:50px; margin:0 auto; box-sizing:border-box; background-color:#a3195b;">
		<div style="position:relative; z-index:10;">
			<div class="title" style="color:#45033a; font-size:56px;">COMMITMENT TO</div>
			<div class="title" style="color:#fff; font-size:100px; margin-top:-12px;">PROCESS</div>
			<div class="title" style="color:#fff; font-size:71px; margin-top:-12px;">EXCELLENCE</div>
		</div>
		<div style="position:absolute; top:-70px; left:490px;"><img src="../assets/img/Four_Pillars/Process_Excellence/kite.png"></div>
	</div>
	<div style="width:960px; padding:0 55px; padding-top:50px; margin:0 auto; box-sizing:border-box; background-color:#a3195b; color:#fff;">
		<div style="width:570px; color:#fff;">
			<span class="title" style="color:#fff; font-size:21px;">Introduction</span><br />
			<br />
			Implementing transparent, effective, ethical and sustainable processes is how we build digital ecosystems and advance Asia. To be sustainable, businesses must empower and enhance the experiences of all stakeholders. In this section we discuss how we are advancing sustainable processes in our supply chain and among our retailers, and encouraging suppliers and retailers to integrate sustainability practices in their operations.<br />
			<br />
			We discuss customer relations, and our efforts at enhancing customer satisfaction and customer data protection systems across the Group. Integrating sustainability in our operations in a meaningful way has required us to digitise our operations as far as possible. We discuss the steps we have taken and the targets we have set in this regard.<br />
			<br />
			Sustainable governance processes are integral to sustainable operations. How we are advancing transparency within the Group, strengthening ethical processes, and ensuring business continuity are also discussed in this part of the report.
		</div>
	</div>
	<div style="width:960px; padding:0 55px; padding-top:30px; margin:0 auto; box-sizing:border-box; background-color:#a3195b;">
		<div id="img21" style="position:relative;"><img src="../assets/img/Four_Pillars/Process_Excellence/supply-chain.png"></div>
		<div id="img22" style="position:relative; margin-top:7px;"><img src="../assets/img/Four_Pillars/Process_Excellence/customer-service.png"></div>
		<div id="img23" style="position:relative; margin-top:7px;"><img src="../assets/img/Four_Pillars/Process_Excellence/privacy-data.png"></div>
		<div id="img24" style="position:relative; margin-top:7px;"><img src="../assets/img/Four_Pillars/Process_Excellence/governance.png"></div>
	</div>
	<div style="position:relative; width:960px; padding:0 55px; padding-top:30px; margin:0 auto; box-sizing:border-box;">
		<div style="position:absolute; left:650px; top:-910px;">
			<img src="../assets/img/Four_Pillars/Process_Excellence/maroon-box.png" />
		</div>
	</div>
</section>

<section id="infographicSection">
	<div style="width:960px; margin:0 auto; margin-top:-30px; box-sizing:border-box; background-color:#a3195b;">
		<img src="../assets/img/Four_Pillars/Process_Excellence/02-infographic.png">
	</div>
</section>

<section id="btnToPopupSection">
	<div style="width:960px; margin:0 auto; box-sizing:border-box; background-color:#fff; padding-top:40px;">
		<div class="title" style="width:960px; margin:0 auto; box-sizing:border-box; background-color:#fff; text-align:center; color:#524e4c; font-size:18px;">
			To read more about our Commitment to Process Excellence, click the buttons below
		</div>
	</div>
	<div style="width:960px; margin:0 auto; box-sizing:border-box; background-color:#fff; padding-top:40px; padding-left:55px; overflow:hidden;">
		<div class="plusButton" data-url="../assets/img/Four_Pillars/Process_Excellence/01-value-chain-popup.html" id="btn1" style="position:relative;"><img src="../assets/img/Four_Pillars/Process_Excellence/practise-value-chain.png"></div>
		<div class="plusButton" data-url="../assets/img/Four_Pillars/Process_Excellence/02-customer-centricity-popup-copy.html" id="btn2" style="position:relative; left:220px; margin-top:-205px;"><img src="../assets/img/Four_Pillars/Process_Excellence/customer-centricity.png"></div>
		<div class="plusButton" data-url="../assets/img/Four_Pillars/Process_Excellence/03-digitising-process-popup.html" id="btn3" style="position:relative; left:440px; margin-top:-205px;"><img src="../assets/img/Four_Pillars/Process_Excellence/digitising-processes.png"></div>
		<div class="plusButton" data-url="../assets/img/Four_Pillars/Process_Excellence/04-strong-governance-popup.html" id="btn4" style="position:relative; left:660px; margin-top:-205px;"><img src="../assets/img/Four_Pillars/Process_Excellence/strong-governance.png"></div>
	</div>
</section>

<?php
    include("../inc/footer.php");
?>

<script type="text/javascript" src="../assets/js/fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="../assets/js/fancybox/jquery.fancybox.pack.js?v=2.1.5"></script>
<script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
<script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-media.js?v=1.0.6"></script>
<script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>

<script type="text/javascript">
	var bottomTrigger = $('#trigger100');

	$(function() {
		for (var i=1; i<=4; i++) {
			slideImages2(i);
		};

		$('.plusButton').click(function(ev){
			ev.preventDefault();

			console.log(1);

			var url = $(this).data('url');

			$.fancybox.open({
				href : url,
				type : 'iframe',
				openEffect : 'elastic',
				openSpeed  : 150,
				closeEffect : 'elastic',
				closeSpeed  : 150,
				width : '970px',
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
					$("body").css({'overflow':'hidden'});
					//$('.fancybox-wrap').css('margin-left','-10px');
				},
				afterClose: function(){  
					$("body").css({'overflow':'visible'});	
				}
			});
		});
	});

	$(window).scroll(function() {
		for (var i=1; i<=4; i++) {
			slideImages2(i);
		};
	});

	function slideImages2(pImgNo) {
		var bottomTriggerTop = bottomTrigger.offset().top;
		var imgSelector = $('#img2'+pImgNo);
		var imgTop = imgSelector.offset().top;
		if (bottomTriggerTop<imgTop) {
			imgSelector.css('left',(-300)+'px');
		} else if (bottomTriggerTop<imgTop+300) {
			var vLeft = bottomTriggerTop-imgTop-300;
			imgSelector.css('left',vLeft+'px');
		} else{
			imgSelector.css('left','0');
		};
	}


</script>