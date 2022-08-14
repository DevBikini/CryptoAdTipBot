/*CMD
  command: /onConvert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Crypto Price
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = JSON.parse(content)
var how = JSON.stringify(result)
if (how == "[]" || result.error == "invalid vs_currency") {
  Bot.sendMessage(
    "⚠️ This Action Is Not Support On [" +
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
var coin1 = result[0].symbol
var amount = params.split(" ")[0]
var coin2 = params.split(" ")[1]
var price = result[0].current_price
var ram = price * amount
Bot.sendMessage(
  "`Calculating " +
    amount +
    " " +
    coin1.toUpperCase() +
    "`\n\n*🟢 " +
    coin1.toUpperCase() +
    "/" +
    coin2.toUpperCase() +
    "\n🔺 Price: " +
    price.toFixed(10) +
    " " +
    coin2.toUpperCase() +
    "\n🔴 " +
    amount +
    " " +
    coin1.toUpperCase() +
    " ~ " +
    ram +
    " " +
    coin2.toUpperCase() +
    "*\n\n[Ads Earn FREE Crypto](https://t.me/Crypto_Ad_RoBot?start=ref8785339)",
  {
    is_reply: true
  }
)

