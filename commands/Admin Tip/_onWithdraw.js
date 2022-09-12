/*CMD
  command: /onWithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

var amount = options.result.amount
var to = options.result.to
var cur = options.result.cur
var hash = options.result.hash
Bot.sendMessage("Withdraw "+amount+" "+cur+"\nto : "+to+"\nhash : "+hash)

