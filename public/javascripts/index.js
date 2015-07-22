var lst = {'556f49cf70969dcf017d8024':'0', '556f49cf70969dcf017d8025':'1', '556f49cf70969dcf017d8026':'2',
      '556f49cf70969dcf017d8027':'3', '556f49cf70969dcf017d8028':'4', '556f49cf70969dcf017d8029':'5',
      '556f49cf70969dcf017d8032':'6', '556f49cf70969dcf017d8033':'7', '556f49cf70969dcf017d8034':'8',
      '556f49cf70969dcf017d8035':'9', '556f49cf70969dcf017d8036':'10', '556f49cf70969dcf017d8037':'11'};
$(function() {
    $.ajax({
      url: '/inuse',
      type: 'GET',
      success: function(data) {
        //"width:80px;height:53px;border:5px solid red;position:absolute;"
        for (var x = 0;x<12;x++) {
          document.getElementById('calendar' + x).style.border = '5px solid green';
        }
        for (elem in data) {
          if (data[elem].AssetID in lst) {
            document.getElementById('calendar' + lst[data[elem].AssetID]).style.border = '5px solid red';
          }
        }
      },
      dataType: 'json'
    });
  })

setInterval(
  function() {
    $.ajax({
      url: '/inuse',
      type: 'GET',
      success: function(data) {
        //"width:80px;height:53px;border:5px solid red;position:absolute;"
        for (var x = 0;x<12;x++) {
          document.getElementById('calendar' + x).style.border = '5px solid green';
        }
        for (elem in data) {
          if (data[elem].AssetID in lst) {
            document.getElementById('calendar' + lst[data[elem].AssetID]).style.border = '5px solid red';
          }
        }
      },
      dataType: 'json'
    });
  }, 15000);