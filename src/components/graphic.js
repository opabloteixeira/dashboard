$(document).ready(function(){

  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Months', 'Access', 'Access'],
        ['January',   1,         400],
        ['February',  1170,      460],
        ['March',     660,       1120],
        ['April',     1030,      540],
        ['May',       1030,      540],
        ['June',      1030,      540],
        ['July',      1030,      540]
        ]);


      var options = {
        title: 'Site Traffic Overview',
        vAxis: {minValue: 0},
        legend: 'none',
        colors: ['gray', 'blue'],

      };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

      $(window).resize(function(){
        drawChart();
      });
});