'use strict';
var moment = require('moment');
  require('moment-range');
var today = moment().format('YYYY-MM-DD') + 'T',
  nextweek = moment().add(14, 'days').format('YYYY-MM-DD') + 'T';
  var dlim = require('../dlim.json'),
  protocols = require('../protocols.json'),
  googleapis = require('googleapis'),
  gcal = googleapis.calendar('v3'),
  async = require('async-foreach').forEach;
dlim = dlim.data;
protocols = protocols.data;

module.exports = function(app, passport) {
  var calendarId = 'asork42@berkeley.edu';

  var SERVICE_ACCOUNT_EMAIL = '11919937873-oa50l7m4t920h26ii46v47ok3albdraa@developer.gserviceaccount.com';
  var SERVICE_ACCOUNT_KEY_FILE = __dirname + '/newKey.pem';
  var oauth2Client = new googleapis.auth.JWT(
    SERVICE_ACCOUNT_EMAIL,
    SERVICE_ACCOUNT_KEY_FILE,
    null,
    ['https://www.googleapis.com/auth/calendar']
  );

  function iSODateString(d){
    function pad(n) {
      return n < 10 ? '0' + n : n;
    }
    return d.getUTCFullYear() + '-'
        + pad(d.getUTCMonth() + 1) + '-'
        + pad(d.getUTCDate()) + 'T'
        + pad(d.getUTCHours()) + ':'
        + pad(d.getUTCMinutes()) + ':'
        + pad(d.getUTCSeconds()) + 'Z';
  }

  oauth2Client.authorize(function(err, tokens) {
    if (err) {
      console.log(err)
      return
    } else {
      console.log(tokens.access_token);
      // this lists all assets and scheduled assets
      app.get('/', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            // res.send(1)
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            // res.send(1)
            res.render('index', {assets: dlim, scheduledassets: eventlst});
          }
        });
      });

      app.get('/cal0', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal0', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal1', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal1', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal2', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal2', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal3', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal3', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal4', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal4', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal5', function(req, res) {
        // var accessToken = req.session.access_token;
        console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal5', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal6', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal6', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal7', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal7', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal8', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal8', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal9', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal9', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal10', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal10', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      app.get('/cal11', function(req, res) {
        // var accessToken = req.session.access_token;
        // console.log(access + " listing")
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            var eventlst = {};
            for (var anevent in events.items) {
            eventlst[anevent] = {assetname: events.items[anevent].summary,
                        AssetID: events.items[anevent].description,
                        start: events.items[anevent].start.dateTime,
                        end: events.items[anevent].end.dateTime
                        };
                      }
            res.render('cal11', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
          }
        });
      });
      //this route gets a list of all events happening currently for available function
      app.get('/inuse', function(req,res) {
        gcal.events.list(
          {
            auth: oauth2Client,
            calendarId: calendarId,
            timeMin: moment().startOf('hour').format(),
            timeMax: moment().startOf('hour').add(59, 'minutes').format()
          }, function (err, events) {
            if (err) {
              return res.send(500, err)
            } else {
              var eventlst = [];
              for (var anevent in events.items) {
              eventlst.push({assetname: events.items[anevent].summary,
                          AssetID: events.items[anevent].description,
                          start: events.items[anevent].start.dateTime,
                          end: events.items[anevent].end.dateTime
                          });
                        }
              res.send(eventlst)
          }
        })
      })

      // this adds an event to the calendar. also makes sure that the entry is valid (bookable and no conflicts)
      app.post('/addevent', function(req, res){
        // var accessToken = req.session.access_token;
        var startdate, enddate, name, user;
        var route = req.body.route;
        if (req.body.type == '0') {
          var protonum;
          if (req.body.protonum == 'custom') {
            protonum = req.body.customrange;
          } else {
            protonum = protocols[req.body.protonum].properties.duration - 1;
          }
          user = req.body.name;
          startdate = moment().startOf('hour').add(req.body.date, 'days').add(req.body.time, 'hours').format();
          enddate = moment().startOf('hour').add(req.body.date, 'days').add(parseInt(req.body.time) + parseInt(protonum), 'hours').format();
          console.log(startdate, enddate)
        } else {
          startdate = req.body.startdate;
          enddate = req.body.enddate;
          startdate = iSODateString(new Date(startdate));
          enddate = iSODateString(new Date(enddate));
          user = req.body.user;
          console.log(startdate, enddate)
        }
        name = req.body.id;
        //get the list of scheduled events
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            return res.send(500, err);
          } else {
            //start here
              var eventlst = {};
              for (var anevent in events.items) {
                eventlst[anevent] = {asset: events.items[anevent].summary,
                            eventId: events.items[anevent].description,
                            start: events.items[anevent].start.dateTime,
                            end: events.items[anevent].end.dateTime,
                            id: events.items[anevent].id};
                          }
              var exists = false,
                bookable,
                assetname;
                for (var assets in dlim) {
                  if (dlim[assets].id === name) {
                    assetname = dlim[assets].properties.name;
                    exists = true;
                    bookable = JSON.parse(dlim[assets].properties.bookable);
                  }
                }
              //checking current calendar if there are any overlaps
              if (exists && bookable) {
                var overlaps = false;
                for (anevent in eventlst) {
                  if (eventlst[anevent].eventId === name) {
                      var eventstart = eventlst[anevent].start,
                      eventend = eventlst[anevent].end;
                    var interval2 = startdate + '/' + enddate;
                    var interval1 = moment.range(eventstart, eventend);
                      interval2 = moment.range(interval2);
                      // console.log(interval1,interval2)
                    if ((interval2.overlaps(interval1))) {
                      overlaps = true;
                    }
                  }
                }
              if (!overlaps) {
                // now add since its valid timeslot and name
                  var event = {
                        summary: assetname,
                        description: name,
                        end: {dateTime: enddate},
                        start: {dateTime: startdate},
                        location: user
                        };
                  gcal.events.insert({auth: oauth2Client,
                                      calendarId: calendarId,
                                      resource: event},
                    function(err2) {
                      if (err2) {
                        return res.status(500).send(err2);
                      } else {
                        console.log('added an event')
                        // return res.redirect('/home');
                        if (req.body.type == '0') {
                          return res.redirect('/' + route);
                        } else {
                          return res.end();
                        }
                      }
                    });
                } else {
                  return res.send(500, {error: 'Not available at that time'});
                }
              } else {
                return res.send(500, {error: 'Not a valid asset or unbookable'});
              }
            }
        });
      });

      // this function deletes an event from the calendar by the entry number
      app.post('/delevent', function(req, res) {
        var time = req.body.timestamp, id = req.body.id;
        time = new Date(time);
        // list the events are planned for the day
        gcal.events.list(
          {
          auth: oauth2Client,
          calendarId: calendarId,
          timeMin: today + '00:00:00.000Z',
          timeMax: nextweek + '23:59:59.000Z'},
          function(err, events) {
          if(err) {
            console.log('Error fetching events');
            console.log(err);
          } else {
            // make listing the useful information
            console.log('Successfully fetched events');
            // var eventlst = {};
            var eventid;
            for (var anevent in events.items) {
              if (events.items[anevent].description === id) {
                var interval1 = moment.range(events.items[anevent].start.dateTime + '/' + events.items[anevent].end.dateTime);
                if (interval1.contains(time)){
                  eventid = events.items[anevent].id;
                }
              }
            }

            gcal.events.delete({auth: oauth2Client, calendarId: calendarId, eventId: eventid},
                              function(err3) {
                                if(err3) {
                                  console.log('Error deleting an event');
                                } else {
                                  console.log('Successfully deleted an event');
                                  // res.redirect('/home');
                                  return res.end();
                                  }
                                });
          }
        });
      });

      async(dlim, function(item, index, arr) {
        app.get('/getData' + index, function(req, res) {
          gcal.events.list(
            {
            auth: oauth2Client,
            calendarId: calendarId,
            timeMin: today + '00:00:00.000Z',
            timeMax: nextweek + '23:59:59.000Z'},
            function(err, events) {
            if(err) {
              return res.send(500, err);
            } else {
              var eventlst = {};
              for (var anevent in events.items) {
              eventlst[anevent] = {assetname: events.items[anevent].summary,
                          AssetID: events.items[anevent].description,
                          start: events.items[anevent].start.dateTime,
                          end: events.items[anevent].end.dateTime,
                          user: events.items[anevent].location
                          };
                        }
              // now make timestamps
              var schedulelist = [];
              for (var scheduledasset in eventlst) {
                var templist = [];
                var starttime = eventlst[scheduledasset].start;
                var endtime = eventlst[scheduledasset].end;
                templist.push(eventlst[scheduledasset].AssetID);
                templist.push(Date.parse(starttime) / 1000);
                templist.push(Date.parse(endtime) / 1000);
                templist.push(eventlst[scheduledasset].user);
                schedulelist.push(templist);
              }
              var timestamp = {};
              for (var newlist in schedulelist) {
                if (schedulelist[newlist][0] === arr[index].id) {
                  var currentstamp = schedulelist[newlist][1];
                  while (schedulelist[newlist][2] >= currentstamp) {
                    timestamp[currentstamp] = parseInt(schedulelist[newlist][3]);
                    currentstamp = currentstamp + 3600;
                  }
                }
              }
              res.send(timestamp);
            }
          });
        });
      });


    }
  })
};






























