
function WebBrowser(url){

}

WebBrowser.prototype.open = function (url) {
  this.url = url;
  return "Browsing to " + this.url;
};

module.exports=WebBrowser
