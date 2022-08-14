/*CMD
  command: /onInonvert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Inline Mode
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = JSON.parse(content)
var how = JSON.stringify(result)
if (how == "[]" || result.error == "invalid vs_currency") {
  var text =
    "⚠️ This Action Is Not Support On [" +
    bot.name +
    "](https://t.me/" +
    bot.name +
    ")"
} else {
  var coin1 = result[0].symbol
  var amount = params.split(" ")[0]
  var coin2 = params.split(" ")[1]
  var price = result[0].current_price
  var image = result[0].image
  var ram = price * amount
  var text =
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
    "*\n\n[Ads Earn FREE Crypto](https://t.me/Crypto_Ad_RoBot?start=ref8785339)"
}
var list = []
list.push({
  type: "article",
  id: "share",
  title: "Calculate crypto",
  description: "Crypto Live Price",
  thumb_url: image,
  input_message_content: {
    message_text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true
  }
})
Api.answerInlineQuery({
  inline_query_id: request.id,
  results: list,
  cache_time: 4
})

