'use strict';

const twilio = require('twilio');

module.exports = function(req, res, next) {
  let twiml = new twilio.TwimlResponse();
  
  twiml
    .say('Welcome to the conference!')
    .dial((node) => {
      node.conference('myConference', {
        waitUrl: 'http://twimlets.com/holdmusic?Bucket=com.twilio.music.ambient'
      });
    });
  
  res.type('text/xml').send(twiml.toString());
}