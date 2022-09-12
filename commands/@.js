/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
//get timestamp
function toTimestamp(strDate) {
  var datum = Date.parse(strDate)
  return datum / 1000
}
function GetTime(seconds, time) {
  var add_time = parseFloat(time)
  var now = new Date()
  if (seconds == "seconds") {
    now.setSeconds(now.getSeconds() + add_time + 3)
  }
  if (seconds == "minutes") {
    now.setMinutes(now.getMinutes() + add_time)
  }
  if (seconds == "hours") {
    now.setHours(now.getHours() + add_time)
  }
  if (seconds == "days") {
    var atn = 24 * add_time
    now.setHours(now.getHours() + atn)
  }
  var month = Libs.DateTimeFormat.format(now, "mm")
  var day = Libs.DateTimeFormat.format(now, "dd")
  var year = Libs.DateTimeFormat.format(now, "yyyy")
  var hour = Libs.DateTimeFormat.format(now, "HH")
  var minute = Libs.DateTimeFormat.format(now, "MM")
  var second = Libs.DateTimeFormat.format(now, "ss")
  var date = toTimestamp(
    month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second
  )
  return date
}
//get user html
function GetHtml() {
  if (user.username) {
    var tex = "@" + user.username
  }
  if (user.last_name) {
    var tex =
      "<a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.last_name +
      "</a>"
  }
  if (user.first_name) {
    var tex =
      "<a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a>"
  }
  return tex
}
//get user markdown
function GetMarkdown() {
  if (user.username) {
    var tex = "@" + user.username
  }
  if (user.last_name) {
    var tex = "[" + user.last_name + "](tg://user?id=" + user.telegramid + ")"
  }
  if (user.first_name) {
    var tex = "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")"
  }
  return tex
}
//reset every 3 hours
function canRun1() {
  var last_run_at = Bot.getProperty("online_3_hours_" + request.chat.id)
  if (!last_run_at) {
    return true
  }
  var minutes = (Date.now() - last_run_at) / 1000 / 60
  var minutes_in_day = 3 * 60
  if (minutes < minutes_in_day) {
    return false
  }
  return true
}
//cooldown 6 seconds
function coolDownPlay() {
  var last_run_at = User.getProperty("cooldown_Play")
  if (!last_run_at) {
    return true
  }
  var minutes = (Date.now() - last_run_at) / 100 / 20
  var minutes_in_day = 3
  if (minutes < minutes_in_day) {
    return false
  }
  return true
}
//cooldown 20 seconds
function coolDown() {
  var last_run_at = User.getProperty("cooldown_" + request.chat.id)
  if (!last_run_at) {
    return true
  }
  var minutes = (Date.now() - last_run_at) / 100 / 20
  var minutes_in_day = 10
  if (minutes < minutes_in_day) {
    return false
  }
  return true
}
//sorr
function doSort(a, b) {
  if (a.count > b.count) return -1
  if (a.count < b.count) return 1
}
function getOnline(top_count) {
  var online_top = Bot.getProperty("online_" + request.chat.id, { list: {} })
  var sortedList = []
  for (var keys in online_top.list) {
    var gff = Libs.ResourcesLib.anotherChatRes("gff", "global")
    var count = Libs.ResourcesLib.anotherUserRes(
      gff.value() + "_message_" + request.chat.id,
      online_top.list[keys].user.telegramid
    )
    sortedList.push({
      count: count.value(),
      userKey: online_top.list[keys].user.telegramid
    })
  }
  sortedList.sort(doSort)
  var result = []
  for (var i = 0; i < top_count; i++) {
    var item = sortedList[i]
    if (!item) {
      break
    }
    result.push(item)
  }
  return result
}
//get percentage
function Getko(users, amount, recent) {
  var random = Math.floor(Math.random() * (recent - 1))
  var rasta = Getrasta(random)
  var clc = (amount * rasta) / 100
  var dam = clc + "&" + random
  return dam
}
function Getrasta(random) {
  if (random == 0) {
    return 1.5
  }
  return random
}
Bot.setProperty(
  user.telegramid,
  {
    user_id: user.telegramid,
    markdown: GetMarkdown(),
    html: GetHtml()
  },
  "json"
)
//add user
if (user.username) {
  Bot.setProperty(
    "@" + user.username,
    {
      user_id: user.telegramid,
      markdown: GetMarkdown(),
      html: GetHtml()
    },
    "json"
  )
  //user
  Bot.setProperty(
    user.username,
    {
      user_id: user.telegramid,
      markdown: GetMarkdown(),
      html: GetHtml()
    },
    "json"
  )
}

