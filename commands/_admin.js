/*CMD
  command: /admin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

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
if (!params) {
  Bot.setProperty("admin_" + request.chat.id, "", "string")
  Api.getChatAdministrators({
    chat_id: request.chat.id,
    on_result: "/admin " + request.chat.id
  })
} else {
  var add = Bot.getProperty("admin_" + params, { list: {} })
  var co_admin = ""
  var owner = ""
  var admin = ""
  for (var ind in options.result) {
    var user_id = options.result[ind].user.id
    add.list[user_id] = user_id
    Bot.setProperty("admin_" + params, add, "json")
    var realname = GetRealName()
    var user_name = GetUserName()
    //creator
    if (options.result[ind].status == "creator") {
      var owner = owner + user_name
    }
    //find co founder
    if (options.result[ind].status == "administrator") {
      //title 👇
      var title = GetTitle()
      if (options.result[ind].can_promote_members) {
        var co_admin = co_admin + "\n├" + user_name + title
      } else {
        var admin = admin + "\n├" + user_name + title
      }
    }
  }

  var co_founder = Get_co("\n\n⚜️ <b>Co-founder</b>", co_admin)
  var admins = Get_co("\n\n👮🏼 <b>Admin</b> ", admin)
  Api.sendMessage({
    text:
      "<b>GROUP STAFF\n\n👑 Founder</b>\n └ " +
      owner +
      "" +
      [co_founder] +
      [admins],
    parse_mode: "html"
  })
}
//function
function GetRealName() {
  if (options.result[ind].user.first_name) {
    return options.result[ind].user.first_name
  }
  if (options.result[ind].user.last_name) {
    return options.result[ind].user.last_name
  }
  return "Deleted Account"
}
//GetUserName
function GetUserName() {
  if (!options.result[ind].user.username) {
    return
    "<a href='tg://user?id=" +
      options.result[ind].user.id +
      "'>" +
      realname +
      "</a>"
  }
  return "@" + options.result[ind].user.username
}
//GetTitle
function GetTitle() {
  if (options.result[ind].custom_title) {
    return " » " + options.result[ind].custom_title
  }
  return " » Admin"
}
//get co
function Get_co(text, name) {
  if (!name) {
    return ""
  }
  return text + name
}
