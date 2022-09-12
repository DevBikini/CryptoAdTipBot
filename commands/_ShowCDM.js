/*CMD
  command: /ShowCDM
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name = params.split(" ")[0]
if (name == "price") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*Crypto Price Command*\n\n/p – Check price of coin\n/price – Check price of coin\n/calculate – Convert coin price\n/clc – Convert coin price\n\n*Inline Mode*\n`@CryptoAdTipBot p btc`\n`@CryptoAdTipBot price btc`\n`@CryptoAdTipBot calculate 1 btc usd`\n`@CryptoAdTipBot clc 1 btc usd`\n`@CryptoAdTipBot translate नमस्ते`",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 Check Price", callback_data: "/ShowCDM price" },
          { text: "💰 Group Tip", callback_data: "/ShowCDM tip" }
        ],
        [
          { text: "🌐 Group Manager", callback_data: "/ShowCDM manager" },
          { text: "🎮 Betting Games", callback_data: "/ShowCDM game" }
        ],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
if (name == "tip") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*Crypto Tip Command*\n\n/tip – tip user\n/rain – rain user\n/giveaway – giveaway user\n/airdrop – airdrop user\n/draw – draw user\n/balance - get balance\n/withdraw – withdraw balance\n/deposit – deposit crypto",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 Check Price", callback_data: "/ShowCDM price" },
          { text: "💰 Group Tip", callback_data: "/ShowCDM tip" }
        ],
        [
          { text: "🌐 Group Manager", callback_data: "/ShowCDM manager" },
          { text: "🎮 Betting Games", callback_data: "/ShowCDM game" }
        ],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
if (name == "manager") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*Group Manager Command*\n\n/kick – kick user\n/ban – ban user\n/unban – unban user\n/mute – mute user\n/unmute – unmute user\n/warn – warn user\n/info – get info user\n/banwords – ban words\n/autodelete – delete join/leave messages\n/admin – get administration\n/translate – translate\n\nYou need to run command /admin in your group to use all admin commands",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 Check Price", callback_data: "/ShowCDM price" },
          { text: "💰 Group Tip", callback_data: "/ShowCDM tip" }
        ],
        [
          { text: "🌐 Group Manager", callback_data: "/ShowCDM manager" },
          { text: "🎮 Betting Games", callback_data: "/ShowCDM game" }
        ],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
if (name == "game") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*Betting Games*\n\n/enable – enable betting in your group\n/disable – disable betting in your group\n/bet – betting games",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 Check Price", callback_data: "/ShowCDM price" },
          { text: "💰 Group Tip", callback_data: "/ShowCDM tip" }
        ],
        [
          { text: "🌐 Group Manager", callback_data: "/ShowCDM manager" },
          { text: "🎮 Betting Games", callback_data: "/ShowCDM game" }
        ],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
