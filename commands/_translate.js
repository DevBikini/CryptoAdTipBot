/*CMD
  command: /translate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!request.reply_to_message) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`reply to user`")
} else {
  if (!params) {
    var lang = "en"
  } else {
    var lang = params
  }
  var text = request.reply_to_message.text
  var url =
    "https://api.secretprojects.xyz/v1/translator/?text=" +
    encodeURIComponent(text) +
    "&language=" +
    lang
  HTTP.get({
    url: url,
    success: "/onTranslate"
  })
}
