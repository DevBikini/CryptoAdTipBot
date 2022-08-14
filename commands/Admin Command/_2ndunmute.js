/*CMD
  command: /2ndunmute
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Command
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = Bot.getProperty(params.split(" ")[0])
var time = params.split(" ")[1]
var key = params.split(" ")[2]
var optional = params.split(" ")[3]
if (key == "und3") {
  if (optional == "und4") {
    var du = ""
  } else {
    var du = "• <b>Due to</b>:" + params.split(key)[1]+"\n"
  }
  var due = du
} else {
  if (optional == "und3") {
    var kay = ""
  } else {
    var kay = "• <b>Due to</b>:" + params.split(key)[1].slice(1)+"\n"
  }
  var due = kay
}
if (key == "und3") {
  var text = due
} else {
  var text = "• <b>Release</b>: " + time + " " + key + "\n" + due
}
var admin = Bot.getProperty("admin_" + chat.chatid, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  Api.restrictChatMember({
    chat_id: chat.chatid,
    user_id: id.user_id,
    permissions: {
      can_send_messages: true,
      can_send_media_messages: true,
      can_send_polls: true,
      can_send_other_messages: true,
      can_add_web_page_previews: true,
      can_invite_users: true
    }
  })
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      id.html +
      " [<code>" +
      id.user_id +
      "</code>] has been 🔇 muted.\n" +
      text +
      "\n~ User unmuted",
    parse_mode: "html"
  })
} else {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "You are not admin on this group!",
    show_alert: true
  })
}
