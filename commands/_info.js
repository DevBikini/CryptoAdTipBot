/*CMD
  command: /info
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type == "private") {
  var user_id = user.telegramid
  var first_name = user.first_name
  var last_name = user.last_name
  var username = user.username
  Bot.sendMessage(
    "🆔 *ID*: `" +
      user_id +
      "`\n👱 *Name*: [" +
      first_name +
      "](tg://user?id=" +
      user_id +
      ")\n👪 *Surname*: [" +
      last_name +
      "](tg://user?id=" +
      user_id +
      ")\n🌐 *Username: @" +
      username +
      "*"
  )

  return
}
if (request.reply_to_message) {
  var user_id = request.reply_to_message.from.id
  var first_name = request.reply_to_message.from.first_name
  var last_name = request.reply_to_message.from.last_name
  var username = request.reply_to_message.from.username
  Bot.sendMessage(
    "🆔 *ID*: `" +
      user_id +
      "`\n👱 *Name*: [" +
      first_name +
      "](tg://user?id=" +
      user_id +
      ")\n👪 *Surname*: [" +
      last_name +
      "](tg://user?id=" +
      user_id +
      ")\n🌐 *Username: @" +
      username +
      "*"
  )
  return
}
var user_id = user.telegramid
var first_name = user.first_name
var last_name = user.last_name
var username = user.username
Bot.sendMessage(
  "🆔 *ID*: `" +
    user_id +
    "`\n👱 *Name*: [" +
    first_name +
    "](tg://user?id=" +
    user_id +
    ")\n👪 *Surname*: [" +
    last_name +
    "](tg://user?id=" +
    user_id +
    ")\n🌐 *Username: @" +
    username +
    "*"
)
