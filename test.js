/*document.body.onload = addElement;
function addElement () {
    var newDiv = document.createElement("div");
    //newDiv.appendChild(newContent);
    elt.style.width= "200px";
    elt.style.height= "200px";
    elt.style.background= "brown";

    var currentDiv = document.getElementById("square");
    document.body.insertBefore(newDiv, currentDiv);

}
*/

/*var canvas = document.getElementById("square");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.lineWidth = "6";
ctx.rect(20, 20, 150, 100);
ctx.stroke();
ctx.fill()*/

(function () {
    const canvas = document.getElementById('square')
    const ctx = canvas.getContext('2d')
    let canvas, ctx
  })()



function init () {
    canvas = document.getElementById('square')
    ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.strokeRect(50, 35, 50, 50)
  }
  document.addEventListener('DOMContentLoaded', init)