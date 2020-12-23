function BuildChart(labels, values, chartTitle) {
  var data3 = {
    labels: labels,
    datasets: [{
      label: chartTitle, // Name the series
      data: values,
      backgroundColor: [ // Specify custom colors
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            '#dbf6e9',
            '#ffd5cd',
            '#ffecc7',
            '#d8b9c3',
            '#f5fcc1',
            '#f3d1f4',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            '#dbf6e9',
            '#ffd5cd',
            '#ffecc7',
            '#d8b9c3',
            '#f5fcc1',
            '#f3d1f4'
          ],
    }],
  };

  var ctx = document.getElementById("myChart3").getContext('2d');
  var myChart3 = new Chart(ctx, {
    type: 'bar',
    data: data3,
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behavior of full-width/height
      scales: {
        xAxes: [{
          scaleLabel: { 
            display: true,
            labelString: 'Name of Test'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Score'
          }
        }]
      },
    }
  });

  return myChart3;
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.response);
    console.log(json);

  // Map JSON labels  back to values array
  var labels = json.feed.entry.map(function (e) {
    return e.gsx$test.$t;
  });

  // Map JSON values back to values array
  var values = json.feed.entry.map(function (e) {
    return e.gsx$score.$t;
  });

  BuildChart(labels, values, "District Assessments");
  }
};
xhttp.open("GET", "https://spreadsheets.google.com/feeds/list/18chZtzkVsTxsThuv6GSa48ufH6ddHJB98_pBE9N2Gf8/od6/public/full?alt=json", false);
xhttp.send();
