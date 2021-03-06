'use strict';
var switchcase = 0;
var startdate;
var enddate;
var id = '556f49cf70969dcf017d8027';

var cal = new CalHeatMap();
  cal.init({
    start: new Date(),
    id: id,
    data: '/getData3',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    width: 40
    },
    cellSize: 15,
    itemSelector: document.getElementById('cal3'),
    legend: [1, 2, 3, 4, 5, 6, 7, 8],
    subDomainTextFormat: '%H',
    highlight: ['now'],
    onClick: function(date, count) {
      var r;
      if (count !== null && switchcase === 0) {
        // r = confirm('Please confirm that you want to delete this time block.');
        // if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: id, user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal.update('getData3')}, 600);
        // }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 1;
        } else if (switchcase === 1){
        enddate = date;
        switchcase = 0;
        // var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        // if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: id, user: $('input[name=\'name\']:checked').val(), type: 1},
          dataType: 'json'
          });
          window.setTimeout(function(){cal.update('getData3')}, 600);
        // }
        }
      }
      }
  });
$(function() {
    $('#proto').change(function(){
        $('.protocols').hide();
        $('#' + $(this).val()).show();
    });
});
// $(function() {
//         $('#proto').change(function(){
//             $('.customprotocol').hide();
//             $('#' + $(this).val()).show();
//         });
//     });
