/*CMD
  command: /autodelete
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
if (params == "true") {
  if (admin.list[user.telegramid] == user.telegramid) {
    Bot.setProperty("delete_" + request.chat.id, "yes", "string")
    Bot.sendMessage(
      "*Auto Delete Turn ON*\n-then user join/left in your group bot auto delete."
    )
    return
  }
  //
  Bot.sendMessage("*You are not admin on this group*!")
  return
}
if (params == "false") {
  if (admin.list[user.telegramid] == user.telegramid) {
    Bot.setProperty("delete_" + request.chat.id, "", "string")
    Bot.sendMessage(
      "*Auto Delete Turn OFF*\n-then user join/left in your group bot auto delete."
    )
    return
  }
  return
}
Bot.sendMessage("⚠️ Incorrect Format use \n`/autodelete true / false`")
