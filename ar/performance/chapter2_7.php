<?php

    include("../inc/header.php");

?>
<link rel="stylesheet" href="../assets/js/fancybox/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
  <link rel="stylesheet" href="../assets/js/fancybox/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
  <link rel="stylesheet" href="../assets/js/fancybox/helpers/jquery.fancybox-buttons.css?v=1.0.5" type="text/css" media="screen" />
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
                <a href="#" class="zoom-in"   data-url="graphs/hexagon_big_1.php">
                        <i class="fa fa-search-plus"></i>
                        <i class="fa fa-search-minus" style="display:none;"></i>
                    </a>
                <img class="cust_img" src="../assets/img/hexagon1.png"/>
                
                 <canvas id="hexagon"></canvas> 
            </div>
            <div class="graph">
                <div class="title">
                <div class="small_txt">2014 & 2013</div>
                <div class="big_txt">EBITDA</div>
            
                    </div>
                 <a href="#" class="zoom-in"   data-url="graphs/hexagon_big_2.php">
                        <i class="fa fa-search-plus"></i>
                        <i class="fa fa-search-minus" style="display:none;"></i>
                    </a>
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
<script type="text/javascript" src="../assets/js/fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>
  <script type="text/javascript" src="../assets/js/fancybox/jquery.fancybox.pack.js?v=2.1.5"></script>
  <script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
  <script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-media.js?v=1.0.6"></script>
  <script type="text/javascript" src="../assets/js/fancybox/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>
<link rel="stylesheet" href="../assets/css/ch2/chapter2_7.css">
<script src="../assets/js/ch2/chapter2_7.js"></script>
<script type="text/javascript">
    $(function () {
        $('.zoom-in').click(function(ev){
            ev.preventDefault();
            var url = $(this).data('url');

            $.fancybox.open({
                href : url,
                type : 'iframe',
                openEffect : 'elastic',
                openSpeed  : 150,
                closeEffect : 'elastic',
                closeSpeed  : 150,
                width : '965px',
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
                    $("body").css({'overflow-y':'hidden'});
                    //$('.fancybox-wrap').css('margin-left','-10px');
                },
                afterClose: function(){  $("body").css({'overflow-y':'visible'});   }
            });
        });
    });
</script>