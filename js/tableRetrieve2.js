

function notAppr  () {

var $table = $('#table');
var myData = [];


$.getJSON("https://spreadsheets.google.com/feeds/list/16Wb-gntqZ41PPqVqSDZbcFwqxoxJaWcFwyaOIbOyVhA/od6/public/values?alt=json", function(data) {

            myData = []; // reset whenever data loads
            var sheetData = data.feed.entry;

            var i;
            for (i = 0; i < sheetData.length; i++) {

                var dataPoint = {
                  name: data.feed.entry[i]['gsx$student']['$t'],
                  mock: data.feed.entry[i]['gsx$mockpercent']['$t'],
                  dca: data.feed.entry[i]['gsx$dcapercent']['$t'],

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
            $('#table').bootstrapTable('destroy');

            $('#table').bootstrapTable({
              data: myData
            })            ;
});
}

function approaches() {
  var $table = $('#table');
  var myData = [];


  // an example function that will get the data by index so it can be used however you want
  function showDetails(index) {
     var selectedData = myData[index];
     alert(JSON.stringify(selectedData, null, 2));
  }

  $.getJSON("https://spreadsheets.google.com/feeds/list/16aGwZlPuezgeNalisGOIpVwI_6NuedWPERWiXaoYKwA/od6/public/values?alt=json", function(data) {

              myData = []; // reset whenever data loads
              var sheetData = data.feed.entry;

              var i;
              for (i = 0; i < sheetData.length; i++) {

                  var dataPoint = {
                    name: data.feed.entry[i]['gsx$student']['$t'],
                    mock: data.feed.entry[i]['gsx$mockpercent']['$t'],
                    dca: data.feed.entry[i]['gsx$dcapercent']['$t'],

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
              $('#table').bootstrapTable('destroy');

              $('#table').bootstrapTable({
                data: myData
              })            ;

  });

}
function meets() {
  var $table = $('#table');
  var myData = [];


  // an example function that will get the data by index so it can be used however you want
  function showDetails(index) {
     var selectedData = myData[index];
     alert(JSON.stringify(selectedData, null, 2));
  }

  $.getJSON("https://spreadsheets.google.com/feeds/list/124IvRVa0bCwvsYbEEliqEp0kd9Nsm86b1DrLBWXkYAI/od6/public/values?alt=json", function(data) {

              myData = []; // reset whenever data loads
              var sheetData = data.feed.entry;

              var i;
              for (i = 0; i < sheetData.length; i++) {

                  var dataPoint = {
                    name: data.feed.entry[i]['gsx$student']['$t'],
                    mock: data.feed.entry[i]['gsx$mockpercent']['$t'],
                    dca: data.feed.entry[i]['gsx$dcapercent']['$t'],

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
              $('#table').bootstrapTable('destroy');

              $('#table').bootstrapTable({
                data: myData
              })            ;

  });

}

function master() {
  var $table = $('#table');
  var myData = [];


  // an example function that will get the data by index so it can be used however you want
  function showDetails(index) {
     var selectedData = myData[index];
     alert(JSON.stringify(selectedData, null, 2));
  }

  $.getJSON("https://spreadsheets.google.com/feeds/list/1KkMDA84nR1CbLKe9-V3356lzEA_FJ2dXFrRuQYa1BQw/od6/public/values?alt=json", function(data) {

              myData = []; // reset whenever data loads
              var sheetData = data.feed.entry;

              var i;
              for (i = 0; i < sheetData.length; i++) {

                  var dataPoint = {
                    name: data.feed.entry[i]['gsx$student']['$t'],
                    mock: data.feed.entry[i]['gsx$mockpercent']['$t'],
                    dca: data.feed.entry[i]['gsx$dcapercent']['$t'],

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
              $('#table').bootstrapTable('destroy');

              $('#table').bootstrapTable({
                data: myData
              })            ;
  });

}


function allStudents() {
  var $table = $('#table');
  var myData = [];


  // an example function that will get the data by index so it can be used however you want
  function showDetails(index) {
     var selectedData = myData[index];
     alert(JSON.stringify(selectedData, null, 2));
  }

  $.getJSON("https://spreadsheets.google.com/feeds/list/1usJjRB2B4oD3ap_FF-M2a91JrsGb1kmTle0IacmVWzY/od6/public/values?alt=json", function(data) {

              myData = []; // reset whenever data loads
              var sheetData = data.feed.entry;

              var i;
              for (i = 0; i < sheetData.length; i++) {

                  var dataPoint = {
                    name: data.feed.entry[i]['gsx$student']['$t'],
                    mock: data.feed.entry[i]['gsx$mockpercent']['$t'],
                    dca: data.feed.entry[i]['gsx$dcapercent']['$t'],

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
              $('#table').bootstrapTable('destroy');

              $('#table').bootstrapTable({
                data: myData
              })            ;
  });

}
