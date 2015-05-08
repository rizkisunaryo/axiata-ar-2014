<?php

    include("../inc/header.php");

?>
<link rel="stylesheet" href="../assets/css/financial_details.css">
<style type="text/css">
	.black_txt{
        color:#524e4c;
	}
    .tiles{
        background-image: url(../assets/img/financial_details_bg.png);
  background-position: 0 -322px;
}
    }
</style>
<div class="section animatedParent" style="overflow:hidden;">
    <div class="title_text bold black_txt animated fadeInDown" style="">
        To read more about our financial details and financial statement,<br>
        click the buttons below
    </div>
	<div class="tiles " style="height:400px; overflow:hidden;">
		<div class="tile animated fadeInUp"><a href="../assets/pdfs/financial_details/Axiata2014 AR_Five-Year Group Financial Summary.pdf" target="_blank"><img src="../assets/img/financial_detals_tile1.png"></a></div>
		<div class="tile animated fadeInUp"><a href="../assets/pdfs/financial_details/Axiata2014 AR_Group Financial Analysis.pdf" target="_blank"><img src="../assets/img/financial_detals_tile2.png"></a></div>
		<div class="tile animated fadeInUp"><a href="../assets/pdfs/financial_details/Axiata2014 AR_Financial Statement.pdf" target="_blank"><img src="../assets/img/financial_detals_tile3.png"></a></div>
	</div>
</div>
<?php
    include("../inc/footer.php");
?>