

function Tablet(systemName){
    this.systemName=systemName;
}

Tablet.prototype.play = function (game) {
  this.game="Shynobie"
  return this.systemName + " plays "+ this.game
};


module.exports=Tablet
