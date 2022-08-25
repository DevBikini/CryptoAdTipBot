/*CMD
  command: /withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

if ((chat.chat_type == "private") | params) {
  var amount = params.split(" ")[0]
  var cur = params.split(" ")[1]
  var address = params.split(" ")[2]
  Libs.CryptoAdGateWayBot.Withdraw({
    currency: cur,
    amount: amount,
    address: address,
    user: user.id,
    success: "/onWithdraw"
  })
  return
}
Bot.sendMessage("*Don't do private chat*")
