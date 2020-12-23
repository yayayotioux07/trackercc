var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.response);
    console.log(json);

  // Map JSON values back to values array
  var values1 = json.feed.entry.map(function (e) {
    return e.gsx$dcanumber.$t;
  });

  var values2 = json.feed.entry.map(function (e) {
    return e.gsx$mocknumber.$t;
  });
  }
  var ctx = document.getElementById("myChart2");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
            datasets: [{
                label: 'DCA',
                data: values1,
                backgroundColor: [ // Specify custom colors
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 99, 132, 0.2)'
                    ]
            }, {
                label: 'Mock',
                data: values2,
                backgroundColor: [ // Specify custom colors
                      '#dbf6e9',
                      '#dbf6e9',
                      '#dbf6e9',
                      '#dbf6e9',
                      '#dbf6e9'
                    ],

                type: 'bar'
            }],
            labels: ['Not Approaches', 'Approaches', 'Meets', 'Masters']
        },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behavior of full-width/height
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax:60
          },
          scaleLabel: {
            display: true,
            labelString: 'Score'
          }
        }]
      },
    }
  });

};
xhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1zu5caB_-S2k-uhjZn8BU92kSDAcEntleIO3JmAP62_w/od6/public/full?alt=json", false);
xhttp.send();
