/*CMD
  command: /inlineQuery
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Inline Mode
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!request.query) {
  return
}
var query = request.query.toLowerCase()
function GetName(name) {
  var price = name.split(" ")[0]
  if ((price == "p") | (price.split(" ")[0] == "price")) {
    var btc = name.split(" ")[1]
    var usd = name.split(" ")[2]
    if (!usd) {
      var usdt = "usd"
    } else {
      var usdt = usd
    }
    HTTP.get({
      url:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" +
        usdt.toLowerCase() +
        "&symbols=" +
        btc.toLowerCase() +
        "&price_change_percentage=1h%2C24h%2C7d%2C30d",
      success: "/onInPrice " + usdt
    })
    return
  }
  var convert = name.split(" ")[0]
  if ((convert == "calculate") | (convert == "clc")) {
    var amount = name.split(" ")[1]
    var coin1 = name.split(" ")[2]
    var coin2 = name.split(" ")[3]
    if (
      !amount |
      !coin1 |
      !isNumeric(amount) |
      amount.includes("-") |
      amount.includes("+")
    ) {
      return
    }
    if (!coin2) {
      var coin_2 = "usd"
    } else {
      var coin_2 = coin2
    }
    HTTP.get({
      url:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" +
        coin_2.toLowerCase() +
        "&symbols=" +
        coin1.toLowerCase() +
        "&price_change_percentage=1h%2C24h%2C7d%2C30d",
      success: "/onInonvert " + amount + " " + coin_2.toLowerCase()
    })
    return
  }
  var translate = name.split(" ")[0]
  if (translate == "translate") {
    var text = name.split(name.split(" ")[0])[1]
    var url =
      "https://api.crypto-twilight.com/translate?msg=" +
      encodeURIComponent(text) +
      "&to=en" 
    HTTP.get({
      url: url,
      folow_redirects: true,
      success: "/onInTranslate"
    })
    return
  }
}
if (query) {
  GetName(params)
}

