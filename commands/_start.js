/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        { title: "💣 Check Price", command: "/ShowCDM price" },
        { title: "💰 Group Tip", command: "/ShowCDM tip" }
      ],
      [{ title: "🌐 Group Manager", command: "/ShowCDM manager" }],
      [
        {
          title: "🚀 Add Me To A Group 🚀",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "Welcome to " + bot.name + " check out our featured command"
  )
 // return
//}
