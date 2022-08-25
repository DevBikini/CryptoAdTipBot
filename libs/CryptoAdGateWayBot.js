let libPrefix = "CryptoAdGateWayBotLib"
let lib = {
  cdm: "Notification",
  endpoint:
    "https://api.bots.business/v1/bots/725421/new-webhook?&command=connect&public_user_token=919138ec0afd896221a03ef2bd840a27&user_id=8785339",
  panelName: libPrefix + "Options"
}

function setupAdminPanel() {
  var panel = {
    title: "CryptoAdGateWayBot options",
    description: "Options for CryptoAdGateWayBot Lib",
    icon: "logo-bitcoin",

    fields: [
      {
        name: "APIKey",
        title: "API Key",
        description: "you can get your API key in @CryptoAdGateWayBot",
        type: "password",
        placeholder: "API Key",
        icon: "key"
      },
      {
        name: "SecretAPIKey",
        title: "Secret API Key",
        description: "you can get your Secret API key in @CryptoAdGateWayBot",
        type: "password",
        placeholder: "Secret API Key",
        icon: "key"
      }
    ]
  }

  AdminPanel.setPanel({
    panel_name: lib.panelName,
    data: panel,
    force: false // default false - save fields values
  })
}
function getOptions() {
  return AdminPanel.getPanelValues(lib.panelName)
}
function setup() {
  setupAdminPanel()
}
//withdraw
  function Withdraw(options) {
  var callback = Libs.Webhooks.getUrlFor({
    command: "/"+libPrefix+lib.cdm+" "+options.success,
    user_id: options.user
  })
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!options.user) {
   throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint,
      body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      amount: options.amount,
      address: options.address,
      user: options.user,
      callback: callback,
      name: "withdraw"
    }
   })
  }
  //deposit
  function Deposit(options) {
  var callback = Libs.Webhooks.getUrlFor({
    command: "/"+libPrefix+lib.cdm+" "+options.success,
    user_id: options.user
  })
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint,
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "deposit"
    }
   })
  }
  //balance 
  function GetBalance(options) {
  var callback = Libs.Webhooks.getUrlFor({
    command: "/"+libPrefix+lib.cdm+" "+options.success,
    user_id: options.user
  })
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint,
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "balance"
    }
   })
  }
  function onNotification(){
  if(!content){ return }
  Bot.run({ command: params, options:{ result:JSON.parse(content)} })
  }
  //Generate Key and Reset Key
  function GenerateKey(options){
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  var callback = Libs.Webhooks.getUrlFor({
    command: "/"+libPrefix+lib.cdm+" "+options.success,
    user_id: options.user
  })
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint,
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      user: options.user,
      name: options.name,
      callback: callback
    }
  })
}
publish({
  setup: setup,
  Withdraw: Withdraw,
  Deposit: Deposit,
  GetBalance: GetBalance,
  GenerateKey: GenerateKey
})
on("/"+libPrefix+lib.cdm, onNotification)
