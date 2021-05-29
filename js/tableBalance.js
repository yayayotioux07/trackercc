

function bal() {

var $table = $('#table2');
var myData = [];

$.getJSON("https://spreadsheets.google.com/feeds/list/1yyy4_1UwDvKgAiauG53BZIIWndAr4Am5Hm8bekSjy8k/3/public/values?alt=json", function(data) {

            myData = []; // reset whenever data loads
            var sheetData = data.feed.entry;

            var i;
            for (i = 0; i < sheetData.length; i++) {

                var dataPoint = {
                  date: data.feed.entry[i]['gsx$date']['$t'],
                  description: data.feed.entry[i]['gsx$description']['$t'],
                  amount: data.feed.entry[i]['gsx$amount']['$t'],
                  may: data.feed.entry[i]['gsx$may']['$t'],
                  limit: data.feed.entry[i]['gsx$limit']['$t'],


                  // clientname: data.feed.entry[i]['gsx$clientname']['$t'],
                  // delivery: data.feed.entry[i]['gsx$delivery']['$t']
                };
                myData.push(dataPoint); // add data point to array to reference later
   // var email = data.feed.entry[i]['gsx$email']['$t'];
                // var delivery = data.feed.entry[i]['gsx$delivery']['$t'];
              //   $(function () {
              //       $('#table').bootstrapTable({
              //           data: myData
              //       });
              //   //
              //   // document.getElementById('demo').innerHTML +=
              //   //     ('<tr>' +
              //   //         // "<tr>" + dataPoint.name + '</tr>' +
              //   //         // "<tr>" + dataPoint.score + '</tr>' +
              //   //         '<span class="cn" onclick="showDetails(' + i + ');">' + dataPoint.name + '</span>' +" "+
              //   //         '<span class="cn" onclick="showDetails(' + i + ');">' + dataPoint.mock + '</span>' +" "
              //   //        '</td>' +
              //   //        '<td class="ml-auto gg" onclick="showDetails(' + i + ');">' +
              //   //        '</td>' +
              //   //     '</tr>');
              // });
            };
            $('#table2').bootstrapTable('destroy');

            $('#table2').bootstrapTable({
              data: myData
            })            ;
});
}
