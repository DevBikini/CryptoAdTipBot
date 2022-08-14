/*CMD
  command: /bet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Betting 
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
var disable = Bot.getProperty("disable_" + request.chat.id)
if (!disable) {
  Bot.sendMessage("Soon.")
  return
}

