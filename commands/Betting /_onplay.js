/*CMD
  command: /onplay
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Betting 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var results = options.result.dice.value
var data = User.getProperty("bet").split(" ")
var amount = parseFloat(data[0])
var cur = data[1]
var five = (params == "basketball") | (params == "soccer")
var balance = Libs.ResourcesLib.userRes(cur)
if (five) {
  if (results < 4) {
    if (params == "soccer") {
      if (results == 3) {
        var amnt = amount * 1.8
        var f_amn = amnt - amount
        balance.add(+f_amn)
        Bot.sendMessage(
          "☺️ *You won 1.8x\n💵 Bet* : `" +
            amount +
            " " +
            cur +
            "`\n💰 *Won* : `" +
            f_amn +
            " " +
            cur +
            "`\n📈 *Result* : " +
            results
        )
        return
      }
    }
    balance.add(-amount)
    Bot.sendMessage(
      "😢 *You lose 0x\n💵 Bet* : `" +
        amount +
        " " +
        cur +
        "`\n📈 *Result* : " +
        results
    )
    return
  } else {
    var amnt = amount * 1.8
    var f_amn = amnt - amount
    balance.add(+amnt)
    Bot.sendMessage(
      "☺️ *You won 1.8x\n💵 Bet* : `" +
        amount +
        " " +
        cur +
        "`\n💰 *Won* : `" +
        f_amn +
        " " +
        cur +
        "`\n📈 *Result* : " +
        results
    )
  }
  return
}
//dart
if (params == "dart") {
  var lost = (results == 1) | (results == 3) | (results == 5)
  if (lost) {
    balance.add(-amount)
    Bot.sendMessage(
      "😢 *You lose 0x\n💵 Bet* : `" +
        amount +
        " " +
        cur +
        "`\n📈 Result : " +
        results
    )
    return
  } else {
    var amnt = amount * 1.8
    var f_amn = amnt - amount
    balance.add(+f_amn)
    Bot.sendMessage(
      "☺️ *You won 1.8x\n💵 Bet* : `" +
        amount +
        " " +
        cur +
        "`\n*💰 Won* : `" +
        f_amn +
        " " +
        cur +
        "`\n📈 Result : " +
        results
    )
  }
  return
}
if (results == 6) {
  var amnt = amount * 2.6
  var f_amn = amnt - amount
  balance.add(+f_amn)
  Bot.sendMessage(
    "☺️ *You won 2.6x\n💵 Bet* : `" +
      amount +
      " " +
      cur +
      "`\n💰 *Won* : `" +
      f_amn +
      " " +
      cur +
      "`\n📈 Result : " +
      results
  )
} else {
  balance.add(-amount)
  Bot.sendMessage(
    "😢 *You lose 0x\n💵 Bet* : `" +
      amount +
      " " +
      cur +
      "`\n📈 Result : " +
      results
  )
}

