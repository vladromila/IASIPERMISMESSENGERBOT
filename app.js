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
  chat.say('Hello world!');

  // Send a text message with quick replies
  chat.say({
    text: 'Favorite color?',
    quickReplies: ['Red', 'Blue', 'Green']
  });

  // Send a button template
  chat.say({
    text: 'Favorite color?',
    buttons: [
      { type: 'postback', title: 'Red', payload: 'FAVORITE_RED' },
      { type: 'postback', title: 'Blue', payload: 'FAVORITE_BLUE' },
      { type: 'postback', title: 'Green', payload: 'FAVORITE_GREEN' }
    ]
  });

  // Send a list template
  chat.say({
    elements: [
      { title: 'Artile 1', image_url: 'https://cdn.volkswagen.ro/media/Content_SimpleMedia_Image_Component/9701-113486-74968-113487-child/dh-995-e2a2c0/f5a616c0/1633005169/premiera.jpg', default_action: {} },
      { title: 'Artile 2', image_url: 'https://cdn.volkswagen.ro/media/Content_SimpleMedia_Image_Component/9701-113486-74968-113487-child/dh-995-e2a2c0/f5a616c0/1633005169/premiera.jpg', default_action: {} }
    ],
    buttons: [
      { type: 'postback', title: 'View More', payload: 'VIEW_MORE' }
    ]
  });
});

bot.start(process.env.PORT);
