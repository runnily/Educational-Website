function closeMenu() {
    /**
     * Purpose:
     *  This is mainly used for the mobile home page, 
     *  to shift the element specifly the class link element
     *  down when the user click the arrow down button.
     *  This allows the element to shift down in an animated way
     */
    var menu = document.getElementsByClassName("links")[0];
    document.getElementById("arrow-up").style.visibility = "hidden";
    document.getElementById("arrow-down").style.visibility = "visible";
    menu.style.overflow = "hidden";
    menu.style.paddingTop= "25%"; 
    var size = -1;
    minHeight = -84; // To put the menu element in apprioate position when .link element is closed
    var id = setInterval(function() { // the set interval function is used to create an animation appearence
        if (size < minHeight){
            clearInterval(id);
            document.getElementById("arrow-down").style.visibility = "hidden";
            document.getElementById("arrow-up").style.visibility = "visible";
            document.getElementById("nav").style.visibility = "visible";
        } else {
            size = size - 1; // To decrement the size
            menu.style.bottom = size + "%"; //specifys the size
        }
    },10);


}

function openMenu() {
    /**
     * Purpose:
     *  This function does the same thing as the close menu function except the opposite
     *  This function is mainly used for home page
     *  to shift the element specify the class div link element
     *  up when the user clicks on the arrow up button
     *  This allows the element to shfit up in an animated way
     */
    var menu = document.getElementsByClassName("links")[0];
    menu.style.overflow = "scroll";
    document.getElementById("nav").style.visibility = "hidden";
    var size = -84;
    maxHeight = -1;
    menu.style.paddingTop= "10%"; // To put the menu element in apprioate position when .link element is open
    var id = setInterval(function() {
        if (size > maxHeight){
            clearInterval(id);
            document.getElementById("arrow-up").style.visibility = "hidden";
            document.getElementById("arrow-down").style.visibility = "visible";
            
        } else {
            size = size + 1; // increments the size
            menu.style.bottom = size + "%"; // specify the size here
        }
    },10);
}

function closeBorder(el_id) {
    /**
     * Purpose:
     *  When certain elements are visiable this specify that there should be hidden
     * Examples:
     *  Used for the learn element so when closed the iframe showing the iframe learn page would close
     */
    var el = document.getElementById(String(el_id));
    el.style.visibility = "hidden";
}

function openBorder(el_id) {
     /**
     * Purpose:
     *  When certain elements are hidden this specify that there should be visiable
     * Examples:
     *  Used for the quiz element so when selected the iframe showing the quiz element would show
     */
    var el = document.getElementById(String(el_id));
    el.style.visibility = "visible";
}