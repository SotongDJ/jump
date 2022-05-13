//
// uglifyjs go.js -o docs/go.js -c -m 
//
// reference: 
//     https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function/4974690#4974690
//
String.prototype.format = function () {
var i = 0, args = arguments;
return this.replace(/{}/g, function () {return typeof args[i] != 'undefined' ? args[i++] : '';});
};
//
url = window.location.href;
var parameter = "";
if ((!url.includes("?"))||url.split("?").length<2) {
parameter = "";
} else {
parameter = url.split("?")[1].toUpperCase();
};
//
function myFunction(target) {
window.location.href = target;
};
//
if (Object.keys(shortDict).includes(parameter)) {
 langStr = shortDict[parameter]["lang"]
 targetKey = shortDict[parameter]["key"]
 document.getElementById("title").innerText = "Go to: {}".format(jumpDict[targetKey][langStr]);
 document.getElementById("locationLink").innerHTML = infoDict["locationLink"][langStr];
 document.getElementById("locationLink").href = jumpDict[targetKey]['url'];
 var left = 3;
 var downloadTimer = setInterval(function(){
  if(left <= 0){
   clearInterval(downloadTimer);
   document.getElementById("content").innerHTML = infoDict["content-end"][langStr].format(jumpDict[targetKey][langStr]);
   myFunction(jumpDict[targetKey]['url'])
  } else {
   document.getElementById("content").innerHTML = infoDict["content-start"][langStr].format(countdownDict[left][langStr],jumpDict[targetKey][langStr]);
  }
  left -= 1;
 }, 1000);
};
