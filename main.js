var mouseEvent = "empty";
var oldX,oldY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown",line);
function line(e){
    color = document.getElementById("inpy").value;
    width = document.getElementById("inpyt").value;
    radius = document.getElementById("radiu").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",line1);
function line1(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        console.log("Last position of X and Y = ");
        console.log("x = "+oldX+"Y = "+oldY);
        console.log("Current position of X and Y = ");
        console.log("x = "+currentX+"Y = "+currentY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentX, currentY, radius,0 , 2 * Math.PI);
        ctx.stroke();
    }
    oldX = currentX;
    oldY = currentY;
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
canvas.addEventListener("mouseup", funmouseup);
function funmouseup(e)
{ mouseEvent = "mouseup"; }
canvas.addEventListener("mouseleave", funmouseleave);
function funmouseleave(e)
{ mouseEvent = "mouseleave"; }