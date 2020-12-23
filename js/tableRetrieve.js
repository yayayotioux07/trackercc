var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var json = JSON.parse(this.response);
    console.log(json);

  // Map JSON labels  back to values array
  var labels = json.feed.entry.map(function (e) {
    return e.gsx$localId.$t;
  });

  // Map JSON values back to values array
  var values = json.feed.entry.map(function (e) {
    return e.gsx$percent.$t;
  });
  console.log(labels, values)

}

xhttp.open("GET", "https://spreadsheets.google.com/feeds/list/18chZtzkVsTxsThuv6GSa48ufH6ddHJB98_pBE9N2Gf8/od6/public/full?alt=json", false);
xhttp.send();
