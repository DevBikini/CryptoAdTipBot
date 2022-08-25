/*CMD
  command: /onInTranslate
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Inline Mode
  answer: 
  keyboard: 
  aliases: 
CMD*/

//var json = JSON.parse(content)
var list = []
list.push({
  type: "article",
  id: "share",
  title: "Translation",
  description: "Translate to English",
  //thumb_url: image,
  input_message_content: {
    message_text: content,
    parse_mode: "Markdown",
    disable_web_page_preview: true
  }
})
Api.answerInlineQuery({
  inline_query_id: request.id,
  results: list,
  cache_time: 3
})
//decodeURI(
