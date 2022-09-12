/*CMD
  command: /onDeposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

var address = options.result.address
if (address) {
  User.setProperty("wallets", address, "string")
  return Bot.sendMessage("`" + address + "`")
}
var amount = options.result.amount
if (amount) {
  var cur = options.result.currency
  var hash = options.result.hash
  var balance = Libs.ResourcesLib.userRes(cur)
  balance.add(+amount)

  Bot.sendMessage("Deposit " + amount + " " + cur + " \n\nHash: " + hash)
  return
}
Bot.inspect(options)

