/*CMD
  command: /add_token
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = 2110220740
if (admin == user.telegramid) {
  var add = Bot.getProperty("currency", { list: {} })
  var token = params.toUpperCase()
  add.list[token] = token
  Bot.setProperty("currency", add, "json")
  Bot.sendMessage("*Success list*: " + add.list[token])
  return
}

