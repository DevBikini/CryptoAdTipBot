/*CMD
  command: /setbet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Betting 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
var amount = params.split(" ")[0]
var curs = params.split(" ")[1]
if (!curs) {
  return
}
var cur = Bot.getProperty("currency")
if (!cur.list[curs.toUpperCase()]) {
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
}
User.setProperty("bet", amount + " " + curs.toUpperCase(), "string")
Bot.sendMessage("✅ *Bet Set. Done *")

