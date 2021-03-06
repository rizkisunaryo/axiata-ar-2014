<?php
    include("../inc/header.php");
?>
<style type="text/css">
    .counter{
        display: inline-block;
    }

    .rel.navbar.panel{
        position: fixed;
    }

</style>
    <div class="rel section" style="margin-top:70px;">
        <div class="axiataBold">
            <p class="text__color--lightgrey font25">Axiata's <span class="block text__color--lightred font31">National Contribution</p>
        </div>

        <div class="row text__color--darkgrey  font15 animatedParent">
            <div class="font15 text__color--lightred axiataBold">Commitment to Long-Term Investment in All Our Countries</div>
            <div>
                <div class="text-justify lineHeight animated fadeInRight ">
                    <p>The Group makes a direct and indirect contribution to the economies of the countries in which it operates. Axiata’s contribution includes new jobs, both directly and indirectly, new investments, training for employees, leadership opportunities across the Group and consequently across the region, access to state-of-the-art digital technology, the integration of greener technology and processes, facilitating the growth of the global telecommunications industry, and investments in disaster resilience, education, e-innovation and social inclusion.</p>
                    <p>Our 2013 Sustainability Report included a National Contribution Report using methodology developed by an independent party. For 2014, we asked the same independent third party to assess our contribution in our operating countries and provide updated data. </p>
                    <p>This part of the report is based on the data generated by the independent third party as evidence of the contributions Axiata has made in 2014 in the several countries of Asia in which we operate.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-justify col50">
                <div class="contribution">
                    <div class="contribution-wrapper">
                        <span class="axiataBold font52 text__color--lightred"> USD<div id="counter0" data-decimal="0" data-max="93" class="counterup counter">93</div></span>
                        <span class="axiataBold font30 text__color--lightred"> billion</span>
                        <span class="block axiataBook font15 text__color--darkgrey">GDP Contribution </span>
                    </div>
                </div>
            </div>
            <div class="col-justify col50">
                <div class="contribution">
                    <div class="contribution-wrapper">
                        <div class="axiataBook font15 text__color--darkgrey"> Created more than</div>
                        <div class="axiataBold font52 text__color--lightred">1.<div id="counter1" data-decimal="0" data-max="3" class="counterup counter">5</div> <span class="font30">million</span>  <span class="axiataBook font15 text__color--darkgrey font15"> job across Asia </span></div>
                    </div>
                </div>
            </div>
            <div class="col-justify col50">
                <div class="contribution">
                    <div class="contribution-wrapper">
                        <div class="axiataBook font15 text__color--darkgrey">Capital Investment since 200<div id="counter12" data-decimal="0" data-max="8" class="counterup counter">8</div></div>
                        <div class="axiataBold font52 text__color--lightred">USD<div id="counter2" data-decimal="0" data-max="15" class="counterup counter">15</div>.4 <span class="font30">billion</span></div>
                    </div>
                </div>
            </div>
            <div class="col-justify col50">
                <div class="contribution">
                    <div class="contribution-wrapper">
                        <div class="axiataBook font15 text__color--darkgrey">Subscribers:</div>
                        <div class="axiataBold font30 text__color--lightred">over <span class="font52"> <div id="counter3" data-decimal="0" data-max="260" class="counterup counter">260</div> </span> <span class="font30">million</span></div>
                    </div>
                </div>
            </div>
            <div class="col-justify col50">
                <div class="contribution">
                    <div class="contribution-wrapper">
                        <span class="axiataBook font20 text__color--darkgrey lineHeight100"> Spent more than</span>
                        <span class="block axiataBold font52 text__color--lightred lineHeight90">USD<div id="counter4" data-decimal="0" data-max="38" class="counterup counter">38</div> <span class="font30"> billion </span> </span>
                        <span class="block axiataBook font15 text__color--darkgrey lineHeight100">on operating expenditures </span>
                    </div>
                </div>
            </div>
            <div class="col-justify col50">
                <div class="contribution">
                    <div class="contribution-wrapper">
                        <div class="axiataBook font15 text__color--darkgrey">Network coverage connecting more than*</div>
                        <div class="axiataBold font52 text__color--lightred">~<div id="counter5" data-decimal="0" data-max="450" class="counterup counter">450</div> <span class="font30">million people</span></div>
                    </div>
                </div>
            </div>
            <div class="col-justify col50">
                <div class="contribution">
                    <div class="contribution-wrapper">
                        <span class="axiataBook font20 text__color--darkgrey lineHeight100"> Employed more than</span>
                        <span class="block axiataBold font52 text__color--lightred lineHeight100"> <div id="counter6" data-decimal="0" data-max="25" class="counterup counter">25</div>,000 </span>
                        <span class="block axiataBook font15 text__color--darkgrey lineHeight100">employees across Asia </span>
                    </div>
                </div>
            </div>
            <div class="col-justify col50">
                <div class="contribution-info">
                    <div class="col col80">
                        <div class="contribution-text font9 text__color--darkgrey">
                            <p>* excludes idea and M1</p>
                            <p class="text-justify">Axiata’s 2014 Sustainability and National Contribution Report, Committed to Development, Towards a Digital Future is available online at www.axiata.com and can be downloaded on AppStore and GooglePlay. </p>
                        </div>
                    </div>
                    <div class="col col20">
                        <a href="../../sr"> <img class="col1" src="../assets/img/chapter1/nr/ch_1_contribution.png"></a>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>

<?php
    include("../inc/footer.php");
?>


<script type="text/javascript">
  function countWithDecimal()
  {
    $('.counterup').each(function(){
      
      var options = {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.', 
        prefix : '', 
        suffix : '' 
      };
      
      
      var max=Number($(this).data('max'));
      var noOfDecimal = Number($(this).data('decimal'));
      var x =new countUp($(this).attr('id'), 0, max, noOfDecimal, 2.5, options);
      x.start();
    });

  }
  $(document).ready(function(){
  setTimeout(function(){countWithDecimal();},300);
  });
  </script> 