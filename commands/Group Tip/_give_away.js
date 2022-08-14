/*CMD
  command: /give_away
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Group Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = Bot.getProperty("giveaway="+params)
var data = Bot.getProperty(user.telegramid)
var id = json.id
var add = Bot.getProperty("list_" + id, { list: {} })
var amount = json.amount
var currency = json.currency
var balance = Libs.ResourcesLib.userRes(currency)
var numberPeople = json.numberPeople
var participate = json.participate
var owner = Bot.getProperty(json.owner)
var json = {
  id: id,
  amount: amount,
  numberPeople: numberPeople,
  participate: participate + 1,
  currency: currency,
  owner: json.owner
}
if (participate + 1 < numberPeople) {
  if (!add.list[user.telegramid]) {
    add.list[user.telegramid] = user.telegramid
    Bot.setProperty("list_" + id, add, "json")
    Api.sendMessage({
      text: "<b>" + currency + "</b> <code>+" + amount + "</code> " + data.html,
      parse_mode: "html"
    })
    Bot.setProperty("giveaway=" + id, json, "json")
    balance.add(+amount)
    return
  }
  if (!User.getProperty("giveaway="+id)) {
    Api.sendMessage({
      text: data.html + " You have already received this airdrop."
    })
    User.setProperty("giveaway="+id, { hi: "hi" }, "json")
    return
  }
} else {
  if (participate < numberPeople) {
    if (!add.list[user.telegramid]) {
      add.list[user.telegramid] = user.telegramid
      Bot.setProperty("list_" + id, add, "json")
      Api.sendMessage({
        text:
          "<b>" + currency + "</b> <code>+" + amount + "</code> " + data.html,
        parse_mode: "html"
      })
      balance.add(+amount)
      Bot.setProperty("giveaway="+id, json, "json")
      var addko = Bot.getProperty("list_" + id, { list: {} })
      var winner = ""
      for (var ind in addko.list) {
        var winner = winner + Bot.getProperty(addko.list[ind]).html + " "
      }
      Api.editMessageText({
        message_id: request.message.message_id,
        text:
          owner.html +
          " <code>" +
          numberPeople +
          "</code> users shared your giveaway!\n<b>Winners</b>: " +
          winner,
        parse_mode: "html"
      })
    } else {
      if (!User.getProperty("giveaway=" + id)) {
        Api.sendMessage({
          text: data.html + " You have already received this airdrop."
        })
        User.setProperty("giveaway=" + id, { hi: "hi" }, "json")
        return
      }
      return
    }
  }
}
