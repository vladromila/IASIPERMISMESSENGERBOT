'use strict';
require('dotenv').config();
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: process.env.PAGE_ACCESS_TOKEN,
  verifyToken: process.env.VERIFY_TOKEN,
  appSecret: process.env.APP_SECRET,
  port: 5555
});

bot.setGetStartedButton(() => {
  chat.say({
    text: 'Bună ziua! Cu ce vă putem ajuta?',
    buttons: [
      { type: 'postback', title: 'Prețuri', payload: 'HELP_PREȚURI' },
      { type: 'postback', title: 'Mașini', payload: 'HELP_MAȘINI' },
      { type: 'postback', title: 'Instructori', payload: 'HELP_INSTRUCTORI' }
    ]
  });
})


bot.on('postback:HELP_INSTRUCTORI', (payload, chat) => {
  chat.say("avem cei mai misto instructori!");
});


bot.start(process.env.PORT);
