<script src="../assets/js/jquery.js"></script>
<script src="../assets/js/TweenMax.min.js"></script>
<script src="../assets/js/ScrollMagic.min.js"></script>
<script src="../assets/js/animation.gsap.js"></script>
<script src="../assets/js/viewportchecker.js"></script>
<script src="../assets/js/css3-animate-it.js"></script>
<script src="../assets/js/jquery.transit.min.js"></script>

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