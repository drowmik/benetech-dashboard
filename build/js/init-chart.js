'use strict'

/**********************************************
** *** Developer: Debashis Roy Bhowmik *** ****
* *** Email: debashis.buet08@gmail.com *** ****
********* *** Website: debashis.me *** ********
* *** Github: https://github.com/wall-e-08/ ***
***********************************************/

/*
* Jquery chart js
* documentation: https://www.chartjs.org/
* using 2 types here:
* https://www.chartjs.org/samples/latest/charts/line/basic.html
* https://www.chartjs.org/samples/latest/charts/pie.html
*/


var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var line_chart_config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
                90,
                50,
                23,
                94,
                23,
                22,
                3
            ],
            fill: false,
        }, {
            label: 'My Second dataset',
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            data: [
                50,
                20,
                13,
                104,
                83,
                12,
                30
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'HOSPITAL SURVEY'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};


var pie_chart_config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                50,
                22,
                13,
                8,
                7,
            ],
            backgroundColor: [
                '#dc3545',
                '#fd7e14',
                '#ffc107',
                '#20c997',
                '#007bff',
                '#4dc9f6',
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true
    }
};

window.onload = function() {
    let ctx1 = document.getElementById('canvas-1').getContext('2d');
    window.myLine = new Chart(ctx1, line_chart_config); // myLine variable is reusable, you can remove it if not needed

    let ctx2 = document.getElementById('canvas-2').getContext('2d');
    window.myPie = new Chart(ctx2, pie_chart_config);   // myPie variable is reusable, you can remove it if not needed
};














