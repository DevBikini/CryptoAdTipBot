/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
Bot.sendMessage("⚠️ Incorrect Format use\n`/deposit dgb`")
  return
}
var wallet = User.getProperty("wallets")
if(wallet){
return Bot.sendMessage("`" + wallet + "`")
}
Libs.CryptoAdGateWayBot.Deposit({
  currency: params,
  user: user.id,
  success: "/onDeposit"
})
