var Phone = require('./Phone.js')
var extend = require('./extend.js')
var Tablet = require('./Tablet.js')
var GameConsole = require('./GameConsole.js')
var WebBrowser = require('./WebBrowser.js')

function SmartPhone (phoneNumber) {
  GameConsole.call(this, 'Smart Phone')
   Phone.call(this, phoneNumber)
}


extend(SmartPhone.prototype, Phone.prototype)
extend(SmartPhone.prototype, Tablet.prototype)
extend(SmartPhone.prototype, GameConsole.prototype)
extend(SmartPhone.prototype, WebBrowser.prototype)
module.exports = SmartPhone
