var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var close=document.getElementById("close-nav")
menuicon.addEventListener("click",function()
{
    sidenav.style.left=0
})
close.addEventListener("click",function()
{
    sidenav.style.left="-50%"
})