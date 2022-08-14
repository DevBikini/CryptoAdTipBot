/*CMD
  command: Grab
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Group Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.sender_chat && request.sender_chat.type == "channel") {
  Bot.sendMessage("You can't Grab as channel!")
  return
}
var grab = Bot.getProperty("grab=" + request.chat.id, { list: {} })
var draw = Bot.getProperty("draw_" + request.chat.id, { list: {} })
var data = Bot.getProperty(user.telegramid)
if (!params) {
  //draw
  if (draw) {
    //1
    for (var ind in draw.list) {
      //2
      var amount = draw.list[ind].amount
      if (amount) {
        Bot.inspect(draw.list[ind])
      }
      //2
    }
    //1
  }
  if (grab) {
    //airdrop
    for (var ind in grab.list) {
      var id = grab.list[ind].id
      var addko = Bot.getProperty("list1_" + id, { list: {} })
      var numberPeople = grab.list[ind].numberPeople
      var participate = grab.list[ind].participate
      var currency = grab.list[ind].currency
      var balance = Libs.ResourcesLib.userRes(currency)
      var owner = grab.list[ind].owner
      var amount = grab.list[ind].amount / numberPeople
      var optional = grab.list[ind].optional
      if (optional == "Grab") {
        var json = {
          id: id,
          optional: optional,
          amount: grab.list[ind].amount,
          numberPeople: numberPeople,
          participate: participate + 1,
          currency: currency,
          owner: owner
        }
        if (participate + 1 < numberPeople) {
          //1
          if (!addko.list[user.telegramid]) {
            addko.list[user.telegramid] = user.telegramid
            Bot.setProperty("list1_" + id, addko, "json")
            //2
            grab.list[id] = json
            Bot.setProperty("grab=" + request.chat.id, grab, "json")
            Api.sendMessage({
              text:
                "<b>" +
                currency +
                "</b> <code>+" +
                amount +
                "</code> " +
                data.html,
              parse_mode: "html"
            })
            balance.add(+amount)
          }
        }
        //next
        if (participate < numberPeople) {
          if (!addko.list[user.telegramid]) {
            Api.sendMessage({
              text:
                "<b>" +
                currency +
                "</b> <code>+" +
                amount +
                "</code> " +
                data.html,
              parse_mode: "html"
            })
            balance.add(+amount)

            var addG = Bot.getProperty("list1_" + id, { list: {} })
            addG.list[user.telegramid] = user.telegramid
            Bot.setProperty("list1_" + id, addG, "json")
            grab.list[id] = Bot.setProperty(
              "grab=" + request.chat.id,
              grab,
              "json"
            )
            var winner = ""
            var no = 0
            for (var ind in addG.list) {
              var no = no + 1
              var winner =
                winner +
                no +
                ". " +
                Bot.getProperty(addG.list[ind]).html +
                " <code>" +
                amount +
                "</code> <b>" +
                currency +
                "</b>\n"
            }
            Api.sendMessage({
              text:
                Bot.getProperty(owner).html +
                " <code>" +
                numberPeople +
                "</code> users collected your airdrop.\n\n" +
                winner,
              parse_mode: "html"
            })
          }
        }
      }
    }
  }
} else {
  //airdrop
  //with params
  for (var ind in grab.list) {
    var id = grab.list[ind].id
    var addko = Bot.getProperty("list1_" + id, { list: {} })
    var numberPeople = grab.list[ind].numberPeople
    var participate = grab.list[ind].participate
    var currency = grab.list[ind].currency
    var balance = Libs.ResourcesLib.userRes(currency)
    var owner = grab.list[ind].owner
    var amount = grab.list[ind].amount / numberPeople
    var optional = grab.list[ind].optional
    if (optional == "Grab " + params) {
      var json = {
        id: id,
        optional: optional,
        amount: grab.list[ind].amount,
        numberPeople: numberPeople,
        participate: participate + 1,
        currency: currency,
        owner: owner
      }
      if (participate + 1 < numberPeople) {
        //1
        if (!addko.list[user.telegramid]) {
          addko.list[user.telegramid] = user.telegramid
          Bot.setProperty("list1_" + id, addko, "json")
          //2
          grab.list[id] = json
          Bot.setProperty("grab=" + request.chat.id, grab, "json")
          Api.sendMessage({
            text:
              "<b>" +
              currency +
              "</b> <code>+" +
              amount +
              "</code> " +
              data.html,
            parse_mode: "html"
          })
          balance.add(+amount)
        }
      }
      //next
      if (participate < numberPeople) {
        if (!addko.list[user.telegramid]) {
          Api.sendMessage({
            text:
              "<b>" +
              currency +
              "</b> <code>+" +
              amount +
              "</code> " +
              data.html,
            parse_mode: "html"
          })
          balance.add(+amount)

          var addG = Bot.getProperty("list1_" + id, { list: {} })
          addG.list[user.telegramid] = user.telegramid
          Bot.setProperty("list1_" + id, addG, "json")
          grab.list[id] = Bot.setProperty(
            "grab=" + request.chat.id,
            grab,
            "json"
          )
          var winner = ""
          var no = 0
          for (var ind in addG.list) {
            var no = no + 1
            var winner =
              winner +
              no +
              ". " +
              Bot.getProperty(addG.list[ind]).html +
              " <code>" +
              amount +
              "</code> <b>" +
              currency +
              "</b>\n"
          }
          Api.sendMessage({
            text:
              Bot.getProperty(owner).html +
              " <code>" +
              numberPeople +
              "</code> users collected your airdrop.\n\n" +
              winner,
            parse_mode: "html"
          })
        }
      }
    }
  }
}

