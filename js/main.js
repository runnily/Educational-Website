function closeMenu() {
    var menu = document.getElementsByClassName("links")[0];
    document.getElementById("arrow-up").style.visibility = "hidden";
    document.getElementById("arrow-down").style.visibility = "visible";
    var size = 80;
    minHeight = -20;
    var id = setInterval(function() {
        if (size < minHeight){
            clearInterval(id);
            document.getElementById("arrow-down").style.visibility = "hidden";
            document.getElementById("arrow-up").style.visibility = "visible";
        } else {
            size = size - 1;
            menu.style.height = size + "vh";
        }
    },10);
}

function openMenu() {
    var menu = document.getElementsByClassName("links")[0];
    //document.getElementById("nav").style.visibility = "visible";
    var size = 0;
    maxHeight = 80;
    setInterval(function() {
        if (size > maxHeight){
            document.getElementById("arrow-up").style.visibility = "hidden";
            document.getElementById("arrow-down").style.visibility = "visible";
            
        } else {
            size = size + 1;
            menu.style.height = size + "vh";
        }
    },10);
}

