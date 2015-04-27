<?php
    include("../inc/header.php");
?>
    <div class="rel section">
        <p class="text__color--lightgrey font25 axiataBold"> Summary Breakdown of <span class="block text__color--lightred font31">Assets & Liabilities</p>

        <div class="rel">
            <div class="col col50">
                <p class="axiataBold text__color--lightred font20">2014 Total Assets</p>
                <div id="2014-assets" style="min-width: 290px; height: 290px; max-width: 600px; margin: 0 auto"></div>
            </div>
            <div class="col col50">
                <p class="axiataBold text__color--lightred font20">2013 Total Assets</p>
                <div id="2013-assets" style="min-width: 290px; height: 290px; max-width: 600px; margin: 0 auto"></div>
            </div>
            <div class="col col50">
                <p class="axiataBold text__color--lightred font20">2014 Total Liabilities & Equity</p>
                <div id="2014-liabilities" style="min-width: 290px; height: 290px; max-width: 600px; margin: 0 auto"></div>
            </div>
            <div class="col col50">
                <p class="axiataBold text__color--lightred font20">2013 Total Liabilities & Equity</p>
                <div id="2013-liabilities" style="min-width: 290px; height: 290px; max-width: 600px; margin: 0 auto"></div>
            </div>
        </div>


        <div class="rel">
             <div class="col col50">
                <p class="axiataBold text__color--lightred font10">Total Assets</p>
                <div>
                    <div class="col col40">
                        <ul class="no-style removeMargin">
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--dark-blue"></i> <span class="font9 text__color--grey v-middle">Property, plant and equipment </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--yellow"></i> <span class="font9 text__color--grey v-middle">Intangible assets </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--orange"></i> <span class="font9 text__color--grey v-middle">Other assets </span> </li>
                        </ul>
                    </div>
                    <div class="col col60">
                        <ul class="no-style removeMargin">
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--lightpurple"></i> <span class="font9 text__color--grey v-middle">Deposits, cash and bank balances </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--darkorange"></i> <span class="font9 text__color--grey v-middle">Trade and other receivables </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--green"></i> <span class="font9 text__color--grey v-middle">Associates/Joint ventures </span> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col col50">
                <p class="axiataBold text__color--lightred font10">Total Liabilities</p>
                <div>
                    <div class="col col40">
                        <ul class="no-style removeMargin">
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--dark-blue"></i> <span class="font9 text__color--grey v-middle">Borrowings </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--yellow"></i> <span class="font9 text__color--grey v-middle">Non-controlling interests </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--orange"></i> <span class="font9 text__color--grey v-middle">Reserves </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--lightred2"></i> <span class="font9 text__color--grey v-middle">Share premium </span> </li>
                        </ul>
                    </div>
                    <div class="col col60">
                        <ul class="no-style removeMargin">
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--darkorange"></i> <span class="font9 text__color--grey v-middle">Share capital </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--purple"></i> <span class="font9 text__color--grey v-middle">Other liabilities </span> </li>
                            <li class="legend-list"> <i class="legend-icon fa fa-play text__color--green"></i> <span class="font9 text__color--grey v-middle">Trade and other payables </span> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
    include("../inc/footer.php");
?>
    <script src="http://code.highcharts.com/highcharts.js"></script>
    <script src="http://code.highcharts.com/modules/exporting.js"></script>

    <script>
    $(function () {
        $('#2014-assets').highcharts({
            colors: ['#B13B80', '#1C4ea0', '#f9b73f', '#ee7627', '#be0041', '#e7337e',
                '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
                marginLeft: -80,
                style: {
                    fontFamily: 'AxiataBook'
                }
            },
            credits: {
                enabled: false
            },
            exporting:{
                enabled: false
            },
            title: {
            text: ' ',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                            distance: -5,
                            style: {
                            fontWeight: 'bold',
                                color: 'white',
                                textShadow: '0px 1px 2px black'
                            }
                        },
                    startAngle: 0,
                        endAngle: 360,
                        center: ['50%', '50%']
                    },
                column: {
                    pointPadding: 0,
                    borderWidth: 0
                }
            },
            series: [{
                type: 'pie',
                    name: '2014 Assets',
                    innerSize: '75%',
                data: [
                    {
                        name: '15.4%',
                        y: 15.4,
                        dataLabels: {
                            distance: 30,
                            rotation: 30,
                            x: 307.37938851547324,
                        },

                    },
                    {
                        name: '40.6%',
                        y: 40.6,
                        dataLabels: {
                            rotation: -50,
                        },

                    },
                    {
                        name: '26.1%',
                        y: 26.1,
                        dataLabels: {
                            rotation: 70,
                        },

                    },
                    {
                        name: '1.3%',
                        y: 1.3,
                        dataLabels: {
                            rotation: -65,
                            color: 'black',
                            textShadow: '0px 0px 0px black'
                        },

                    },
                    {
                        name: '10.4%',
                        y: 10.4,
                        dataLabels: {
                            rotation: -40,
                        },

                    },
                    {
                        name: '6.2%',
                        y: 6.2,
                        dataLabels: {
                            rotation: -10,
                        },

                    },

                ],
                borderWidth: 0
            }],

        }, function(chartObj) {
            $.each(chartObj.series[0].data, function (i, point) {

                var degree = (point.angle * 180) / Math.PI;
                var rotation = 0;
                if(i == '0') {
                    point.dataLabel.attr({x: point.dataLabel._pos.x - 20});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});
                }else  if(i == '1'){
/*                    point.dataLabel.attr({x: point.dataLabel._pos.x - 10});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});*/
                }else  if(i == '3'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x - 10});
//                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});
                }else  if(i == '4'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x + 13});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 15});
                }else  if(i == '5'){
//                    point.dataLabel.attr({x: point.dataLabel._pos.x + 15});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 20});
                }

                point.dataLabel.show();
            });
        });

        $('#2013-assets').highcharts({
            colors: ['#B13B80', '#1C4ea0', '#f9b73f', '#ee7627', '#be0041', '#e7337e',
                '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
                marginLeft: -80,
                style: {
                    fontFamily: 'AxiataBook'
                }
            },
            credits: {
                enabled: false
            },
            exporting:{
                enabled: false
            },
            title: {
                text: ' ',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -15,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            //                            textShadow: '0px 1px 2px black'
                        }
                    },
                    startAngle: 0,
                    endAngle: 360,
                    center: ['50%', '50%']
                },
                column: {
                    pointPadding: 0,
                    borderWidth: 0
                }
            },
            series: [{
                type: 'pie',
                name: '2013 Assets',
                innerSize: '75%',
                data: [
                    {
                        name: '16.2%',
                        y: 16.2,
                        dataLabels: {
                            distance: 30,
                            rotation: 30,
                            x: 307.37938851547324,
                        },

                    },
                    {
                        name: '39.3%',
                        y: 39.3,
                        dataLabels: {
                            rotation: -50,
                        },

                    },
                    {
                        name: '19.9%',
                        y: 22.0,
                        dataLabels: {
                            rotation: 70,
                        },

                    },
                    {
                        name: '1.5%',
                        y: 1.5,
                        dataLabels: {
                            rotation: 1,
                            color: 'black'
                        },

                    },
                    {
                        name: '14.8%',
                        y: 14.8,
                        dataLabels: {
                            rotation: -40,
                        },

                    },
                    {
                        name: '6.2%',
                        y: 6.2,
                        dataLabels: {
                            rotation: -10,
                        },

                    },

                ],
//                data: [
//                    ['15.45%',   15.45],
//                    ['40.6%',       40.6],
//                    ['26.1%', 26.1],
//                    ['1.3%',    1.3],
//                    ['10.4%',     10.4],
//                    ['6.2%',     6.2],
//
//                ],
                borderWidth: 0
            }],

        }, function(chartObj) {
            $.each(chartObj.series[0].data, function (i, point) {

                var degree = (point.angle * 180) / Math.PI;
                var rotation = 0;
                if(i == '0') {
                    point.dataLabel.attr({x: point.dataLabel._pos.x - 20});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});
                }else  if(i == '1'){
                    /*                    point.dataLabel.attr({x: point.dataLabel._pos.x - 10});
                     point.dataLabel.attr({y: point.dataLabel._pos.y + 10});*/
                }else  if(i == '3'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x - 30});
//                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});
                }else  if(i == '4'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x + 13});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 15});
                }else  if(i == '5'){
//                    point.dataLabel.attr({x: point.dataLabel._pos.x + 15});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 20});
                }

                point.dataLabel.show();
            });
        });
        $('#2014-liabilities').highcharts({
            colors: [ '#1C4ea0', '#f9b73f', '#ee7627', '#be0041', '#e7337e', '#B13B80', '#2eaa52',
                '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
                marginLeft: -80,
                style: {
                    fontFamily: 'AxiataBook'
                }
            },
            credits: {
                enabled: false
            },
            exporting:{
                enabled: false
            },
            labels:{
                items: [{
                    style: {
                        rotation: 45,
                        left: '100px',
                        top: '100px'
                    }
                }]
            },
            title: {
            text: ' ',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                            enabled: true,
                            distance: -5,
                            align: 'center',

                            verticalAlign: 'middle',
                            style: {
                                color: 'white',
                                textShadow: '0px 1px 2px black'
                            }
                        },
                    startAngle: 0,
                        endAngle: 360,
                        center: ['50%', '50%']
                    },
                column: {
                    pointPadding: 0,
                    borderWidth: 0
                }
            },
            series: [{
                type: 'pie',
                    name: '2014 Liabilities',
                    innerSize: '75%',
                    data: [
                        {
                            name: '28.3%',
                            y: 28.3,
                            dataLabels: {
                                rotation: 45,
                            },

                        },
                        {
                            name: '3.7%',
                            y: 3.7,
                            dataLabels: {
                                rotation: 1,
                            },

                        },
                        {
                            name: '19.9%',
                            y: 19.9,
                            dataLabels: {
                                rotation: -30,
                            },

                        },
                        {
                            name: '4.9%',
                            y: 4.9,
                            dataLabels: {
                                rotation: 15,
                            },

                        },
                        {
                            name: '17.5%',
                            y: 17.5,
                            dataLabels: {
                                rotation: 55,
                            },

                        },
                        {
                            name: '8.7%',
                            y: 8.7,
                            dataLabels: {
                                rotation: -85,
                            },

                        },
                        {
                            name: '17.0%',
                            y: 17.0,
                            dataLabels: {
                                rotation: -40,
                                align: 'middle',
                                verticalAlign: 'middle',
                                padding: 0,
                            },

                        }

                    ],
                borderWidth: 0
            }],

        }, function(chartObj) {
            $.each(chartObj.series[0].data, function (i, point) {
                console.debug(i);
                console.debug(point);
                var degree = (point.angle * 180) / Math.PI;
                var rotation = 0;
                if(i == '0') {
                    point.dataLabel.attr({x: point.dataLabel._pos.x - 20});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});
                }else  if(i == '1'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x - 10});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});
                }else  if(i == '3'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x + 5});
                }else  if(i == '5'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x + 15});
                }else  if(i == '6'){
//                    point.dataLabel.attr({x: point.dataLabel._pos.x + 50});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 30});
                }

                point.dataLabel.show();
            });
        });

        $('#2013-liabilities').highcharts({
            colors: ['#1C4ea0', '#f9b73f', '#ee7627', '#be0041', '#e7337e', '#B13B80', '#2eaa52',
                '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
                marginLeft: -80,
                style: {
                    fontFamily: 'AxiataBook'
                }
            },
            credits: {
                enabled: false
            },
            exporting:{
                enabled: false
            },
            title: {
                text: ' ',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -5,
                        align: 'center',
                        verticalAlign: 'middle',
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            //                            textShadow: '0px 1px 2px black'
                        }
                    },
                    startAngle: 0,
                    endAngle: 360,
                    center: ['50%', '50%']
                },
                column: {
                    pointPadding: 0,
                    borderWidth: 0
                }
            },
            series: [{
                type: 'pie',
                name: '2013 Liabilities',
                innerSize: '75%',
                data: [
                    {
                        name: '30.9%',
                        y: 30.9,
                        dataLabels: {
                            rotation: 55,
                        },

                    },
                    {
                        name: '4.0%',
                        y: 4.0,
                        dataLabels: {
                            rotation: 1,
                        },

                    },
                    {
                        name: '20.4%',
                        y: 20.4,
                        dataLabels: {
                            rotation: -10,
                        },

                    },
                    {
                        name: '5.1%',
                        y: 5.1,
                        dataLabels: {
                            rotation: 30,
                        },

                    },
                    {
                        name: '19.6%',
                        y: 19.6,
                        dataLabels: {
                            rotation: 65,
                        },

                    },
                    {
                        name: '6.0%',
                        y: 6.0,
                        dataLabels: {
                            rotation: -58,
                        },

                    },
                    {
                        name: '14.0%',
                        y: 14.0,
                        dataLabels: {
                            rotation: -30,
                            align: 'middle',
                            verticalAlign: 'middle',
                            padding: 0,
                        },

                    }

                ],
                borderWidth: 0
            }],

        }, function(chartObj) {
            $.each(chartObj.series[0].data, function (i, point) {
                console.debug(i);
                console.debug(point);
                var degree = (point.angle * 180) / Math.PI;
                var rotation = 0;
                if(i == '0') {
                    point.dataLabel.attr({x: point.dataLabel._pos.x - 20});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});
                }else  if(i == '1'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x - 10});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 10});
                }else  if(i == '3'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x + 5});
                }else  if(i == '5'){
                    point.dataLabel.attr({x: point.dataLabel._pos.x + 15});
                }else  if(i == '6'){
//                    point.dataLabel.attr({x: point.dataLabel._pos.x + 50});
                    point.dataLabel.attr({y: point.dataLabel._pos.y + 30});
                }

                point.dataLabel.show();
            });
        });
    });

    </script>


