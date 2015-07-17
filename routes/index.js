'use strict';
var moment = require('moment');
  require('moment-range');
var today = moment().format('YYYY-MM-DD') + 'T',
  nextweek = moment().add(14, 'days').format('YYYY-MM-DD') + 'T';
  var dlim = require('../dlim.json'),
  protocols = require('../protocols.json'),
  GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
  googleapis = require('googleapis'),
  gcal = googleapis.calendar('v3'),
  async = require('async-foreach').forEach,
  refresh1 = require('passport-oauth2-refresh');
  var firstuser = true;
  var access = null;
  var refresh = '1/ty4-vKRzAtYU9V3eId0_eV8MiVfDz4XO5cbhkrGhXrY';
dlim = dlim.data;
protocols = protocols.data;

module.exports = function(app, passport) {
  // currently using personal client ID and Secret
  // var GOOGLE_CLIENT_ID = '432970261261-801ruc4jqmma8k15pucjrkjtqqd9mvee.apps.googleusercontent.com',
  //   GOOGLE_CLIENT_SECRET = '4XsPu8UGPjP1eFJUWVWny0TA',
  //   calendarId = 'bionanolabs@gmail.com';
  var GOOGLE_CLIENT_ID = '11919937873-fra7s7e84q0r6jd1p2ch74fussveniet.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET = 'Ub1eh_9Q17Vo9GcJCAaKq9id',
    calendarId = 'asork42@berkeley.edu',
    redirectURL = 'http://localhost:3000/auth/google/callback';
    // redirectURL = 'https://deployhotel.herokuapp.com/auth/google/callback';

  var OAuth2 = googleapis.auth.OAuth2;
  var oauth2Client = new OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, redirectURL);

  // serialize user
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  // deserialize user
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  // use the GoogleStrategy within Passport
  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
    // callbackURL: 'https://deployhotel.herokuapp.com/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      if (firstuser === true) {
        access = accessToken;
        // refresh = refreshToken;
        firstuser = false;
      }
      // Retrieve tokens via token exchange explained above or set them:
      oauth2Client.setCredentials({
        access_token: access,
        refresh_token: refresh
      });
      console.log(refreshToken);
      console.log(refresh);
      return done(null, profile);
    }
  ));
  // use the GoogleStrategy within Passport
  refresh1.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
    // callbackURL: 'https://deployhotel.herokuapp.com/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      // gcal = new google.GoogleCalendar(accessToken);
      oauth2Client.setCredentials({
        access_token: access,
        refresh_token: refresh
      });
      return done(null, profile);
    }
  ));

  // get request
  app.get('/auth/google', passport.authenticate('google', { scope: ['openid', 'https://www.googleapis.com/auth/calendar'], accessType: 'offline'}));

  // get callback
  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      // req.session.access_token = req.user.accessToken;
      res.redirect('/');
    });

  // this makes sure user is authenticated, otherwise redirect to login screen
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    if (firstuser === true) {
      res.redirect('/auth/google');
    } else {
      return next();
    }
  }

  app.get('/cal0', ensureAuthenticated, function(req, res) {
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
        res.render('cal0', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
      }
    });
  });
  app.get('/cal1', ensureAuthenticated, function(req, res) {
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
        res.render('cal1', {assets: dlim, scheduledassets: eventlst, protocols: protocols});
      }
    });
  });
  // this lists all assets and scheduled assets
  app.get('/', ensureAuthenticated, function(req, res) {
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
        res.render('index', {assets: dlim, scheduledassets: eventlst});
      }
    });
  });

  function iSODateString(d){
   function pad(n){return n < 10 ? '0' + n : n; }
   return d.getUTCFullYear() + '-'
        + pad(d.getUTCMonth() + 1) + '-'
        + pad(d.getUTCDate()) + 'T'
        + pad(d.getUTCHours()) + ':'
        + pad(d.getUTCMinutes()) + ':'
        + pad(d.getUTCSeconds()) + 'Z'; }

  setInterval(
            function(){
              refresh1.requestNewAccessToken('google', refresh, function(err, accessToken) {
              if(err || !accessToken) {
                return err;
              }
              // Save the new accessToken for future use
              // console.log(refresh + " makes " + access)
              access = accessToken;
              // Retrieve tokens via token exchange explained above or set them:
              oauth2Client.setCredentials({
                access_token: access,
                refresh_token: refresh
              });
              console.log(access + " refreshed")
              // gcal = new google.GoogleCalendar(access);
              })
            }
            // , 10000);
            , 1800000);

  // this adds an event to the calendar. also makes sure that the entry is valid (bookable and no conflicts)
  app.post('/addevent', ensureAuthenticated, function(req, res){
    // var accessToken = req.session.access_token;
    var startdate, enddate, name, user;
    var route = req.body.route;
    if (req.body.type == '0') {
      var protonum;
      if (req.body.protonum == 'custom') {
        protonum = req.body.customrange;
      } else {
        protonum = req.body.protonum;
      }
      user = req.body.name;
      startdate = moment().startOf('hour').add(req.body.date, 'days').add(req.body.time, 'hours').format();
      enddate = moment().startOf('hour').add(req.body.date, 'days').add(parseInt(req.body.time) + parseInt(protonum), 'hours').format();
    } else {
      startdate = req.body.startdate;
      enddate = req.body.enddate;
      startdate = iSODateString(new Date(startdate));
      enddate = iSODateString(new Date(enddate));
      user = req.body.user;
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
                    return res.redirect('/'+route);
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
  app.post('/delevent', ensureAuthenticated, function(req, res) {
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


  // app.get('/getData', ensureAuthenticated, function(req, res) {
  //   gcal.events.list(
  //       {
  //       auth: oauth2Client,
  //       calendarId: calendarId,
  //       timeMin: today + '00:00:00.000Z',
  //       timeMax: nextweek + '23:59:59.000Z'},
  //       function(err, events) {
  //       if(err) {
  //         return res.send(500, err);
  //       } else {
  //         var eventlst = {};
  //         for (var anevent in events.items) {
  //         eventlst[anevent] = {assetname: events.items[anevent].summary,
  //                     AssetID: events.items[anevent].description,
  //                     start: events.items[anevent].start.dateTime,
  //                     end: events.items[anevent].end.dateTime,
  //                     user: events.items[anevent].location
  //                     };
  //                   }
  //       //now make timestamps
  //       // now make timestamps
  //       var schedulelist = [];
  //       for (var scheduledasset in eventlst) {
  //         var templist = [];
  //         var starttime = eventlst[scheduledasset].start;
  //         var endtime = eventlst[scheduledasset].end;
  //         templist.push(eventlst[scheduledasset].AssetID);
  //         templist.push(Date.parse(starttime) / 1000);
  //         templist.push(Date.parse(endtime) / 1000);
  //         templist.push(eventlst[scheduledasset].user);
  //         schedulelist.push(templist);
  //       }
  //       var timestamps = {};
  //       for (var items in dlim) {
  //         timestamps[dlim[items].id] = {};
  //       }
  //       for (var newlist in schedulelist) {
  //         var currentstamp = schedulelist[newlist][1];
  //         while (schedulelist[newlist][2] >= currentstamp) {
  //           timestamps[schedulelist[newlist][0]][currentstamp] = parseInt(schedulelist[newlist][3]);
  //           currentstamp = currentstamp + 3600;
  //         }
  //       }
  //       res.send(timestamps)
  //     };
  //   });
  // })

  async(dlim, function(item, index, arr) {
    app.get('/getData' + index, ensureAuthenticated, function(req, res) {
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
};






























