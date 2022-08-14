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
  var text = encodeURI(request.reply_to_message.text)
  var url =
    "https://api.crypto-twilight.com/translate?msg=text%20for%20translate&to=hi"
  HTTP.get({
    url: url,
    success: "/onTranslate"
  })
}
