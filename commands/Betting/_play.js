/*CMD
  command: /play
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Betting
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (Bot.getProperty("disable_" + chat.chatid)) {
  if (!request.id) {
var dds = 0
  } else {
var dds = request.id
  }
  Api.answerCallbackQuery({
    callback_query_id: dds,
    text: "Betting Mode is disabled!",
    show_alert: true
  })
  return
}
if (!User.getProperty("bet")) {
  Bot.sendMessage("*set your bet : First.*")
  return
}
if (coolDownPlay()) {
  User.setProperty("cooldown_Play", Date.now(), "integer")
  var balance = Libs.ResourcesLib.userRes(User.getProperty("bet").split(" ")[1])
  if (User.getProperty("bet").split(" ")[0] > balance.value()) {
    Bot.sendMessage(
      "You don't have " +
        User.getProperty("bet").split(" ")[1] +
        " balance to play change your bet use `/setbet 1 btc`"
    )
    return
  }
  if (params == "basketball") {
    Api.sendDice({
      emoji: "🏀",
      on_result: "/onplay basketball"
    })
    return
  }
  if (params == "soccer") {
    Api.sendDice({ emoji: "⚽", on_result: "/onplay soccer" })
    return
  }
  if (params == "dart") {
    Api.sendDice({ emoji: "🎯", on_result: "/onplay dart" })
    return
  }
  if (params == "bowling") {
    Api.sendDice({ emoji: "🎳", on_result: "/onplay bowling" })
    return
  }
  if (params == "dice") {
    Api.sendDice({ emoji: "🎲", on_result: "/onplay dice" })
    return
  }
  Bot.sendMessage(params)
}
