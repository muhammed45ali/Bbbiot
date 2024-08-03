const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(botToken, { polling: true });

bot.onText(/\/capture_photo/, (msg) => {
    const chatId = msg.chat.id;
    // إرسال أمر للخادم لالتقاط صورة
    const photoPath = path.join(__dirname, 'photo.png');
    bot.sendPhoto(chatId, photoPath, { caption: 'Captured Photo' });
});

bot.onText(/\/capture_screenshot/, (msg) => {
    const chatId = msg.chat.id;
    // إرسال أمر للخادم لالتقاط لقطة الشاشة
    const screenshotPath = path.join(__dirname, 'screenshot.png');
    bot.sendPhoto(chatId, screenshotPath, { caption: 'Captured Screenshot' });
});
