<?php
    include("../inc/header.php");
?>
<link rel="stylesheet" href="../assets/js/fancybox/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
  <link rel="stylesheet" href="../assets/js/fancybox/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
  <link rel="stylesheet" href="../assets/js/fancybox/helpers/jquery.fancybox-buttons.css?v=1.0.5" type="text/css" media="screen" />
<style type="text/css">
    
</style>

<div idclass="spacer s0"></div>
		
<div id="movingSectionContainer" class="zoomViewport" >
    <div class="section1 section " style="display:none;">
        <div class="report_geographical_locations_title">
        <p class="small_txt">Reporting By</p>
        <p class="big_txt">Geographical</p>
        <p class="small_txt">Location</p>
            <div id="bs1"></div>
        </div>
<!--        <img  class="report_geographical_locations_img" src="../assets/img/report_geographical_locations.png"/>-->
        
        <div class="report_geographical_locations_img"  >
            <div class="chart_container">
                <div class="report_chart_1 report_chart" >
                    <a href="#" class="zoom-in" data-target="report_chart_1"  data-url="graphs/malaysia.php">
                        <i class="fa fa-search-plus"></i>
                        <i class="fa fa-search-minus" style="display:none;"></i>
                    </a>
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
                        <div class="tiny_txt black_txt graph_num">
                            <div class="num">6.8</div>
                            <div class="num">3.0</div>
                            <div class="num">17</div>
                            <div class="num">7.2</div>
                            <div class="num">3.1</div>
                            <div class="num">1.8</div>
                            <div class="num">7.7</div>
                            <div class="num">3.4</div>
                            <div class="num">1.9</div>
                            <div class="num">8.0</div>
                            <div class="num">3.5</div>
                            <div class="num">2.1</div>
                            <div class="num">7.7</div>
                            <div class="num">3.1</div>
                            <div class="num">2.7</div>
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
                        <div><canvas class="triangleRight Blue1 smallTriangle" style=" "></canvas><p>Revenue</p></div>
                        <div><canvas class="triangleRight Blue2 smallTriangle" style=" "></canvas><p>EBTIDA</p></div>
                        <div><canvas class="triangleRight Blue3 smallTriangle" style=" "></canvas><p>PAT</p></div>
                    </div>
                </div>
                <div class="report_chart_2 report_chart">
                    <a href="#" class="zoom-in" data-target="report_chart_2" data-url="graphs/sri_lanka.php">
                        <i class="fa fa-search-plus"></i>
                        <i class="fa fa-search-minus" style="display:none;"></i>
                    </a>
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
                        <div class="tiny_txt black_txt graph_num">
                            <div class="num">41.2</div>
                            <div class="num">15.1</div>
                            <div class="num">4.8</div>
                            <div class="num">45.4</div>
                            <div class="num">16.4</div>
                            <div class="num">4.9</div>
                            <div class="num">46.3</div>
                            <div class="num">18.6</div>
                            <div class="num">6.0</div>
                            <div class="num">63.3</div>
                            <div class="num">19.9</div>
                            <div class="num">5.2</div>
                            <div class="num">67.3</div>
                            <div class="num">20.9</div>
                            <div class="num">6.1</div>
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
                        <div><canvas class="triangleRight Orange1 smallTriangle" style=" "></canvas><p>Revenue</p></div>
                        <div><canvas class="triangleRight Orange2 smallTriangle" style=" "></canvas><p>EBTIDA</p></div>
                        <div><canvas class="triangleRight Orange3 smallTriangle" style=" "></canvas><p>PAT</p></div>
                    </div>
                </div>
                <div class="report_chart_3 report_chart">
                    <a href="#" class="zoom-in" data-target="report_chart_3" data-url="graphs/indonesia.php">
                        <i class="fa fa-search-plus"></i>
                        <i class="fa fa-search-minus" style="display:none;"></i>
                    </a>
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
                        <div class="tiny_txt black_txt graph_num">
                            <div class="num">17.2</div>
                            <div class="num">9.3</div>
                            <div class="num">2.9</div>
                            <div class="num">18.5</div>
                            <div class="num">9.3</div>
                            <div class="num">2.8</div>
                            <div class="num">21.3</div>
                            <div class="num">9.7</div>
                            <div class="num">2.8</div>
                            <div class="num">21.4</div>
                            <div class="num">8.7</div>
                            <div class="num">1.0</div>
                            <div class="num">23.6</div>
                            <div class="num">8.6</div>
                            <div class="num">(0.9)</div>
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
                        <div><canvas class="triangleRight Purple1 smallTriangle" style=" "></canvas><p>Revenue</p></div>
                        <div><canvas class="triangleRight Purple2 smallTriangle" style=" "></canvas><p>EBTIDA</p></div>
                        <div><canvas class="triangleRight Purple3 smallTriangle" style=" "></canvas><p>PAT</p></div>
                    </div>
                </div>
                <div class="report_chart_4 report_chart">
                    <a href="#" class="zoom-in" data-target="report_chart_4" data-url="graphs/bangladesh.php">
                        <i class="fa fa-search-plus"></i>
                        <i class="fa fa-search-minus" style="display:none;"></i>
                    </a>
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
                        <div class="tiny_txt black_txt graph_num">
                            <div class="num">26.0</div>
                            <div class="num">9.4</div>
                            <div class="num">1.0</div>
                            <div class="num">30.7</div>
                            <div class="num">9.6</div>
                            <div class="num">(0.8)</div>
                            <div class="num">39.0</div>
                            <div class="num">12.3</div>
                            <div class="num">0.9</div>
                            <div class="num">45.2</div>
                            <div class="num">16.0</div>
                            <div class="num">3.7</div>
                            <div class="num">49.4</div>
                            <div class="num">18.9</div>
                            <div class="num">4.4</div>
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
                        <div><canvas class="triangleRight Red1 smallTriangle" style=" "></canvas><p>Revenue</p></div>
                        <div><canvas class="triangleRight Red2 smallTriangle" style=" "></canvas><p>EBTIDA</p></div>
                        <div><canvas class="triangleRight Red3 smallTriangle" style=" "></canvas><p>PAT</p></div>
                    </div>
                </div>
                <div class="report_chart_5 report_chart">
                    <a href="#" class="zoom-in" data-target="report_chart_5" data-url="graphs/cambodia.php">
                        <i class="fa fa-search-plus"></i>
                        <i class="fa fa-search-minus" style="display:none;"></i>
                    </a>
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
                        <div class="tiny_txt black_txt graph_num">
                            <div class="num">36.7</div>
                            <div class="num">3.7</div>
                            <div class="num">(11.5)</div>
                            <div class="num">39.5</div>
                            <div class="num">1.2</div>
                            <div class="num">(13.9)</div>
                            <div class="num">41.8</div>
                            <div class="num">6.0</div>
                            <div class="num">(9.5)</div>
                            <div class="num">128.3</div>
                            <div class="num">48.8</div>
                            <div class="num">11.6</div>
                            <div class="num">179.6</div>
                            <div class="num">76.1</div>
                            <div class="num">32.4</div>
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
                        <div><canvas class="triangleRight Green1 smallTriangle" style=" "></canvas><p>Revenue</p></div>
                        <div><canvas class="triangleRight Green2 smallTriangle" style=" "></canvas><p>EBTIDA</p></div>
                        <div><canvas class="triangleRight Green3 smallTriangle" style=" "></canvas><p>PAT</p></div>
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
<script type="text/javascript" src="../assets/js/fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>
  <script type="text/javascript" src="../assets/js/fancybox/jquery.fancybox.pack.js?v=2.1.5"></script>
  <script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
  <script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-media.js?v=1.0.6"></script>
  <script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>
<script>
    
    $(document).ready(function(){
        
            
    });
    
</script>
<link rel="stylesheet" href="../assets/css/ch2/chapter2_6.css">
<script src="../assets/js/ch2/chapter2_6.js"></script>
<script src="../assets/js/jquery.zoomooz.min.js"></script>