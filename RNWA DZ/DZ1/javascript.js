var x = document.getElementById("customers");
if (x != null) {
    for (var i = 0; i < x.rows.length; i++) {
        for (var j = 0; j < x.rows[i].cells.length; j++)
        x.rows[i].cells[j].onclick = function () {
            alert(this.innerHTML);
        };
    }
}
console.log(x)