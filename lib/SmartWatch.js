var Watch=require('./Watch.js')
var Tablet=require('./Tablet.js')

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
function SmartWatch () {

}

extend(SmartWatch.prototype, Watch.prototype)
extend(SmartWatch.prototype, Tablet.prototype)


module.exports=SmartWatch
