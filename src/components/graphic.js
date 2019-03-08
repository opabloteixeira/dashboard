
  
  let responseViews;

  createComponent( "pageViews", function (response) {

      responseViews = response;


      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {

          var data = google.visualization.arrayToDataTable([
            ['Months', 'Access'],
            ['January',   responseViews[0].views ],
            ['February',  responseViews[1].views ],
            ['March',     responseViews[2].views ],
            ['April',     responseViews[3].views ],
            ['May',       responseViews[4].views ],
            ['June',      responseViews[5].views ],
            ['July',      responseViews[6].views ]
            ]);


          var options = {
            title: 'Site Traffic Overview',
            vAxis: {minValue: 0},
            legend: 'none',
            colors: ['blue'],

          };

            var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
            chart.draw(data, options);
          }

          $(window).resize(function(){
            drawChart();
          });


      }, function (error) {
          console.log(error);
      });
