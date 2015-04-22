<?php

    include("../inc/header.php");

?>


<div idclass="spacer s0"></div>
		
<div id="movingSectionContainer">
    <div class="section1 section">
        <div class="report_geographical_locations_title">
        <p class="small_txt">Reporting By</p>
        <p class="big_txt">Geographical</p>
        <p class="small_txt">Location</p>
        </div>
<!--        <img  class="report_geographical_locations_img" src="../assets/img/report_geographical_locations.png"/>-->
        
        <div class="report_geographical_locations_img"  >
            <div class="chart_container">
                <div class="report_chart_1 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt blue">MALAYSIA</p>
                        <p class="small_txt">(RM Billion)</p>
                    </div>
                    <div class="graphs">
                        <?php
                        for($i=0; $i<1;$i++){
                        ?>
                        <div class="bar-triangles-container">
                            <?php
                            for($j=0; $j<1;$j++){
                            ?>
                                <div class="bars bars1_201<?php echo $i;?>">
                                    <div id="bar1_<?php echo $j;?>" class="bar-triangles bar-triangle<?php echo $j;?>"></div>
                                    <div id="bar1_<?php echo $j;?>" class="bar-triangles bar-triangles<?php echo $j;?>"></div>
                                    <div id="bar1_<?php echo $j;?>" class="bar-triangles bar-triangles<?php echo $j;?>"></div>
                                </div>
                            <?php } ?>
                        </div>
                        <?php } ?>
                        
                    </div>
                    <div class="graphs-x-timeline">
                        <?php
                        for($i=0; $i<5;$i++){
                        ?>
                        <p class="inline center clined-45">201<?php echo $i;?></p>
                        <?php } ?>
                    </div>
                    <div class="graphs-footnote">
                    </div>
                </div>
                <div class="report_chart_2 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt orange">SRI LANKA</p>
                        <p class="small_txt">(SLR Billion)</p>
                    </div>
                    <div class="graphs">
                    </div>
                    <div class="graphs-x-timeline">
                        <p class="inline center clined-45">2010</p>
                        <p class="inline center clined-45">2011</p>
                        <p class="inline center clined-45">2012</p>
                        <p class="inline center clined-45">2013</p>
                        <p class="inline center clined-45">2014</p>
                    </div>
                    <div class="graphs-footnote">
                    </div>
                </div>
                <div class="report_chart_3 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt blue-dark">INDONESIA</p>
                        <p class="small_txt">(IDR Trillion)</p>
                    </div>
                    <div class="graphs">
                    </div>
                    <div class="graphs-x-timeline">
                        <p class="inline center clined-45">2010</p>
                        <p class="inline center clined-45">2011</p>
                        <p class="inline center clined-45">2012</p>
                        <p class="inline center clined-45">2013</p>
                        <p class="inline center clined-45">2014</p>
                    </div>
                    <div class="graphs-footnote">
                    </div>
                </div>
                <div class="report_chart_4 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt red">BANGLADESH</p>
                        <p class="small_txt">(BDT Billion)</p>
                    </div>
                    <div class="graphs">
                    </div>
                    <div class="graphs-x-timeline">
                        <p class="inline center clined-45">2010</p>
                        <p class="inline center clined-45">2011</p>
                        <p class="inline center clined-45">2012</p>
                        <p class="inline center clined-45">2013</p>
                        <p class="inline center clined-45">2014</p>
                    </div>
                    <div class="graphs-footnote">
                    </div>
                </div>
                <div class="report_chart_5 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt green">CAMBODI</p>
                        <p class="small_txt">(USD Million)</p>
                    </div>
                    <div class="graphs">
                    </div>
                    <div class="graphs-x-timeline">
                        <p class="inline center clined-45">2010</p>
                        <p class="inline center clined-45">2011</p>
                        <p class="inline center clined-45">2012</p>
                        <p class="inline center clined-45">2013</p>
                        <p class="inline center clined-45">2014</p>
                    </div>
                    <div class="graphs-footnote">
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    
</div>


<?php
    include("../inc/footer.php");
?>
<link rel="stylesheet" href="../assets/css/ch2/chapter2_6.css">
<script src="../assets/js/ch2/chapter2_6.js"></script>