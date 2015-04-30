<?php

    include("../inc/header.php");

?>

<style type="text/css">
    .cust_img{
        margin-top: -70px;

    }
</style>
<div idclass="spacer s0"></div>
		
<div id="movingSectionContainer" >
    <center>
    <div class="section1 section" style="">
        <div class="bigtitle">
        <div class="small_txt">Summary Breakdown</div>
        <div class="med_txt">of Operating</div>
        <div class="big_txt">Revenue</div>
        <div class="bigger_txt">& EBITDA</div>
        <div class="foot_notes">
            <div class="foot_note"><canvas class="triangleRight Blue smallTriangle" ></canvas><span>Celcom</span></div>
            <div class="foot_note"><canvas class="triangleRight Purple smallTriangle" ></canvas><span>XL</span></div>
            <div class="foot_note"><canvas class="triangleRight Orange smallTriangle" ></canvas><span>Dialog</span></div>
            <div class="foot_note"><canvas class="triangleRight Red smallTriangle" ></canvas><span>Robi</span></div>
            <div class="foot_note"><canvas class="triangleRight Green smallTriangle" ></canvas><span>Smart</span></div>
            <div class="foot_note"><canvas class="triangleRight Grey smallTriangle" ></canvas><span>Others</span></div>
        </div>
        </div>
        <div class="graphs">
            <div class="graph">
                <div class="title">
                <div class="small_txt">2014 & 2013</div>
                <div class="big_txt">Operating</div>
                <div class="big_txt">Revenue</div>
                </div>
                <img class="cust_img" src="../assets/img/hexagon1.png"/>
                 <canvas id="hexagon"></canvas> 
            </div>
            <div class="graph">
                <div class="title">
                <div class="small_txt">2014 & 2013</div>
                <div class="big_txt">Operating</div>
                <div class="big_txt">Revenue</div>
            
                    </div>
                <img class="cust_img" src="../assets/img/hexagon2.png"/>
                <canvas id="hexagon"></canvas> 
            </div>
        </div>
    </div>
    
        </center>
</div>


<?php
    include("../inc/footer.php");
?>

<link rel="stylesheet" href="../assets/css/ch2/chapter2_7.css">
<script src="../assets/js/ch2/chapter2_7.js"></script>