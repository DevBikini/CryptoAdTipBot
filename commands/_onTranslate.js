/*CMD
  command: /onTranslate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = JSON.parse(content)
Bot.sendMessage(json.translated, {
  is_reply: true
})
