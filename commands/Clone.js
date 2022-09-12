/*CMD
  command: Clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 5514111111) {
  Bot.sendMessage("Done")
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id
  })
} else {
  Bot.sendMessage("Not admin")
}
