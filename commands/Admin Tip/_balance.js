/*CMD
  command: /balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = Bot.getProperty("currency")
var data = Bot.getProperty(user.telegramid)
if (chat.chat_type == "private") {
  if (params) {
    if (!cur.list[params.toUpperCase()]) {
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
    var balance = Libs.ResourcesLib.userRes(params.toUpperCase())
    Api.sendMessage({
      text:
        "<b>Available balance</b>\n\n<b>You have</b>: <code>" +
        balance.value().toFixed(10) +
        "</code> " +
        params.toUpperCase() +
        "\n\n👉 Try <code>/balance Token</code> to check the balance of a certain token. E.g: <code>/balance BTC</code>",
      parse_mode: "html"
    })
  } else {
    var full = ""
    for (var ind in cur.list) {
      if (cur.list[ind]) {
        var balance = Libs.ResourcesLib.userRes(cur.list[ind])
        var full =
          full +
          "<b>You have</b>: <code>" +
          balance.value().toFixed(10) +
          "</code> " +
          cur.list[ind] +
          "\n"
      }
    }
    Api.sendMessage({
      text:
        "<b>Available balance</b>\n\n" +
        full +
        "\n👉 Try <code>/balance Token</code> to check the balance of a certain token. E.g: <code>/balance BTC</code>",
      parse_mode: "html"
    })
  }
  return
}
//private
if (params) {
  if (!cur.list[params.toUpperCase()]) {
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
  var balance = Libs.ResourcesLib.userRes(params.toUpperCase())
  Api.sendMessage({
    text:
      data.html +
      " <b>Available balance</b>\n\n<b>You have</b>: <code>" +
      balance.value().toFixed(10) +
      "</code> " +
      params.toUpperCase() +
      "\n\n👉 Try <code>/balance Token</code> to check the balance of a certain token. E.g: <code>/balance BTC</code>",
    parse_mode: "html"
  })
} else {
  var full = ""
  for (var ind in cur.list) {
    if (cur.list[ind]) {
      var balance = Libs.ResourcesLib.userRes(cur.list[ind])
      var full =
        full +
        "<b>You have</b>: <code>" +
        balance.value().toFixed(10) +
        "</code> " +
        cur.list[ind] +
        "\n"
    }
  }
  Api.sendMessage({
    text:
      data.html +
      " <b>Available balance</b>\n\n" +
      full +
      "\n👉 Try <code>/balance Token</code> to check the balance of a certain token. E.g: <code>/balance BTC</code>",
    parse_mode: "html"
  })
}

