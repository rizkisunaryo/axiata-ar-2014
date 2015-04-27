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

		<section id="keyHighlightsSection">
			<div style="width:960px; margin:0 auto; padding:55px; margin-top:90px; height:910px; box-sizing:border-box;">
				<div style="margin-top:0px;"><img src="../assets/img/chapter2/1/key-highlights.png"></div>
				<div style="margin-top:40px;">
					<div id="leftCol" style="position:relative; left:-300px; opacity:0; margin-top:0px;">
						<div style="margin-top:0px;"><img src="../assets/img/chapter2/1/260-million.png"></div>
						<div style="margin-top:30px;"><img src="../assets/img/chapter2/1/6th.png"></div>
					</div>
					<div id="rightCol" style="position:relative; left:300px; opacity:0; margin-top:-437px; margin-left:460px;">
						<div style="margin-top:0px;"><img src="../assets/img/chapter2/1/18.png"></div>
						<div style="margin-top:68px;"><img src="../assets/img/chapter2/1/rm4-billion.png"></div>
					</div>
				</div>
			</div>
		</section>
		
<?php
    include("../inc/footer.php");
?>
		
		<script type="text/javascript">
			$(function() {
				$( "#leftCol,#rightCol" ).animate({
			    left:0,
			    opacity:1
			  }, 1000, function() {
			    // navbarStatus='showing';
			  });
			});
		</script>