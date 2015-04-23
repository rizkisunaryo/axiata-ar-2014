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
                    name: '2014 Assets',
                    innerSize: '75%',
                    data: [
                        ['16.2%',   16.2],
                        ['39.3%',   39.3],
                        ['22.0%',   22.0],
                        ['1.5%',    1.5],
                        ['14.8%',   14.8],
                        ['6.2%',    6.2],

                    ],
                borderWidth: 0
            }],

        });

        $('#2013-assets').highcharts({
            colors: ['#B13B80', '#1C4ea0', '#f9b73f', '#ee7627', '#be0041', '#e7337e',
                '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
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
                    ['15.45%',   15.45],
                    ['40.6%',       40.6],
                    ['26.1%', 26.1],
                    ['1.3%',    1.3],
                    ['10.4%',     10.4],
                    ['6.2%',     6.2],

                ],
                borderWidth: 0
            }],

        });
        $('#2014-liabilities').highcharts({
            colors: [ '#1C4ea0', '#f9b73f', '#ee7627', '#be0041', '#e7337e', '#B13B80', '#2eaa52',
                '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
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
                            rotatew : 'auto',
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
                    name: '2014 Liabilities',
                    innerSize: '75%',
                    data: [
                        ['28.3%',   28.3],
                        ['3.7%',       3.7],
                        ['19.9%', 19.9],
                        ['4.9%',    4.9],
                        ['17.5%',     17.5],
                        ['8.7%',     8.7],
                        ['17.0%',     17.0],

                    ],
                borderWidth: 0
            }],

        });

        $('#2013-liabilities').highcharts({
            colors: ['#1C4ea0', '#f9b73f', '#ee7627', '#be0041', '#e7337e', '#B13B80', '#2eaa52',
                '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
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
                name: '2013 Liabilities',
                innerSize: '75%',
                data: [
                    ['30.9%',   30.9],
                    ['4.0%',       4.0],
                    ['20.4%', 20.4],
                    ['5.1%',    5.1],
                    ['17.5%',     17.5],
                    ['8.7%',     8.7],
                    ['17.0%',     17.0],

                ],
                borderWidth: 0
            }],

        });
    });

    </script>


