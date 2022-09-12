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

if (chat.chat_type == "private") {
if (!params) {
  return Bot.sendMessage("⚠️ Incorrect Format use\n`/withdraw [amount] [currency] [address]`")
}
  var amount = params.split(" ")[0]
  var cur = params.split(" ")[1]
  var address = params.split(" ")[2]
  if (!amount && !cur && !address) {
    return Bot.sendMessage("⚠️ Incorrect Format use\n`/withdraw [amount] [currency] [address]`")
  }
  var min = { dgb: 0.006, ltc: 0.001, bch: 0.00001 }
  if (!min[cur.toLowerCase()]) {
    return Bot.sendMessage("*currency not found!*")
  }
  var balance = Libs.ResourcesLib.userRes(cur.toUpperCase())
  if (balance.value() < min[cur.toLowerCase()]) {
    return Bot.sendMessage(
      "_❌ You have to own at least " +
        min[cur.toLowerCase()] +
        " " +
        cur.toUpperCase() +
        "!_"
    )
  }
  balance.add(-amount)
  Libs.CryptoAdGateWayBot.Withdraw({
    currency: cur.toUpperCase(),
    amount: amount,
    address: address,
    user: user.id,
    success: "/onWithdraw"
  })
  return
}
Bot.sendMessage("*Don't do private chat*")

