var messanger = {
  sendMsg : function(form){
    clearText = form.querySelectorAll("[name=msg]")[0].value
    var frame = document.getElementById("send_portal")
    encrypted = clearText
    var y = {cypherText : encrypted}
    frame.contentWindow.postMessage(y,"*")
  }
}
