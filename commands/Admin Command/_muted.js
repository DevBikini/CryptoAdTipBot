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
  var due = GetDueTo("key1")
} else {
  var due = GetDueTo("key2")
}
var text = GetDueTo("key3")
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
//function
function GetDueTo(name) {
  if (name == "key1") {
    if (optional == "und4") {
      return ""
    }
    return "• <b>Due to</b>:" + params.split(key)[1]
  }
  if (name == "key2") {
    if (optional == "und3") {
      return ""
    }
    return "• <b>Due to</b>:" + params.split(key)[1].slice(1)
  }
  if (name == "key3") {
    if (key == "und3") {
      return due
    }
    return "• <b>Release</b>: " + time + " " + key + "\n" + due
  }
}

