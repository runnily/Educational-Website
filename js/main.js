function closeMenu() {
    var menu = document.getElementsByClassName("links")[0];
    document.getElementById("arrow-up").style.visibility = "hidden";
    document.getElementById("arrow-down").style.visibility = "visible";
    menu.style.overflow = "hidden";
    menu.style.paddingTop= "25%";
    var size = -1;
    minHeight = -84;
    var id = setInterval(function() {
        if (size < minHeight){
            clearInterval(id);
            document.getElementById("arrow-down").style.visibility = "hidden";
            document.getElementById("arrow-up").style.visibility = "visible";
            document.getElementById("nav").style.visibility = "visible";
        } else {
            size = size - 1;
            menu.style.bottom = size + "%";
        }
    },10);


}

function openMenu() {
    var menu = document.getElementsByClassName("links")[0];
    menu.style.overflow = "scroll";
    document.getElementById("nav").style.visibility = "hidden";
    var size = -84;
    maxHeight = -1;
    menu.style.paddingTop= "10%";
    var id = setInterval(function() {
        if (size > maxHeight){
            clearInterval(id);
            document.getElementById("arrow-up").style.visibility = "hidden";
            document.getElementById("arrow-down").style.visibility = "visible";
            
        } else {
            size = size + 1;
            menu.style.bottom = size + "%";
        }
    },10);
}

function closeBorder(el_id) {
    var el = document.getElementById(String(el_id));
    el.style.visibility = "hidden";
}

function openBorder(el_id) {
    var el = document.getElementById(String(el_id));
    el.style.visibility = "visible";
}