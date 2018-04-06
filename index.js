const Telegraf = require('telegraf')

const bot = new Telegraf("577508932:AAEWz4n7dJzYJ9ooHCZarXmjWoeh9ONBp7c")

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))
bot.hears("get list",(ctx)=>{
    ctx.reply("list")

})
const testMenu = Telegraf.Extra
  .markdown()
  .markup((m) => m.inlineKeyboard([
    m.callbackButton('Test button', 'test')
  ]))

const aboutMenu = Telegraf.Extra
  .markdown()
  .markup((m) => m.keyboard([
    m.callbackButton('⬅️ Back')
  ]).resize())

bot.hears('test', (ctx) => {
  ctx.reply('test message', testMenu).then(() => {
    ctx.reply('about', aboutMenu)
  })
})

bot.action('test', (ctx) => ctx.answerCallbackQuery('Yay!'))
bot.startPolling()