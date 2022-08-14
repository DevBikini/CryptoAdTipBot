/*CMD
  command: /airdrop
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Group Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = Bot.getProperty("currency")
var data = Bot.getProperty(user.telegramid)
if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/airdrop 1 btc 10 (optional)`")
  return
}
var amount = params.split(" ")[0]
var currency = params.split(" ")[1]
var numberPeople = params.split(" ")[2]
var op = params.split(" ")[3]
if (!op) {
  var optional = "Grab"
} else {
  var optional =
    "Grab" + params.split(numberPeople)[1]+[params.split(numberPeople)[2]]
}
if (
  !amount ||
  !numberPeople ||
  !currency ||
  !isNumeric(amount) ||
  amount.includes("-") ||
  amount.includes("+") ||
  !isNumeric(numberPeople) ||
  numberPeople.includes("-") ||
  numberPeople.includes("+")
) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/airdrop 1 btc 10 (optional)`")
  return
}
var con = currency.toUpperCase()
if (!cur.list[con]) {
  Bot.sendMessage(
    "⚠️ This Currency Is Not Support On [" +
      bot.name +
      "](https://t.me/" +
      bot.name +
      ")",
    {
      is_reply: true
    }
  )
  return
}
var balance = Libs.ResourcesLib.userRes(con)
if (amount > balance.value()) {
  Api.sendMessage({
    text:
      data.html +
      " airdrop failed:\n\nInsufficient " +
      con +
      " balance.\nYou have only: <code>" +
      balance.value() +
      "</code> " +
      con,
    parse_mode: "html"
  })
  return
}
var id = Math.floor(Date.now() / 1000)
var json = {
  id: id,
  optional: optional,
  amount: amount,
  numberPeople: numberPeople,
  participate: 0,
  currency: currency.toUpperCase(),
  owner: user.telegramid
}
balance.add(-amount)
var add = Bot.getProperty("grab=" + request.chat.id, { list: {} })
add.list[id] = json
Bot.setProperty("grab=" + request.chat.id, add, "json")
Api.sendMessage({
  text:
    data.html +
    " Created a airdrop in <code>" +
    amount +
    "</code> <b>" +
    currency.toUpperCase() +
    "</b> for <code>" +
    numberPeople +
    "</code> users.\nSend <code>" +
    optional +
    "</code> to grab it!",
  parse_mode: "html"
})
