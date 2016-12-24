// ==UserScript==
// @name         fetcher
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       l337357l1b3ra70r
// @include      nun71u5und3rc0v3r.weebly.com
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.href === "http://nun71u5und3rc0v3r.weebly.com/z/5088565#comments"){
        console.log("Running...");
      window.addEventListener("message",function(event){
          if(event.data === "Get comments"){
              var x = document.getElementById("commentArea").children[0].children;
              var commentz = [];
              for(var i=0;i<x.length;i++){
                  if(x[i].id !== "commentText" && x[i].id !== "commentReplyTitle" && x[i].id !== "" && x[i].className != "blogCommentReplyWrapper"){
                      var txt = x[i].children[0].children[1].textContent;
                      commentz.push(txt);
                  }
              }
              for(var i=0;i<comments.length;i++){
                  commentz[i] = commentz[i].replace(/\n/g,"").replace(/	/g,"");
              }
              var y = {
                  comments : commentz,
                  msg : "comments"
              };
              window.parent.postMessage(y,"*");
          }
      });
    }
})();
