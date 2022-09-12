/*CMD
  command: /2ndunban
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
  var due = GetDueTo("key1")
} else {
  var due = GetDueTo("key2")
}
var text = GetDueTo("key3")
var admin = Bot.getProperty("admin_" + chat.chatid, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  Api.unbanChatMember({
    chat_id: chat.chatid,
    user_id: id.user_id,
    only_if_banned: true
  })
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      id.html +
      " [<code>" +
      id.user_id +
      "</code>] banned.\n" +
      text +
      "\n~ User unbanned",
    parse_mode: "html"
  })
  return
}
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "You are not admin on this group!",
  show_alert: true
})

//function
function GetDueTo(name) {
  if (name == "key1") {
    if (optional == "und4") {
      return ""
    }
    return "• <b>Due to</b>:" + params.split(key)[1] + "\n"
  }
  if (name == "key2") {
    if (optional == "und3") {
      return ""
    }
    return "• <b>Due to</b>:" + params.split(key)[1].slice(1) + "\n"
  }
  if (name == "key3") {
    if (key == "und3") {
      return due
    }
    return "• <b>Release</b>: " + time + " " + key + "\n" + due
  }
}
//keyname

