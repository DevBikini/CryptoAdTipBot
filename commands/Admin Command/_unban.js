/*CMD
  command: /unban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Command
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "🚀 Add Me To A Group 🚀",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This bot work only in [group](https://t.me/+dUNUqeIZEV9kNTll)!"
  )
  return
}
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (request.reply_to_message) {
  if (admin.list[user.telegramid] == user.telegramid) {
    Api.unbanChatMember({
      chat_id: request.chat.id,
      user_id: request.reply_to_message.from.id
    })
    Api.sendMessage({
      text:
        Bot.getProperty(request.reply_to_message.from.id).html +
        " [<code>" +
        request.reply_to_message.from.id +
        "</code>] is no longer banned.",
      parse_mode: "html"
    })
    //mute
return 
  } 
  return
}
if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/unban @user`")
} else {
  if (!Bot.getProperty(params)) {
    Bot.sendMessage("*User not found*!")
    return
  }
  if (admin.list[user.telegramid] == user.telegramid) {
    Api.unbanChatMember({
      chat_id: request.chat.id,
      user_id: Bot.getProperty(params).user_id,
      only_if_banned: true
    })
    Api.sendMessage({
      text:
        Bot.getProperty(params).html +
        " [<code>" +
        Bot.getProperty(params).user_id +
        "</code>] is no longer banned.",
      parse_mode: "html"
    })
    //unmute
    return
  }
}

