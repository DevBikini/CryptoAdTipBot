/*CMD
  command: /warn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Command
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
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (request.reply_to_message) {
  var tgid = request.reply_to_message.from.id
  var botk = request.reply_to_message.from.id.is_bot | (tgid == 777000)
  if (admin.list[user.telegramid] == user.telegramid) {
    //valid user
    if (!Bot.getProperty(tgid)) {
      Bot.sendMessage("*User not found*!")
      return
    }
    //admin and bot
    if ((admin.list[tgid] == tgid) | botk) {
      Bot.sendMessage("You Can't warn admininstration or bot & channel")
      return
    }
    //due
    var due = GetDueTo()
    var tgid = request.reply_to_message.from.id
    var warn = Libs.ResourcesLib.anotherUserRes("warn_" + request.chat.id, tgid)
    warn.add(+1)
    if (warn.value() > 2) {
      warn.set(0)
      Api.restrictChatMember({
        chat_id: request.chat.id,
        user_id: tgid
      })
      Api.sendMessage({
        text:
          Bot.getProperty(tgid).html +
          " [<code>" +
          tgid +
          "</code>] warned (" +
          warn.value() +
          " of 3)." +
          due +
          "\n• <b>Action</b>: Muted 🔇",
        parse_mode: "html",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "✅ Unmute",
                callback_data: "/warn_cancel " + tgid
              }
            ]
          ]
        }
      })
      return
    }
    Api.sendMessage({
      text:
        Bot.getProperty(tgid).html +
        " [<code>" +
        tgid +
        "</code>] warned (" +
        warn.value() +
        " of 3)." +
        due,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [{ text: "❌ Cancel", callback_data: "/warn_cancel " + tgid }]
        ]
      }
    })
    //warning
    return
  }
  return
}
if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use \n`/warn @user`")
  return
}
if (admin.list[user.telegramid] == user.telegramid) {
  //admin and bot
  if (admin.list[params] == params) {
    Bot.sendMessage("You Can't warn admininstration or bot & channel")
    return
  }
  var dds = Bot.getProperty(params.split(" ")[0])
  if (!dds) {
    Bot.sendMessage("*User not found*!")
    return
  }
  //due
  var due = GetPSMDue()
  var warn = Libs.ResourcesLib.anotherUserRes(
    "warn_" + request.chat.id,
    dds.user_id
  )
  warn.add(+1)
  if (warn.value() > 2) {
    warn.set(0)
    Api.restrictChatMember({
      chat_id: request.chat.id,
      user_id: dds.user_id
    })
    Api.sendMessage({
      text:
        dds.html +
        " [<code>" +
        dds.user_id +
        "</code>] warned (" +
        warn.value() +
        " of 3)." +
        due +
        "\n• <b>Action</b>: Muted 🔇",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "✅ Unmute",
              callback_data: "/warn_cancel " + dds.user_id
            }
          ]
        ]
      }
    })
    return
  }
  Api.sendMessage({
    text:
      dds.html +
      " [<code>" +
      dds.user_id +
      "</code>] warned (" +
      warn.value() +
      " of 3)." +
      due,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "❌ Cancel",
            callback_data: "/warn_cancel " + dds.user_id
          }
        ]
      ]
    }
  })
  //warning
  return
}
//function
function GetDueTo() {
  if (params) {
    if (!params.split(" ")[0]) {
      return ""
    }
    return "\n<b>Due to</b>: " + params
  }
  return ""
}
//#2
function GetPSMDue() {
  if (!params.split(params.split(" ")[0])[1]) {
    return ""
  }
  return "\n<b>Due to</b>:" + [params.split(params.split(" ")[0])[1]]
}
