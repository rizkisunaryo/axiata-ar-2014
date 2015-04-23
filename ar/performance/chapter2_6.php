<?php

    include("../inc/header.php");

?>


<div idclass="spacer s0"></div>
		
<div id="movingSectionContainer" >
    <div class="section1 section" style="display:none;">
        <div class="report_geographical_locations_title">
        <p class="small_txt">Reporting By</p>
        <p class="big_txt">Geographical</p>
        <p class="small_txt">Location</p>
            <div id="bs1"></div>
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
                        <div class="bar-triangles-container">
                        <?php
                        for($i=0; $i<5 ; $i++){
                        ?>
                            <div class="bars bars1_201<?php echo $i;?>">
                                    <div id="bar<?php echo $i;?>_0" class="bar-triangles bar-triangle<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_1" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_2" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                            </div>    
                        <?php } ?>
                        </div>
                    </div>
                    <div class="graphs-x-timeline">
                        <?php
                        for($i=0; $i<5;$i++){
                        ?>
                        <p class="inline center clined-45">201<?php echo $i;?></p>
                        <?php } ?>
                    </div>
                    <div class="graphs-footnote">
                        <div><canvas class="triangleRight Blue1 smallTriangle" style=" "></canvas><p>a</p></div>
                        <div><canvas class="triangleRight Blue2 smallTriangle" style=" "></canvas><p>b</p></div>
                        <div><canvas class="triangleRight Blue3 smallTriangle" style=" "></canvas><p>c</p></div>
                    </div>
                </div>
                <div class="report_chart_2 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt orange">SRI LANKA</p>
                        <p class="small_txt">(SLR Billion)</p>
                    </div>
                    <div class="graphs">
                        <div class="bar-triangles-container">
                        <?php
                        for($i=0; $i<5 ; $i++){
                        ?>
                            <div class="bars bars1_201<?php echo $i;?>">
                                    <div id="bar<?php echo $i;?>_0" class="bar-triangles bar-triangle<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_1" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_2" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                            </div>    
                        <?php } ?>
                        </div>
                    </div>
                    <div class="graphs-x-timeline">
                        <p class="inline center clined-45">2010</p>
                        <p class="inline center clined-45">2011</p>
                        <p class="inline center clined-45">2012</p>
                        <p class="inline center clined-45">2013</p>
                        <p class="inline center clined-45">2014</p>
                    </div>
                    <div class="graphs-footnote">
                        <div><canvas class="triangleRight Orange1 smallTriangle" style=" "></canvas><p>a</p></div>
                        <div><canvas class="triangleRight Orange2 smallTriangle" style=" "></canvas><p>b</p></div>
                        <div><canvas class="triangleRight Orange3 smallTriangle" style=" "></canvas><p>c</p></div>
                    </div>
                </div>
                <div class="report_chart_3 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt blue-dark">INDONESIA</p>
                        <p class="small_txt">(IDR Trillion)</p>
                    </div>
                    <div class="graphs">
                        <div class="bar-triangles-container">
                        <?php
                        for($i=0; $i<5 ; $i++){
                        ?>
                            <div class="bars bars1_201<?php echo $i;?>">
                                    <div id="bar<?php echo $i;?>_0" class="bar-triangles bar-triangle<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_1" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_2" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                            </div>    
                        <?php } ?>
                        </div>
                    </div>
                    <div class="graphs-x-timeline">
                        <p class="inline center clined-45">2010</p>
                        <p class="inline center clined-45">2011</p>
                        <p class="inline center clined-45">2012</p>
                        <p class="inline center clined-45">2013</p>
                        <p class="inline center clined-45">2014</p>
                    </div>
                    <div class="graphs-footnote">
                        <div><canvas class="triangleRight Purple1 smallTriangle" style=" "></canvas><p>a</p></div>
                        <div><canvas class="triangleRight Purple2 smallTriangle" style=" "></canvas><p>b</p></div>
                        <div><canvas class="triangleRight Purple3 smallTriangle" style=" "></canvas><p>c</p></div>
                    </div>
                </div>
                <div class="report_chart_4 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt red">BANGLADESH</p>
                        <p class="small_txt">(BDT Billion)</p>
                    </div>
                    <div class="graphs">
                        <div class="bar-triangles-container">
                        <?php
                        for($i=0; $i<5 ; $i++){
                        ?>
                            <div class="bars bars1_201<?php echo $i;?>">
                                    <div id="bar<?php echo $i;?>_0" class="bar-triangles bar-triangle<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_1" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_2" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                            </div>    
                        <?php } ?>
                        </div>
                    </div>
                    <div class="graphs-x-timeline">
                        <p class="inline center clined-45">2010</p>
                        <p class="inline center clined-45">2011</p>
                        <p class="inline center clined-45">2012</p>
                        <p class="inline center clined-45">2013</p>
                        <p class="inline center clined-45">2014</p>
                    </div>
                    <div class="graphs-footnote">
                        <div><canvas class="triangleRight Red1 smallTriangle" style=" "></canvas><p>a</p></div>
                        <div><canvas class="triangleRight Red2 smallTriangle" style=" "></canvas><p>b</p></div>
                        <div><canvas class="triangleRight Red3 smallTriangle" style=" "></canvas><p>c</p></div>
                    </div>
                </div>
                <div class="report_chart_5 report_chart">
                    <a href="#" class="zoom-in"></a>
                    <div class="float-txt">
                        <p class="big_txt green">CAMBODI</p>
                        <p class="small_txt">(USD Million)</p>
                    </div>
                    <div class="graphs">
                        <div class="bar-triangles-container">
                        <?php
                        for($i=0; $i<5 ; $i++){
                        ?>
                            <div class="bars bars1_201<?php echo $i;?>">
                                    <div id="bar<?php echo $i;?>_0" class="bar-triangles bar-triangle<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_1" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                                    <div id="bar<?php echo $i;?>_2" class="bar-triangles bar-triangles<?php echo $i;?>"></div>
                            </div>    
                        <?php } ?>
                        </div>
                    </div>
                    <div class="graphs-x-timeline">
                        <p class="inline center clined-45">2010</p>
                        <p class="inline center clined-45">2011</p>
                        <p class="inline center clined-45">2012</p>
                        <p class="inline center clined-45">2013</p>
                        <p class="inline center clined-45">2014</p>
                    </div>
                    <div class="graphs-footnote">
                        <div><canvas class="triangleRight Green1 smallTriangle" style=" "></canvas><p>a</p></div>
                        <div><canvas class="triangleRight Green2 smallTriangle" style=" "></canvas><p>b</p></div>
                        <div><canvas class="triangleRight Green3 smallTriangle" style=" "></canvas><p>c</p></div>
                    </div>
                </div>
            </div>

            <p class="bottom_note">
                All financial numbers are based on
                audited financial figures and follows 
                the respective country GAAP.
            </p>
            
        </div>
        
        
    </div>
    
</div>


<?php
    include("../inc/footer.php");
?>
<script>
    
    $(document).ready(function(){
        
            
    });
    
</script>
<link rel="stylesheet" href="../assets/css/ch2/chapter2_6.css">
<script src="../assets/js/ch2/chapter2_6.js"></script>