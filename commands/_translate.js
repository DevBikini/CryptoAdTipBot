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
  return
}
if (!params) {
  var lang = "en"
} else {
  var lang = params
}
var text = request.reply_to_message.text
var url =
  "https://api.crypto-twilight.com/translate?msg=" +
  encodeURIComponent(text) +
  "&to=" +
  lang
HTTP.get({
  url: url,
  folow_redirects: true,
  success: "/onTranslate"
})

