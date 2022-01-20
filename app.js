'use strict';
require('dotenv').config();
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: process.env.PAGE_ACCESS_TOKEN,
  verifyToken: process.env.VERIFY_TOKEN,
  appSecret: process.env.APP_SECRET,
  port: 5555
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say({
    cards: [
      { title: 'Volkswagen Golf 6', image_url: 'https://www.chicagotribune.com/resizer/coI0JHa_AAGTW3lcMXxSYjsli10=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/53E7MBRVDZHVNBUZPDLOWAXQ3I.jpg', subtitle: "Cutie de viteze: manuală" },
      { title: 'Card 2', image_url: 'https://www.chicagotribune.com/resizer/coI0JHa_AAGTW3lcMXxSYjsli10=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/53E7MBRVDZHVNBUZPDLOWAXQ3I.jpg', default_action: {} }
    ]
  });
});

bot.start(process.env.PORT);
