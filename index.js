var app = require('slackHelper');
var dotenv = require('dotenv');
dotenv.load();

var controller = app.configure();

controller.hears('hello', 'direct_message', function (bot, message) {
    bot.reply(message, 'Hello!');
});
