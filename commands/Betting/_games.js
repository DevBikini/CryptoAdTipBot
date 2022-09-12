/*CMD
  command: /games
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Betting
  answer: 
  keyboard: 
  aliases: 
CMD*/

var my_cdm = User.getProperty("my_cdm")
if (params == "basketball") {
  if (my_cdm == "basketball") {
    return
  }
  User.setProperty("my_cdm", "basketball", "string")
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "🏀 *Basketball 1.8x your coins\n\nRules*: shoot the ball",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play",
            callback_data: "/play basketball"
          }
        ],
        [
          {
            text: "🏀 Basketball",
            callback_data: "/games basketball"
          },
          {
            text: "⚽ Soccer ball",
            callback_data: "/games soccer"
          }
        ],
        [
          {
            text: "🎯 Dart",
            callback_data: "/games dart"
          }
        ],
        [
          {
            text: " 🎳 bowling",
            callback_data: "/games bowling"
          },
          {
            text: "🎲 dice",
            callback_data: "/games dice"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
//Soccer
if (params == "soccer") {
  if (my_cdm == "soccer") {
    return
  }
  User.setProperty("my_cdm", "soccer", "string")
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "⚽ *Soccer 1.8x your coins\n\nRules*: Goal the ball",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play",
            callback_data: "/play soccer"
          }
        ],
        [
          {
            text: "🏀 Basketball",
            callback_data: "/games basketball"
          },
          {
            text: "⚽ Soccer ball",
            callback_data: "/games soccer"
          }
        ],
        [
          {
            text: "🎯 Dart",
            callback_data: "/games dart"
          }
        ],
        [
          {
            text: " 🎳 bowling",
            callback_data: "/games bowling"
          },
          {
            text: "🎲 dice",
            callback_data: "/games dice"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
//dart
if (params == "dart") {
  if (my_cdm == "dart") {
    return
  }
  User.setProperty("my_cdm", "dart", "string")
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "🎯 *Dart 1.8x your coins\n\nRules*: Hit the Red.",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play",
            callback_data: "/play dart"
          }
        ],
        [
          {
            text: "🏀 Basketball",
            callback_data: "/games basketball"
          },
          {
            text: "⚽ Soccer ball",
            callback_data: "/games soccer"
          }
        ],
        [
          {
            text: "🎯 Dart",
            callback_data: "/games dart"
          }
        ],
        [
          {
            text: " 🎳 bowling",
            callback_data: "/games bowling"
          },
          {
            text: "🎲 dice",
            callback_data: "/games dice"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
//bowling
if (params == "bowling") {
  if (my_cdm == "bowling") {
    return
  }
  User.setProperty("my_cdm", "bowling", "string")
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "🎳 *Bowling 2.6x your coins\n\nRules*: Hit the 6.",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play",
            callback_data: "/play bowling"
          }
        ],
        [
          {
            text: "🏀 Basketball",
            callback_data: "/games basketball"
          },
          {
            text: "⚽ Soccer ball",
            callback_data: "/games soccer"
          }
        ],
        [
          {
            text: "🎯 Dart",
            callback_data: "/games dart"
          }
        ],
        [
          {
            text: " 🎳 bowling",
            callback_data: "/games bowling"
          },
          {
            text: "🎲 dice",
            callback_data: "/games dice"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
//dice
if (params == "dice") {
  if (my_cdm == "dice") {
    return
  }
  User.setProperty("my_cdm", "dice", "string")
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "🎲 *Dice 2.6x your coins\n\nRules*: Hit the 6.",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play",
            callback_data: "/play dice"
          }
        ],
        [
          {
            text: "🏀 Basketball",
            callback_data: "/games basketball"
          },
          {
            text: "⚽ Soccer ball",
            callback_data: "/games soccer"
          }
        ],
        [
          {
            text: "🎯 Dart",
            callback_data: "/games dart"
          }
        ],
        [
          {
            text: " 🎳 bowling",
            callback_data: "/games bowling"
          },
          {
            text: "🎲 dice",
            callback_data: "/games dice"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
Bot.sendMessage(params)

