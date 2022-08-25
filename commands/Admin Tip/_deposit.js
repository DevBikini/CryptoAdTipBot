/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) {
  return
}
Libs.CryptoAdGateWayBot.Deposit({
  currency: params,
  user: user.id,
  success: "/onDeposit"
})
