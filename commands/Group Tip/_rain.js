/*CMD
  command: /rain
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
  Bot.sendMessage("⚠️ Incorrect Format use\n`/rain 1 btc 10`")
  return
}
var amount = params.split(" ")[0]
var currency = params.split(" ")[1]
var numberPeople = params.split(" ")[2]
if (numberPeople > 100) {
  Api.sendMessage({
    text: data.html + " rain failed: Max 100 user",
    parse_mode: "html"
  })
  return
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
  Bot.sendMessage("⚠️ Incorrect Format use\n`/rain 1 btc 10`")
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
var balance = Libs.ResourcesLib.userRes(currency.toUpperCase())
if (amount > balance.value()) {
  Api.sendMessage({
    text:
      data.html +
      " rain failed:\n\nInsufficient " +
      con +
      " balance.\nYou have only: <code>" +
      balance.value() +
      "</code> " +
      con,
    parse_mode: "html"
  })
  return
}
balance.add(-amount)
Api.sendMessage({
  text:
    data.html +
    " Created a rain in <code>" +
    amount +
    "</code> <b>" +
    con +
    "</b> for <code>" +
    numberPeople +
    "</code> users.\nWinners will be selected for you in the next few minutes.",
  parse_mode: "html"
})
var amnt = amount / numberPeople
var json = getOnline(numberPeople)
var users = ""
var nub = 0
for (var ind in json) {
  var nub = nub + 1
  var id = json[ind].userKey
  var user_balance = Libs.ResourcesLib.anotherUserRes(con, id)
  user_balance.add(+amnt)
  var users =
    users +
    nub +
    ". " +
    Bot.getProperty(id).html +
    " <code>+" +
    amnt +
    "</code> <b>" +
    con +
    "</b>\n"
}
Api.sendMessage({
  text:
    data.html +
    " <code>" +
    numberPeople +
    "</code> users collected your rain.\n<b>Winners</b>:\n" +
    users,
  parse_mode: "html"
})
