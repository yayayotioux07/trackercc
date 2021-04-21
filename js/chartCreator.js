function BuildChart(labels, values, chartTitle) {
  var data = {
    labels: labels,
    datasets: [{
      // label: chartTitle, // Name the series
      data: values,
      backgroundColor: [ // Specify custom colors
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
    }],
  };

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false
    }

  });
  return myChart;
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.response);
    console.log(json);

  // Map JSON labels  back to values array
  var labels = json.feed.entry.map(function (e) {
    return e.gsx$type.$t;
  });
  // Map JSON values back to values array
  var values = json.feed.entry.map(function (e) {
    return e.gsx$values.$t;
  });

  BuildChart(labels, values, "Usage");
  }
};
xhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1yyy4_1UwDvKgAiauG53BZIIWndAr4Am5Hm8bekSjy8k/2/public/values?alt=json", false);
xhttp.send();
