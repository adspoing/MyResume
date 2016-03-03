var data = {
    labels: ["JAVASCRIPT","CSS", "Node.js","Java", "HTML",],
  
    datasets: [
        {
            label: "My Second dataset",
            fillColor: "rgba(126, 206, 253, 0.4)",
            strokeColor: "rgb(126,206,253)",
            pointColor: "rgba(205 ,209 ,211 ,1)",
            pointStrokeColor: "rgb(126,206,253)",
            pointHighlightFill: "rgb(126,206,253)",
            pointHighlightStroke: "rgb(126,206,253)",
            data: [7, 6, 4, 7, 6 ]
        }
    ]
};

var chartOptions = {
  pointDotStrokeWidth : 3,
  scaleOverride : true, // 目盛の最大値を手動設定（true/false）
  scaleSteps : 10, // 目盛の数
  scaleStartValue : 0, // 目盛の最初の数
  scaleStepWidth : 1, // 目盛の間隔
  angleLineColor : "rgba(205 ,209 ,211 ,1)",
  pointLabelFontSize : 16,
  pointLabelFontColor : "rgba(205 ,209 ,211 ,1)",
  pointLabelFontFamily : "Arial",
  scaleLineColor:"rgba(205 ,209 ,211 ,1)"
};

var ctx = document.getElementById("myChart").getContext("2d");
var myRadarChart = new Chart(ctx).Radar(data, chartOptions);