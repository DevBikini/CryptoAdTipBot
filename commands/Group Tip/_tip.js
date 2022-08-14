/*CMD
  command: /tip
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Group Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = Bot.getProperty("currency")
if (request.reply_to_message) {
  var user_data = Bot.getProperty(request.reply_to_message.from.id)
  if (request.reply_to_message.from.username == bot.name) {
    Bot.sendMessage("I don't need your tip 🙄")
    return
  }
  if (
    request.reply_to_message.sender_chat &&
    request.reply_to_message.sender_chat.type == "channel"
  ) {
    Bot.sendMessage("You can't tip to a channel.")
    return
  }
  if (!user_data) {
    Bot.sendMessage("*User not found!*")
    return
  }
  var data = Bot.getProperty(user.telegramid)
  if (!params) {
    Bot.sendMessage("⚠️ Incorrect Format use\nReply `/tip 1 btc`")
    return
  }
  var amount = params.split(" ")[0]
  var currency = params.split(" ")[1]
  if (
    !amount ||
    !currency ||
    !isNumeric(amount) ||
    amount.includes("-") ||
    amount.includes("+")
  ) {
    Bot.sendMessage("⚠️ Incorrect Format use\nReply `/tip 1 btc`")
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
  //
  var balance = Libs.ResourcesLib.userRes(currency.toUpperCase())
  var user_balance = Libs.ResourcesLib.anotherUserRes(
    currency.toUpperCase(),
    user_data.user_id
  )
  if (amount > balance.value()) {
    Api.sendMessage({
      text:
        data.html +
        " tip details:\n\ntip failed: Insufficient " +
        currency.toUpperCase() +
        " balance.\nYou have only: <code>" +
        balance.value() +
        "</code> " +
        currency.toUpperCase(),
      parse_mode: "html"
    })
    return
  }
  balance.add(-amount)
  user_balance.add(+amount)
  Api.sendMessage({
    text:
      data.html +
      " tip details:\n\n<b>" +
      currency.toUpperCase() +
      "</b> <code>+" +
      amount +
      "</code> " +
      user_data.html,
    parse_mode: "html"
  })
  return
}
//2
var data = Bot.getProperty(user.telegramid)
if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/tip 1 btc @user`")
  return
}
var amount = params.split(" ")[0]
var currency = params.split(" ")[1]
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
var user1 = params.split(" ")[2]
if (
  !user1 &&
  !amount &&
  !currency &&
  !isNumeric(amount) &&
  amount.includes("-") &&
  amount.includes("+")
) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/tip 1 btc @user`")
  return
}
if (request.sender_chat && request.sender_chat.type == "channel") {
  Bot.sendMessage("You can't tip as channel!")
  return
}
var user1_data = Bot.getProperty(user1)
var user2 = params.split(" ")[3]
var user2_data = Bot.getProperty(user2)
var user3 = params.split(" ")[4]
var user3_data = Bot.getProperty(user3)
var user4 = params.split(" ")[5]
var user4_data = Bot.getProperty(user4)
var user5 = params.split(" ")[6]
var user5_data = Bot.getProperty(user5)
var balance = Libs.ResourcesLib.userRes(currency.toUpperCase())
if (amount > balance.value()) {
  Api.sendMessage({
    text:
      data.html +
      " tip details:\n\ntip failed: Insufficient " +
      currency.toUpperCase() +
      " balance.\nYou have only: <code>" +
      balance.value() +
      "</code> " +
      currency.toUpperCase(),
    parse_mode: "html"
  })
  return
}
if (!user1_data) {
  Api.sendMessage({
    text: data.html + " tip details:\n\ntip failed: " + user1,
    parse_mode: "html"
  })
} else {
  if (user2) {
    if (!user2_data) {
      Api.sendMessage({
        text: data.html + " tip details:\n\ntip failed: " + user2,
        parse_mode: "html"
      })
    } else {
      //3
      if (user3) {
        if (!user3_data) {
          Api.sendMessage({
            text: data.html + " tip details:\n\ntip failed: " + user3,
            parse_mode: "html"
          })
        } else {
          //4
          if (user4) {
            if (!user4_data) {
              Api.sendMessage({
                text: data.html + " tip details:\n\ntip failed: " + user4,
                parse_mode: "html"
              })
            } else {
              //5
              if (user5) {
                if (!user5_data) {
                  Api.sendMessage({
                    text: data.html + " tip details:\n\ntip failed: " + user5,
                    parse_mode: "html"
                  })
                } else {
                  if (amount * 5 > balance.value()) {
                    Api.sendMessage({
                      text:
                        data.html +
                        " tip details:\n\ntip failed: Insufficient " +
                        currency.toUpperCase() +
                        " balance.\nYou have only: <code>" +
                        balance.value() +
                        "</code> " +
                        currency.toUpperCase(),
                      parse_mode: "html"
                    })
                    return
                  }
                  var user1_balance = Libs.ResourcesLib.anotherUserRes(
                    currency.toUpperCase(),
                    user1_data.user_id
                  )
                  var user2_balance = Libs.ResourcesLib.anotherUserRes(
                    currency.toUpperCase(),
                    user2_data.user_id
                  )
                  var user3_balance = Libs.ResourcesLib.anotherUserRes(
                    currency.toUpperCase(),
                    user3_data.user_id
                  )
                  var user4_balance = Libs.ResourcesLib.anotherUserRes(
                    currency.toUpperCase(),
                    user4_data.user_id
                  )
                  var user5_balance = Libs.ResourcesLib.anotherUserRes(
                    currency.toUpperCase(),
                    user5_data.user_id
                  )
                  balance.add(-amount * 5)
                  user1_balance.add(+amount)
                  user2_balance.add(+amount)
                  user3_balance.add(+amount)
                  user4_balance.add(+amount)
                  user5_balance.add(+amount)
                  Api.sendMessage({
                    text:
                      data.html +
                      " tip details:\n\n<b>" +
                      currency.toUpperCase() +
                      "</b> <code>+" +
                      amount +
                      "</code> " +
                      user1_data.html +
                      "\n<b>" +
                      currency.toUpperCase() +
                      "</b> <code>+" +
                      amount +
                      "</code> " +
                      user2_data.html +
                      "\n<b>" +
                      currency.toUpperCase() +
                      "</b> <code>+" +
                      amount +
                      "</code> " +
                      user3_data.html +
                      "\n<b>" +
                      currency.toUpperCase() +
                      "</b> <code>+" +
                      amount +
                      "</code> " +
                      user4_data.html +
                      "\n<b>" +
                      currency.toUpperCase() +
                      "</b> <code>+" +
                      amount +
                      "</code> " +
                      user5_data.html,
                    parse_mode: "html"
                  })
                  //user5
                }
              } else {
                if (amount * 4 > balance.value()) {
                  Api.sendMessage({
                    text:
                      data.html +
                      " tip details:\n\ntip failed: Insufficient " +
                      currency.toUpperCase() +
                      " balance.\nYou have only: <code>" +
                      balance.value() +
                      "</code> " +
                      currency.toUpperCase(),
                    parse_mode: "html"
                  })
                  return
                }
                var user1_balance = Libs.ResourcesLib.anotherUserRes(
                  currency.toUpperCase(),
                  user1_data.user_id
                )
                var user2_balance = Libs.ResourcesLib.anotherUserRes(
                  currency.toUpperCase(),
                  user2_data.user_id
                )
                var user3_balance = Libs.ResourcesLib.anotherUserRes(
                  currency.toUpperCase(),
                  user3_data.user_id
                )
                var user4_balance = Libs.ResourcesLib.anotherUserRes(
                  currency.toUpperCase(),
                  user4_data.user_id
                )
                balance.add(-amount * 4)
                user1_balance.add(+amount)
                user2_balance.add(+amount)
                user3_balance.add(+amount)
                user4_balance.add(+amount)
                Api.sendMessage({
                  text:
                    data.html +
                    " tip details:\n\n<b>" +
                    currency.toUpperCase() +
                    "</b> <code>+" +
                    amount +
                    "</code> " +
                    user1_data.html +
                    "\n<b>" +
                    currency.toUpperCase() +
                    "</b> <code>+" +
                    amount +
                    "</code> " +
                    user2_data.html +
                    "\n<b>" +
                    currency.toUpperCase() +
                    "</b> <code>+" +
                    amount +
                    "</code> " +
                    user3_data.html +
                    "\n<b>" +
                    currency.toUpperCase() +
                    "</b> <code>+" +
                    amount +
                    "</code> " +
                    user4_data.html,
                  parse_mode: "html"
                })
                //user4
              }
              //5
            }
          } else {
            if (amount * 3 > balance.value()) {
              Api.sendMessage({
                text:
                  data.html +
                  " tip details:\n\ntip failed: Insufficient " +
                  currency.toUpperCase() +
                  " balance.\nYou have only: <code>" +
                  balance.value() +
                  "</code> " +
                  currency.toUpperCase(),
                parse_mode: "html"
              })
              return
            }
            var user1_balance = Libs.ResourcesLib.anotherUserRes(
              currency.toUpperCase(),
              user1_data.user_id
            )
            var user2_balance = Libs.ResourcesLib.anotherUserRes(
              currency.toUpperCase(),
              user2_data.user_id
            )
            var user3_balance = Libs.ResourcesLib.anotherUserRes(
              currency.toUpperCase(),
              user3_data.user_id
            )
            balance.add(-amount * 3)
            user1_balance.add(+amount)
            user2_balance.add(+amount)
            user3_balance.add(+amount)
            Api.sendMessage({
              text:
                data.html +
                " tip details:\n\n<b>" +
                currency.toUpperCase() +
                "</b> <code>+" +
                amount +
                "</code> " +
                user1_data.html +
                "\n<b>" +
                currency.toUpperCase() +
                "</b> <code>+" +
                amount +
                "</code> " +
                user2_data.html +
                "\n<b>" +
                currency.toUpperCase() +
                "</b> <code>+" +
                amount +
                "</code> " +
                user3_data.html,
              parse_mode: "html"
            })
            //user3
          }
          //4
        }
      } else {
        if (amount * 2 > balance.value()) {
          Api.sendMessage({
            text:
              data.html +
              " tip details:\n\ntip failed: Insufficient " +
              currency.toUpperCase() +
              " balance.\nYou have only: <code>" +
              balance.value() +
              "</code> " +
              currency.toUpperCase(),
            parse_mode: "html"
          })
          return
        }
        var user1_balance = Libs.ResourcesLib.anotherUserRes(
          currency.toUpperCase(),
          user1_data.user_id
        )
        var user2_balance = Libs.ResourcesLib.anotherUserRes(
          currency.toUpperCase(),
          user2_data.user_id
        )
        balance.add(-amount * 2)
        user1_balance.add(+amount)
        user2_balance.add(+amount)
        Api.sendMessage({
          text:
            data.html +
            " tip details:\n\n<b>" +
            currency.toUpperCase() +
            "</b> <code>+" +
            amount +
            "</code> " +
            user1_data.html +
            "\n<b>" +
            currency.toUpperCase() +
            "</b> <code>+" +
            amount +
            "</code> " +
            user2_data.html,
          parse_mode: "html"
        })
        //user2
      }
      //3
    }
  } else {
    var user1_balance = Libs.ResourcesLib.anotherUserRes(
      currency.toUpperCase(),
      user1_data.user_id
    )
    balance.add(-amount)
    user1_balance.add(+amount)
    Api.sendMessage({
      text:
        data.html +
        " tip details:\n\n<b>" +
        currency.toUpperCase() +
        "</b> <code>+" +
        amount +
        "</code> " +
        user1_data.html,
      parse_mode: "html"
    })
    //user1
  }
}

