/* global CalHeatMap, $*/
/* eslint-disable no-alert */

//TODO: Implement eventsource, add multiple users

'use strict';
var switchcase = 0;
var startdate;
var enddate;
// var update = 0;

var cal = new CalHeatMap();
  cal.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8024',
    data: '/getData0',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal0'),
    legend: [1, 2, 3, 4, 5, 6, 7, 8],
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      var r;
      if (count !== null && switchcase === 0) {
        console.log(count);
        r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8024', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal.update('getData0')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 1;
        } else if (switchcase === 1){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8024', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal.update('getData0')}, 600);
        }
        }
      }
      }
  });
var cal1 = new CalHeatMap();
  cal1.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8025',
    data: '/getData1',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal1'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      if (count !== null && switchcase === 0) {
        var r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8025', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal1.update('getData1')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 2;
        } else if (switchcase === 2){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8025', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal1.update('getData1')}, 600);
        }
        }
      }
      }
  });
var cal2 = new CalHeatMap();
  cal2.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8026',
    data: '/getData2',
    domain: 'day',
    subDomain: 'hour',
    range: 14,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal2'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    subDomainTextFormat: '%H',
    // cellSize: 22,
    onClick: function(date, count) {
      if (count !== null && switchcase === 0) {
        var r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8026', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal2.update('getData2')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 3;
        } else if (switchcase === 3){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8026', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal2.update('getData2')}, 600);
        }
        }
      }
      }
  });
var cal3 = new CalHeatMap();
  cal3.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8027',
    data: '/getData3',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal3'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    domainLabelFormat: '',
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      if (count !== null && switchcase === 0) {
        var r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8027', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal3.update('getData3')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 4;
        } else if (switchcase === 4){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8027', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal3.update('getData3')}, 600);
        }
        }
      }
      }
  });
var cal4 = new CalHeatMap();
  cal4.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8028',
    data: '/getData4',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal4'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    domainLabelFormat: '',
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      if (count !== null && switchcase === 0) {
        var r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8028', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal4.update('getData4')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 5;
        } else if (switchcase === 5){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8028', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal4.update('getData4')}, 600);
        }
        }
      }
      }
  });
var cal5 = new CalHeatMap();
  cal5.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8029',
    data: '/getData5',
    domain: 'day',
    subDomain: 'hour',
    range: 14,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal5'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    domainLabelFormat: '',
    // cellSize: 22,
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      if (count !== null && switchcase === 0) {
        var r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8029', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal5.update('getData5')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 6;
        } else if (switchcase === 6){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8029', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal5.update('getData5')}, 600);
        }
        }
      }
      }
  });
var cal6 = new CalHeatMap();
  cal6.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8032',
    data: '/getData6',
    domain: 'day',
    subDomain: 'hour',
    range: 14,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal6'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    // cellSize: ,
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      var r;
      if (count !== null && switchcase === 0) {
        r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8032', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal6.update('getData6')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 1;
        } else if (switchcase === 1){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8032', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal6.update('getData6')}, 600);
        }
        }
      }
      }
  });
var cal7 = new CalHeatMap();
  cal7.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8033',
    data: '/getData7',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal7'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      var r;
      if (count !== null && switchcase === 0) {
        r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8033', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal7.update('getData7')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 1;
        } else if (switchcase === 1){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8033', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal7.update('getData7')}, 600);
        }
        }
      }
      }
  });
var cal8 = new CalHeatMap();
  cal8.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8034',
    data: '/getData8',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal8'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      var r;
      if (count !== null && switchcase === 0) {
        r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8034', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal8.update('getData8')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 1;
        } else if (switchcase === 1){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8034', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal8.update('getData8')}, 600);
        }
        }
      }
      }
  });
var cal9 = new CalHeatMap();
  cal9.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8035',
    data: '/getData9',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal9'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    domainLabelFormat: '',
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      var r;
      if (count !== null && switchcase === 0) {
        r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8035', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal9.update('getData9')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 1;
        } else if (switchcase === 1){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8035', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal9.update('getData9')}, 600);
        }
        }
      }
      }
  });
var cal10 = new CalHeatMap();
  cal10.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8036',
    data: '/getData10',
    domain: 'day',
    subDomain: 'hour',
    range: 6,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal10'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    domainLabelFormat: '',
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      var r;
      if (count !== null && switchcase === 0) {
        r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8036', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal10.update('getData10')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 1;
        } else if (switchcase === 1){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8036', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal10.update('getData10')}, 600);
        }
        }
      }
      }
  });
var cal11 = new CalHeatMap();
  cal11.init({
    start: new Date(),
    id: '556f49cf70969dcf017d8037',
    data: '/getData11',
    domain: 'day',
    subDomain: 'hour',
    range: 14,
    verticalOrientation: true,
    rowLimit: 1,
    label: {
    position: 'left',
    offset: {
      x: 20,
      y: 12
    },
    width: 110
    },
    itemSelector: document.getElementById('cal11'),
    legend: [1, 2, 3, 4, 5, 6, 7],
    domainLabelFormat: '',
    // cellSize:22,
    subDomainTextFormat: '%H',
    onClick: function(date, count) {
      var r;
      if (count !== null && switchcase === 0) {
        r = confirm('Please confirm that you want to delete this time block.');
        if (r === true) {
        $.ajax({
          url: '/delevent',
          type: 'POST',
          data: {timestamp: date, id: '556f49cf70969dcf017d8037', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
        window.setTimeout(function(){cal11.update('getData11')}, 600);
        }
      } else {
        if (switchcase === 0) {
        startdate = date;
        switchcase = 1;
        } else if (switchcase === 1){
        enddate = date;
        switchcase = 0;
        var r2 = confirm('Please confirm your schedule \n' + startdate + ' -- ' + enddate);
        if (r2 === true) {
          $.ajax({
          url: '/addevent',
          type: 'POST',
          data: {startdate: startdate, enddate: enddate, id: '556f49cf70969dcf017d8037', user: $('input[name=\'name\']:checked').val()},
          dataType: 'json'
          });
          window.setTimeout(function(){cal11.update('getData11')}, 600);
        }
        }
      }
      }
  });

window.setInterval(function(){cal.update('getData0');cal1.update('getData1');cal2.update('getData2');cal3.update('getData3');
                              cal4.update('getData4');cal5.update('getData5');cal6.update('getData6');cal7.update('getData7');
                              cal8.update('getData8');cal9.update('getData9');cal10.update('getData10');cal11.update('getData11');}, 10000);

// var b = document.getElementsByClassName('cal-heatmap-container')
// for (var elem in b) {
// console.log(b[0])
// b[0].setAttribute('height', '100');
// }
