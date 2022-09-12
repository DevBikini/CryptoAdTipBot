/*CMD
  command: /giveaway
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
  Bot.sendMessage("⚠️ Incorrect Format use\n`/giveaway 1 btc 10`")
  return
}
var amount = params.split(" ")[0]
var currency = params.split(" ")[1]
var numberPeople = params.split(" ")[2]
if (
  !amount &&
  !numberPeople &&
  !currency &&
  !isNumeric(amount) &&
  amount.includes("-") &&
  amount.includes("+") &&
  !isNumeric(numberPeople) &&
  numberPeople.includes("-") &&
  numberPeople.includes("+")
) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/giveaway 1 btc 10`")
  return
}
if (!cur.list[currency.toUpperCase()]) {
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
      " giveway failed:\n\nInsufficient " +
      currency.toUpperCase() +
      " balance.\nYou have only: <code>" +
      balance.value() +
      "</code> " +
      currency.toUpperCase(),
    parse_mode: "html"
  })
  return
}
var id = Math.floor(Date.now() / 1000)
var json = {
  id: id,
  amount: amount / numberPeople,
  numberPeople: numberPeople,
  participate: 0,
  currency: currency.toUpperCase(),
  owner: user.telegramid
}
balance.add(-amount)
Bot.setProperty("giveaway=" + id, json, "json")
Api.sendMessage({
  text:
    data.html +
    " Created a giveaway in <code>" +
    amount +
    "</code> <b>" +
    currency.toUpperCase() +
    "</b> for <code>" +
    numberPeople +
    "</code> users!",
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "👉 Grab 👈",
          callback_data: "/give_away " + id
        }
      ]
    ]
  }
})

