/*CMD
  command: /banClear
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Command
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_" + params, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
Bot.setProperty("banned_" + params, "", "string")
  Bot.editMessage("*cleared*!", request.message.message_id)
  return
}
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "You are not admin on this group!",
  show_alert: true
})
