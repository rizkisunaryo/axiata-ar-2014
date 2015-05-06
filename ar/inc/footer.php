<div class="main_footer" style="  width:100%;   border-top: 1px solid #E5E4E4;  padding-top: 10px; padding-bottom:10px;">
    
    <div class="" style="color:#808285; font-family: AxiataBook; font-size:11px;   margin-left:auto; margin-right:auto; width:960px;">
        This is an interactive digital version of the Axiata Annual Report 2014 Shaping the Future, and Sustainability and National Contribution Report, Our Commitment to Development. It also contains information in a summarised form. The contents here are qualified in their entirely by reference to the published Axiata Annual Report 2014, Shaping the Future, and Sustainability and National Contribution Report, Our Commitment to Development. The printable versions are available in PDF format on this website.
        <br><br>
        The app versions can be downloaded on:
<br>
        <a href="" style><img src="../assets/img/app-store-logo.png"/></a>
        <a href=""><img src="../assets/img/google-store-logo.png"/></a>
        <br>
        <br>
        Copyright © 2009 - 2015 Axiata Group Berhad. All rights reserved.
    </div>
    
</div>
<style>
    .sa{color:#808285}
</style>
<script src="../assets/js/jquery.js"></script>
<script src="../assets/js/TweenMax.min.js"></script>
<script src="../assets/js/ScrollMagic.min.js"></script>
<script src="../assets/js/animation.gsap.js"></script>
<script src="../assets/js/viewportchecker.js"></script>
<script src="../assets/js/css3-animate-it.js"></script>
<script src="../assets/js/jquery.transit.min.js"></script>
<script src="../assets/js/countUp.min.js"></script>

<script type="text/javascript">
    var exploreMoreOpened=false;
    $(function () {
        $('.dropDownMenu').hide();
        $('#mobileMenu').click(function(){
            $('.exploreMore').hide();
            $('.dropDownMenu').slideToggle();
        });

        $('.exploreMore').hide();
        $('#explore, #exploreMoreLnk').click(function(){
            exploreMoreOpened=!exploreMoreOpened;
            if(exploreMoreOpened)
            {
                $('#explore').attr('src','../assets/img/chapter4/navbar/close.png').transition({ rotate: '90deg' });
            }
            else
            {
                $('#explore').attr('src','../assets/img/chapter4/navbar/explore.png').transition({ rotate: '-90deg' });
            }
            $('.dropDownMenu').hide();
            $('.exploreMore').slideToggle();

        });

    });
</script>




</div>
</body>
</html>