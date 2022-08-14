/*CMD
  command: /muted
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
    var du = "• <b>Due to</b>:" + params.split(key)[1]
  }
  var due = du
} else {
  if (optional == "und3") {
    var kay = ""
  } else {
    var kay = "• <b>Due to</b>:" + params.split(key)[1].slice(1)
  }
  var due = kay
}
if (key == "und3") {
  var text = due
} else {
  var text = "• <b>Release</b>: " + time + " " + key + "\n" + due
}
Api.sendMessage({
  text:
    id.html + " [<code>" + id.user_id + "</code>] has been 🔇 muted.\n" + text,
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "✅ Unmute",
          callback_data: "/2ndunmute " + params
        }
      ]
    ]
  },
  parse_mode: "html"
})
