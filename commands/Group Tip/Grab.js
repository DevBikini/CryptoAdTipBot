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
var draw = Bot.getProperty("draw=" + request.chat.id, { list: {} })
var data = Bot.getProperty(user.telegramid)
if (!params) {
  //draw
  if (draw) {
    for (var ind in draw.list) {
      var id = draw.list[ind].id
      var addko = Bot.getProperty("list2_" + id, { list: {} })
      var numberPeople = draw.list[ind].numberPeople
      var participate = draw.list[ind].participate
      var currency = draw.list[ind].currency
      var percentage = draw.list[ind].percentage
      var balance = Libs.ResourcesLib.userRes(currency)
      var owner = draw.list[ind].owner
      var amount = draw.list[ind].amount
      if (participate + 1 < numberPeople) {
        if (!addko.list[user.telegramid]) {
          var git = Getko(numberPeople, amount, percentage)
          var recentlyPercent = git.split("&")[1]
          var amot = git.split("&")[0]
          addko.list[user.telegramid] = {
            usertg: user.telegramid,
            amount: amot
          }
          Bot.setProperty("list2_" + id, addko, "json")
          var json = {
            id: id,
            amount: amount - amot,
            numberPeople: numberPeople,
            participate: participate + 1,
            currency: currency,
            owner: owner,
            percentage: recentlyPercent
          }
          draw.list[id] = json
          Bot.setProperty("draw=" + request.chat.id, draw, "json")
          Api.sendMessage({
            text:
              "<b>" + currency + "</b> <code>+" + amot + "</code> " + data.html,
            parse_mode: "html"
          })
          balance.add(+amot)
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

          var addG = Bot.getProperty("list2_" + id, { list: {} })
          addG.list[user.telegramid] = {
            usertg: user.telegramid,
            amount: amount
          }
          Bot.setProperty("list2_" + id, addG, "json")
          draw.list[id] = Bot.setProperty(
            "draw=" + request.chat.id,
            draw,
            "json"
          )
          var winner = ""
          var no = 0
          for (var ind in addG.list) {
            var tgd = addG.list[ind].usertg
            var amm = addG.list[ind].amount
            var no = no + 1
            var winner =
              winner +
              no +
              ". " +
              Bot.getProperty(tgd).html +
              " <code>" +
              amm +
              "</code> <b>" +
              currency +
              "</b>\n"
          }
          Api.sendMessage({
            text:
              Bot.getProperty(owner).html +
              " <code>" +
              numberPeople +
              "</code> users collected your draw.\n\n" +
              winner,
            parse_mode: "html"
          })
        }
      }
    }
  }
  //Grab/airdrop
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
  return
}
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
            "<b>" + currency + "</b> <code>+" + amount + "</code> " + data.html,
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
            "<b>" + currency + "</b> <code>+" + amount + "</code> " + data.html,
          parse_mode: "html"
        })
        balance.add(+amount)

        var addG = Bot.getProperty("list1_" + id, { list: {} })
        addG.list[user.telegramid] = user.telegramid
        Bot.setProperty("list1_" + id, addG, "json")
        grab.list[id] = Bot.setProperty("grab=" + request.chat.id, grab, "json")
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

