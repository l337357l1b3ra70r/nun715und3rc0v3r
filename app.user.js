// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://tampermonkey.net/index.php?version=4.2.7&ext=dhdg&updated=true
// @grant        none
// @include      *www.weebly.com*
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("message",function(event){
    var text = event.data.cypherText;
    var trgt = document.getElementById("commentComment");
    trgt.value = text;
    var randomName = [];
    for(var i=0;i<Math.floor(Math.random() * 10 + 5);i++){
        var ch = Math.floor((Math.random() * 25) + 1);
        ch = String.fromCharCode(97 + ch);
        randomName.push(ch);
    }
    randomName = randomName.join("");
    document.getElementById("commentEmail").value="";
    document.getElementById("commentName").value=randomName;
    document.getElementById("commentPostArea").onsubmit();
    //window.parent.postMessage("Loading done.","*");
    var xi = window.setInterval(function(){
        var z = document.getElementsByTagName("b");
        for(i=0;i<z.length;i++){
            if(z[i].textContent == "Your comment was successfully posted."){
                window.parent.postMessage("Load done.","*");
                clearInterval(xi);
            }
        }
    },100);
    });
})();
