var td = document.getElementsByTagName("TD");
for (let index = 0; index < td.length; index++) {
    td[index].onmouseover = function() { 
        var rect = this.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
    var span = document.getElementsByTagName("SPAN");
        console.log("HELLO FROM TOOLTIP " + span[0].innerHTML);
        span[0].innerHTML = this.parentNode.innerHTML;
        var tooltip = document.getElementsByClassName("tooltip")[0];
        tooltip.getElementsByClassName("tooltiptekst")[0].style.top=rect.top +"px";
        tooltip.getElementsByClassName("tooltiptekst")[0].style.left=rect.left+ 100 + "px";
     }
    
}