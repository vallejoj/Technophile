function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}


function NintendoDS(){

}
function GameConsole(){
  
}
extend(NintendoDS.prototype,GameConsole.prototype)





module.exports=NintendoDS;
module.exports=GameConsole;
