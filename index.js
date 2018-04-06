const Telegraf = require('telegraf')

const bot = new Telegraf("577508932:AAEWz4n7dJzYJ9ooHCZarXmjWoeh9ONBp7c")

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))

bot.startPolling()