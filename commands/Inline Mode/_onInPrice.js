/*CMD
  command: /onInPrice
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
  var symbol = result[0].symbol
  var price_usd = result[0].current_price
  var image = result[0].image
  var mkt = result[0].market_cap
  var rank = result[0].market_cap_rank
  var vol = result[0].total_volume
  var high = result[0].high_24h
  var low = result[0].low_24h
  var q10 = result[0].price_change_24h
  var q11 = result[0].price_change_percentage_24h
  var q12 = result[0].market_cap_change_24h
  var q13 = result[0].market_cap_change_percentage_24h
  var q14 = result[0].circulating_supply
  var supply = result[0].total_supply
  var q16 = result[0].max_supply
  var ath = result[0].ath
  var q18 = result[0].ath_change_percentage
  var athd = result[0].ath_date
  var q20 = result[0].atl
  var q21 = result[0].atl_change_percentage
  var q22 = result[0].atl_date
  var hour24 = result[0].price_change_percentage_24h_in_currency
  var ho3 = "" + hour24.toFixed(0) + ""
  if (ho3.includes("-")) {
    var g3 = "🔴"
  } else {
    var g3 = "🟢"
  }
  var d7 = result[0].price_change_percentage_7d_in_currency
  var ho2 = "" + d7.toFixed(0) + ""
  if (ho2.includes("-")) {
    var g2 = "🔴"
  } else {
    var g2 = "🟢"
  }
  var d30 = result[0].price_change_percentage_30d_in_currency
  var ho1 = "" + d30.toFixed(0) + ""
  if (ho1.includes("-")) {
    var g1 = "🔴"
  } else {
    var g1 = "🟢"
  }
  var hour1 = result[0].price_change_percentage_1h_in_currency
  var ho = "" + hour1.toFixed(0) + ""
  if (ho.includes("-")) {
    var g = "🔴"
  } else {
    var g = "🟢"
  }
  var ghty = params
  if (price_usd.toFixed(0).length == 1) {
    var lengths = 10
  } else {
    var lengths = 0
  }
  var text =
    "*" +
    symbol.toUpperCase() +
    " | " +
    price_usd +
    " " +
    ghty.toUpperCase() +
    "\n\n#️⃣ Rank : #" +
    rank +
    "*\n💲 *Price* : `" +
    price_usd.toFixed(lengths) +
    " " +
    ghty.toUpperCase() +
    "`\n📈 *High* : `" +
    high.toFixed(lengths) +
    " " +
    ghty.toUpperCase() +
    "`\n📉* Low* : `" +
    low.toFixed(lengths) +
    " " +
    ghty.toUpperCase() +
    "`\n🚀 *ATH *: `" +
    ath +
    " " +
    ghty.toUpperCase() +
    "`\n📅 *ATH date* : `" +
    athd.slice(0, 10) +
    "`\n\n" +
    g +
    " *1H* = `" +
    hour1.toFixed(2) +
    "%`\n" +
    g3 +
    " *24H* = `" +
    hour24.toFixed(2) +
    "%`\n" +
    g2 +
    " *7D* = `" +
    d7.toFixed(2) +
    "%`\n" +
    g1 +
    " *30D* = `" +
    d30.toFixed(2) +
    "%`\n\n💁‍♂️ *SUPPLY* :  `" +
    supply +
    " " +
    symbol.toUpperCase() +
    "`\n⏳ *Volume *: `" +
    vol +
    " " +
    ghty.toUpperCase() +
    "`\n🎓* Mkt Cap *:  `" +
    mkt +
    " " +
    ghty.toUpperCase() +
    "`\n\n[Ads Earn FREE Crypto](https://t.me/Crypto_Ad_RoBot?start=ref8785339)"
}
var list = []
list.push({
  type: "article",
  id: "share",
  title: "Price",
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

