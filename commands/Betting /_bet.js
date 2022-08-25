/*CMD
  command: /bet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Betting 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "🚀 Add Me To A Group 🚀",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This bot work only in [group](https://t.me/+dUNUqeIZEV9kNTll)!"
  )
  return
}
var disable = Bot.getProperty("disable_" + request.chat.id)
if (!User.getProperty("bet")) {
  var bet = "/setbet 0.002 DGB"
} else {
  var bet = User.getProperty("bet")
}
if (!disable) {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "🏀 Basketball",
          command: "/games basketball"
        },
        {
          title: "⚽ Soccer ball",
          command: "/games soccer"
        }
      ],
      [
        {
          title: "🎯 Dart",
          command: "/games dart"
        }
      ],
      [
        {
          title: " 🎳 bowling",
          command: "/games bowling"
        },
        {
          title: "🎲 dice",
          command: "/games dice"
        }
      ]
    ],
    "*Betting Mode*\n1.8x - 2.6x your Coins.\n\n*Select bet amount* : `" +
      bet +
      "`\n`/setbet [amount] [currency]`"
  )
  return
}

